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
    faPepperHot,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Mizoram | Aizawl & Lunglei - IPR Karo",
    description: "Expert trademark registration in Mizoram. Secure your brand in Aizawl, Lunglei, and Saiha. 100% IP support for Bamboo products, Mizo Chilli, Ginger, and Startups.",
    keywords: [
        "trademark registration in mizoram",
        "online trademark filing aizawl",
        "mizo chilli brand protection",
        "bamboo industry ipr mizoram",
        "mizo ginger branding registration",
        "trademark search mizoram",
        "kolkata trademark registry mizoram jurisdiction",
        "mizoram sustainable investment policy 2024",
        "mizoram msme subsidy on trademark",
        "bird's eye chilli branding mizoram",
        "aizawl startup ip services",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-mizoram",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Mizoram located?", answer: "Mizoram falls under the jurisdiction of the Trade Marks Registry in Kolkata. However, IPR Karo provides a completely digital path. You never need to visit Kolkata; we file, manage, and even represent you in video-conference hearings from our digital desk in Aizawl or Lunglei." },
    { question: "How does the 'Bamboo State' status affect my brand?", answer: "Mizoram covers 30 percent of its land with bamboo. As a bamboo enterprise, your brand name represents the 'Green Gold' of the state. Trademarks allow you to build a premium identity for your furniture, handicrafts, or charcoal, ensuring high-value recognition in national markets." },
    { question: "What is the importance of trademarking 'Mizo Chilli' products?", answer: "Mizo Chilli (Bird's Eye Chilli) has a GI tag. For individual entrepreneurs, a trademark is vital to protect your specific brand name like 'Mizo Heat' or 'Zoram Spice'. This ensures you can command a premium price while the GI tag protects the regional origin." },
    { question: "What are the government fees for MSMEs in Mizoram?", answer: "Mizoram MSMEs with a valid Udyam certificate receive a 50 percent discount on official government fees. Instead of INR 9000, you pay only INR 4500 per class for online filing. This is a significant incentive for local entrepreneurs to formalize their brands." },
    { question: "Can a startup in Aizawl file for a trademark online?", answer: "Yes, and it is the fastest way. Online filing with IPR Karo allows you to obtain your filing number and the right to use the ™ symbol within hours. We ensure all technical requirements of the Kolkata registry are met perfectly." },
    { question: "How long is a trademark valid for Mizoram businesses?", answer: "Once the Registration Certificate (®) is issued, it is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years. IPR Karo manages lifetime renewal tracking for all our Mizoram clients." },
    { question: "Is there any subsidy on patent or trademark filing in Mizoram?", answer: "Under the Mizoram Industrial Policy, there are provisions for reimbursement for quality certifications and patenting. While it primarily covers patents, the state's focus on ease of doing business through MSME incentives often includes reduced costs for statutory registrations." },
    { question: "What documents do I need to start registration today?", answer: "We require basic KYB (Know Your Business) documents: Identity proof of the promoter (PAN/Aadhaar), business address proof, and a clear logo file. For the 50 percent fee waiver, we will need your Udyam Registration certificate." },
    { question: "Are video hearings allowed for Mizoram trademark cases?", answer: "Yes, the Trademark Registry has fully digitized its hearing process. If the registrar issues a show-cause notice, our senior attorneys represent you via Video Conferencing (VC). You do not need to leave Mizoram to win your brand rights." },
    { question: "Why is IPR Karo the best choice for Mizoram entrepreneurs?", answer: "We combine national legal expertise with an understanding of Mizoram's unique focus on sustainable and organic industries. We help you build a brand that reflects the integrity of Mizoram's products while enjoying full legal protection across India." }
];

