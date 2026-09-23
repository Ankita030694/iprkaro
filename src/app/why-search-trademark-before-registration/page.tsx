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
    faMagnifyingGlass,
    faLightbulb,
    faShieldHalved,
    faCheck,
    faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Why Search a Trademark Before Registration? | IPR Karo",
    description: validateAndNormalizeDescription("Learn why searching a trademark before registration helps identify similar marks, reduce conflict risks and make better filing decisions in India.", "app/why-search-trademark-before-registration/page.tsx"),
    alternates: {
        canonical: "https://www.iprkaro.com/why-search-trademark-before-registration",
    },
    robots: {
        index: true,
        follow: true,
    }
};

const faqs = [
    { question: "Why should I search a trademark before registration?", answer: "A trademark search helps identify existing identical or similar marks before filing. This prevents you from wasting time and money on a trademark that is likely to be rejected or challenged." },
    { question: "What happens if I register a trademark without searching first?", answer: "Skipping a search increases the risk of trademark objections, oppositions from prior owners, and potential infringement lawsuits. You may be forced to rebrand and lose your initial investment." },
    { question: "Can I search for similar trademarks before filing?", answer: "Yes, you can search for exact matches and similar trademarks using the official IP India registry or preliminary online tools. It is highly recommended to check phonetic and visual similarities as well." },
    { question: "Does a trademark search guarantee registration?", answer: "No, a search does not guarantee registration. The final decision rests with the Trade Marks Registry examiner, who evaluates distinctiveness and likelihood of confusion based on legal principles." },
    { question: "What should I check during a trademark search?", answer: "You should check for exact spelling matches, phonetic equivalents, visual similarities, and related trademark classes. Additionally, verify the current legal status of any similar marks." },
    { question: "Why do phonetic similarities matter in trademark searches?", answer: "Phonetic similarities matter because marks that sound alike can confuse consumers, even if spelled differently. Section 11 of the Trade Marks Act considers phonetic equivalence as a relative ground for refusal." },
    { question: "Should I check trademark classes before searching?", answer: "Yes, trademark protection is categorized into 45 distinct classes. Identifying the correct classes for your goods or services is essential to focus your search on relevant commercial areas." },
    { question: "When should I get professional trademark clearance?", answer: "Professional clearance is recommended for valuable brands, borderline similarity cases, or when entering crowded markets. Legal experts can provide a nuanced risk assessment and strategy to overcome potential conflicts." }
];

const tocSections = [
    { id: "why-search-matters", title: "Why Search Matters" },
    { id: "risks-of-skipping", title: "Risks of Skipping Search" },
    { id: "what-search-reveals", title: "What It Reveals" },
    { id: "trademark-similarity", title: "Trademark Similarity" },
    { id: "how-to-search", title: "Step-by-Step Search" },
    { id: "official-search", title: "Official vs Preliminary" },
    { id: "professional-search", title: "Professional Search" },
    { id: "search-checklist", title: "Search Checklist" },
    { id: "faqs", title: "FAQs" },
    { id: "final-takeaway", title: "Final Takeaway" },
];

