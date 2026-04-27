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
    faCloud,
    faMountain,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Expert TM Registration in Meghalaya | IPR Karo",
    description: "Expert trademark registration in Meghalaya. Secure your brand in Shillong, Tura, and Jowai. 100% IP support for Lakadong Turmeric, Tourism, and Startups.",
    keywords: [
        "trademark registration in meghalaya",
        "online trademark filing shillong",
        "lakadong turmeric brand protection",
        "shillong startup ipr services",
        "meghalaya tourism branding",
        "trademark search meghalaya",
        "kolkata trademark registry meghalaya jurisdiction",
        "meghalaya industrial policy 2024 incentives",
        "prime meghalaya startup grant",
        "msme trademark subsidy meghalaya",
        "abode of clouds branding",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-meghalaya",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Meghalaya?", answer: "Meghalaya falls under the jurisdiction of the Kolkata Trademark Registry. However, IPR Karo manages the entire process 100 percent digitally. You can file from Shillong or Tura without visiting Kolkata, as all filings and hearings are conducted via the official IP India online portal." },
    { question: "How does the 'PRIME' program help with trademark costs?", answer: "The PRIME (Promotion and Incubation of Market-Driven Enterprises) program in Meghalaya provides various financial incentives. While it primarily focuses on grants and loans, it often includes reimbursement for intellectual property costs like patent filing (up to 2 lakh) and trademark protection for incubated startups." },
    { question: "Can I register a trademark for Lakadong Turmeric products?", answer: "Yes, and it is highly recommended. While Lakadong Turmeric itself has a Geographical Indication (GI) tag for the region, your specific brand name and logo (e.g., 'Pure Lakadong by [Brand Name]') should be trademarked to distinguish your premium product from competitors and prevent mislabeling." },
    { question: "What are the government fees for Meghalaya startups?", answer: "Recognized startups under the DPIIT scheme or the state's startup policy pay a reduced government fee of INR 4500 per class for online filing. This is a 50 percent discount compared to the INR 9000 fee applicable to large corporations." },
    { question: "Is a physical presence required for trademark hearings?", answer: "No, the Trademark Registry has moved to a 'Digital First' model. Hearings are conducted via video conferencing (VC), and all documents are submitted electronically. Our attorneys handle these VC hearings on your behalf from our tech-enabled IP desk." },
    { question: "What documents do I need for a trademark in Shillong?", answer: "We require basic KYB (Know Your Business) documents: Identity proof of the applicant (Aadhaar/PAN), business address proof, and a clear logo file. For fee concessions, we also need your Udyam (MSME) certificate or Startup recognition certificate." },
    { question: "How long is a trademark valid in Meghalaya?", answer: "Once registered, a trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years. IPR Karo provides lifetime renewal tracking to ensure your brand remains a permanent asset for your business." },
    { question: "Does the 2024 Industrial Policy provide IP subsidies?", answer: "The Meghalaya Industrial and Investment Promotion Policy (MIIPP) 2024 focuses heavily on ease of doing business and provides various incentives like interest subventions. It also includes provisions for digital upgradation and assistance in securing statutory registrations like trademarks." },
    { question: "How does IPR Karo perform trademark searches?", answer: "We use a proprietary multi-layer search algorithm that scans the official database for exact matches, phonetic similarities, and visual conflicts. This thoroughness ensures your Meghalaya brand has the highest chance of approval at the Kolkata Registry." },
    { question: "Why is trademarking important for Meghalaya tourism?", answer: "Meghalaya is a global brand known as the 'Abode of Clouds'. For tourism entrepreneurs in Shillong and Cherrapunji, a trademark protects your unique resort name, tour brand, or trekking identity from being copied, ensuring your reputation for quality service is legally guarded." }
];

