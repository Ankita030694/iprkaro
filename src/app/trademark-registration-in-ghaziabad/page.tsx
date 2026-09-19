import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faStar,
    faPhone,
    faRocket,
    faBuilding,
    faShieldHalved,
    faMicrochip,
    faSearch,
    faMapMarkerAlt,
    faGavel,
    faGlobe,
    faIndustry,
    faChartLine,
    faScaleBalanced,
    faAward,
    faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Expert TM Registration in Ghaziabad | IPR Karo",
    description: "Secure your brand in Ghaziabad with IPR Karo. Expert filing for manufacturing, tech, and retail brands at the Delhi Registry. 4000+ words of legal guidance and 4-hour filing.",
    keywords: [
        "trademark registration in ghaziabad",
        "online trademark filing ghaziabad",
        "brand protection delhi registry",
        "ghaziabad trademark office",
        "manufacturing trademark ghaziabad",
        "logo registration ghaziabad",
        "indirapuram startup trademark",
        "trademark attorney ghaziabad",
        "msme trademark registration ghaziabad",
        "ncr brand protection",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-ghaziabad",
    },
};

const faqs = [
    { question: "Which Trademark Registry handles Ghaziabad applications?", answer: "All trademark applications from Ghaziabad are handled by the Delhi Trade Marks Registry located in Dwarka, New Delhi. It covers regions including Delhi, Haryana, Punjab, and Ghaziabad." },
    { question: "Can I apply for a trademark in my personal name if I am from Ghaziabad?", answer: "Yes, as an individual or a sole proprietor, you can register a trademark in your own name. Many founders in Ghaziabad do this to maintain personal ownership of their brand identity." },
    { question: "How long does it take to get the 'TM' symbol in Ghaziabad?", answer: "With IPR Karo, we file your application online in just 24 hours. You receive the acknowledgment number within 4 hours, and you can start using the ™ symbol immediately." },
    { question: "What is the validity of a trademark registered at the Delhi office?", answer: "The registration is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years." },
    { question: "What is the 'User Affidavit' and why is it needed?", answer: "If your business has been using the brand name for some time before filing, you must file a User Affidavit with evidence like invoices or advertisements to protect your 'Prior Use' rights." },
    { question: "Can I register a tagline for my real estate project in Indirapuram?", answer: "Yes, slogans and taglines are frequently trademarked as they form a major part of a brand’s marketing identity and can be protected separately." },
    { question: "What happens if the Registrar objects to my mark in Ghaziabad?", answer: "If an objection is raised in the Examination Report, we must file a technical legal response within 30 days. We specialize in drafting these replies to clear objections." },
    { question: "Do I need to go to Dwarka for a trademark hearing?", answer: "In most cases, no. Modern hearings are often held via video conferencing. Even for physical hearings, our authorized attorneys represent you so you don't have to travel." },
    { question: "What documents are required for a company in Ghaziabad?", answer: "You need the Certificate of Incorporation, Logo/Name, Address Proof of the office, Identity Proof of the director, and a Power of Attorney (TM-48)." },
    { question: "How does a trademark search help Ghaziabad businesses?", answer: "A search ensures you don't spend money and years building a brand that already belongs to someone else. It identifies phonetic and visual similarities to avoid legal conflicts." }
];

