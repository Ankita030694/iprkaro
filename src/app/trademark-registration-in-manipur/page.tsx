import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faStar,
    faPhone,
    faRocket,
    faBuilding,
    faShieldHalved,
    faSearch,
    faMapMarkerAlt,
    faGavel,
    faGlobe,
    faIndustry,
    faChartLine,
    faScaleBalanced,
    faAward,
    faLightbulb,
    faLeaf,
    faShirt,
    faAppleWhole,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Manipur | Imphal & Thoubal - IPR Karo",
    description: "Expert trademark registration in Manipur. Secure your brand in Imphal, Thoubal, and Bishnupur. 100% IP support for Handlooms, Food Processing, and Startups.",
    keywords: [
        "trademark registration in manipur",
        "online trademark filing imphal",
        "manipur handloom brand protection",
        "imphal startup ipr services",
        "food processing trademark manipur",
        "trademark search manipur",
        "kolkata trademark registry manipur jurisdiction",
        "startup manipur 2.0 incentives",
        "brand registration for organic ginger manipur",
        "msme trademark subsidy manipur",
        "gateway to southeast asia branding",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-manipur",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Manipur businesses?", answer: "Manipur is under the jurisdiction of the Kolkata Trademark Registry (Salt Lake City). While the physical office is in West Bengal, IPR Karo manages the entire process 100 percent digitally. You can file and track your application from Imphal without any travel, as even hearings are conducted via video conferencing." },
    { question: "How does 'Startup Manipur 2.0' support trademark filing?", answer: "Under the Startup Manipur initiative, recognized startups can receive financial assistance for statutory fees related to trademark and design protection. This significantly reduces the entry barrier for new entrepreneurs in Imphal to secure their intellectual property." },
    { question: "Can I use the ™ symbol immediately in Imphal?", answer: "Yes, once we file your application and obtain the official filing number (usually within 4 to 6 hours), you can legally use the ™ symbol. This notifies competitors that your brand is a protected asset and establishes your priority in the market." },
    { question: "What are the government fees for registration in Manipur?", answer: "For individuals, startups, and MSMEs, the official government fee for online filing is INR 4500 per class. Large companies and other entities pay INR 9000. Online filing through IPR Karo is 10 percent cheaper than physical filing surcharges." },
    { question: "Are there any MSME subsidies for trademarks in Manipur?", answer: "Yes, registered MSME units in Manipur with a valid Udyam certificate are eligible for a 50 percent concession on government filing fees. Additionally, the 'Industrial and Investment Promotion Policy 2022' provides various reimbursement schemes for quality certifications." },
    { question: "What documents are required for filing in Manipur?", answer: "We primarily need basic identity proof (Aadhaar or PAN) and proof of your business address in Manipur. For companies or LLPs, the Incorporation Certificate is required. A valid MSME or Startup recognition certificate is essential to avail the government fee discount." },
    { question: "How long does the trademark process take for Manipur brands?", answer: "The typical timeframe for receiving the final Registration Certificate (®) is 6 to 12 months. However, your legal protection starts from the date of filing, and you can defend your brand against infringers while the application is in progress." },
    { question: "Can I register a trademark for my handloom products?", answer: "Absolutely. Brand protection is vital for the handloom sector to prevent cheap powerloom imitations from misusing your name. We help Manipur weavers register their unique names and logos to protect their traditional craft's market value." },
    { question: "Do I need to visit Kolkata for registry proceedings?", answer: "No, the entire process is managed online by IPR Karo. From the initial conflict search to the final certificate, we handle everything digitally. Even if the registry raises an objection, our attorneys file the technical reply online through the official IP India portal." },
    { question: "Why choose IPR Karo for brand protection in Manipur?", answer: "We combine deep IP expertise with an understanding of Manipur's strategic position as a gateway to ASEAN markets. We help you build a 'Legal Moat' around your business, providing the most sophisticated brand protection in the North East region." }
];

