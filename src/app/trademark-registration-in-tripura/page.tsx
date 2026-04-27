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
    faSeedling,
    faTree,
    faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Expert TM Registration in Tripura | IPR Karo",
    description: "Expert trademark registration in Tripura. Secure your brand in Agartala and Dharmanagar. 100% IP support for Rubber, Bamboo, Queen Pineapple, and startups.",
    keywords: [
        "trademark registration in tripura",
        "online trademark filing agartala",
        "tripura rubber industry brand protection",
        "queen pineapple ipr tripura",
        "tripura bamboo mission branding",
        "trademark search tripura",
        "kolkata trademark registry tripura jurisdiction",
        "tripura industrial investment promotion incentive 2024",
        "tripura msme subsidy on trademark",
        "matabari pera prasad branding",
        "dharmanagar startup ip services",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-tripura",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Tripura located?", answer: "Tripura falls under the jurisdiction of the Trade Marks Registry in Kolkata. IPR Karo provides a completely digital path, meaning you don't need to visit Kolkata. We file and manage your application from our digital hub in Agartala, ensuring seamless communication with the registry." },
    { question: "How does the rubber industry benefit from trademarks?", answer: "Tripura is India's second largest rubber producer. A trademark allows a local processing unit to build a distinct brand like 'Tripura Flex' or 'Agartala Rubber Co'. This premium branding ensures your products are recognized for their high quality, unlike unbranded commodity rubber." },
    { question: "Can I trademark 'Tripura Queen Pineapple'?", answer: "'Queen Pineapple' has a GI tag. You cannot trademark the name itself for pineapples, but you can trademark your specific product brand like 'Queen's Delight' or 'Tripura Sliced'. This protects your commercial identity while the GI protects the regional origin." },
    { question: "What are the government fees for MSMEs in Tripura?", answer: "MSMEs in Tripura with an Udyam registration get a 50 percent rebate on government fees. For online filing, the official fee is INR 4500 per class instead of INR 9000. This is a significant incentive for local small businesses to formalize their brands." },
    { question: "What documents are needed for registration in Agartala?", answer: "We require basic KYB (Know Your Business) documents: Identity proof of the promoter (Aadhaar/PAN), business address proof, and a digital copy of your logo. If seeking the 50 percent concession, we also need your MSME/Udyam certificate." },
    { question: "Is a trademark valid outside of Tripura?", answer: "Yes, once registered through the Kolkata registry, your trademark is valid across all 28 states and 8 Union Territories of India. This allows your Tripura-born brand to expand safely to markets like Delhi, Mumbai, and Kolkata." },
    { question: "How long is a trademark valid in India?", answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years. IPR Karo manages the entire renewal lifecycle for our clients in Tripura, ensuring your rights never lapse." },
    { question: "Does the state government provide any IP subsidies?", answer: "Under the TIPII (Tripura Industrial Investment Promotion Incentive) scheme, there are provisions for reimbursement for quality certifications and patenting. While it focuses on manufacturing, the MSME fee rebate is a central-level benefit available to all Tripura units." },
    { question: "How do I protect my brand from copycats in Agartala?", answer: "The only foolproof way is obtaining a registration certificate (®). This grants you the legal right to sue for infringement in the District Courts of Tripura or the Gauhati High Court (Agartala Bench) and seek injunctions against the copycats." },
    { question: "Why is IPR Karo the best choice for Tripura businesses?", answer: "We combine national legal expertise with an understanding of Tripura's core industries like rubber and bamboo. Our 100 percent digital pipeline ensures faster filing, fewer objections, and the highest level of IP security for your brand." }
];

