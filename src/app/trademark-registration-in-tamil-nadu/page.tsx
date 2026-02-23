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
    faIndustry,
    faSearch,
    faMapMarkerAlt,
    faGavel,
    faGlobe,
    faChartLine,
    faScaleBalanced,
    faAward,
    faLightbulb,
    faScrewdriverWrench,
    faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Tamil Nadu | Chennai & Coimbatore - IPR Karo",
    description: "Expert trademark registration in Tamil Nadu. Secure your brand in Chennai, Coimbatore, Madurai, and Tiruppur. 100% IP support for MSMEs and startups in TN.",
    keywords: [
        "trademark registration in tamil nadu",
        "online trademark filing chennai",
        "tiruppur textile brand registration",
        "coimbatore manufacturing trademark",
        "madurai startup ipr",
        "trademark search tamil nadu",
        "chennai trademark registry",
        "brand protection erode",
        "tamil nadu industrial policy ipr",
        "hosur automotive trademark",
        "salem steel brand registration",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-tamil-nadu",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Tamil Nadu located?", answer: "The Trademark Registry for Tamil Nadu is the Chennai Intellectual Property Office, located in Guindy, Chennai. This regional office has jurisdiction over the entire state, handles all physical filings if necessary, and conducts hearings. However, IPR Karo files your applications 100 percent digitally, ensuring you don't need to visit the office in person." },
    { question: "How quickly can I get my trademark application number in Chennai?", answer: "With IPR Karo's specialized digital filing system, we typically secure your application number within 4 to 6 working hours of receiving your documents. Once we have the number, you can immediately start using the ™ symbol with your brand name in Chennai or anywhere in India." },
    { question: "What are the benefits for MSMEs in Tamil Nadu?", answer: "Tamil Nadu has a very strong MSME support framework. Under the state industrial policy and central schemes, MSMEs pay only 50 percent of the government filing fee (INR 4500 instead of INR 9000). Additionally, there are various state subsidies launched in 2025 that offer reimbursements for IP protection costs to registered industrial units." },
    { question: "Is a registered trademark valid only within Tamil Nadu?", answer: "No, a trademark registered through the Chennai office is legally valid across all 28 states and 8 union territories of India. It provides you with a national monopoly, preventing anyone from Kashmir to Kanyakumari from using a deceptively similar name for their business." },
    { question: "Can I trademark a name that is common in the textile industry?", answer: "You cannot trademark generic terms like 'Cotton' or 'Clothing'. However, you can trademark a unique brand name or logo under which you sell those clothes. In hubs like Tiruppur and Erode, building a unique brand is essential to distinguish your quality from generic competitors." },
    { question: "How long is the trademark registration valid?", answer: "A registered trademark is valid for 10 years from the date of the original application. After 10 years, it can be renewed indefinitely every decade. We provide automated renewal alerts to our Tamil Nadu clients to ensure their brand legacy is never lost due to administrative lapses." },
    { question: "What if my trademark is opposed by a competitor?", answer: "If a third party files an opposition during the 4-month journal publication window, we help you file a counter-statement and defend your brand in the Chennai Registry hearings. Our attorneys are experts in navigating the legal complexities of the TM-O form and opposition proceedings." },
    { question: "Do I need a GST registration for filing a trademark in Madurai?", answer: "While GST registration is not a mandatory requirement for filing as an individual, it is highly recommended if you are filing as a business entity. For MSME fee concessions, a valid Udyam Registration certificate is required, which usually requires a GST or Aadhaar linkage." },
    { question: "What documents are required for an individual in Coimbatore?", answer: "For individual applicants, we only need basic identity proof (Aadhaar or PAN) and proof of the address where the business will operate. If the trademark is already in use, we will ask for a User Affidavit supported by old invoices to establish your 'Prior User' rights." },
    { question: "Why should Chennai entrepreneurs choose IPR Karo?", answer: "We combine local regional knowledge of the Chennai registry with high-speed legal technology. Our process is 100 percent paperless, transparent, and focused on securing your brand in the shortest possible time. We ensure that Tamil Nadu's innovators have the same level of legal infrastructure as global tech companies." }
];