const reviews = [
    { author: "Sanjay T.", position: "Manager", content: "Professional and fast. Secured our steel plant's logo in record time. The team knows the Delhi registry processes perfectly.", rating: 5 },
    { author: "Priya G.", position: "Founder", content: "Excellent service for our Indirapuram based startup. Got our TM number by lunch time. Highly recommend for Ghaziabad founders!", rating: 5 },
    { author: "Amit R.", position: "Director", content: "Protected our real estate project name with ease. Transparent pricing and expert legal advice. Best IP partner in Ghaziabad.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Powerhouse" },
    { id: "critical", title: "Why Trademark?" },
    { id: "registry", title: "Delhi Registry" },
    { id: "process", title: "Filing Process" },
    { id: "sectors", title: "Sector Insights" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "legal", title: "Delhi High Court" },
    { id: "benefits", title: "MSME Benefits" },
    { id: "costs", title: "Pricing & Costs" },
    { id: "faqs", title: "Ghaziabad FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function GhaziabadPage() {
    const averageRating = 5.0;
    const reviewsCount = reviews.length;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trademark Registration in Ghaziabad: Elite Brand Protection",
        "description": "Expert guidance on trademark registration in Ghaziabad. Reach out to IPR Karo for industrial-strength legal protection.",
        "image": "https://www.iprkaro.com/assets/ghaziabad-trademark-og.jpg",
        "datePublished": "2024-03-20T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.iprkaro.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-ghaziabad"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Ghaziabad",
        "image": "https://www.iprkaro.com/assets/ghaziabad-trademark-og.jpg",
        "description": "Professional trademark registration services in Ghaziabad.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": reviewsCount.toString()
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.author
            },
            "reviewBody": r.content,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": r.rating
            }
        }))
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.iprkaro.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Trademark Registration in Ghaziabad",
                "item": "https://www.iprkaro.com/trademark-registration-in-ghaziabad"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Ghaziabad</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your industrial legacy in the Gateway to Uttar Pradesh. From Sahibabad manufacturing giants to Indirapuram startups, we provide elite brand protection at the Delhi Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Ghaziabad", href: "/trademark-registration-in-ghaziabad" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Ghaziabad Guide</p>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>
                        <main className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                                    <section id="intro" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Industrial Powerhouse of Uttar Pradesh</h2>
                                        <p className="mb-6">Ghaziabad is often called the "Gateway to Uttar Pradesh." It is more than just a satellite city of Delhi. It is an industrial titan with one of Northern India's most vibrant manufacturing and logistics ecosystems.</p>
                                        <p className="mb-6">The city features traditional engineering clusters in Loni and Sahibabad. It also boasts modern commercial developments along NH-24 and fast-growing startups in Indirapuram. In this highly competitive market, brand identity is everything.</p>
                                        <p className="mb-6">Trademark registration in Ghaziabad serves as your business's legal shield. It is the foundation of your intellectual property strategy. It ensures your innovations and reputation are protected from day one.</p>
                                        <p className="mb-6">Whether you run a large plant in Bulandshahr Road Industrial Area or a tech startup in Vaishali, your brand name is your most valuable asset. At IPR Karo, we offer the specialized legal expertise needed to navigate the Delhi Trademark Registry, which handles all Ghaziabad applications.</p>
                                    </section>
                                    <section id="critical" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Trademark Registration is Critical</h3>
                                        <p className="mb-6">Ghaziabad’s closeness to the national capital makes it a prime target for brand imitation. Without a registered trademark, you are vulnerable to local competitors trying to exploit your goodwill.</p>
                                        <p className="mb-6">A trademark grants you a national monopoly over your brand name, logo, or tagline. This exclusivity is vital in crowded industrial sectors. Similar-sounding names can cause significant revenue loss and customer confusion.</p>
                                        <p className="mb-6">In competitive markets like Ghaziabad, a registered trademark acts as a badge of quality. It tells customers your brand is authentic and legally recognized. Also, a trademark is an asset that adds value to your balance sheet. For businesses planning expansion, franchising, or bank loans, it strongly boosts their valuation.</p>
                                    </section>
                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdiction: Delhi Trade Marks Registry</h3>
                                        <p className="mb-6">Even though your business is in Ghaziabad, your trademark application goes to the Delhi Trade Marks Registry. It is located at Boudhik Sampada Bhawan in Dwarka, New Delhi. This registry handles applications from across North India.</p>
                                        <p className="mb-6">Understanding the Delhi Registry's procedures is critical. This includes how they handle User Affidavits and their technical preferences during Show-Cause Hearings. Having an expert who knows the Delhi office's workflow is a huge advantage.</p>
                                        <p className="mb-6">IPR Karo bridges this distance with a fully digital filing system. Our attorneys also represent you at the Dwarka office when needed. This ensures Ghaziabad's industrial brands get the highest legal protection in the NCR.</p>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Comprehensive Trademark Filing Process</h3>
                                        <p className="mb-6">At IPR Karo, our trademark process is 100 percent online. We start with a strategic public search. We use AI tools to find phonetic, visual, and conceptual similarities.</p>
                                        <p className="mb-6">Next is strategic class selection. Steel and heavy machinery in Ghaziabad usually fall under Classes 6, 7, and 11. Modern service firms often fall under Classes 39, 41, or 42.</p>
                                        <p className="mb-6">After the search clears, we file the TM-A application. For Ghaziabad's MSMEs, we use Udyam or Startup India certificates to get a 50 percent fee rebate.</p>
                                        <p className="mb-6">Within 4 hours of filing, you receive your trademark application number. This allows you to start using the ™ symbol immediately.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">AI-Driven Search</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">4-Hour Acknowledgment</span></li>
                                        </ul>
                                    </section>
                                    <section id="sectors" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Sector-Specific IP Insights for Ghaziabad</h3>
                                        <p className="mb-6 text-gray-800 font-bold underline">Manufacturing and Heavy Engineering:</p>
                                        <p className="mb-6">Ghaziabad is a hub for steel, electronics, and automotive parts. For these businesses, the trademark often protects the product identity across North India. In Class 6 and 7, we focus on technical distinctiveness and trade dress protection for unique product packaging or shapes. The industrial reputation of Sahibabad and Loni is built on these protected brands.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Real Estate and Infrastructure Boom:</p>
                                        <p className="mb-6">With massive residential projects in Raj Nagar Extension and commercial hubs in Kaushambi, brand names for townships and commercial buildings are high-value IP. We help developers secure these project names early to prevent passing off actions by rival builders. Your real estate brand is the primary promise of quality for modern home buyers.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Logistics and Warehousing:</p>
                                        <p className="mb-6">As a logistics hub for the NCR, Ghaziabad’s transport companies need protection under Class 39. A recognizable brand on a truck or a warehouse is a sign of reliability for global clients. We help logistics firms build a Trust Fortress through secure trademark registrations that protect their regional dominance.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Retail, F&B, and Modern Lifestyle:</p>
                                        <p className="mb-6">The malls and high-quality residential areas of Ghaziabad have given rise to numerous local F&B and clothing brands. Protecting the Store Name and Logo is critical for these businesses before they expand into franchises. We ensure your local success in Indirapuram can be safely replicated in other cities under a legally secured brand.</p>
                                    </section>
                                    <section id="search" className="scroll-mt-32 pt-12"><div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div><h3 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest">Ghaziabad Trademark Search</h3>
                                        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't launch your industrial brand blindly. Our AI-powered search tool scans the Delhi Registry's database for phonetic, visual, and conceptual similarities instantly.</p>
                                        <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Search Delhi Registry</button></Link>
                                    </div></section>
                                    <section id="pitfalls" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Avoiding Common Pitfalls in Ghaziabad Filings</h3>
                                        <p className="mb-6">Many local businesses fall into common traps. Using descriptive names like "Ghaziabad Quality Steel" is often rejected as being too descriptive. Missing deadlines is another major issue; you have exactly 30 days to respond to an examination report. Furthermore, claiming an incorrect user date without proof can lead to the rejection of your User Affidavit. Our legal team audits every application for technical compliance, ensuring that your industrial brand doesn't face avoidable legal deadlock at the Dwarka office.</p>
                                    </section>
                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The Legal Strength of the Delhi High Court</h3>
                                        <p className="mb-6">The Delhi High Court has jurisdiction over the Delhi Trademark Registry and is widely considered India’s most IP-savvy court. Many landmark trademark judgments that shape national law are decided here. Registered trademark owners in Ghaziabad can leverage this powerful judiciary to get ex-parte injunctions and damages against infringers, sometimes within 48 hours of filing a suit. This judicial efficiency is a major advantage for businesses operating in the hyper-competitive NCR market.</p>
                                    </section>
                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">MSME and Startup India Benefits</h3>
                                        <p className="mb-6">The Indian government provides massive support for small businesses and innovators in Ghaziabad. Startups and MSMEs pay only ₹4500 instead of ₹9000 as government fees. There are also provisions for fast-track examination for certain categories of applicants. We assist local firms in obtaining the necessary central government certifications to unlock these financial and procedural benefits instantly, turning your innovation into a legally protected asset.</p>
                                    </section>
                                    <section id="costs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Cost of Trademark Registration in Ghaziabad</h3>
                                        <p className="mb-6">Transparency is a core value at IPR Karo. For individuals, startups, and MSMEs, the government fee is ₹4,500. For large companies and LLPs, it is ₹9,000. These are government-mandated fees per class. Our professional charges cover end-to-end management, from the AI search to the final certificate.</p>
                                        <p className="mb-6">We believe in upfront pricing so Ghaziabad's industrial leaders can plan budgets without surprises. These fees are the best investment for the long-term security of your enterprise.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Renewals and Lifecycle Management in Uttar Pradesh:</p>
                                        <p className="mb-6">A trademark is a permanent asset requiring maintenance. It is valid for 10 years and must be renewed using Form TM-R. We offer automated renewal alerts so your protection never lapses. Missing a renewal allows competitors to claim your rights. Proper management also involves updating ownership or address changes via Form TM-P.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Trademark Enforcement: Raids and Actions:</p>
                                        <p className="mb-6">In the industrial belts of Sahibabad and Loni, counterfeiting is a serious threat. A registered trademark lets you take civil and criminal action. We help brand owners coordinate with local law enforcement for raids and seek court injunctions. Enforcement makes your trademark a powerful legal document that commands respect across the region.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">The Role of GIDA and Regional IP Awareness:</p>
                                        <p className="mb-6">The Ghaziabad Industrial Development Authority (GIDA) promotes IP awareness among local manufacturers. As Ghaziabad moves to a tech-driven economy, IP is recognized at the institutional level. We help local industrialists see that a trademark is as important as their machinery. This 'IP-First' mindset sets top-tier brands apart.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Moat for SME Fundraising and M&A:</p>
                                        <p className="mb-6">For SMEs seeking venture capital or planning an exit, a strong IP portfolio is critical. VCs look for a "moat" that prevents easy imitation. A registered trademark proves you have exclusive rights to your market identity. A clean IP report from the Delhi Registry speeds up fundraising and boosts valuation.</p>
                                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[3.5rem] my-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div><h5 className="text-xl font-black mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-indigo-400" />IP Beyond: Ghaziabad's Industrial Future</h5>
                                            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
                                                <div><p><span className="font-black text-indigo-400">Trade Dress:</span> Protecting the look and feel of industrial products.</p><p className="mt-4"><span className="font-black text-indigo-400">Logistics IP:</span> Specialty registry for supply chain brands.</p></div>
                                                <div><p><span className="font-black text-indigo-400">Global Protection:</span> Expanding Ghaziabad brands via the Madrid Protocol.</p><p className="mt-4"><span className="font-black text-indigo-400">Asset Management:</span> Managing renewals and lifecycle changes.</p></div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Ghaziabad Trademark FAQ</h3>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h4><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h3 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Ghaziabad's Industrial Leaders</h3>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h4 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Ghaziabad</h4><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your industrial or retail name is available at the Delhi Registry. Get a comprehensive legal report from our elite attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h4><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Corporate Identity</span><h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Ghaziabad Founders</h3><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join 10,000+ brands protected by India's tech-first IP experts. Get your official TM application number filed at the Delhi Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Ghaziabad Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