export default function WhySearchTrademarkBeforeRegistrationPage() {
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
        "headline": "Why Is It Important to Search a Trademark Before Registration?",
        "description": "Learn why searching a trademark before registration helps identify similar marks, reduce conflict risks and make better filing decisions in India.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/why-search-trademark-before-registration"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Why Search a Trademark Before Registration? | IPR Karo",
        "url": "https://www.iprkaro.com/why-search-trademark-before-registration",
        "description": "Learn why searching a trademark before registration helps identify similar marks, reduce conflict risks and make better filing decisions in India.",
        "breadcrumb": {
            "@id": "https://www.iprkaro.com/why-search-trademark-before-registration#breadcrumb"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.iprkaro.com/why-search-trademark-before-registration#breadcrumb",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Trademark", "item": "https://www.iprkaro.com/trademark-registration-india" },
            { "@type": "ListItem", "position": 3, "name": "Why Search a Trademark Before Registration?", "item": "https://www.iprkaro.com/why-search-trademark-before-registration" }
        ]
    };

    const workflowListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Trademark Search Step-by-Step Workflow",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Identify the proposed trademark." },
            { "@type": "ListItem", "position": 2, "name": "Identify the relevant goods/services." },
            { "@type": "ListItem", "position": 3, "name": "Determine relevant trademark classes." },
            { "@type": "ListItem", "position": 4, "name": "Search the exact name." },
            { "@type": "ListItem", "position": 5, "name": "Search spelling variations." },
            { "@type": "ListItem", "position": 6, "name": "Search phonetic variations." },
            { "@type": "ListItem", "position": 7, "name": "Review similar marks." },
            { "@type": "ListItem", "position": 8, "name": "Check application/registration status." },
            { "@type": "ListItem", "position": 9, "name": "Examine the goods/services of potentially conflicting marks." },
            { "@type": "ListItem", "position": 10, "name": "Assess whether professional clearance is appropriate." },
            { "@type": "ListItem", "position": 11, "name": "Proceed toward filing only after the search results have been properly evaluated." }
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
            <div className="relative w-full overflow-hidden"
                style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Why Search a Trademark <br />
                        <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Before Registration?</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Searching before filing helps identify existing identical or similar marks, revealing potential conflicts before you commit time and resources to registration.
                    </p>
                    <Link href="/trademark-search">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Search Your Trademark
                        </button>
                    </Link>
                </div>
            </div>

            {/* BREADCRUMBS */}
            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[
                        { label: "Home", href: "/" },
                        { label: "Trademark", href: "/trademark-registration-india" },
                        { label: "Why Search a Trademark Before Registration?", href: "/why-search-trademark-before-registration" }
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

                                    {/* SECTION 1 */}
                                    <section id="why-search-matters" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            Why Trademark Search Matters
                                        </h2>

                                        {/* QUICK ANSWER BOX */}
                                        <div id="quick-answer" className="bg-indigo-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl mb-8">
                                            <p className="font-semibold text-gray-900 m-0">
                                                Why should you search a trademark before registering it? A trademark search helps identify identical existing marks, similar names, and potentially conflicting applications in your relevant goods and services. It helps uncover possible registration obstacles and opposition risks before you invest in filing. However, a preliminary search does not guarantee registration or eliminate all legal risks.
                                            </p>
                                        </div>

                                        <p className="mb-6">
                                            Undertaking a trademark search before registration is an essential preliminary step for any business. Before investing in branding, marketing materials, and legal fees, it is critical to know whether the name you have chosen is available. Checking for existing identical or similar marks helps avoid obvious conflicts from day one.
                                        </p>
                                        <p className="mb-6">
                                            A thorough search reduces wasted filing effort. It helps brand owners identify alternative names early if the original choice is legally unavailable. Understanding the competitive trademark landscape can significantly improve your filing strategy, allowing you to choose distinct elements that are more likely to pass official examination.
                                        </p>
                                    </section>

                                    {/* SECTION 2 */}
                                    <section id="risks-of-skipping" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faExclamationTriangle} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            What Happens If You Skip the Search?
                                        </h2>
                                        <p className="mb-6">
                                            Skipping a trademark search before registration can have serious practical consequences. You may discover an existing similar mark only after making significant branding investments. This oversight can lead to unexpected <Link href="/how-to-overcome-trademark-objection" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark objections</Link> from the Trade Marks Registry examiner during the review phase.
                                        </p>
                                        <p className="mb-6">
                                            Beyond examination, failing to search can invite potential opposition from prior trademark owners. Depending on the facts, you could face disputes that require costly legal defense or forced rebranding. Rebranding costs and marketing disruptions are often far more expensive than conducting a preliminary check. While skipping a search does not automatically cause refusal, it introduces unnecessary risk, wasted time, and uncertainty around brand expansion.
                                        </p>
                                    </section>

                                    {/* SECTION 3 */}
                                    <section id="what-search-reveals" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            What a Trademark Search Can Reveal
                                        </h2>
                                        
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Exact Matches</h3>
                                        <p className="mb-6">
                                            Identical marks are an obvious first screening point. A search immediately flags if the exact spelling of your brand is already registered or pending.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Similar Names</h3>
                                        <p className="mb-6">
                                            Similarity goes beyond exact spelling. A search will reveal variations, common misspellings, or words that look visually akin to your proposed mark.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Phonetic Similarity</h3>
                                        <p className="mb-6">
                                            Marks can sound similar even when spelled differently (e.g., "Kwik" vs "Quick"). Identifying these phonetic similarities is critical, as they can cause confusion among consumers.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Similar Goods and Services</h3>
                                        <p className="mb-6">
                                            The relevant goods or services matter deeply when assessing possible conflicts. A mark identical to yours might exist, but if it belongs to an entirely unrelated industry, it may not pose an issue. A proper search evaluates these overlapping <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline font-medium">trademark classes</Link>.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Existing Applications and Registrations</h3>
                                        <p className="mb-6">
                                            A search will reveal the legal status of similar marks. An "Abandoned" or "Refused" application may present less risk than an active "Registered" or "Objected" status.
                                        </p>

                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">Potentially Conflicting Marks</h3>
                                        <p className="mb-6">
                                            While a search brings potentially conflicting marks to light, a search result alone does not legally determine whether a mark is registrable. A professional review may still be necessary for borderline cases to assess the actual legal risk.
                                        </p>
                                    </section>

                                    {/* SECTION 4 */}
                                    <section id="trademark-similarity" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            Why Trademark Similarity Matters
                                        </h2>
                                        <p className="mb-6">
                                            Trademark law is designed to prevent consumer confusion. Confusing similarity evaluates whether a reasonable consumer might mistake your brand for an earlier mark. This assessment encompasses visual similarity (how the marks look), phonetic similarity (how they sound), and sometimes conceptual similarity (the meaning they convey).
                                        </p>
                                        <p className="mb-6">
                                            Under Section 11 of India's Trade Marks Act, 1999, a trademark may be refused registration on relative grounds if it conflicts with earlier trademarks. Registration is not determined simply by matching letters; it depends on the facts, the visual or phonetic closeness of the marks, the similarity of the goods or services involved, and the applicable legal standards. An equation of "similar trademark = automatic rejection" is an oversimplification. Each application is uniquely evaluated by the Controller General of Patents, Designs & Trade Marks (IP India) based on the likelihood of confusion.
                                        </p>
                                    </section>

                                    {/* SECTION 5 */}
                                    <section id="how-to-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faListUl} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            Search Before Filing: Step-by-Step
                                        </h2>
                                        <p className="mb-6">
                                            Following a structured process helps ensure you don't miss critical conflicts.
                                        </p>

                                        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-8">
                                            <h3 className="text-xl font-bold mb-4 border-b pb-2">Trademark Search Workflow</h3>
                                            <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                                <li><strong>Identify the proposed trademark.</strong></li>
                                                <li><strong>Identify the relevant goods/services.</strong></li>
                                                <li><strong>Determine relevant <Link href="/trademark-class-finder" className="text-[rgb(110,94,147)] hover:underline">trademark classes</Link>.</strong></li>
                                                <li><strong>Search the exact name.</strong></li>
                                                <li><strong>Search spelling variations.</strong></li>
                                                <li><strong>Search phonetic variations.</strong></li>
                                                <li><strong>Review similar marks.</strong></li>
                                                <li><strong>Check application/registration status.</strong></li>
                                                <li><strong>Examine the goods/services of potentially conflicting marks.</strong></li>
                                                <li><strong>Assess whether professional clearance is appropriate.</strong></li>
                                                <li><strong>Proceed toward filing only after the search results have been properly evaluated.</strong></li>
                                            </ol>
                                        </div>
                                    </section>

                                    {/* SECTION 6 */}
                                    <section id="official-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faTable} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            Official Registry Search vs Preliminary Search
                                        </h2>
                                        <p className="mb-6">
                                            Preliminary online searching, including automated or AI-assisted screening, is a useful first step to catch obvious conflicts. However, it is distinct from an official trademark registry search on the government portal, which directly accesses the live database of the Trade Marks Registry.
                                        </p>
                                        <p className="mb-6">
                                            No preliminary tool can claim 100% accuracy, guarantee registration, or ensure zero conflict or rejection. These tools are meant for initial risk assessment, whereas professional clearance involves a legal review of registry data.
                                        </p>

                                        <div className="overflow-x-auto mb-8 shadow-sm rounded-xl border border-gray-200 mt-6">
                                            <table className="min-w-full bg-white text-left text-sm text-gray-700">
                                                <thead className="bg-gray-50 border-b border-gray-200 font-medium">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Approach</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Main Purpose</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Speed</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Official Registry Verification</th>
                                                        <th scope="col" className="px-6 py-4 font-bold text-gray-900 uppercase">Legal Interpretation</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Basic name search</td>
                                                        <td className="px-6 py-4">Initial screening</td>
                                                        <td className="px-6 py-4">Fast</td>
                                                        <td className="px-6 py-4">Limited</td>
                                                        <td className="px-6 py-4">No</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50">
                                                        <td className="px-6 py-4 font-semibold">Official trademark search</td>
                                                        <td className="px-6 py-4">Check registry records</td>
                                                        <td className="px-6 py-4">Moderate</td>
                                                        <td className="px-6 py-4">Yes</td>
                                                        <td className="px-6 py-4">Limited</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 font-semibold">Comprehensive professional search</td>
                                                        <td className="px-6 py-4">Detailed risk assessment</td>
                                                        <td className="px-6 py-4">Depends on scope</td>
                                                        <td className="px-6 py-4">Yes</td>
                                                        <td className="px-6 py-4">Yes</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </section>

                                    {/* SECTION 7 */}
                                    <section id="professional-search" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faFileContract} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            When a Professional Trademark Search Is Useful
                                        </h2>
                                        <p className="mb-6">
                                            Professional trademark clearance is a factual and practical step that can be highly beneficial under specific circumstances. It goes beyond merely identifying identical names by applying legal interpretation to borderline similarity.
                                        </p>
                                        <p className="mb-6">
                                            A professional review may be useful when preparing for an important business launch or establishing a highly valuable brand. It is also advised when dealing with borderline similarity against prior marks, filing across multiple classes, or expanding into related goods and services where boundaries blur. If there are potential opposition concerns or complex ownership histories attached to similar marks, consulting an expert helps navigate the nuances of trademark law.
                                        </p>
                                    </section>

                                    {/* SECTION 8 */}
                                    <section id="search-checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faCheckCircle} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />
                                            Trademark Search Checklist
                                        </h2>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Proposed mark identified</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Relevant goods/services identified</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Relevant classes identified</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Exact-name search completed</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Similar spelling search completed</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Phonetic variations checked</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Similar marks reviewed</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Trademark status checked</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Goods/services compared</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Potential conflicts assessed</span>
                                            </li>
                                            <li className="flex items-start">
                                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" />
                                                <span>Professional review considered where necessary</span>
                                            </li>
                                        </ul>
                                    </section>

                                    {/* SECTION 9 (FAQS) */}
                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">
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

                                    {/* SECTION 10 */}
                                    <section id="final-takeaway" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center">
                                            <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12 mr-4 text-yellow-500" />
                                            Final Takeaway
                                        </h2>
                                        <p className="mb-6">
                                            A trademark search before registration is an important preliminary risk-checking step. It helps identify existing identical or similar marks and allows businesses to investigate potential conflicts before committing heavily to a brand. 
                                        </p>
                                        <p className="mb-6">
                                            Searching is not a guarantee of registration, as examination involves subjective legal thresholds set by the Trade Marks Act. Complex or borderline cases may require professional legal analysis from experts who can accurately interpret registry actions and precedent. To consult official records, always refer to authoritative sources like the <a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[rgb(110,94,147)] hover:underline font-medium">IP India</a> portal.
                                        </p>
                                    </section>

                                    {/* BOTTOM CTA SECTION */}
                                    <section className="mt-16 md:mt-20">
                                        <div className="rounded-[32px] bg-[#0C002B] px-6 py-8 sm:px-10 sm:py-10 md:px-16 md:py-12 text-center text-white shadow-xl">
                                            <div className="mx-auto max-w-4xl">
                                                <div className="mb-4 inline-flex items-center">
                                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D8D0E6]">
                                                        Secure Your Brand Before You File
                                                    </span>
                                                </div>

                                                <h3 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl mb-4">
                                                    Search Your Trademark
                                                </h3>

                                                <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-8 mb-8">
                                                    Search your proposed trademark, identify potential conflicts, and take a more informed step toward protecting your brand.
                                                </p>

                                                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                                                    <Link
                                                        href="/trademark-search"
                                                        className="group inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-[#7664A0] px-8 text-base font-semibold text-white transition-all duration-300 hover:bg-[#8573AE] sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Search Your Trademark</span>
                                                    </Link>

                                                    <Link
                                                        href="/contact-us"
                                                        className="inline-flex min-h-[54px] w-full items-center justify-center rounded-full border border-white/25 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 sm:w-auto sm:min-w-[240px]"
                                                    >
                                                        <span>Talk to an Expert</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        {/* RIGHT SIDEBAR */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            {/* Card 1 */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Search Before You File</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Checking a proposed mark before registration is useful to catch obvious conflicts and evaluate brand availability.
                                </p>
                                <Link href="/trademark-search" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Start Trademark Search
                                    </button>
                                </Link>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center">
                                    <FontAwesomeIcon icon={faInfoCircle} className="w-6 h-6 mr-3 text-[rgb(110,94,147)]" />
                                    Related Resources
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-registration-india" className="flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-[rgb(110,94,147)] opacity-50 group-hover:opacity-100 mr-3"></div>
                                            <span className="font-medium">Trademark Registration</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-class-finder" className="flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-[rgb(110,94,147)] opacity-50 group-hover:opacity-100 mr-3"></div>
                                            <span className="font-medium">Trademark Class Finder</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-overcome-trademark-objection" className="flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-[rgb(110,94,147)] opacity-50 group-hover:opacity-100 mr-3"></div>
                                            <span className="font-medium">Trademark Objection</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-search" className="flex items-center text-gray-700 hover:text-[rgb(110,94,147)] transition-colors group">
                                            <div className="w-2 h-2 rounded-full bg-[rgb(110,94,147)] opacity-50 group-hover:opacity-100 mr-3"></div>
                                            <span className="font-medium">Trademark Search</span>
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