const reviews = [
    { author: "Lalthantluanga R.", position: "CEO", content: "IPR Karo made the complex trademark process very simple for our bamboo venture. We are now protected from copycats across India. Professional and digital-first service!", rating: 5 },
    { author: "Zoramthari P.", position: "Exporter", content: "Protecting our Mizo Chilli brand was our top priority. The team at IPR Karo handled everything from search to filing flawlessly. Highly recommended for any Mizoram business.", rating: 5 },
    { author: "V. L. Remruata", position: "Entrepreneur", content: "Got our TM number the same day we applied. The MSME fee concession saved us a lot of money. Best IP consultants for the North East!", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Branding the Land of the Mizos" },
    { id: "strategic", title: "Strategic IP Assets" },
    { id: "aizawl-hub", title: "Aizawl: Innovation Capital" },
    { id: "lunglei-industry", title: "Lunglei: Industrial Expansion" },
    { id: "bamboo-gold", title: "Bamboo State: Identity Protection" },
    { id: "mizo-spices", title: "Mizo Chilli & Ginger GI Value" },
    { id: "msip-2024", title: "Sustainable Investment Policy 2024" },
    { id: "msme-subsidies", title: "Interest & Capital Subsidies" },
    { id: "filing-steps", title: "9-Step Digital Journey" },
    { id: "fees", title: "Mizoram Fee Structure" },
    { id: "kolkata-registry", title: "Kolkata Registry Jurisdiction" },
    { id: "legal-remedies", title: "Enforcement in Mizoram" },
    { id: "brand-pitfalls", title: "Common Mizo Brand Pitfalls" },
    { id: "faqs", title: "Mizoram FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function MizoramPage() {
    const averageRating = 4.9;
    const reviewsCount = 118;

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
        "headline": "Trademark Registration in Mizoram: Securing Brand Assets in the Land of the Mizos",
        "description": "Complete guide to trademark registration in Mizoram. Secure your brand in Aizawl, Lunglei, and Saiha with expert support for Bamboo products and Mizo spices.",
        "image": "https://www.iprkaro.com/assets/mizoram-trademark-og.jpg",
        "datePublished": "2024-03-24T09:15:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-mizoram"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Mizoram Trademark Registration",
        "image": "https://www.iprkaro.com/assets/mizoram-trademark-og.jpg",
        "description": "Premium trademark registration services for Mizoram businesses, bamboo exporters, and Aizawl startups.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Mizoram", "item": "https://www.iprkaro.com/trademark-registration-in-mizoram" }
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
                        in <span className="text-[rgb(110,94,147)] bg-clip-text text-transparent bg-gradient-to-r from-[rgb(110,94,147)] to-[#9f8cc4]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Mizoram</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Build your brand in the Land of the Mizos. From the sustainable bamboo industries of Aizawl to the fiery chilli exports of Lunglei, we secure your commercial future with elite IP protection.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Mizoram Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Mizoram", href: "/trademark-registration-in-mizoram" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Mizoram Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mizoram: Branding the Land of the Mizos</h2>
                                        <p className="mb-6">Mizoram, uniquely positioned at the crossroads of Southern Asia, is a land of unparalleled biodiversity and rising industrial ambition. Known as the "Bamboo State" of India, Mizoram is leveraging its vast forest resources, high-quality spices, and educated youth to build a modern, sustainable economy. From the vibrant markets of Aizawl to the expanding industrial clusters of Lunglei, entrepreneurship is the new frontier. In this era of global commerce, trademark registration in Mizoram has become the most critical step for any business aiming to protect its unique identity and build long-term value. Whether you are creating organic bamboo furniture, high-pungency spice products, or innovative tech services, your brand name is your most valuable asset.</p>
                                        <p className="mb-6">At IPR Karo, our mission is to provide world-class brand protection for Mizoram's rising entrepreneurs. While the jurisdictional registry for Mizoram is in Kolkata, we provide a sophisticated 100 percent digital pipeline that brings the highest level of IP expertise directly to your doorstep. We manage the entire lifecycle of your brand identity—from exhaustive availability searches to the final 10-year Registration Certificate. By securing your trademark today, you are not just protecting a logo; you are creating a 'Legal Moat' that wards off copycats and builds an institutional legacy for your business across all states of India.</p>
                                        <p className="mb-6">As the state government implements the ambitious "Mizoram Sustainable Investment Policy 2024", the push for industrial formalization is creating unique opportunities. A registered trademark (®) is the ultimate badge of professional integrity, allowing your Mizo business to command premium prices in national and international markets while preventing misbranding and trademark infringement.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic IP Assets: Why Registration is Mandatory</h2>
                                        <p className="mb-6">A trademark is a legally enforceable monopoly over your brand identifier. For an entrepreneur in Mizoram, it provides the exclusive right to use your brand in connection with your goods or services. In the digital age, your brand name is your reputation. Without registration, your identity remains vulnerable to bad-faith competitors who can dilute your market share by using similar names. Trademark registration (governed by the Trade Marks Act, 1999) grants you the power of "infringement actions", allowing you to seek court-ordered injunctions and financial damages against anyone who tries to piggyback on your hard-earned reputation.</p>
                                        <p className="mb-6">Furthermore, a registered trademark is a depreciable intangible asset. It increases the valuation of your business, can be licensed or franchised to generate royalty income, and can even be used as security for attracting venture capital. For Mizoram's cooperatives and MSMEs, this added valuation is essential for scaling operations beyond state borders and building a brand that stands the test of time.</p>
                                    </section>

                                    <section id="aizawl-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Aizawl: Innovation Capital of Mizoram</h2>
                                        <p className="mb-6">Aizawl, the capital city, is the heartbeat of Mizoram's innovation. As a city with one of the highest literacy rates in India, it is a hub for high-growth sectors like IT, creative services, and specialty food retail. The "Aizawl Smart City" initiative and the growing startup culture have created a need for specialized IP protection. We help technical and creative firms in Aizawl secure their identities in Class 42 (IT) and Class 35 (Services), ensuring that their innovation is protected at a national level. From the pine-sloped cafes to New Capital Complex, our digital filing desk serves the entire capital with unparalleled efficiency.</p>
                                    </section>

                                    <section id="lunglei-industry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Lunglei: The Heart of Industrial Expansion</h2>
                                        <p className="mb-6">Lunglei is rapidly emerging as the secondary economic hub of the state, focusing on manufacturing and agro-processing. With the support of IPR cells in local institutions, Lunglei-based entrepreneurs are becoming increasingly aware of Intellectual Property Rights. For a manufacturing unit in Lunglei, a trademark protects the physical presence of its products in the market. We assist these manufacturers in securing their brand names and logos, turning local production into a nationwide commercial asset.</p>
                                    </section>

                                    <section id="bamboo-gold" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faTree} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Bamboo State: Protecting the Identity of 'Green Gold'</h2>
                                        <p className="mb-6">Mizoram's identity is deeply linked to bamboo, which covers nearly 30 percent of the state's land. The state produces exceptional bamboo-based products, from furniture and flooring to activated charcoal. Under the "Mizoram Bamboo Policy", the government is pushing for higher value-addition. We help bamboo enterprises build premium brands that reflect this value. A registered trademark for your bamboo brand ensures that when customers look for sustainable quality from Mizoram, they find your authentic, protected brand and not a low-grade imitation from a competitor.</p>
                                    </section>

                                    <section id="mizo-spices" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faPepperHot} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mizo Chilli and Ginger: Leveraging GI Protection</h2>
                                        <p className="mb-6">Mizoram is home to the GI-tagged "Mizo Chilli" (Bird’s Eye Chilli) and "Mizo Ginger". While the Geographical Indication protects the regional origin, individual brands must secure their own trademarks (e.g., 'Zoram Spicy Hot' or 'Mizo Gold'). A trademark allows an individual aggregator or exporter to build a direct relationship with the consumer. We specialize in spice branding in Class 30, ensuring your premium Mizo agro-products are legally shielded and command a high-value position in global markets.</p>
                                    </section>

                                    <section id="msip-2024" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mizoram Sustainable Investment Policy 2024</h2>
                                        <p className="mb-6">The "Mizoram Sustainable Investment Policy 2024" is a landmark framework aimed at transforming the state into a high-value, green economy. This policy, aligned with the central government's UNNATI scheme, provides significant incentives:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Interest Subventions</strong>: Significant reductions in borrowing costs for registered industrial units.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Power Subsidies</strong>: Up to 60 percent reimbursement of power charges for micro-enterprises over 5 years.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-[rgb(110,94,147)] mt-1 mr-3 shrink-0" /> <strong>Capital Grants</strong>: Support for land development and project reports within industrial areas.</li>
                                        </ul>
                                        <p className="mb-6">These incentives make it a prime time to formalize your brand. IPR Karo ensures that as you benefit from state subsidies, your brand remains your most protected asset, ready for national expansion.</p>
                                    </section>

                                    <section id="msme-subsidies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME Subsidies: 50% Savings for Mizoram Brands</h2>
                                        <p className="mb-6">MSMEs in Mizoram can benefit from the 50 percent concession on government trademark filing fees provided they have a valid Udyam certificate. This reduces the official fee from INR 9000 to just INR 4500. Additionally, the PMFME scheme provides assistance for common branding and packaging of food units. We help Mizo entrepreneurs maximize these benefits by providing expert filing services that meet all statutory requirements, ensuring their identity is protected with the lowest possible expenditure.</p>
                                    </section>

                                    <section id="filing-steps" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 9-Step Digital Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Exhaustive Brand Search", desc: "We use AI-driven tools to scan the national IP database, identifying any phonetic or visual conflicts before you file." },
                                                { step: 2, title: "Strategic Class Matching", desc: "We guide you in picking from 45 Nice Classification classes to ensure your business activities are fully and legally covered." },
                                                { step: 3, title: "MSME/Startup Validation", desc: "We verify your Udyam or Startup status to secure the 50 percent government fee concession instantly." },
                                                { step: 4, title: "Technical Drafting", desc: "Our attorneys draft your Form TM-A with precise legal descriptions to minimize the risk of registry objections." },
                                                { step: 5, title: "Online Filing (4-Hour Turnaround)", desc: "We file directly through our official portal, giving you the immediate right to use the ™ symbol on your brand." },
                                                { step: 6, title: "Examination Response Service", desc: "We track your application daily. If the registry issues a report, our experts draft a professional technical reply instantly." },
                                                { step: 7, title: "Journal Monitoring", desc: "Your mark is published in the Trademark Journal for a 4-month window; we monitor and defend it against third-party oppositions." },
                                                { step: 8, title: "Representing via Video Hearing", desc: "If the registrar calls for a hearing, our senior attorneys represent you via Video Conferencing—no travel required." },
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Concessions and Fees for Mizoram Brands</h2>
                                        <p className="mb-6">The Trademark Registry offers standardized fees but provides huge concessions for Mizoram's smaller entities to promote local growth:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals, MSMEs, and Startups</strong>: INR 4,500 (Online filing).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Companies and Large Entities</strong>: INR 9,000 (Online filing).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Renewal</strong>: INR 9,000 (Every 10 years).</li>
                                        </ul>
                                        <p className="mb-6">Physical filing at the Kolkata registry incurs a surcharge of INR 500 to 1000. IPR Karo always uses the 100 percent digital route to pass the maximum savings and speed directly to you.</p>
                                    </section>

                                    <section id="kolkata-registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Kolkata Registry: The Hub for Mizoram IP</h2>
                                        <p className="mb-6">All trademark applications from Mizoram are handled by the Kolkata Trade Marks Registry. While the register is physical, the interface is now entirely virtual. Our attorneys have over a decade of experience interacting with the Kolkata Registry, ensuring your application adheres to their specific examination patterns. We handle all registry communications, from responding to show-cause notices to managing video-conferencing hearings, so you never have to leave Mizoram to secure your national brand.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement and Legal Remedies in Aizawl</h2>
                                        <p className="mb-6">A registered trademark grants you the right to sue for "Infringement" in District Courts in Aizawl or the Gauhati High Court (Aizawl Bench). You can seek permanent injunctions to stop competitors, claim damages for loss of reputation, and even request the destruction of counterfeit bamboo or agro-products. For heritage artisans and high-value spice brands, this legal power is the final defense against bad-faith competition that tries to exploit Mizoram's growing prestige.</p>
                                    </section>

                                    <section id="brand-pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Avoid Common Mizo Brand Pitfalls</h2>
                                        <p className="mb-6">A common mistake is choosing a brand name that is purely descriptive, such as "Aizawl Wood" or "Zoram Spices," which the registry often objects to. We help you create "arbitrary" or "coined" names that are both catchy and legally very strong. Another pitfall is ignoring "Trade Mark Journal" publications; we provide automated monitoring to ensure no one else tries to register a similar name while your application is pending in Kolkata.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Mizoram Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest text-[#6E5E93]">Trust in the Hills</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Mizoram Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the rising wave of Mizo entrepreneurs who have protected their brand in the Land of the Mizos. Get your official TM number today and move toward national success.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Mizoram IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Mizoram IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check your brand availability for the Kolkata Registry. Get a comprehensive legal conflict report within hours.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Mizoram Search</button>
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