const reviews = [
    { author: "Eshwar S.", position: "Founder", content: "IPR Karo made the complex trademark process simple. Our tour brand is now protected across India. Their knowledge of North East policies is impressive!", rating: 5 },
    { author: "Dapkupar L.", position: "Exporter", content: "Protecting our specialty spice brand was critical for our export deals. IPR Karo secured the registration in record time. Professional and digital-heavy!", rating: 5 },
    { author: "Rimika W.", position: "Artisan", content: "The MSME fee waiver they secured for us was a huge help. They are definitely the best for brand protection in Meghalaya. Highly recommended.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Branding the Abode of Clouds" },
    { id: "strategic", title: "Strategic IP Assets" },
    { id: "shillong-hub", title: "Shillong: Startup Core" },
    { id: "lakadong-spices", title: "Lakadong Turmeric GI & Trademarks" },
    { id: "miipp-2024", title: "MIIPP 2024 Incentives" },
    { id: "prime-startup", title: "PRIME Meghalaya Program" },
    { id: "msme-subsidies", title: "MSME & NEIDS Benefits" },
    { id: "tourism-branding", title: "Tourism: Identity Protection" },
    { id: "filing-process", title: "9-Step Digital Journey" },
    { id: "fees", title: "Concessions & Fee Table" },
    { id: "registry", title: "Kolkata Registry Jurisdiction" },
    { id: "legal", title: "Enforcement in Meghalaya" },
    { id: "pitfalls", title: "Meghalaya Brand Pitfalls" },
    { id: "faqs", title: "Meghalaya FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function MeghalayaPage() {
    const averageRating = 5.0;
    const reviewsCount = 114;

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
        "headline": "Trademark Registration in Meghalaya: Protecting Brands in the Abode of Clouds",
        "description": "Complete guide to trademark registration in Meghalaya. Secure your brand in Shillong, Tura, and Jowai with expert IPR support for Lakadong Turmeric and Tourism.",
        "image": "https://www.iprkaro.com/assets/meghalaya-trademark-og.jpg",
        "datePublished": "2024-03-24T09:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-meghalaya"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Meghalaya Trademark Registration",
        "image": "https://www.iprkaro.com/assets/meghalaya-trademark-og.jpg",
        "description": "Premium trademark registration services for Shillong startups, turmeric exporters, and Meghalaya MSMEs.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Meghalaya", "item": "https://www.iprkaro.com/trademark-registration-in-meghalaya" }
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
                        in <span className="text-[rgb(110,94,147)] bg-clip-text text-transparent bg-gradient-to-r from-[rgb(110,94,147)] to-[#9f8cc4]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Meghalaya</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your brand in the Abode of Clouds. From the innovation labs of Shillong to the spice aggregators of Jaintia Hills, we provide elite trademark protection for Meghalaya's rising entrepreneurs.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Meghalaya Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Meghalaya", href: "/trademark-registration-in-meghalaya" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Meghalaya Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faCloud} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Meghalaya: Branding the Abode of Clouds</h2>
                                        <p className="mb-6">Meghalaya, aptly known as the "Abode of Clouds", is undergoing a profound economic transformation. The state is leveraging its immense natural wealth and unique cultural heritage to build a modern economy driven by high-value agriculture, sustainable tourism, and tech-enabled startups. From the pine-shaded cafes of Shillong to the world-renowned turmeric fields of West Jaintia Hills, Meghalaya is becoming a breeding ground for iconic regional brands. In this competitive landscape, trademark registration in Meghalaya has transitioned from being a "legal formality" to becoming the most critical asset for any business aiming for long-term scalability and market trust.</p>
                                        <p className="mb-6">At IPR Karo, we recognize that a brand from Meghalaya carries a unique value proposition: it represents quality, authenticity, and sustainability. Our mission is to protect this value through world-class intellectual property services. Whether you are an incubator startup under the PRIME program, a spice aggregator exporting Lakadong Turmeric, or an ecotourism venture in Sohra, we provide the legal shield your brand needs to thrive. We manage the entire process through the Kolkata Trademark Registry (the jurisdictional office for Meghalaya), ensuring that your filing is technically flawless and protected across all jurisdictions in India and beyond.</p>
                                        <p className="mb-6">As the state government implements the ambitious "Meghalaya Industrial and Investment Promotion Policy 2024", the push for "Ease of Doing Business" is creating a surge in new enterprise registrations. A registered trademark (®) is the final piece of the puzzle, allowing you to secure your space in the national market and ward off infringers who might attempt to piggyback on your hard-earned reputation. Securing your brand identity today is the primary step in transforming a local business into a national household name.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic IP Assets: Building Business Value</h2>
                                        <p className="mb-6">A trademark is more than just a logo; it is a legally enforceable monopoly. For an entrepreneur in Meghalaya, it provides the exclusive right to use your brand identity in connection with your specific goods or services. In the age of digital discovery, your brand name is your digital storefront. Without registration, your brand remains vulnerable to copycats who can dilute your market share and damage your reputation. Trademark registration (governed by the Trade Marks Act, 1999) grants you the power of "infringement actions" and "passing off" protection, shifting the legal balance heavily in your favor.</p>
                                        <p className="mb-6">Furthermore, a registered trademark is a depreciable intangible asset that can be valued, licensed, franchised, or even used as collateral for bank loans. For Meghalaya's cooperatives and small manufacturers, this added valuation is essential for attracting investment and scaling operations beyond the state's borders. It allows you to build a legacy that survives market fluctuations and competition, providing a permanent legal anchor for your commercial dreams.</p>
                                    </section>

                                    <section id="shillong-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Shillong: The Innovation and Economic Core</h2>
                                        <p className="mb-6">Shillong, the capital, is the heartbeat of Meghalaya's business ecosystem. As the educational and administrative center of the North East, it attracts talent that is increasingly turning toward entrepreneurship. The "Invest Meghalaya Authority" and the "PRIME" program have turned Shillong into a hub for tech startups, creative agencies, and upscale food brands. For these businesses, the trademark process is the first step in ensuring their innovation is not stolen. We provide specialized IP consulting for Shillong's startups, helping them navigate Class 42 (IT), Class 35 (Services), and Class 43 (Hospitality).</p>
                                        <p className="mb-6">The city's vibrant cafe culture and growing apparel industry also require robust protection. We assist local designers and food entrepreneurs in securing their names, ensuring that their creative outputs are legally shielded from the very beginning. From Police Bazar to Laitumkhrah, our digital filing desk serves the entire capital with unparalleled efficiency, bringing the expertise of the Kolkata Registry experts to your doorstep.</p>
                                    </section>

                                    <section id="lakadong-spices" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Lakadong Turmeric: GI Tag and Brand Protection</h2>
                                        <p className="mb-6">The Jaintia Hills are home to the legendary Lakadong Turmeric, which recently secured a Geographical Indication (GI) tag. While the GI tag protects the regional origin, individual brands (like "Shillong Heritage Spices" or "Jaintia Gold") must secure their specific trademarks to build a direct relationship with the consumer. We specialize in protecting spice brands in Class 30. We help aggregators and exporters leverage the GI tag while building their own registered brands, ensuring they command premium prices in international markets while preventing mislabeling and fraud.</p>
                                    </section>

                                    <section id="miipp-2024" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MIIPP 2024: New Incentives for Industrial Growth</h2>
                                        <p className="mb-6">The "Meghalaya Industrial and Investment Promotion Policy (MIIPP) 2024" is a landmark framework aimed at transforming the state into a $10 billion economy. This policy, aligned with the central government's UNNATI 2024 scheme, provides significant incentives:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Interest Subvention</strong>: 5 percent for priority sectors over 7 years to reduce the cost of capital.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Power Subsidies</strong>: Up to 50 percent on the cost of power generating sets for MSMEs.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Ease of Doing Business</strong>: A streamlined single-window clearance through the 'Invest Meghalaya' authority.</li>
                                        </ul>
                                        <p className="mb-6">These incentives make it a prime time to formalize your business identity. IPR Karo ensures that as you take advantage of state subsidies, your brand remains your most protected asset, ready for national and global expansion.</p>
                                    </section>

                                    <section id="prime-startup" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />PRIME Meghalaya: Incubation and IP Support</h2>
                                        <p className="mb-6">The "Promotion and Incubation of Market-Driven Enterprises" (PRIME) program is a pillar of Meghalaya's startup ecosystem. It provides the "Kickstart Grant" (up to 5 Lakhs) and "Scaleup Innovation Loans" (up to 25 Lakhs). Crucially, the program includes support for filing patents and trademarks. Incubated startups can receive substantial reimbursements for domestic and international IP filings. We help PRIME-incubated businesses maximize these grants by providing expert filing services that meet all statutory requirements, ensuring their innovation is global-ready from day one.</p>
                                    </section>

                                    <section id="msme-subsidies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME and NEIDS: Financial Benefits for Branding</h2>
                                        <p className="mb-6">MSMEs in Meghalaya can benefit from the North East Industrial Development Scheme (NEIDS), which offers a 30 percent Central Capital Investment Incentive for Access to Credit and GST reimbursements. Registered MSMEs also enjoy a 50 percent discount on official trademark filing fees. We ensure that your Meghalaya business pays the lowest possible fees (INR 4500 instead of INR 9000 for companies) while receiving the highest level of IP protection available in the country.</p>
                                    </section>

                                    <section id="tourism-branding" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMountain} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tourism: Protecting Identity in the Hills</h2>
                                        <p className="mb-6">Meghalaya is world-renowned for its living root bridges, waterfalls, and caves. Tourism is the backbone of the state's economy. For resort owners in Sohra or Tura and tour operators in Shillong, a trademark protects your unique service brand. In a crowded digital travel market, your brand name is your reputation. We help you secure that name in Class 43, ensuring that when travelers search for the best of Meghalaya, they find your authentic, protected brand and not a low-quality imitator.</p>
                                    </section>

                                    <section id="filing-process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 9-Step Digital Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Deep Brand Search", desc: "We use AI-powered tools to scan the national IP database, identifying any phonetic or visual conflicts before you file." },
                                                { step: 2, title: "Class Selection Strategy", desc: "We guide you in picking from 45 Nice Classification classes to ensure your business activities are fully covered." },
                                                { step: 3, title: "MSME/PRIME Verification", desc: "We verify your Udyam or Startup status to secure the 50% government fee concession instantly." },
                                                { step: 4, title: "Technical Drafting", desc: "Our attorneys draft your Form TM-A with precise descriptions to minimize the risk of registry objections." },
                                                { step: 5, title: "Online Filing (4-Hour Guarantee)", desc: "We file directly through our official portal, giving you the immediate right to use the ™ symbol on your products." },
                                                { step: 6, title: "Examination Monitoring", desc: "We track your application daily. If the registry issues an examination report, we draft a technical reply instantly." },
                                                { step: 7, title: "Journal Publication", desc: "Your mark is published in the Trademark Journal for a 4-month window to allow for public transparency." },
                                                { step: 8, title: "Opposition Management", desc: "If a third party opposes, our senior attorneys provide aggressive representation to defend your brand rights." },
                                                { step: 9, title: "Registration Certificate (®)", desc: "We deliver your official 10-year Registration Certificate digitally, establishing your nationwide brand monopoly." }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4><p>{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Concessions and Fees for Meghalaya Brands</h2>
                                        <p className="mb-6">The Trademark Registry offers significant concessions for smaller entities in Meghalaya to promote entrepreneurship:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Individuals and Startups</strong>: INR 4,500 for online filing (50% concession).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>MSMEs (Udyam Registered)</strong>: INR 4,500 for online filing (50% concession).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Companies/LLPs</strong>: INR 9,000 for online filing.</li>
                                        </ul>
                                        <p className="mb-6">Physical filing at the Kolkata registry incurs a surcharge of INR 500 to 1000. IPR Karo always uses the 100% digital route to pass the maximum savings and speed directly to you.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Kolkata Registry: Your Gateway to IP Protection</h2>
                                        <p className="mb-6">All trademark applications from Meghalaya are handled by the Kolkata Trade Marks Registry (Salt Lake City). While the register is physical, the interface is now entirely digital. Our attorneys have over a decade of experience interacting with the Kolkata Registry, ensuring that your application adheres to their specific examination patterns. We handle all registry communications, from responding to show-cause notices to managing video-conferencing hearings, so you never have to leave Shillong to secure your national brand.</p>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement and Legal Remedies in Shillong</h2>
                                        <p className="mb-6">In the event of brand infringement, a registered trademark grants you the right to sue for "Infringement" in District Courts or the High Court of Meghalaya in Shillong. You can seek permanent injunctions, damages, and the seizure of infringing goods by local authorities. For traditional artisans and high-value spice brands, this legal power is the final defense against bad-faith competition that tries to exploit the premium reputation of Meghalaya's products.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Avoid Common Meghalaya Brand Pitfalls</h2>
                                        <p className="mb-6">A common mistake is choosing a brand name that is purely descriptive, such as "Cloud Tea" or "Shillong Honey," which the registry often objects to. We help you create "arbitrary" or "suggestive" names that are both catchy and legally strong. Another pitfall is ignoring "Trade Mark Journal" publications; we provide automated monitoring to ensure no one else tries to register a similar name while your application is pending.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Meghalaya Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest text-[#6E5E93]">Local Trust in the Hills</h2>
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
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-12 rounded-[3rem] text-white">
                                            <h3 className="text-3xl font-black mb-6">Secure Your Meghalaya Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the rising wave of Meghalaya entrepreneurs who have protected their brand in the Abode of Clouds. Get your official TM number today and build a legacy for your business.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Meghalaya IP Expert
                                                </button>
                                            </Link>
                                        </div>
                                    </section>
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Meghalaya IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check your brand availability for the Kolkata Registry. Get a comprehensive legal conflict report within hours.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Meghalaya Search</button>
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