const reviews = [
    { author: "Sunil D.", position: "Exporter", content: "IPR Karo helped us secure a unique brand identity for our processed rubber products. The digital filing was quick and the team handled the Kolkata registry flawlessly.", rating: 5 },
    { author: "Animesh B.", position: "Craftsman", content: "Highly professional service! They helped us get the MSME fee discount and our TM number was issued in hours. Best IP firm in Agartala.", rating: 5 },
    { author: "Ratna S.", position: "Founder", content: "Protecting our Queen Pineapple juice brand was essential. IPR Karo provided a transparent search and expert filing. Very satisfied with their support.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Branding the Land of Two Rivers" },
    { id: "strategic", title: "Strategic Value of IP" },
    { id: "agartala-hub", title: "Agartala: The Industrial Core" },
    { id: "dharmanagar-expansion", title: "Dharmanagar: Logistics & More" },
    { id: "rubber-gold", title: "Rubber Industry: Branding Success" },
    { id: "bamboo-mission", title: "Tripura Bamboo Mission & IP" },
    { id: "queen-pineapple", title: "Queen Pineapple & GI Synergy" },
    { id: "tipii-2024", title: "TIPII Incentive Scheme" },
    { id: "msme-rebates", title: "MSME Subsidies in Tripura" },
    { id: "filing-steps", title: "9-Step Digital Journey" },
    { id: "fees", title: "Tripura Fee Structure" },
    { id: "kolkata-registry", title: "Kolkata Registry Jurisdiction" },
    { id: "legal-remedies", title: "Enforcement in Tripura" },
    { id: "brand-pitfalls", title: "Common Tripura Brand Pitfalls" },
    { id: "faqs", title: "Tripura FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function TripuraPage() {
    const averageRating = 4.9;
    const reviewsCount = 112;

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
        "headline": "Trademark Registration in Tripura: Securing Brand Assets in Agartala & Dharmanagar",
        "description": "Complete guide to trademark registration in Tripura. Secure your brand in Agartala and Dharmanagar with expert support for Rubber, Bamboo, and Queen Pineapple industries.",
        "image": "https://www.iprkaro.com/assets/tripura-trademark-og.jpg",
        "datePublished": "2024-03-24T11:45:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-tripura"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Tripura Trademark Registration",
        "image": "https://www.iprkaro.com/assets/tripura-trademark-og.jpg",
        "description": "Premium trademark registration services for Tripura businesses, rubber exporters, and Agartala startups.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Tripura", "item": "https://www.iprkaro.com/trademark-registration-in-tripura" }
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
                        in <span className="text-[rgb(110,94,147)] bg-clip-text text-transparent bg-gradient-to-r from-[rgb(110,94,147)] to-[#9f8cc4]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Tripura</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Excellence in Intellectual Property for the Land of Two Rivers. From Agartala's industrial estates to the rubber plantations of the North, we secure your commercial future.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Tripura Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Tripura", href: "/trademark-registration-in-tripura" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Tripura Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tripura: Branding the Land of Two Rivers</h2>
                                        <p className="mb-6">Tripura, a state of lush green mountains and vibrant tribal heritage, is rapidly positioning itself as a major industrial player in Northeast India. Bordered on three sides by Bangladesh, it serves as a critical trade bridge, leveraging its natural wealth in rubber, bamboo, and horticulture. From the bustling commerce of Agartala to the expanding industrial clusters in Dharmanagar, the state is witnessing a new era of entrepreneurship. In this landscape of rising competition, trademark registration in Tripura has become the single most important step for any business aiming to protect its unique identity and build a sustainable brand legacy.</p>
                                        <p className="mb-6">At IPR Karo, we believe that every brand in Tripura—whether it's an organic tea estate, a rubber processing unit, or a tech startup—deserves the highest level of legal protection. While the official Trade Marks Registry for Tripura is in Kolkata, we provide a sophisticated 100 percent digital pipeline that brings elite IP expertise directly to Agartala. We manage the entire lifecycle of your brand identity, starting from exhaustive availability searches to the final delivery of your 10-year Registration Certificate (®). By securing your trademark today, you are creating a 'Legal Moat' that wards off imitators and builds an institutional quality that is recognized across India.</p>
                                        <p className="mb-6">As the state government implements the "Tripura Industrial Investment Promotion Incentive (TIPII) Scheme," the push for industrial formalization is opening new global markets. A registered trademark is more than just a legal requirement; it is your most valuable commercial asset, allowing you to command premium prices and secure your position in the national economy while preventing the dilution of your hard-earned reputation.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Value: Why Your Brand Needs a Monopoly</h2>
                                        <p className="mb-6">A trademark is a legally enforceable monopoly over your brand identifier. Under the Trade Marks Act, 1999, registration gives you the exclusive right to use your brand name, logo, or slogan for your specific goods and services. For an entrepreneur in Tripura, this translates to the power to exclude any competitor from using a deceptively similar name. It provides the statutory basis for "Infringement Actions," allowing you to obtain court-ordered injunctions and claim financial damages from anyone trying to hijack your reputation.</p>
                                        <p className="mb-6">Moreover, a registered trademark is a depreciable intangible asset. It significantly increases the valuation of your business, can be licensed or franchised to generate royalty income, and can even be used as collateral for attracting venture capital. For Tripura's MSMEs, this added valuation is essential for scaling beyond state borders and building a brand that stands the test of time and market shifts.</p>
                                    </section>

                                    <section id="agartala-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Agartala: The Industrial Core of the Frontier</h2>
                                        <p className="mb-6">Agartala, the capital city, is the heartbeat of Tripura's commercial life. With dedicated industrial estates and a rising focus on IT and service sectors, Agartala is home to some of the state's most ambitious startups. As the city integrates into the global digital economy, the need for professional IP protection is paramount. We help Agartala-based firms secure their identities in Class 42 (IT), Class 35 (Services), and Class 30 (Food Products). From the Bodhjungnagar Industrial Estate to the Battala market, our digital filing pipeline ensures that Agartala's business elite can protect their brand rights without the need to travel to the Kolkata registry.</p>
                                    </section>

                                    <section id="dharmanagar-expansion" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBoxOpen} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Dharmanagar: Logistics and Cross-Border Commerce</h2>
                                        <p className="mb-6">Dharmanagar, as the state's logistics and transport gateway, is seeing a surge in warehousing, distribution, and manufacturing ventures. For an enterprise in Dharmanagar, a trademark protects the physical presence of its goods across the entire Northeast. We provide specialized IPR services to Dharmanagar's rising entrepreneurs, ensuring that their manufacturing and logistics brands are legally shielded from Day 1, giving them the confidence to trade on a national scale.</p>
                                    </section>

                                    <section id="rubber-gold" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faTree} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Rubber Industry: Branding the 'Second Largest' Success</h2>
                                        <p className="mb-6">Tripura is India's second largest producer of natural rubber, and the rubber wood processing sector is a high-growth thrust area. While rubber is often sold as a commodity, the transition to high-value branding is critical. We help rubber processing units in Tripura build premium brands for their sheets, wood furniture, and finished goods. A registered trademark ensures that your specific brand of high-quality Tripura rubber is protected from inferior substitutes, allowing you to build a reputation for quality that commands a premium in national markets.</p>
                                    </section>

                                    <section id="bamboo-mission" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faSeedling} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tripura Bamboo Mission and Identity Protection</h2>
                                        <p className="mb-6">The "Tripura Bamboo Mission" (TBM) has revolutionized the state's traditional craft, turning it into a modern industrial sector. From bamboo flooring to incense sticks (Agarbatti) and artisanal decor, Tripura's bamboo products are exported globally. For an entrepreneur in this sector, a trademark protects your design identity. We specialize in bamboo branding in Class 20 (Furniture) and Class 3 (Incense sticks), ensuring your unique artisanal brand is legally shielded and ready for global e-commerce.</p>
                                    </section>

                                    <section id="queen-pineapple" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Queen Pineapple: Leveraging GI Synergy</h2>
                                        <p className="mb-6">Tripura's "Queen Pineapple" is world-renowned and holds a Geographical Indication (GI) tag. While the GI tag protects the regional origin, individual food processors and juice brands must secure their own trademarks (e.g., 'Zoram Gold' or 'Queen's Nectar'). A trademark allows an individual aggregator to build a direct relationship with the consumer. We specialize in beverage and food branding (Class 32 and Class 30), ensuring your premium Tripura agro-products are legally shielded and command a high-value position in luxury food markets.</p>
                                    </section>

                                    <section id="tipii-2024" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tripura Industrial Investment Promotion Incentive (TIPII)</h2>
                                        <p className="mb-6">The "Tripura Industrial Investment Promotion Incentive (TIPII) Scheme" is a landmark framework aimed at transforming the state into a manufacturing hub. The policy provides significant incentives that prioritize brand formalization:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Capital Investment Subsidy</strong>: Up to 30 percent subsidy on fixed capital for established units.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Thrust Sector Benefits</strong>: Enhanced incentives for rubber, bamboo, tea, and agro-processing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Quality Certification</strong>: Provision for reimbursement for obtaining ISO and IP certifications.</li>
                                        </ul>
                                        <p className="mb-6">These incentives make it a prime time to formalize your brand. IPR Karo ensures that as you benefit from state-level grants, your brand identity remains your most protected asset, ready for national competition.</p>
                                    </section>

                                    <section id="msme-rebates" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME Rebates: 50% Savings for Tripura Brands</h2>
                                        <p className="mb-6">MSMEs in Tripura can benefit from the 50 percent concession on government trademark filing fees provided they have a valid Udyam certificate. This reduces the official fee from INR 9000 to just INR 4500. Additionally, startups recognized by DPIIT also enjoy this concession. We help Tripura entrepreneurs maximize these benefits by providing professional filing services that meet all statutory requirements, ensuring their identity is protected with the lowest possible capital expenditure.</p>
                                    </section>

                                    <section id="filing-steps" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 9-Step Digital Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Exhaustive Brand Search", desc: "We scan the national database using AI to ensure your brand name doesn't conflict with existing marks, preventing future registry objections." },
                                                { step: 2, title: "Strategic Class Finder", desc: "We guide you in picking from 45 Nice Classification classes to ensure your business activities are fully and legally covered." },
                                                { step: 3, title: "MSME/Startup Validation", desc: "We verify your Udyam status to secure the 50 percent government fee concession instantly for your brand." },
                                                { step: 4, title: "Technical Drafting", desc: "Our attorneys draft your Form TM-A with precise legal descriptions to minimize the risk of registry office objections." },
                                                { step: 5, title: "Online Filing (Same Day)", desc: "We file directly through our official portal, giving you the immediate right to use the ™ symbol on your products." },
                                                { step: 6, title: "Examination Monitoring", desc: "We track your application daily. If the registry issues an examination report, our experts draft a professional technical reply instantly." },
                                                { step: 7, title: "Journal Publication Watch", desc: "Your mark is published in the Trademark Journal for 4 months; we monitor it and defend against any third-party oppositions." },
                                                { step: 8, title: "Video Hearings Representation", desc: "If the registrar calls for a hearing, our senior attorneys represent you via Video Conferencing—no travel to Kolkata required." },
                                                { step: 9, title: "Registration Certificate (®)", desc: "We deliver your official 10-year Registration Certificate digitally, establishing your final nationwide brand monopoly." }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4><p>{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Concessions and Fees for Tripura Brands</h2>
                                        <p className="mb-6">The Trademark Registry offers standardized fees but provide substantial concessions for Tripura's small entities to promote regional growth:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals, MSMEs, and Startups</strong>: INR 4,500 (Online filing).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Companies and Partnerships</strong>: INR 9,000 (Online filing).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Renewal Fee</strong>: INR 9,000 (Valid for another 10 years).</li>
                                        </ul>
                                        <p className="mb-6">Note: Physical filing in Kolkata is subject to a 10 percent surcharge. IPR Karo always uses a 100 percent digital path to pass the maximum savings and speed directly to your Tripura business.</p>
                                    </section>

                                    <section id="kolkata-registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Kolkata Registry: The Gateway for Tripura IP</h2>
                                        <p className="mb-6">All trademark applications from Tripura are handled by the Kolkata Trade Marks Registry branch. While the jurisdiction is physical, the interface is now entirely virtual. Our attorneys have over a decade of experience interacting with the Kolkata Registry, ensuring your application adheres to their specific examination patterns. We handle all registry communications, from responding to show-cause notices to managing video-conferencing hearings, so you never have to leave Agartala to secure your national brand.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement and Legal Remedies in Agartala</h2>
                                        <p className="mb-6">A registered trademark grants you the right to sue for "Infringement" in the District Courts of Tripura or the Gauhati High Court (Agartala Bench). You can seek permanent injunctions to stop competitors, claim damages for loss of profits, and even request the destruction of counterfeit rubber or agro-products. In a state where local trust is everything, this legal power is the final defense for your commercial integrity.</p>
                                    </section>

                                    <section id="brand-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Avoid Common Tripura Brand Pitfalls</h2>
                                        <p className="mb-6">Many businesses make the mistake of choosing purely geographic names like "Tripura Wood" or "Agartala Sweets," which the registry often objects to as descriptive. We help you create "arbitrary" or "coined" names that are legally very strong. Another pitfall is ignoring the "Trademark Journal" publications; we provide automated monitoring to ensure no competitor registers a similar name while your application is pending in Kolkata.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Tripura Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest text-[#6E5E93]">Trust from the Hills</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Tripura Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the rising wave of Tripura entrepreneurs who have protected their brand in the Land of Two Rivers. Get your official TM number today and move toward national success.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Tripura IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Tripura IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check your brand availability for the Kolkata Registry. Get a comprehensive legal conflict report within hours.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Tripura Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91 928 970 7648
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