const reviews = [
    { author: "Karthik R.", position: "Founder", content: "IPR Karo handled our software brand filing flawlessly. We got our TM number on the same day. Their understanding of the Chennai registry's workflow is impressive.", rating: 5 },
    { author: "Meenakshi S.", position: "Exporter", content: "Exceptional service for our clothing brand. They managed the complex Class 25 filing with ease and helped us clear a minor objection within weeks. Highly reliable.", rating: 5 },
    { author: "Senthil K.", position: "Retailer", content: "Very professional and transparent. They explained the entire process clearly and delivered our registration certificate without any hassle. The best choice for TN businesses.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Powerhouse" },
    { id: "strategic", title: "Strategic Asset" },
    { id: "chennai-registry", title: "Chennai IP Registry" },
    { id: "coimbatore-manufacturing", title: "Coimbatore Industry" },
    { id: "tiruppur-textile", title: "Tiruppur Textiles" },
    { id: "madurai-heritage", title: "Madurai Commerce" },
    { id: "hosur-auto", title: "Hosur Automotive Hub" },
    { id: "salem-steel", title: "Salem and Erode" },
    { id: "startup-benefits", title: "Government Incentives" },
    { id: "journey", title: "8-Step Journey" },
    { id: "fees", title: "Fee Concessions" },
    { id: "legal-remedies", title: "Enforcement in TN" },
    { id: "global", title: "International Reach" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "faqs", title: "Tamil Nadu FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function TamilNaduPage() {
    const averageRating = 4.9;
    const reviewsCount = 215;

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
        "headline": "Trademark Registration in Tamil Nadu: Securing the Brand of the Manufacturing Giant",
        "description": "Comprehensive guide to trademark registration in Tamil Nadu. Protect your brand in Chennai, Coimbatore, and Tiruppur with expert IPR services.",
        "image": "https://www.iprkaro.com/assets/tamil-nadu-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-tamil-nadu"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Tamil Nadu Trademark Registration",
        "image": "https://www.iprkaro.com/assets/tamil-nadu-trademark-og.jpg",
        "description": "Premium trademark registration services for Tamil Nadu businesses.",
        "brand": { "@type": "Brand", "name": "IPR Karo" },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toString(),
            "reviewCount": reviewsCount.toString()
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.author },
            "reviewBody": r.content,
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Tamil Nadu", "item": "https://www.iprkaro.com/trademark-registration-in-tamil-nadu" }
        ]
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Service",
            "name": "Trademark Registration Tamil Nadu"
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
        },
        "author": {
            "@type": "Person",
            "name": "Karthik R."
        },
        "reviewBody": "IPR Karo handled our software brand filing flawlessly. We got our TM number on the same day. Their understanding of the Chennai registry workflow is truly world-class."
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Tamil Nadu</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Secure the identity of the Industrial Powerhouse. From Chennai's tech corridors to the textile giants of Tiruppur, we provide elite brand protection at the Chennai Registry with zero delays.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Tamil Nadu Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Tamil Nadu", href: "/trademark-registration-in-tamil-nadu" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">TN Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tamil Nadu: The Manufacturing Behemoth and Innovation Hub</h2>
                                        <p className="mb-6">Tamil Nadu, often referred to as the "Detroit of Asia" and a global leader in textiles and electronics, stands as one of India’s most economically diversified and resilient states. With a GDP that consistently ranks among the top in the country, the state has built a formidable reputation as a global manufacturing giant. However, in today’s hyper-competitive marketplace, physical infrastructure alone is not enough. The true value of a business now lies in its intellectual property. Trademark registration in Tamil Nadu has become the primary defensive and offensive tool for entrepreneurs seeking to dominate their industries. Whether you are an MSME in Coimbatore or a software unicorn in the OMR tech corridor of Chennai, your brand identity is your most critical legal asset.</p>
                                        <p className="mb-6">At IPR Karo, we understand the specific industrial DNA of Tamil Nadu. We know that a brand from this state carries the weight of reliability, engineering excellence, and centuries-old tradition. Our expert intellectual property services are designed to help you navigate the complexities of the IP India system with precision and speed. We bridge the gap between regional innovation and national legal protection, ensuring your mark is secured at any cost. By registering your trademark, you provide your business with a national monopoly, ensuring that your hard-earned reputation is shielded from counterfeiters and generic imitators across all 28 states and 8 union territories.</p>
                                        <p className="mb-6">The concept of a "Brand" in Tamil Nadu spans from the traditional handlooms of Kanchipuram to the cutting-edge aerospace components made in Hosur. Every successful business needs a unique signature. A registered trademark is that signature, a badge of authenticity that allows customers to identify your superior products and services instantly. It is the foundation of customer loyalty and the primary driver of long-term business valuation. As the state moves toward its goal of becoming a 1 trillion dollar economy by 2030, the role of Intellectual Property as a value multiplier cannot be overstated. Businesses that secure their IP early will be the ones that dominate the upcoming decade of growth in South India.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Importance of Brand Protection</h2>
                                        <p className="mb-6">For a Tamil Nadu-based enterprise, a trademark (®) is the most valuable intangible asset on the balance sheet. It provides exclusive legal rights over your business name, logo, or slogan. In industries like textiles, where designs are frequently copied, a registered trademark is your only robust defense against brand dilution. When you register your mark, you are essentially purchasing a "Legal Insurance Policy" for your business's future.</p>
                                        <p className="mb-6">Without registration, your brand remains vulnerable to "Passing Off" and unauthorized use. Proving ownership in such cases is difficult, expensive, and time-consuming. However, with a registration certificate issued by the Chennai Registry, the legal burden shifts. You gain the power to stop infringers almost immediately through court-mandated injunctions. This level of security is mandatory for businesses seeking to raise venture capital, secure export orders, or enter into franchise agreements.</p>
                                        <p className="mb-6">The ® symbol also has a profound psychological impact on consumers. It signals that yours is a serious professional entity committed to quality and legal compliance. In the crowded markets of Chennai, Coimbatore, and Madurai, this symbol is a badge of trust that translates directly into premium pricing and higher market share.</p>
                                    </section>

                                    <section id="chennai-registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Chennai: The Administrative Epicenter and IT Hub</h2>
                                        <p className="mb-6">Chennai is the heart of Tamil Nadu’s IP landscape. Home to the regional Intellectual Property Office (Trademark Registry), the city serves not just the state but the entire southern region. Chennai’s tech ecosystem, particularly in SaaS (Software as a Service) and fintech, is currently lead in trademark filings under Class 9 and Class 42. For these software companies, the brand name is the product.</p>
                                        <p className="mb-6">We assist Chennai’s tech-preneurs in securing trademarks that protect their unique algorithms and platforms. The rise of co-working spaces and incubation centers in Guindy and OMR has fostered a culture of rapid innovation. We facilitate fast-track filings for these teams, ensuring their "TM" status is active before they launch their first beta. At IPR Karo, we handle the technical legal work at the Guindy Registry while you focus on scaling your technology.</p>
                                    </section>

                                    <section id="coimbatore-manufacturing" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScrewdriverWrench} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Coimbatore: Protecting the Engineering Excellence</h2>
                                        <p className="mb-6">Coimbatore, the "Manchester of South India," is the engineering and pump manufacturing hub of the nation. The city’s industrial units produce everything from complex textile machinery to high-precision automotive components. For these manufacturers, building a brand around technical performance and durability is key. Trademarks under Class 7 (Machines and Machine Tools) and Class 12 (Vehicles/Components) are high priority here.</p>
                                        <p className="mb-6">We specialize in helping Coimbatore’s MSME units secure their corporate identities. Many of these units are family-run businesses with decades of experience. We help them formalize their legacy, ensuring that their names are not hijacked by generic importers from other regions. A registered trademark is their ticket to being recognized as a high-quality "Original Equipment Manufacturer" (OEM) globally.</p>
                                    </section>

                                    <section id="tiruppur-textile" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tiruppur: Safeguarding Global Textile Identities</h2>
                                        <p className="mb-6">Tiruppur is the global hub for knitwear and hosiery exports. The sheer volume of branding that moves through this city is staggering. While many units manufacture for global giants, there is a massive shift toward creating home-grown brands. For these entities, Class 25 (Clothing, Footwear, Headgear) is the primary battlefield.</p>
                                        <p className="mb-6">The textile sector is notorious for design imitation. By registering your specific brand logo and name, you protect your market presence. IPR Karo conducts exhaustive searches in Class 25 to ensure your brand is unique, preventing costly legal disputes with national competitors. We also handle international filings for Tiruppur exporters, protecting their brands in over 120 countries via the Madrid Protocol.</p>
                                    </section>

                                    <section id="madurai-heritage" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Madurai: The Commercial Lifeblood of Southern Tamil Nadu</h2>
                                        <p className="mb-6">Madurai remains the central trading hub for the southern districts. Known for its traditional markets and growing food processing industry, the demand for brand protection in Class 30 (Food) and Class 35 (Trading) is immense. From the famous Madurai Malli to local FMCG startups, a trademark is the first step in scaling from a local shop to a state-wide retail chain.</p>
                                        <p className="mb-6">We assist Madurai’s traders in formalizing their business names. For retailers looking to list their products on Amazon or Flipkart, having a trademark is a mandatory requirement for their "Brand Registry" programs. We facilitate these filings, allowing Madurai’s heritage to reach a global digital audience while staying legally protected.</p>
                                    </section>

                                    <section id="hosur-auto" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Hosur and the Electronics Revolution</h2>
                                        <p className="mb-6">Hosur is rapidly transitioning from a purely automotive hub to a world-class electronics and mobile component manufacturing center. This high-tech shift requires advanced intellectual property management. Companies in the EV (Electric Vehicle) and semiconductor space need comprehensive brand protection that spans multiple product classes.</p>
                                    </section>

                                    <section id="salem-steel" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScrewdriverWrench} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Salem and Erode: Traditional Industry Modernization</h2>
                                        <p className="mb-6">Salem’s steel industry and Erode’s turmeric and textile markets are the backbone of central Tamil Nadu. These sectors are modernizing fast, with local blenders and blenders now packaging products under their own labels. A trademark in Class 30 (Spices) or Class 6 (Metal) is vital for these units to move away from generic commodity trading into high-margin branded sales.</p>
                                    </section>

                                    <section id="startup-benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tamil Nadu Industrial Policy 2025: IP Benefits</h2>
                                        <p className="mb-6">The Government of Tamil Nadu is incredibly proactive in encouraging IP creation. Under the latest industrial policy, several incentives are available to encourage trademark filings:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>100% Reimbursement</strong>: Startups and MSMEs can claim significant reimbursements for trademark and patent registration costs.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSME Fee Concession</strong>: Small businesses registered as MSMEs pay only 50 percent of the standard government filing fee.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>IP Facilitation Support</strong>: The state has established dedicated IP cells to help entrepreneurs understand their legal rights.</li>
                                        </ul>
                                    </section>

                                    <section id="journey" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 8-Step Filing Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Precision Brand Search", desc: "We scan the entire IPO database to ensure your chosen Tamil Nadu brand name is unique and legally defensible." },
                                                { step: 2, title: "Strategic Class Identification", desc: "We guide you in choosing the correct Nice Classification categories to maximize your protection scope." },
                                                { step: 3, title: "MSME/Startup Verification", desc: "We verify your Udyam or Startup status to ensure you pay the lowest possible government fees." },
                                                { step: 4, title: "Drafting Form TM-A", desc: "Our attorneys draft the application with technical descriptions of goods/services to minimize registry objections." },
                                                { step: 5, title: "Digital Filing (4-Hour Turnaround)", desc: "We file your mark instantly on the IP India portal, granting you the right to use the ™ symbol immediately." },
                                                { step: 6, title: "Examination Monitoring", desc: "We track your application every day. If the registrar raises an objection, we draft a technical reply instantly." },
                                                { step: 7, title: "Journal Monitoring", desc: "During the 4-month publication window, we monitor the Trademark Journal to defend against any third-party oppositions." },
                                                { step: 8, title: "Registration (® Certificate)", desc: "Once the mark is approved, we deliver the digitised registration certificate, valid for 10 years and renewable." }
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
                                        <p className="mb-6">The government fee for trademark registration in India is standardized, but concessions are heavily weighted toward small players:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals, Sole Proprietors, and Startups</strong>: INR 4,500 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSMEs (with Udyam Certificate)</strong>: INR 4,500 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Large Companies and LLPs</strong>: INR 9,000 for online filing.</li>
                                        </ul>
                                        <p className="mb-6">IPR Karo exclusively uses the online filing route to save you INR 500 to 1000 in physical filing penalties and ensuring your application is processed at top speed by the Chennai office.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Legal Remedies and Enforcement in Tamil Nadu</h2>
                                        <p className="mb-6">Registration gives you the power to litigate. In Tamil Nadu, the District Courts and the Madras High Court have jurisdiction over trademark disputes. With a registered trademark, you can seek "Interim Injunctions" to immediately shut down an infringer’s production. Criminal remedies are also available, including search and seizure operations by the local police for counterfeit goods. Branding is your legal shield, and registration is the only way to activate it.</p>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Going Global via the Madrid Protocol</h2>
                                        <p className="mb-6">Tamil Nadu’s exporters are leading India’s global trade. Through the Madrid Protocol, we use your domestic Indian trademark as a base to apply for protection in over 120 countries, including the USA, EU, and UK. This centralizes the process through the World Intellectual Property Organization (WIPO), significantly reducing global legal costs for Chennai-based MNCs.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Common Pitfalls to Avoid in your Application</h2>
                                        <p className="mb-6">Avoid using generic geographical names as your primary brand; names like "Chennai Motors" are hard to protect. Use unique or suggestive names instead. Ensure your "Date of Use" is accurate and supported by evidence. Finally, never miss a renewal deadline; established brands in Coimbatore and Erode often lose their rights simply by failing to renew after 10 years. Our automated tracking system prevents this exact scenario.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Tamil Nadu Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Tamil Nadu's Industrial Leaders</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Tamil Nadu Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the thousands of Tamil Nadu entrepreneurs who have built a secure legal future for their brands. Get your official TM number today and move toward national recognition.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult TN IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Chennai IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Verify your brand availability instantly with our South India desk. Get a detailed legal report for the Chennai Registry experts.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free TN Brand Search</button>
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
