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
    faMountain,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Expert TM Registration in Arunachal Pradesh | IPR Karo",
    description: "Expert trademark registration in Arunachal Pradesh. Secure your brand in Itanagar, Pasighat, and Tawang. 100% IP support for Organic products, Idu Mishmi textiles, and Startups.",
    keywords: [
        "trademark registration in arunachal pradesh",
        "online trademark filing itanagar",
        "arunachal orange brand protection",
        "idu mishmi textiles ipr arunachal",
        "wakro orange branding registration",
        "trademark search arunachal pradesh",
        "kolkata trademark registry arunachal jurisdiction",
        "arunachal pradesh industrial policy 2025",
        "arunachal msme subsidy on trademark",
        "organic kiwi branding arunachal",
        "pasighat startup ip services",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-arunachal-pradesh",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Arunachal Pradesh located?", answer: "Arunachal Pradesh falls under the jurisdiction of the Trade Marks Registry in Kolkata. However, IPR Karo provides a 100 percent digital path. You don't need to visit Kolkata; we handle all filings, responses, and even video-conference hearings from our digital desk in Itanagar or Pasighat." },
    { question: "Can I use the 'Organic by Default' status as a trademark?", answer: "While 'Organic' is a descriptive term that cannot be trademarked alone, you can trademark a unique brand name for your organic products, such as 'Ziro Valley Greens' or 'Tawang Pure'. This creates a distinct commercial identity that is legally protected." },
    { question: "What is the importance of trademarking Arunachal textiles?", answer: "Arunachal textiles like Idu Mishmi have a GI tag. For individual weavers and cooperatives, a trademark is vital to protect your specific brand name or logo. This ensures that while the GI protects the region, your trademark protects your specific business quality and reputation." },
    { question: "What are the government fees for startups in Arunachal?", answer: "Startups in Arunachal Pradesh with a DPIIT recognition certificate receive a 50 percent discount on government fees. For online filing, the fee is reduced from INR 9000 to INR 4500 per class, making brand protection extremely affordable for new ventures." },
    { question: "How long does it take to get the ™ symbol in Itanagar?", answer: "With IPR Karo's expedited digital filing, you can receive your application number and the right to use the ™ symbol within 24 hours of document submission. This immediate protection is crucial for launching your brand in Itanagar's growing markets." },
    { question: "Is a trademark valid across all of India?", answer: "Yes, once registered through the Kolkata registry, your trademark is valid across all states and Union Territories of India, including major markets like Delhi, Mumbai, and Bengaluru. This allows your Arunachal brand to scale nationally with full legal security." },
    { question: "Do I need a GST registration for a trademark in Arunachal?", answer: "GST is not mandatory for trademark filing. You can file as an individual proprietor using your PAN and Aadhaar. However, for a 50 percent fee waiver as an MSME, an Udyam registration (which may require GST) is beneficial." },
    { question: "How does the Arunachal Industrial Policy 2025 help in IP?", answer: "The 2025 policy focuses on fostering local entrepreneurship. While it provides various capital and interest subsidies, the move toward formalization makes trademarking a prerequisite for many state-level incentives and for building a bankable business asset." },
    { question: "Can I file a trademark for a tourism venture in Tawang?", answer: "Absolutely. Tourism brands in Class 39 (Travel) and Class 43 (Hospitality) are highly valuable. Trademarking your homestay or adventure tour brand name prevents others from using your reputation to divert customers." },
    { question: "What happen if someone mimics my brand in Pasighat?", answer: "If you have a registered trademark (®), you can file an infringement suit in the District Court or the Gauhati High Court (Itanagar Bench). You can obtain injunctions to stop them and claim financial compensation for the damage to your brand." }
];

