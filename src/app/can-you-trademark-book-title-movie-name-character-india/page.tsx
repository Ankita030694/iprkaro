import { validateAndNormalizeDescription, validateAndNormalizeTitle } from '@/lib/seo-utils';
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
    faFilm,
    faBookOpen,
    faMask,
    faShirt,
    faGamepad,
    faAward,
    faBuildingColumns
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: validateAndNormalizeTitle("Can You Trademark a Book, Movie or Character?", "app/can-you-trademark-book-title-movie-name-character-india/page.tsx"),
    description: validateAndNormalizeDescription(
        "Trademark a book title, movie name, or character in India. Learn the single-work rule, series protection, IMPAA vs Trade Marks Registry, and classes.",
        "app/can-you-trademark-book-title-movie-name-character-india/page.tsx"
    ),
    keywords: [
        "can you trademark a book title in india",
        "how to trademark movie name in india",
        "fictional character trademark copyright protection",
        "title registration with impaa vs trademark registry",
        "can you trademark a character",
        "trademark character merchandising india",
        "kanungo media v rgv film factory",
        "single creative work trademark rule",
        "trademark class 41 movie title",
        "trademark class 16 book titles india"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Can You Trademark a Book, Movie or Character?",
        description: "Trademark a book title, movie name, or character in India. Learn the single-work rule, series protection, IMPAA vs Trade Marks Registry, and classes.",
        url: "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india",
        type: "article",
        images: [
            {
                url: "https://www.iprkaro.com/images/og/can-you-trademark-book-title-movie-name-character-india.png",
                width: 1200,
                height: 630,
                alt: "Can You Trademark a Book Title Movie Name or Character in India Guide",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Can You Trademark a Book, Movie or Character?",
        description: "Trademark a book title, movie name, or character in India. Learn the single-work rule, series protection, IMPAA vs Trade Marks Registry, and classes.",
        images: ["https://www.iprkaro.com/images/og/can-you-trademark-book-title-movie-name-character-india.jpg"],
    }
};

const faqs = [
    {
        question: "Can I trademark a single standalone book title or movie name in India?",
        answer: "Generally, no. Under Indian trademark jurisprudence established in Kanungo Media (P) Ltd. V. RGV Film Factory, a single standalone literary or cinematographic title is viewed as descriptive of the work rather than a source identifier. However, if you can prove that the title has acquired immense secondary meaning and distinctive brand goodwill through extensive commercial success, publicity, and public recognition, the Trade Marks Registry may grant registration."
    },
    {
        question: "Why is it easier to trademark a book series or movie franchise title?",
        answer: "A series of books, films, or web series (such as Harry Potter, Dhoom, Golmaal, Singham, or Baahubali) acts as a commercial source identifier across multiple installments. The title signals to the audience that each new installment originates from the same creative studio or author. Under the Trade Marks Act, 1999, series titles are readily registrable in Class 9, Class 16, and Class 41."
    },
    {
        question: "Does copyright law protect book titles and movie names in India?",
        answer: "No. Under the Copyright Act, 1957 and the Supreme Court of India ruling in Krishika Lulla v. Shyam Vithalrao Devkatta, copyright does not subsist in bare titles, names, short phrases, or slogans because they lack sufficient literary substance. Titles can only be protected against deceptive imitation under the Trade Marks Act, 1999 or through the common law tort of passing off."
    },
    {
        question: "How do creators protect fictional characters in India?",
        answer: "Fictional characters enjoy dual-layer intellectual property protection. The character's visual drawings, graphic renderings, voice recordings, and specific narrative dialogue are protected under the Copyright Act, 1957 as artistic, sound recording, and dramatic works. The character's name, costume, logo, and distinctive physical silhouette are registered as trademarks across merchandise classes (Class 9, 16, 25, 28, and 41)."
    },
    {
        question: "Does registering a film title with IMPAA or WIFPA give legal trademark rights?",
        answer: "No. Registering a film title with industry associations like IMPAA, WIFPA, or the Producers Guild of India is purely an internal industry ethical code with zero statutory standing in court. Guild registration cannot prevent third parties from using the title outside the association. Only statutory registration with the Trade Marks Registry under the Trade Marks Act, 1999 provides legally enforceable nationwide rights."
    },
    {
        question: "Which trademark classes are essential for books, movies, and character merchandise?",
        answer: "The primary classes are Class 9 (downloadable movies, OTT media, video games, ebooks), Class 16 (printed books, comic books, stationery, posters), Class 25 (clothing, costumes, character apparel), Class 28 (toys, action figures, board games, plush dolls), and Class 41 (film production, entertainment services, theatre, scriptwriting, and publishing)."
    },
    {
        question: "Can an author or studio sue for title imitation if the mark is not registered?",
        answer: "Yes. Even without a registered trademark, a creator or studio can file a common law lawsuit for passing off under Section 27(2) of the Trade Marks Act, 1999. However, the plaintiff must satisfy the 'classical trinity' test: establish extensive prior goodwill, prove misrepresentation by the defendant causing confusion, and demonstrate actual or potential commercial damages."
    },
    {
        question: "Can I trademark a character's catchphrase or signature dialogue in India?",
        answer: "Yes, provided the catchphrase is distinctive, non-generic, and has acquired widespread commercial association with the entertainment franchise or character. Iconic phrases can be registered as word marks in Class 41 (entertainment services) and Class 25/28 (merchandising). This establishes exclusive rights to print them on merchandise or use them in commercial advertisements."
    }
];

const tocSections = [
    { id: "overview", title: "Overview" },
    { id: "copyright-vs-trademark", title: "Copyright vs Trademark" },
    { id: "single-work-vs-series", title: "Single Work vs Series" },
    { id: "character-protection", title: "Character Protection" },
    { id: "impaa-vs-registry", title: "IMPAA vs TM Registry" },
    { id: "trademark-classes", title: "Relevant TM Classes" },
    { id: "landmark-judgments", title: "Landmark Cases" },
    { id: "step-by-step-strategy", title: "7-Step Strategy" },
    { id: "comparison-matrix", title: "Comparison Matrix" },
    { id: "faqs", title: "FAQs" },
    { id: "strategic-takeaway", title: "Strategic Advice" },
];

export default function TrademarkBookTitleMovieNameCharacterPage() {
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
        "headline": "Can You Trademark a Book Title, Movie Name, or Character in India? Complete IP Guide",
        "description": "Comprehensive legal guide on trademarking book titles, movie names, and fictional characters in India. Covers the single creative work rule, series protection, IMPAA vs Trade Marks Registry, character merchandising, and landmark judicial precedents.",
        "image": "https://www.iprkaro.com/images/og/can-you-trademark-book-title-movie-name-character-india.png",
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
            "@id": "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Can You Trademark Book Title, Movie Name or Character in India?",
        "url": "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india",
        "description": "Trademark a book title, movie name, or character in India. Learn the single-work rule, series protection, IMPAA vs Trade Marks Registry, and classes.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.iprkaro.com/our-services" },
            { "@type": "ListItem", "position": 3, "name": "Trademark Book Title, Movie Name & Character", "item": "https://www.iprkaro.com/can-you-trademark-book-title-movie-name-character-india" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "7-Step Strategy to Protect Titles and Characters in India",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Conduct Comprehensive Multi-Class Trademark Search" },
            { "@type": "ListItem", "position": 2, "name": "Classify Creative Property (Single Work vs Franchise Series)" },
            { "@type": "ListItem", "position": 3, "name": "Execute Chain of Title & Creator Assignment Agreements" },
            { "@type": "ListItem", "position": 4, "name": "File Multi-Class Applications for Word Mark and Character Logos" },
            { "@type": "ListItem", "position": 5, "name": "Compile User Affidavit and Secondary Meaning Evidence" },
            { "@type": "ListItem", "position": 6, "name": "Secure Dual-Layer Protection (Copyright Registration + Trademark)" },
            { "@type": "ListItem", "position": 7, "name": "Deploy Active Market Surveillance and Merchandising Licensing" }
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
                                <FontAwesomeIcon icon={faFilm} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">Entertainment &amp; Media IP Law</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                                Can You Trademark a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'transparent' }}>Book Title, Movie Name, or Character</span> in India?
                            </h1>
                            <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">In the booming entertainment, publishing, and OTT landscape of India, brand identity extends far beyond corporate logos. Authors, film directors, gaming studios, and production houses invest millions into creating memorable book titles, blockbuster movie franchises, and iconic fictional characters. Learn the exact statutory rules governing single creative works versus franchises, character merchandising rights, why IMPAA guild registration falls short in court, and how the Trade Marks Act, 1999 shields your media assets.</p>

                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="flex items-center mr-2">
                                    <img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm" />
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                                        <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Media &amp; Trademark Specialist</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 25-09-2026</span>
                                    </div>
                                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                                    </div>
                                    <div className="flex items-center bg-purple-50 rounded-full px-3 py-1 border border-purple-200 shadow-sm">
                                        <span className="text-[10px] sm:text-xs font-medium text-purple-900">🎬 Entertainment IP Analysis</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <Link href="/e-filing-trademark" className="w-full sm:w-auto">
                                    <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                                        Protect Your Media IP Now <span className="ml-2 font-black">&rarr;</span>
                                    </button>
                                </Link>
                                <a href="tel:+919289707648" className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide">
                                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                                    Call Attorney: +91-9289707648
                                </a>
                            </div>
                        </div>
                        <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                <img
                                    src="/images/og/can-you-trademark-book-title-movie-name-character-india.png"
                                    alt="Can You Trademark a Book Title Movie Name or Character in India Law Guide"
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
                        { label: "Can You Trademark a Book Title, Movie Name, or Character in India", href: "/can-you-trademark-book-title-movie-name-character-india" }
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg></div></summary><div className="p-3.5 pt-2 border-t border-purple-50 bg-white/70"><nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">{tocSections.map((section, idx) => (<a
                                                    key={section.id}
                                                    href={`#${section.id}`}
                                                    className="flex items-center p-2 rounded-xl text-xs font-medium text-gray-700 hover:text-[#6E5E93] hover:bg-purple-50/80 transition-all border border-transparent hover:border-purple-100"
                                                ><span className="w-5 h-5 rounded-full bg-purple-100 text-[#6E5E93] flex items-center justify-center text-[10px] font-bold mr-2 flex-shrink-0">{idx + 1}</span><span className="truncate">{section.title}</span></a>))}</nav></div></details></div><div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content"><article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal"><div className="flex items-center space-x-4 mb-10 p-4 bg-gray-50 rounded-xl border border-gray-100 not-prose"><img src="/images/author/rahul-roy.jpg" alt="Rahul Roy" className="w-12 h-12 rounded-full object-cover m-0" /><div><p className="text-sm font-bold text-gray-900 m-0">Written by<Link href="/about-us" className="text-[rgb(110,94,147)] hover:underline">Rahul Roy</Link></p>
                                            <p className="text-xs text-gray-500 m-0">Media &amp; Trademark Specialist</p>
                                        </div>
                                    </div>

                                    {/* SECTION 1: OVERVIEW & QUICK ANSWER */}
                                    <section id="overview" className="scroll-mt-32">
                                        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faFilm} className="w-8 h-5 mr-3 text-[rgb(110,94,147)]" />
                                            Overview: Can Creative Titles Be Trademarked?
                                        </h2>

                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">Yes, you can trademark book titles, movie names, and fictional characters in India, but with critical legal distinctions. A single standalone book or movie title cannot be registered as a trademark unless it has acquired strong secondary meaning through massive publicity and public recognition. In contrast, titles of a series or franchise (such as Harry Potter, Dhoom, or Singham) and fictional characters (such as Chhota Bheem, Shaktimaan, or Krrish) are readily registrable under the Trade Marks Act, 1999 across Class 9, Class 16, Class 25, Class 28, and Class 41 to protect brand exclusivity and commercial merchandising rights.</p>
                                        </div>

                                        <p className="mb-6">The Indian creative industry produces thousands of novels, feature films, OTT web series, and video games every year. When an author writes a bestseller or a film studio produces a blockbuster, immense commercial goodwill crystallizes around the title and characters. However, many creative professionals remain confused about whether their intellectual property is protected by copyright law, trademark law, or industry guild registrations like IMPAA or WIFPA.</p>
                                        <p className="mb-6">A fundamental rule of entertainment law in India is that<strong>copyright does not protect titles, names, or short phrases</strong>. If another producer copies your movie title or an unauthorized manufacturer prints your fictional superhero onto t-shirts and action figures, your primary statutory weapon is not the Copyright Act, 1957. However, the<Link href="/process-and-steps-of-trademark-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">Trade Marks Act, 1999</Link>.</p>
                                        <p className="mb-6">Securing trademark protection transforms your artistic creation into an institutional commercial asset. It gives you the exclusive right to prevent deceptive copycats, license merchandise, negotiate lucrative OTT spin-offs, and enforce your brand identity across nationwide and global markets.</p>
                                    </section>

                                    {/* SECTION 2: COPYRIGHT VS TRADEMARK */}
                                    <section id="copyright-vs-trademark" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Copyright vs Trademark for Entertainment IP
                                        </h3>
                                        <p className="mb-6">Understanding the interplay between copyright and trademark law is essential for creators. While both are forms of intellectual property, they protect entirely different dimensions of creative output:</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-2.5"></span>
                                                    The Role of Copyright (Copyright Act, 1957)
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Copyright protects original literary, dramatic, musical, artistic, and cinematographic works. It protects the actual text of your book, the screenplay, the soundtrack, the filmed footage, and the visual character illustrations.</p>
                                                <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                                                    <p className="text-xs text-red-800 font-semibold m-0"><strong>Key Limitation:</strong>Indian courts consistently rule that copyright does NOT protect bare titles or single words because they lack sufficient literary substance.</p>
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                                                    <span className="w-2.5 h-2.5 bg-[#6E5E93] rounded-full mr-2.5"></span>
                                                    The Role of Trademark (Trade Marks Act, 1999)
                                                </h4>
                                                <p className="text-sm text-gray-600 leading-relaxed mb-3">Trademark protects words, titles, names, logos, symbols, and character representations that act as<em>source identifiers</em>. It indicates to the consuming public that goods or entertainment services originate from a specific creator or studio.</p>
                                                <div className="bg-green-50 p-3 rounded-xl border border-green-100">
                                                    <p className="text-xs text-green-800 font-semibold m-0"><strong>Key Advantage:</strong>Trademark registration grants exclusive rights to the title or character name across books, films, toys, clothing, games, and streaming services.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mb-6">For a deeper exploration of how these regimes differ across commercial enterprises, read our detailed comparison on the<Link href="/difference-between-trademark-registration-and-copyright-registration" className="text-[rgb(110,94,147)] hover:underline font-medium">difference between trademark registration and copyright registration</Link>.</p>
                                    </section>

                                    {/* SECTION 3: SINGLE WORK VS SERIES */}
                                    <section id="single-work-vs-series" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBookOpen} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            The Single Work Rule vs Series Franchises
                                        </h3>
                                        <p className="mb-6">Under Indian trademark jurisprudence, creative titles are divided into two distinct legal classifications: titles of single standalone works and titles of a series of works.</p>

                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm">
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mr-3">1</span>
                                                Single Standalone Literary or Cinematic Works
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">A single standalone novel, one-off movie, or standalone documentary title is generally viewed by the Trade Marks Registry as merely descriptive of the subject matter of the book or film itself, rather than pointing to who made it.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4"><strong>The Legal Rule:</strong>You cannot register the title of a single standalone book or movie unless you prove that the title has acquired substantial<strong>secondary meaning</strong>. Secondary meaning means the public has come to associate that specific title exclusively with your production house or authorship through extensive marketing, critical acclaim, and commercial prominence before another party adopted it.</p>
                                            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                                                <p className="text-xs sm:text-sm text-amber-950 font-medium m-0"><strong>Example:</strong>Legendary movie titles like<em>Sholay</em>,<em>Mughal-e-Azam</em>, and<em>Lagaan</em>have acquired monumental secondary meaning in India. The courts have protected them as well-known marks even as single standalone original productions.</p>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-8 bg-white shadow-sm">
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                                <span className="w-8 h-8 rounded-lg bg-green-100 text-green-800 flex items-center justify-center font-bold text-sm mr-3">2</span>
                                                Series, Sequels, and Media Franchises
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed mb-4">When a creative title spans across a series of books, film sequels, television seasons, or an expanded cinematic universe, the title functions as a true trademark. It signals to consumers that each successive installment comes from the same creative universe and maintains consistent quality standards.</p>
                                            <p className="text-gray-700 leading-relaxed mb-4"><strong>The Legal Rule:</strong>Titles of a series (such as<em>Harry Potter</em>,<em>The Lord of the Rings</em>,<em>Dhoom</em>,<em>Golmaal</em>,<em>Singham</em>,<em>Baahubali</em>,<em>KGF</em>, or<em>Panchayat</em>) are readily registrable as trademarks without having to overcome the stringent descriptive hurdles faced by single works.</p>
                                            <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                                                <p className="text-xs sm:text-sm text-green-950 font-medium m-0"><strong>Proactive Strategy:</strong>If you plan a book trilogy or a movie franchise with sequels, file your trademark applications under Class 9, 16, and 41 early to secure priority over the franchise title before public release.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 4: CHARACTER PROTECTION */}
                                    <section id="character-protection" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faMask} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Protecting Fictional Characters &amp; Merchandising
                                        </h3>
                                        <p className="mb-6">Fictional characters often outlive the original storylines in which they appear. From Indian comic legends like<em>Chhota Bheem</em>,<em>Nagraj</em>, and<em>Shaktimaan</em>to cinematic characters like<em>Krrish</em>,<em>Gabbar Singh</em>, and<em>Chulbul Pandey</em>, fictional characters represent massive commercial licensing value.</p>

                                        <div className="space-y-6 mb-8">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">Dual-Layer Character Protection</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Creators protect characters through two complementary legal mechanisms. Under copyright law, the graphic artwork, character drawings, voice recordings, and original backstory are protected against direct artistic copying. Under trademark law, the character name, physical appearance, costume, mask, insignia, and signature catchphrases are registered as trademarks to monopolize commercial licensing and prevent unauthorized merchandise.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">Character Merchandising Rights</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">Character merchandising is the commercial exploitation of a fictional persona on consumer goods. Under Indian trademark law, character owners register their marks across diverse goods classes—such as action figures (Class 28), themed t-shirts and apparel (Class 25), school bags and stationery (Class 16), video games (Class 9), and confectionery (Class 30). This ensures that third parties cannot manufacture counterfeit toys or apparel without a formal license agreement.</p>
                                            </div>

                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">Protecting Real Celebrity Personas vs Fictional Personas</h4>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0">While fictional characters are protected through copyright and trademark registration, real living personalities (actors, authors, sports icons) protect their personal names, signatures, and likeness through personality rights, right of publicity, and personal name trademarks. To learn more about registering individual names, see our guide on<Link href="/can-you-trademark-your-own-name-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">can you trademark your own name in India</Link>.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 5: IMPAA VS REGISTRY */}
                                    <section id="impaa-vs-registry" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faBuildingColumns} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Film Guild Registration vs Trademark Registry
                                        </h3>
                                        <p className="mb-6">A widespread misconception in the Indian film and television industry is that registering a script title with an industry association—such as the Indian Motion Picture Producers&apos. Association (IMPAA), the Western India Film Producers&apos. Association (WIFPA), the Producers Guild of India, or the Film Writers Association (Screenwriters Association)—provides complete legal ownership over the title.</p>

                                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-8 not-prose">
                                            <h4 className="text-base font-bold text-red-900 mb-2 flex items-center">
                                                <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5 mr-2 text-red-600" />
                                                The Reality: Guild Registrations Have Zero Statutory Standing
                                            </h4>
                                            <p className="text-sm text-red-800 leading-relaxed m-0">Film trade associations operate as voluntary, private societies. Their title registration registers are merely internal industry conventions designed to resolve disputes amicably between registered guild members. Indian High Courts have repeatedly held that guild title registration creates<strong>no statutory monopoly</strong>and cannot be used to restrain non-members or secure judicial injunctions under the Trade Marks Act, 1999.</p>
                                        </div>

                                        <p className="mb-6">If a competing studio or an OTT platform outside your association uses your film title, your IMPAA certificate is legally unenforceable in a commercial court. To obtain nationwide legal exclusivity, seek interim injunctions, and claim statutory damages, you must hold a valid trademark registration on Form TM-A with the Trade Marks Registry.</p>
                                    </section>

                                    {/* SECTION 6: TRADEMARK CLASSES */}
                                    <section id="trademark-classes" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Trademark Classes for Media &amp; Characters
                                        </h3>
                                        <p className="mb-6">When applying for a trademark for an entertainment title or character, selecting the appropriate Nice Classification classes is vital. Entertainment IP spans both creative content and consumer merchandise:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Nice Class</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Primary Scope</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Covered Media &amp; Merchandise Items</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Strategic Priority</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 41</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Entertainment Services</td>
                                                        <td className="px-6 py-4">Film production, television shows, OTT series, live theatre, publishing of books, scriptwriting, music concerts.</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Mandatory for all films &amp; books</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 9</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Digital Media &amp; Software</td>
                                                        <td className="px-6 py-4">Downloadable movies, OTT video files, mobile video games, ebooks, audiobooks, animation software, VR/AR media.</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Essential for digital &amp; OTT</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 16</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Print Publications</td>
                                                        <td className="px-6 py-4">Printed novels, comic books, graphic novels, screenplays, movie posters, collectible trading cards, stationery.</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Mandatory for authors &amp; comics</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 28</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Toys &amp; Games</td>
                                                        <td className="px-6 py-4">Action figures, plush character dolls, board games, collectible miniatures, video game apparatus, playing cards.</td>
                                                        <td className="px-6 py-4 text-blue-700 font-bold">Crucial for character merchandising</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 25</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Apparel &amp; Costumes</td>
                                                        <td className="px-6 py-4">T-shirts, hoodies, character cosplay costumes, superhero masks, footwear, themed caps, fashion apparel.</td>
                                                        <td className="px-6 py-4 text-blue-700 font-bold">Vital for apparel licensing</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-bold text-[rgb(110,94,147)]">Class 35</td>
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Advertising &amp; Retail</td>
                                                        <td className="px-6 py-4">Merchandise e-commerce stores, brand endorsement, promotional film campaigns, online marketplace services.</td>
                                                        <td className="px-6 py-4 text-gray-700 font-semibold">Recommended for studios</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="mb-6">To determine the precise commercial classes for your entertainment brand, check out our interactive<Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark class finder</Link>and read our guide on<Link href="/single-class-vs-multi-class-trademark-application-india" className="text-[rgb(110,94,147)] hover:underline font-medium">single-class vs multi-class trademark applications</Link>.</p>
                                    </section>

                                    {/* SECTION 7: LANDMARK JUDGMENTS */}
                                    <section id="landmark-judgments" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Landmark Indian Court Cases on Title IP
                                        </h3>
                                        <p className="mb-6">Indian High Courts and the Supreme Court of India have developed substantial jurisprudence clarifying how film titles, book names, and characters are legally protected:</p>

                                        <div className="space-y-6 mb-8">
                                            {/* CASE 1 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-lg font-bold text-gray-900">Kanungo Media (P) Ltd. v. RGV Film Factory (Delhi High Court, 2007)</h4>
                                                    <span className="text-xs bg-purple-100 text-purple-900 font-bold px-3 py-1 rounded-full">&ldquo;Nisshabd&rdquo; Case</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Dispute:</strong>The plaintiff produced an award-winning Bengali film titled<em>Nisshabd</em>. Later, Ram Gopal Varma produced a Hindi feature film with the same title,<em>Nishabd</em>.</p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0"><strong>The Ruling:</strong>The Delhi High Court established the foundational test for movie titles in India. The Court held that a single literary work title cannot be protected unless the plaintiff proves it has acquired strong secondary meaning. Because the Bengali film had limited commercial release, the public had not associated the word exclusively with the plaintiff, and the injunction was refused.</p>
                                            </div>

                                            {/* CASE 2 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-lg font-bold text-gray-900">Krishika Lulla &amp; Ors. v. Shyam Vithalrao Devkatta (Supreme Court of India, 2016)</h4>
                                                    <span className="text-xs bg-purple-100 text-purple-900 font-bold px-3 py-1 rounded-full">&ldquo;Desi Boyz&rdquo; Case</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Dispute:</strong>The complainant authored a synopsis titled<em>Desi Boyz</em>and claimed copyright infringement against the producers of the Bollywood movie<em>Desi Boyz</em>.</p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0"><strong>The Ruling:</strong>The Supreme Court affirmed that copyright does not subsist in a bare title. A title is not an independent &apos;literary work&apos; under Section 13 of the Copyright Act. Title protection can only be sought under trademark principles or through a passing off claim.</p>
                                            </div>

                                            {/* CASE 3 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-lg font-bold text-gray-900">Sholay Media &amp; Entertainment Pvt. Ltd. v. Yogesh Patel &amp; Ors. (Delhi High Court, 2022)</h4>
                                                    <span className="text-xs bg-purple-100 text-purple-900 font-bold px-3 py-1 rounded-full">&ldquo;Sholay&rdquo; Trademark</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Dispute:</strong>The defendants used the registered trademark<em>Sholay</em>on a domain name (sholay.com) and associated digital entertainment services.</p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0"><strong>The Ruling:</strong>The Delhi High Court recognized<em>Sholay</em>as a well-known registered trademark, granted a permanent injunction, and awarded ₹25 Lakh in damages. The Court held that iconic cinematic titles that achieve legendary status are entitled to cross-industry trademark protection against dilution.</p>
                                            </div>

                                            {/* CASE 4 */}
                                            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="text-lg font-bold text-gray-900">Disney Enterprises Inc. &amp; Anr. v. Santosh Kumar &amp; Anr. (Delhi High Court)</h4>
                                                    <span className="text-xs bg-purple-100 text-purple-900 font-bold px-3 py-1 rounded-full">Character Protection</span>
                                                </div>
                                                <p className="text-sm text-gray-700 leading-relaxed mb-3"><strong>The Dispute:</strong>Defendants manufactured and sold counterfeit school bags, pencil boxes, and merchandise bearing Disney characters including<em>Mickey Mouse</em>,<em>Donald Duck</em>, and<em>Winnie the Pooh</em>.</p>
                                                <p className="text-sm text-gray-700 leading-relaxed m-0"><strong>The Ruling:</strong>The Court protected Disney&apos;s dual trademark and copyright registrations, noting that fictional characters represent immense commercial goodwill and unauthorized merchandising constitutes both trademark infringement and copyright piracy.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* SECTION 8: 7-STEP STRATEGY */}
                                    <section id="step-by-step-strategy" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            7-Step Trademark Strategy for Media Works
                                        </h3>
                                        <p className="mb-6">To ensure seamless legal protection for your book title, movie franchise, or fictional character in India, follow this structured 7-step legal roadmap:</p>

                                        {/* STEP 1 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 1</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Pre-Filing Clearance</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Conduct Comprehensive Multi-Class Trademark Search</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Before announcing a title or producing promotional material, conduct an in-depth clearance search on the IP India Trade Marks database across Classes 9, 16, 25, 28, and 41. Verify whether identical or phonetically similar marks exist for entertainment and media. You can initiate this clearance using our<Link href="/trademark-search" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark search</Link>portal.</p>
                                        </div>

                                        {/* STEP 2 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 2</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: IP Classification</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Classify Creative Property (Single Work vs Franchise Series)</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Determine whether the title will represent a single standalone production or a serialized franchise (e.g., book series, multi-part film universe, video game spin-off). For franchise projects, frame the goods and services specifications to reflect expanding entertainment properties.</p>
                                        </div>

                                        {/* STEP 3 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 3</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Chain of Title</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Execute Clear Chain-of-Title &amp; Creator Assignment Deeds</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Ensure complete chain-of-title documentation. If screenwriters, illustrators, or freelance concept artists created the character or suggested the title, execute robust IP assignment agreements under Section 18 and 19 of the Copyright Act and the Trade Marks Act. Read more about structuring agreements in our guide on<Link href="/trademark-assignment-vs-licensing-in-india" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark assignment vs licensing in India</Link>.</p>
                                        </div>

                                        {/* STEP 4 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 4</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Statutory Filing</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">File Multi-Class Form TM-A for Word Marks &amp; Character Logos</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Submit online trademark applications on Form TM-A on the IP India gateway. Apply for the text title as a standalone<strong>Word Mark</strong>(to prevent any phonetic variation) and register character drawings, movie title typography, and costumes as<strong>Device / Logo Marks</strong>.</p>
                                        </div>

                                        {/* STEP 5 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 5</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Evidentiary Proof</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Compile User Affidavit &amp; Evidence of Publicity</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">If claiming prior commercial use or secondary meaning, submit a comprehensive<Link href="/trademark-user-affidavit-format-and-rules-india" className="text-[rgb(110,94,147)] hover:underline font-medium">Trademark User Affidavit</Link>under Rule 25 accompanied by promotional expenditure receipts, box office collections, OTT viewership statistics, book sales figures, trailer views, and press clippings.</p>
                                        </div>

                                        {/* STEP 6 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 mb-6 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 6</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Dual-Layer Shield</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Secure Dual-Layer Protection (Copyright + Trademark)</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Concurrently register the underlying literary manuscript, screenplay, cinematographic film, and character graphic art with the Copyright Office. For film titles, complete voluntary guild registrations (IMPAA/WIFPA) to maintain good standing within the industry while relying on your trademark for statutory enforcement.</p>
                                        </div>

                                        {/* STEP 7 */}
                                        <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm hover:border-[rgb(110,94,147)] transition-colors">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="bg-[#6E5E93] text-white text-xs font-black uppercase px-3 py-1 rounded-full">Step 7</span>
                                                <span className="text-xs text-gray-500 font-semibold">Stage: Commercial Enforcement</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-2">Deploy Brand Surveillance &amp; Merchandising Licensing</h4>
                                            <p className="text-gray-700 leading-relaxed m-0">Once registered, monitor trade journals, e-commerce portals, and media releases for copycat titles or counterfeit merchandise. Structure formal merchandising license agreements to monetize the brand safely. If infringement occurs, enforce your rights through cease-and-desist notices and commercial court injunctions. Learn about remedies in our guide on<Link href="/passing-off-vs-trademark-infringement-india" className="text-[rgb(110,94,147)] hover:underline font-medium">passing off vs trademark infringement in India</Link>.</p>
                                        </div>
                                    </section>

                                    {/* SECTION 9: COMPARISON MATRIX */}
                                    <section id="comparison-matrix" className="scroll-mt-32 pt-12">
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-3 text-[rgb(110,94,147)]" />
                                            Entertainment IP Protection Comparison
                                        </h3>
                                        <p className="mb-6">Compare the three primary protection systems for entertainment properties in India:</p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Feature</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Trade Marks Act, 1999</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Copyright Act, 1957</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Film Guilds (IMPAA / WIFPA)</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">What It Protects</td>
                                                        <td className="px-6 py-4">Titles, franchise names, character names, logos, merchandising.</td>
                                                        <td className="px-6 py-4">Script text, footage, dialogues, music, character visual drawings.</td>
                                                        <td className="px-6 py-4">Working titles among member film producers.</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Protects Bare Titles?</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Yes (if series or secondary meaning)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">No (Supreme Court precedent)</td>
                                                        <td className="px-6 py-4 text-amber-700 font-semibold">Yes (internally only)</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Legal Authority</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Statutory Government Authority (CGPDTM)</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Statutory Government Authority (Copyright Office)</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">Private Society / Voluntary Association</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Court Enforceability</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Nationwide civil &amp; criminal injunctions</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Nationwide civil &amp; criminal injunctions</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">None in a court of law</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Merchandising Rights</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">Comprehensive across all 45 classes</td>
                                                        <td className="px-6 py-4">Limited to direct artistic reproduction</td>
                                                        <td className="px-6 py-4 text-red-700 font-bold">No merchandising mechanism</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold text-gray-900">Validity Duration</td>
                                                        <td className="px-6 py-4 text-green-700 font-bold">10 Years (Renewable Indefinitely)</td>
                                                        <td className="px-6 py-4">Author&apos;s Life + 60 Years (or 60 years for films)</td>
                                                        <td className="px-6 py-4">Annual guild membership renewal</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 10: FAQS (EXACTLY 8 MATCHING SCHEMA) */}
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

                                    {/* SECTION 11: FINAL STRATEGIC ADVICE */}
                                    <section id="strategic-takeaway" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-3 text-yellow-500" />
                                            Strategic IP Advice for Creators &amp; Studios
                                        </h3>
                                        <p className="mb-6">In today&apos;s digital content economy, creative storytelling and brand monetisation go hand-in-hand. Relying solely on script copyright or informal film guild registrations leaves your million-dollar title and iconic characters vulnerable to commercial piracy and franchise hijacking.</p>
                                        <p className="mb-6">Securing trademark registrations across Class 9, 16, 25, 28, and 41 transforms your creative property into an unassailable commercial asset. It empowers your studio to sign global merchandising deals, license OTT streaming rights with confidence, and command top valuation in media financing. Partner with experienced trademark attorneys to conduct thorough clearance searches, draft strategic multi-class applications, and lock down your entertainment IP legacy.</p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Media &amp; Entertainment Trademark Filing
                                                    </span>
                                                </div>

                                                <h4 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Protect Your Movie, Book, or Character Today
                                                </h4>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">Safeguard your creative titles, franchise names, and fictional characters with certified IP attorneys. From multi-class clearance searches and Form TM-A e-filing to character merchandising licensing and court enforcement.</p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/e-filing-trademark"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Register Trademark Online</span>
                                                    </Link>

                                                    <a
                                                        href="tel:+919289707648"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Call: +91-9289707648</span>
                                                    </a>
                                                </div>

                                                <p className="mt-6 text-xs font-medium tracking-wide text-white/50 sm:text-sm">Certified IP Advocates • Same-Day E-Filing • End-to-End Media IP Protection</p>
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
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Rahul Roy</h4>
                                <p className="text-sm text-gray-600 mb-4 font-medium">Media &amp; Trademark Specialist</p>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">Rahul specializes in entertainment intellectual property, media franchise protection, character merchandising licensing, and trademark litigation under the Trade Marks Act, 1999.</p>
                            </div>

                            {/* Dark CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h4 className="text-xl font-black mb-4 relative z-10 leading-tight">Protect Your Title</h4>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-medium">Prevent unauthorized title copying and monetize your characters safely with expert IP counsel.</p>
                                <Link href="/e-filing-trademark" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-xl text-xs uppercase tracking-wider">
                                        File Media Trademark
                                    </button>
                                </Link>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Related Resources</h4>
                                <ul className="space-y-6">
                                    <li><Link href="/difference-between-trademark-registration-and-copyright-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM vs Copyright</span></Link></li>
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faTable} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/single-class-vs-multi-class-trademark-application-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faListUl} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Multi-Class TM</span></Link></li>
                                    <li><Link href="/trademark-assignment-vs-licensing-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faFileContract} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Licensing</span></Link></li>
                                    <li><Link href="/passing-off-vs-trademark-infringement-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faGavel} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Passing Off</span></Link></li>
                                    <li><Link href="/can-you-trademark-your-own-name-in-india" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Name Trademark</span></Link></li>
                                    <li><Link href="/trademark-search" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">TM Search</span></Link></li>
                                    <li><Link href="/how-to-register-a-trademark-for-my-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Guide</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