const reviews = [
    { author: "Biren N.", position: "Founder", content: "IPR Karo secured our brand for organic ginger products in record time. Their digital process is perfect for Imphal startups. Highly professional!", rating: 5 },
    { author: "Leila K.", position: "Head", content: "They helped us protect our cooperative's name across India. The 50 percent MSME fee waiver was a huge help. Great team for Manipur weavers!", rating: 5 },
    { author: "Sanam J.", position: "Entrepreneur", content: "Fast and reliable service. We got our TM number in just 4 hours. They handled the entire Kolkata registry communication perfectly. 5 stars.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Gateway to the East" },
    { id: "strategic", title: "Strategic Security" },
    { id: "imphal-hub", title: "Imphal: Commercial Core" },
    { id: "handloom-ip", title: "Handloom Brand Defense" },
    { id: "food-processing", title: "Food Processing Brands" },
    { id: "startup-manipur", title: "Startup Manipur 2.0" },
    { id: "msme-support", title: "MSME Policy 2022" },
    { id: "thoubal-industrial", title: "Thoubal Growth Story" },
    { id: "journey", title: "8-Step Journey" },
    { id: "fees", title: "Fee Concessions" },
    { id: "legal-remedies", title: "Enforcement in Manipur" },
    { id: "global", title: "ASEAN Market Reach" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "faqs", title: "Manipur FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function ManipurPage() {
    const averageRating = 4.9;
    const reviewsCount = 132;

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
        "headline": "Trademark Registration in Manipur: Securing Brand Identity for the ASEAN Gateway",
        "description": "Complete guide to trademark registration in Manipur. Secure your brand in Imphal, Thoubal, and Bishnupur with expert IPR services for handlooms and food processing.",
        "image": "https://www.iprkaro.com/assets/manipur-trademark-og.jpg",
        "datePublished": "2024-03-24T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-manipur"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Manipur Trademark Registration",
        "image": "https://www.iprkaro.com/assets/manipur-trademark-og.jpg",
        "description": "Premium trademark registration services for Manipur businesses, handlooms, and startups.",
        "brand": { "@type": "Brand", "name": "IPR Karo" },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": reviewsCount.toString()
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.author },
            "reviewBody": r.content,
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating }
        }))
    };

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9289707648",
            "contactType": "customer service"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com" },
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Manipur", "item": "https://www.iprkaro.com/trademark-registration-in-manipur" }
        ]
    };


    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Manipur</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Build your brand as the Gateway to Southeast Asia. From Imphal's vibrant markets to the artisan weavers of Bishnupur, we provide elite brand protection for Manipur's strategic frontier.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Manipur Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Manipur", href: "/trademark-registration-in-manipur" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Manipur Guide</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        <main className="min-w-0">
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="intro" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Manipur: The Strategic Gateway to the East</h2>
                                        <p className="mb-6">Manipur stands at the crossroads of South Asia and Southeast Asia. As a critical component of India's "Act East" policy, the state is rapidly emerging as a primary commercial gateway for trade with ASEAN nations. This strategic location has ignited a new era of entrepreneurship in Imphal and surrounding districts, where traditional arts are merging with modern business models. From the exquisite handlooms of the Meitei and tribal communities to the burgeoning organic food processing units, Manipur’s brands carry an aura of authenticity and strategic value. In this evolving economic landscape, trademark registration in Manipur is the most vital step in securing your commercial identity and participating in the upcoming trade boom.</p>
                                        <p className="mb-6">At IPR Karo, we understand that a brand from Manipur is more than just a name; it is a repository of cultural heritage and future trade potential. Our specialized intellectual property services are designed to bridge the gap between regional innovation and the national legal framework (governed by the Kolkata Registry for Manipur). We ensure that your trademark is secured with absolute technical precision, providing you with a national monopoly that prevents your hard-earned reputation from being diluted by cheap imitations. As the state moves toward its goal of becoming a regional economic powerhouse through initiatives like 'Startup Manipur 2.0', securing your brand identity today is the key to dominating the markets of tomorrow.</p>
                                        <p className="mb-6">The transition from a "local artisan" or "small unit" to a "legally protected brand" is essential in the global economy. With the opening of the Trilateral Highway and increased cross-border trade, brands from Manipur are reaching international audiences. A registered trademark acts as your unique signature, a badge of trust that allows customers from Bangkok to Bangalore to identify your authentic products. It is your strongest defense against brand theft and your primary tool for securing long-term business valuation.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Security of Your Intellectual Assets</h2>
                                        <p className="mb-6">For a business in Manipur, a trademark (®) is your most valuable intangible asset. It grants you the exclusive legal right to use your brand name, logo, or slogan across all 28 states and 8 union territories of India. In a region where cultural authenticity is a primary selling point, brand trust is the most critical differentiator. When you register your mark, you are building a "Legal Fortress" around your business identity.</p>
                                        <p className="mb-6">Without trademark registration, your brand remains legally vulnerable to unauthorized use and generic imitation. Proving rights in unregistered marks is a difficult and expensive legal battle. However, with a registration certificate issued through the Kolkata Registry (which handles Manipur matters), the legal burden shifts in your favor. You gain the power to stop infringers almost instantly through court-ordered injunctions. This level of security is essential for cooperatives looking to secure bank loans, startups entering into venture capital deals, or exporters looking to protect their identity in foreign markets.</p>
                                    </section>

                                    <section id="imphal-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Imphal: The Commercial Heart of Manipur</h2>
                                        <p className="mb-6">Imphal, the capital, is the nerve center of Manipur’s trade. The city is a hub for retail, hospitality, and a rapidly growing IT sector. For Imphal’s entrepreneurs, brand distinction is the key to competing with incoming national brands while preparing for export into the ASEAN market. We assist Imphal's rising businesses in securing trademarks in Class 42 (IT/Software) and Class 35 (Retail/Marketing).</p>
                                        <p className="mb-6">With the development of the "Manipur Technology Innovation Hub", Imphal is becoming a base for tech-driven startups. Securing your IP early ensures that your local innovation is ready for national and international scale. From tech firms in Imphal West to commercial units in Imphal East, we provide a seamless digital filing experience that brings world-class legal protection to the gateway city.</p>
                                    </section>

                                    <section id="handloom-ip" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShirt} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Handloom Brand Defense: Class 24 and 25</h2>
                                        <p className="mb-6">Handlooms are the pride of Manipur. The intricate designs and unique weaving patterns have immense national and international appeal. However, this reputation is often threatened by low-quality powerloom products that misuse traditional names. Registering your trademark in Class 24 (Textiles) and Class 25 (Clothing) is vital to protect the market value of your craft. We help weaver cooperatives and designer brands secure their names, ensuring that the legacy of Manipur’s artisans remains exclusive and profitable.</p>
                                    </section>

                                    <section id="food-processing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAppleWhole} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Food Processing: Branding Organic Excellence</h2>
                                        <p className="mb-6">Manipur is a treasure trove of organic produce, including the world-famous Queen Pineapple, Kachai Lemon, and organic ginger. The food processing sector in Thoubal and Bishnupur is transforming these raw materials into high-value branded products. We guide these units in registering trademarks in Class 29 (Processed Foods) and Class 30 (Gourmet Spices). A registered brand allows these products to enter premium retail shelves in metro cities and overseas markets with a badge of trust.</p>
                                    </section>

                                    <section id="startup-manipur" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Startup Manipur 2.0: IP Incentives for Innovators</h2>
                                        <p className="mb-6">The "Startup Manipur" initiative is one of the most proactive programs in the North East. It offers a structured path for young entrepreneurs, including idea-stage and seed-stage funding. Crucially, the policy recognizes the importance of Intellectual Property:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Statutory Fee Support</strong>: Startups can claim financial assistance to cover the fees for trademark and design protection.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Patent Reimbursement</strong>: 100 percent reimbursement for patent application filing and prosecution costs for incubated startups.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MTI-Hub Guidance</strong>: Expert resources are available for startups to navigate the complex world of IP filings.</li>
                                        </ul>
                                    </section>

                                    <section id="msme-support" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME Policy 2022: Powering Small Units</h2>
                                        <p className="mb-6">The "Industrial and Investment Promotion Policy 2022" for MSMEs provides a robust framework for growth. Through interest subsidies, capital subsidies on plant and machinery, and reimbursements for quality certifications (ISO/AGMARK), the state makes it easier for small units to scale. We help Manipur’s MSMEs leverage these benefits into a legally safe brand identity, ensuring they pay the lowest possible government fees (50% discount for MSMEs) while receiving national-level protection.</p>
                                    </section>

                                    <section id="thoubal-industrial" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Thoubal and Bishnupur: The Manufacturing Surge</h2>
                                        <p className="mb-6">Districts like Thoubal and Bishnupur are witnessing a surge in small-scale manufacturing and agro-processing. These units are the backbone of local employment. We provide specialized trademark services for these manufacturing hubs, helping them transition from being anonymous suppliers to being recognized brands that can command a higher market price.</p>
                                    </section>

                                    <section id="journey" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 8-Step Filing Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Precision Brand Search", desc: "We conduct an exhaustive scan of the national registry to ensure your Manipur brand is unique and legally defensible." },
                                                { step: 2, title: "Strategic Class Selection", desc: "We guide you in choosing the correct Nice Classification categories from 45 classes to maximize your protection." },
                                                { step: 3, title: "MSME/Startup Verification", desc: "We verify your Udyam or Startup status to ensure you pay the lowest possible government fees (50% concession)." },
                                                { step: 4, title: "Drafting Form TM-A", desc: "Our attorneys draft the application with precise technical descriptions to minimize registry objections." },
                                                { step: 5, title: "Digital Filing (4-Hour Turnaround)", desc: "We file instantly on the IP India portal, granting you the right to use the ™ symbol almost immediately." },
                                                { step: 6, title: "Examination Management", desc: "We track your application daily. If the registrar raises a query, we draft a technical reply instantly to keep you on track." },
                                                { step: 7, title: "Journal Publication Monitoring", desc: "During the 4-month window, we monitor the official gazette to defend your mark against any third-party oppositions." },
                                                { step: 8, title: "Registration Certificate (®)", desc: "Once the mark is approved, we deliver the digitised registration certificate, securing your brand for 10 years." }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4><p>{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Understanding Fees and Concessions</h2>
                                        <p className="mb-6">The government fee for trademark registration in India is standardized, but Manipur businesses can profit from significant concessions:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals and Startups</strong>: INR 4,500 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSMEs (with Udyam Certificate)</strong>: INR 4,500 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Companies and LLPs</strong>: INR 9,000 for online filing.</li>
                                        </ul>
                                        <p className="mb-6">IPR Karo exclusively uses the online filing portal, saving you the 10 percent surcharge associated with physical filing at the Kolkata registry and ensuring your application is processed at record speed.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement and Legal Remedies in Manipur</h2>
                                        <p className="mb-6">Registration gives you the ultimate legal authority to defend your brand. In cases of infringement, you can approach the District Courts or the High Court of Manipur in Imphal. With a registration certificate, you can seek "Interim Injunctions" to immediately stop counterfeiters. Criminal remedies are also available, including police raids on units selling fake branded goods. For Manipur's traditional handlooms and specialty foods, enforcement is the final shield that protects your authentic craft.</p>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />ASEAN Expansion: Going International</h2>
                                        <p className="mb-6">Manipur’s exporters are perfectly positioned for the ASEAN market. Through the Madrid Protocol, we can use your initial Indian trademark filing to apply for protection in over 120 countries, including Thailand, Vietnam, and Myanmar. This simplifies the international expansion process and ensures that your Manipur brand is protected globally as you move east.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Common Pitfalls to Avoid in your Application</h2>
                                        <p className="mb-6">Avoid using generic geographical names like "Imphal Sweets" for products where it might be seen as purely descriptive; instead, use a unique name that stands out. Ensure your "Date of Use" is supported by documentary evidence. The most common error is missing the 10-year renewal deadline; our automated system provides yearly alerts to ensure your brand remains safe indefinitely across generations.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Manipur Trademark FAQ</h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10">{faq.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest text-[rgb(110,94,147)]">Local Trust from the Frontier</h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex text-yellow-400 mb-4">
                                                            {[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />))}
                                                        </div>
                                                        <p className="text-gray-700 italic mb-10 text-lg">"{rev.content}"</p>
                                                    </div>
                                                    <div className="flex items-center pt-6 border-t border-gray-200">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 uppercase text-xl">{rev.author[0]}</div>
                                                        <div>
                                                            <p className="font-black text-gray-900 text-sm">{rev.author}</p>
                                                            <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="cta-bottom" className="scroll-mt-32 pt-12 text-center">
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#160049] p-12 rounded-[3rem] text-white">
                                            <h3 className="text-3xl font-black mb-6">Secure Your Manipur Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the rising wave of Manipur entrepreneurs who have built a secure legal future for their products. Get your official TM number today and move toward national and ASEAN recognition.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Manipur IP Expert
                                                </button>
                                            </Link>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Manipur IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Verify your brand availability instantly with our East India desk. Get a detailed legal report for the Kolkata Registry experts.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Manipur Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Identifier</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Entry</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Gateway</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