const reviews = [
    { author: "Tage T.", position: "Farmer", content: "IPR Karo helped us protect our specific brand of organic kiwis. The process was digital and very fast. We are now selling across India with confidence!", rating: 5 },
    { author: "Dawa L.", position: "Operator", content: "Our boutique homestay brand is now legally secured. The team handled the Kolkata registry technicalities perfectly. Best service for NE startups.", rating: 5 },
    { author: "Mimi N.", position: "Designer", content: "Secured our unique logo for handloom designs. The MSME fee concession saved us money. Highly professional attorneys!", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Branding the Land of the Dawn-Lit Mountains" },
    { id: "strategic", title: "Strategic Value of IP" },
    { id: "itanagar-hub", title: "Itanagar: The Economic Heart" },
    { id: "pasighat-innovation", title: "Pasighat: The Educational Hub" },
    { id: "organic-default", title: "Organic by Default: The Brand Moat" },
    { id: "textile-protection", title: "GI Textiles and Tribal Branding" },
    { id: "policy-2025", title: "Industrial Policy 2025 & IP" },
    { id: "ddusy", title: "DDUSY and MSME Subsidies" },
    { id: "filing-steps", title: "9-Step Digital Journey" },
    { id: "fees", title: "Arunachal Fee Structure" },
    { id: "kolkata-registry", title: "Kolkata Registry Jurisdiction" },
    { id: "legal-remedies", title: "Enforcement in Arunachal" },
    { id: "brand-mistakes", title: "Common Arunachal Brand Pitfalls" },
    { id: "faqs", title: "Arunachal FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function ArunachalPage() {
    const averageRating = 4.9;
    const reviewsCount = 104;

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
        "headline": "Trademark Registration in Arunachal Pradesh: Securing Brand Assets in the Land of Dawn",
        "description": "Complete guide to trademark registration in Arunachal Pradesh. Secure your brand in Itanagar, Pasighat, and Tawang with expert support for organic products and textiles.",
        "image": "https://www.iprkaro.com/assets/arunachal-trademark-og.jpg",
        "datePublished": "2024-03-24T10:30:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/trademark-registration-in-arunachal-pradesh"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Arunachal Pradesh Trademark Registration",
        "image": "https://www.iprkaro.com/assets/arunachal-trademark-og.jpg",
        "description": "Premium trademark registration services for Arunachal Pradesh businesses, organic exporters, and Itanagar startups.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Arunachal Pradesh", "item": "https://www.iprkaro.com/trademark-registration-in-arunachal-pradesh" }
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Arunachal Pradesh</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Leading the Brand Revolution in the Land of the Dawn-Lit Mountains. Secure your identity from the Ziro organic kiwis to the Tawang tourism hubs with elite IP protection.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Arunachal Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Arunachal Pradesh", href: "/trademark-registration-in-arunachal-pradesh" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Arunachal Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Arunachal Pradesh: Branding the Land of Dawn</h2>
                                        <p className="mb-6">Arunachal Pradesh, the "Land of the Dawn-Lit Mountains", is undergoing a profound economic transformation. As India's gateway to the east and a global biodiversity hotspot, the state is transitioning from traditional agriculture to a high-value, sustainable economy. From the organic kiwi orchards of Ziro to the burgeoning startup ecosystem in Itanagar, local entrepreneurs are building products that represent the purity and integrity of the Himalayas. In this competitive national market, trademark registration in Arunachal Pradesh is no longer optional-it is the foundational step for any business aiming to scale and protect its commercial reputation.</p>
                                        <p className="mb-6">At IPR Karo, we understand that an Arunachal brand name is an asset rooted in trust and natural heritage. While the jurisdictional Trade Marks Registry is located in Kolkata, we provide a sophisticated 100 percent digital gateway that brings elite IP legal expertise directly to Itanagar, Pasighat, and even the remotest parts of the state. We manage the entire lifecycle of your brand identity-from exhaustive availability searches to the final Registration Certificate (®). By securing your trademark today, you are creating a 'Legal Moat' that prevents imitation and Dilution, ensuring your business legacy remains uniquely yours across all states of India.</p>
                                        <p className="mb-6">With the enforcement of the "Arunachal Pradesh Industrial Development and Investment Policy 2025", the state is prioritizing self-employment and local branding. A registered trademark is your most powerful tool to leverage these incentives, allowing your Mizo or Arunachali business to command premium prices while securing exclusive rights to your commercial identifiers.</p>
                                    </section>
                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Value: Why Your Brand Needs a Trademark</h2>
                                        <p className="mb-6">A trademark is more than just a logo; it is a legally enforceable property right. Under the Trade Marks Act, 1999, registration grants you the exclusive right to use your brand name, logo, or slogan in connection with your specific goods or services. For an entrepreneur in Arunachal, this means you can legally stop any competitor from using a deceptively similar name that might confuse your customers. It provides the statutory power to file "Infringement Actions," allowing you to seek court-ordered injunctions and financial damages against bad-faith actors.</p>
                                        <p className="mb-6">Furthermore, a registered trademark is a depreciable intangible asset that increases the valuation of your company. It can be licensed, franchised, or even used as security for obtaining business loans. For the state's rising MSMEs, this added brand valuation is essential for attracting national investors and building a bankable reputation that survives the test of time.</p>
                                    </section>

                                    <section id="itanagar-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Itanagar: The Economic Heart of the Frontier</h2>
                                        <p className="mb-6">Itanagar, the capital city, is the primary hub for administrative and commercial activity in Arunachal Pradesh. It has seen a surge in tech startups, boutique retail, and hospitality ventures. As the city grows, the need for professional branding is paramount. We help Itanagar-based firms secure their identities in Class 42 (IT), Class 35 (Services), and Class 43 (Hospitality). From the Ganga Market to the Civil Secretariat, our digital filing pipeline ensures that Itanagar's business elite can protect their brand rights without the need to travel to the Kolkata registry.</p>
                                    </section>

                                    <section id="pasighat-innovation" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLightbulb} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Pasighat: Innovation and Educational Excellence</h2>
                                        <p className="mb-6">Pasighat, the oldest town in the state, is rapidly evolving into an educational and innovation center with institutions like the College of Horticulture and Forestry. This academic growth is fueling a new wave of agro-startups and research-driven ventures. For an entrepreneur in Pasighat, a trademark converts your innovation into a recognizable market brand. We provide specialized IPR services to Pasighat's rising ventures, ensuring their unique logos and product names are legally shielded from Day 1.</p>
                                    </section>

                                    <section id="organic-default" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Organic by Default: Building an Unshakeable Brand Moat</h2>
                                        <p className="mb-6">Arunachal Pradesh is "organic by default," with over 80 percent of its agriculture historically free of synthetic chemicals. This status is a massive commercial advantage. However, "Organic" is a descriptive term that everyone can use. To truly profit, you must build a unique brand name-like "Wakro Gold" or "Ziro Pure"-around your organic products. A registered trademark ensures that only you can use your specific name for kiwis, oranges, or ginger, allowing you to command a premium price in markets like Mumbai and Bengaluru where purity is highly valued.</p>
                                    </section>

                                    <section id="textile-protection" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />GI Textiles and Tribal Branding Architecture</h2>
                                        <p className="mb-6">Arunachal's handloom sector is world-renowned, with GI-tagged products like Idu Mishmi Textiles. While the GI tag protects the regional tradition, individual cooperatives and designers need trademarks to protect their specific brand identities. We help Arunachal's craftspersons build distinct brand logos (Class 24 and Class 25), turning ancient weaving traditions into modern, legally protected fashion and decor brands that can be sold on global e-commerce platforms with full IP security.</p>
                                    </section>

                                    <section id="policy-2025" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Arunachal Pradesh Industrial Policy 2025</h2>
                                        <p className="mb-6">The "Arunachal Pradesh Industrial Development and Investment Policy 2025" is a visionary document designed to attract investment and foster local entrepreneurship while maintaining ecological balance. Key features that synergize with IP protection include:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Thrust Sector Focus</strong>: Extra incentives for textiles, food processing, and tourism.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Local Entrepreneurship</strong>: Specific grants for self-employment through industrialization.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Sustainability Grants</strong>: Reimbursement for green energy and ecological certifications.</li>
                                        </ul>
                                        <p className="mb-6">As you formalize your industry under this policy, registering your trademark is the most essential step to ensure your business identity is "Investment Ready" and protected under the law.</p>
                                    </section>

                                    <section id="ddusy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />DDUSY and MSME Subsidies for Brand Building</h2>
                                        <p className="mb-6">The "Deen Dayal Upadhyaya Swavalamban Yojana" (DDUSY) provides a 40 percent capital subsidy for projects up to INR 50 lakh. Combined with the 50 percent government fee rebate for MSMEs on trademark filing, the cost of building a legally secure brand in Arunachal is lower than ever. We help local MSMEs obtain their Udyam registration to claim these fee waivers, reducing the government trademark filing fee from INR 9000 to just INR 4500 per class.</p>
                                    </section>

                                    <section id="filing-steps" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 9-Step Digital Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Exhaustive Conflict Search", desc: "We scan the national database using AI to ensure your brand name doesn't conflict with existing marks, preventing future legal issues." },
                                                { step: 2, title: "Strategic Class Identification", desc: "We guide you in selecting the correct classes from the 45-class Nice Classification to ensure your business activities are fully covered." },
                                                { step: 3, title: "MSME/Startup Validation", desc: "We verify your Udyam or DPIIT startup certificate to instantly secure the 50 percent government fee concession for your filing." },
                                                { step: 4, title: "Precision Legal Drafting", desc: "Our attorneys draft your Form TM-A with precise descriptions of goods and services to minimize the risk of registry objections." },
                                                { step: 5, title: "Online Filing (Same Day)", desc: "We file directly through our official portal, granting you the immediate right to use the ™ symbol on your brand identity." },
                                                { step: 6, title: "Proactive Examination Tracking", desc: "We monitor your application daily. If the registry issues an examination report, our experts draft a professional technical reply immediately." },
                                                { step: 7, title: "Trademark Journal Monitoring", desc: "We track your brand's publication in the Trademark Journal during the 4-month opposition window, defending it against any rivals." },
                                                { step: 8, title: "Video-Conferencing Representation", desc: "If the registrar calls for a hearing, our senior attorneys represent you via Video-Conferencing (VC). You never have to leave Arunachal." },
                                                { step: 9, title: "Digital Delivery of (®) Certificate", desc: "We deliver your official 10-year Registration Certificate digitally, establishing your final nationwide brand monopoly." }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4><p>{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Arunachal Fee Structure and Concessions</h2>
                                        <p className="mb-6">The Trademark Registry provides significant concessions to promote entrepreneurship in the North East:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals, MSMEs, and Startups</strong>: INR 4,500 (Online).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Companies and Large Entities</strong>: INR 9,000 (Online).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Registered Trademark Renewal</strong>: INR 9,000 (Valid for 10 years).</li>
                                        </ul>
                                        <p className="mb-6">Note: Physical filing in Kolkata is discouraged as it attracts a 10 percent surcharge. IPR Karo uses a 100 percent digital path to pass the savings and speed directly to your Arunachal business.</p>
                                    </section>

                                    <section id="kolkata-registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Kolkata Registry: The Hub for Arunachal IP</h2>
                                        <p className="mb-6">The Trade Marks Registry in Kolkata handles all IP affairs for Arunachal Pradesh. While the jurisdiction is physical, the interface is now entirely virtual. Our attorneys have over a decade of experience navigating the Kolkata Registry's specific examination protocols. We manage all registry communications, from drafting complex technical replies to managing Show-Cause hearings, so your focus remains on growing your business in the hills.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Legal Enforcement in Arunachal Pradesh</h2>
                                        <p className="mb-6">A registered trademark grants you the right to sue for "Infringement" in the District Courts or the Gauhati High Court (Itanagar Permanent Bench). You can seek immediate permanent or temporary injunctions to stop others from using your brand, claim damages for business loss, and even request the seizure of counterfeit goods. In a state where local reputation is everything, this legal shield is the ultimate defense for your commercial integrity.</p>
                                    </section>

                                    <section id="brand-mistakes" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Avoid Common Arunachal Brand Pitfalls</h2>
                                        <p className="mb-6">Many businesses make the mistake of choosing purely geographic names like "Itanagar Wood" or "Arunachal Spices," which the registry often objects to as descriptive. We help you create "arbitrary" or "inventive" names that are legally strong. Another pitfall is ignoring the "Trademark Journal" publications; we provide automated monitoring to ensure no competitor registers a similar name while your application is in the 4-month cooling period.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Arunachal Pradesh Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest text-gray-900">Client Success Stories</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Arunachal Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the rising wave of Arunachal entrepreneurs who have protected their brand in the Land of Dawn. Get your official TM number today and move toward national success.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Arunachal IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Arunachal IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check your brand availability for the Kolkata Registry. Get a comprehensive legal conflict report within hours.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Arunachal Search</button>
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
