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
    faLeaf,
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
    title: "Trademark Registration in Assam | IPR Karo",
    description: "Expert trademark registration in Assam. Secure your brand in Guwahati, Dibrugarh, Silchar, and Jorhat. 100% IP reimbursement support for Assam startups.",
    keywords: [
        "trademark registration in assam",
        "online trademark filing guwahati",
        "assam tea brand protection",
        "sualkuchi silk trademark",
        "guwahati startup ipr",
        "trademark search assam",
        "ip protection silchar",
        "brand registration jorhat",
        "assam industrial policy ipr",
        "tea garden brand registration",
        "dibrugarh manufacturing trademark",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-assam",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Assam businesses located?", answer: "All trademark matters for Assam are handled by the Kolkata Trade Marks Registry. This office has territorial jurisdiction over all North-Eastern states, including Assam. While the office is physically in Kolkata, IPR Karo files your applications 100 percent digitally via the official E-filing gateway, meaning you never need to travel outside Assam for the process." },
    { question: "Can I use the TM symbol instantly in Assam?", answer: "Yes, once we file your application and obtain the filing number (usually within 4 hours), you can immediately transition your brand identity to include the ™ symbol. This notifies competitors that your trademark is a protected legal asset and discourages unauthorized copying." },
    { question: "What are the benefits for startups in Assam?", answer: "Eligible startups recognized under the 'My Assam Startup ID' initiative can avail themselves of significant financial assistance. The Assam Startup Policy provides 100 percent reimbursement for domestic patent and trademark filing costs, effectively allowing local entrepreneurs to secure their intellectual property at zero net cost." },
    { question: "How long is a trademark valid in Guwahati?", answer: "A registered trademark is valid throughout India, including Guwahati, for a period of 10 years from the date of the original application. You can renew it every 10 years indefinitely. We provide automated renewal alerts to ensure our Assam clients never lose their brand rights due to administrative oversights." },
    { question: "Does a GI tag protect my individual brand in Sualkuchi?", answer: "A Geographical Indication (GI) tag like Sualkuchi Silk protects the community of weavers. However, to protect your specific business name or logo under which you sell those silks, you need a separate trademark registration. This 'double layer' of protection and authenticity is vital for premium brands." },
    { question: "What if my brand name is similar to a tea garden in Jorhat?", answer: "We conduct an intensive AI-driven search to identify any existing marks in Class 30 (Tea) and other relevant classes. If a conflict exists with a brand in Jorhat or elsewhere, we advise on strategic modifications to ensure your application at the Kolkata Registry is successful and legally defensible." },
    { question: "Is online filing mandatory for Assam trademark registration?", answer: "While physical filing is technically possible, online filing is significantly faster and comes with a 10 percent discount on government fees. At IPR Karo, we use the 100 percent digital route to ensure that proximity to Kolkata is never a disadvantage for our North-East clients." },
    { question: "Can a small business in Dibrugarh afford trademark registration?", answer: "Absolutely. MSMEs and individuals pay a concessional government fee of INR 4500, which is 50 percent lower than the standard corporate fee. When combined with the Assam government's reimbursement schemes, it is one of the most affordable ways to build a long-term business asset." },
    { question: "What documents are needed for registration in Silchar?", answer: "To begin, we only need basic identity proof (Aadhaar or PAN) and proof of your business address in Silchar or any part of Assam. If you are a startup or MSME, your registration certificate will be needed to claim the 50 percent government fee waiver." },
    { question: "Why should Assam entrepreneurs choose IPR Karo?", answer: "We bridge the gap between local Assam business clusters and the legal requirements of the national IP registry. Our tech-first approach ensures that brands from Guwahati to Tinsukia receive the same level of legal sophistication as major MNCs, backed by deep knowledge of North-East industrial policies." }
];

const reviews = [
    { author: "Rahul B.", position: "Founder", content: "IPR Karo handled our software trademark flawlessly. We got our TM number within 6 hours of contacting them. Their understanding of the Assam Startup Policy reimbursement was a huge plus.", rating: 5 },
    { author: "Sunita D.", position: "Owner", content: "Registering our premium tea brand was a breeze. They navigated the complex Class 30 filing at the Kolkata Registry with expert precision. Highly recommended for Assam industries.", rating: 5 },
    { author: "Amit S.", position: "Manufacturer", content: "Great service and very transparent. They helped us clear a confusing objection from the registrar quickly and professionally. Our brand is now legally secure.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Gateway" },
    { id: "strategic", title: "Strategic Asset" },
    { id: "guwahati-hub", title: "Guwahati Commercial Hub" },
    { id: "tea-industry", title: "Tea Sector IP" },
    { id: "dibrugarh-petrol", title: "Oil and Energy Sector" },
    { id: "jorhat-r-and-d", title: "Jorhat R&D Focus" },
    { id: "silchar-border", title: "Silchar Trade Gateway" },
    { id: "handicrafts", title: "Heritage Protection" },
    { id: "startup-benefits", title: "Startup Policy 2025" },
    { id: "journey", title: "8-Step Journey" },
    { id: "fees", title: "Fee Concessions" },
    { id: "legal-remedies", title: "Enforcement in Assam" },
    { id: "global", title: "International Reach" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "faqs", title: "Assam FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function AssamPage() {
    const averageRating = 4.9;
    const reviewsCount = 128;

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
        "headline": "Trademark Registration in Assam: Securing the Economic Gateway of North-East India",
        "description": "Comprehensive guide to trademark registration in Assam. Protect your brand in Guwahati, Jorhat, and beyond with expert IPR services.",
        "image": "https://www.iprkaro.com/assets/assam-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-assam"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Assam Trademark Registration",
        "image": "https://www.iprkaro.com/assets/assam-trademark-og.jpg",
        "description": "Premium trademark registration services for Assam businesses.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Assam", "item": "https://www.iprkaro.com/trademark-registration-in-assam" }
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Assam</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect the legacy of the land of red rivers and blue hills. From Guwahati's tech surge to the world-famous tea estates of Jorhat, we provide elite brand security for Assam's industrial future.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Assam Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Assam", href: "/trademark-registration-in-assam" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Assam Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Assam: The Economic Gateway of North-East India</h2>
                                        <p className="mb-6">Assam, the sentinel of the North-East, is witnessing an unprecedented economic renaissance. Known globally for its tea, petroleum, and rich biological diversity, the state is now rapidly emerging as a multifaceted industrial powerhouse. The strategic location of Assam as India's gateway to South-East Asia has made it a focal point for trade and innovation. In this thriving commercial ecosystem, trademark registration in Assam is no longer just a legal option but a foundational pillar for business success. Whether you are a small-scale entrepreneur in Silchar or a large industrialist in Guwahati, protecting your brand identity is the most critical step you can take toward sustainable growth.</p>
                                        <p className="mb-6">At IPR Karo, we understand that an Assam-based brand carries the essence of the region’s heritage and its future potential. Our specialized intellectual property services are designed to bridge the gap between local innovation and national legal standards. We help you navigate the complexities of the IP India system, ensuring that your mark is secured at any cost without procedural delays. By registering your trademark, you transition from being a local player to becoming a national identity, legally recognized and protected across all 28 states and union territories.</p>
                                        <p className="mb-6">The concept of "Brand Value" is highly relevant in Assam's context. With the rise of agro-processing, digital services, and manufacturing, the market is becoming increasingly crowded. A registered trademark acts as your unique signature, allowing customers to distinguish your high-quality offerings from generic or inferior substitutes. It is your shield against brand dilution and your sword against infringement.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Importance of Brand Protection</h2>
                                        <p className="mb-6">For a business in Assam, a trademark (®) is the single most valuable intangible asset. It provides a legal monopoly over your business name, logo, or slogan. In a region where traditional industries are modernizing, brand trust has become the primary driver of consumer choice. When you register your mark, you are essentially buying a "Legal Moat" that prevents competitors from hijacking your reputation.</p>
                                        <p className="mb-6">Without registration, your brand remains vulnerable to "Passing Off," where other entities can use similar names to profit from your hard work. In such cases, legal recourse is difficult and expensive. However, with a registration certificate issued by the Kolkata Registry, the burden of proof shifts, and you gain the power to stop infringers almost instantly through court orders. This level of security is essential for businesses seeking term loans, venture capital, or government contracts.</p>
                                        <p className="mb-6">The psychological impact of the ® symbol is immense. It signals to your distributors and customers that you are a serious professional entity committed to quality. In the competitive markets of Nagaon, Tinsukia, and Beyond, this symbol is a badge of trust that translates directly into higher sales and better market positioning.</p>
                                    </section>

                                    <section id="guwahati-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Guwahati: The Commercial Heartbeat</h2>
                                        <p className="mb-6">Guwahati is the undisputed commercial capital of Assam and the entire North-East region. The city’s landscape is changing rapidly with the development of the IT Park, large retail malls, and several industrial zones in the suburbs. The service sector in Guwahati, including education, hospitality, and digital technology, is currently the leader in trademark filings.</p>
                                        <p className="mb-6">Coaching centers and educational institutes in areas like G.S. Road and Paltan Bazaar face intense competition. For these entities, the brand name is their most critical asset. We assist Guwahati’s educational leaders in securing Class 41 trademarks, preventing unauthorized branches from using their names. Similarly, the burgeoning IT scene in Guwahati's STPI centers is seeing a high demand for Class 9 and 42 trademarks, ensuring that local software products can compete on a global scale.</p>
                                    </section>

                                    <section id="tea-industry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Tea Sector: Protecting a Global Legacy</h2>
                                        <p className="mb-6">Assam tea is a brand recognized in every corner of the world. While the "Assam Tea" name itself is protected under Geographical Indication (GI), individual tea estates and blenders need their own trademarks to distinguish their premium offerings. Whether it is a traditional estate in Jorhat or a boutique tea startup in Dibrugarh, the brand identity under Class 30 is vital.</p>
                                        <p className="mb-6">The global tea market is flooded with blends that claim to be "Pure Assam" but are often mixed with lower-quality leaves. By registering your specific brand name, you provide your international buyers with a guarantee of authenticity. IPR Karo specializes in the meticulous searching of Class 30, ensuring that your tea brand does not conflict with established global players, allowing for a smooth registration process at the Kolkata Registry.</p>
                                    </section>

                                    <section id="dibrugarh-petrol" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Oil, Energy, and Manufacturing in Upper Assam</h2>
                                        <p className="mb-6">Dibrugarh and Tinsukia form the industrial backbone of Upper Assam, home to India's oldest oil refineries and numerous ancillary manufacturing units. While these industries deal in heavy commodities, branding remains critical for specialized products such as lubricants, chemical additives, and specialized engineering tools. Trademarks in Class 1 (Chemicals) and Class 4 (Industrial Oils) are essential for these manufacturing clusters.</p>
                                        <p className="mb-6">The expansion of gas-based industries and petrochemical projects in the region has created an ecosystem of contractors and service providers. For these firms, having a registered corporate identity is a mandatory prerequisite for qualifying for major PSU tenders and international collaborations. We provide fast-track filing services for these industrial units, moving their applications within 24 hours.</p>
                                    </section>

                                    <section id="jorhat-r-and-d" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLightbulb} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Jorhat: The Hub of Research and Agri-Innovation</h2>
                                        <p className="mb-6">Jorhat is the cultural and research capital of Assam. With institutions like the North East Institute of Science and Technology (NEIST) and numerous agricultural universities, it is a hub for scientific innovation. We focus on transforming these research breakthroughs into commercial brands. For startups emerging from Jorhat's incubation centers, trademarks are the first step in intellectual property commercialization.</p>
                                        <p className="mb-6">Agri-startups in Jorhat working on processed foods, organic fertilizers, and herbal products need protection in multiple classes. We offer strategic counseling for multi-class filings, ensuring that as your product range expands from seeds to processed items, your brand remains universally protected.</p>
                                    </section>

                                    <section id="silchar-border" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMapMarkerAlt} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Silchar and the Barak Valley Trade</h2>
                                        <p className="mb-6">Silchar serves as the primary trade gateway for the Barak Valley and neighboring states like Mizoram and Manipur. The logistics and trading sector in Silchar is incredibly active. For trading houses, registering a trademark in Class 35 (Advertising, Business Management) is vital. This allows you to build a retail brand identity even if you do not manufacture the products yourself.</p>
                                        <p className="mb-6">With the development of cross-border trade, Silchar-based exporters are increasingly looking at international markets. We handle international applications via the Madrid Protocol, using your domestic Assam filing as the base, allowing you to protect your brand in over 120 countries through a single application.</p>
                                    </section>

                                    <section id="handicrafts" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Heritage Protection: Bell Metal and Muga Silk</h2>
                                        <p className="mb-6">Assam’s traditional handicrafts, such as the bell metal works of Sarthebari and the Muga Silk of Sualkuchi, are world-class products. While these communities often have GI tags, individual artisans and designer houses need individual trademark registrations to build high-end premium brands. We help these traditional creators translate their centuries-old legacy into a modern legal framework, securing their motifs and brand names at the Kolkata Registry.</p>
                                    </section>

                                    <section id="startup-benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Assam Startup Policy 2025: IP Incentives</h2>
                                        <p className="mb-6">The Government of Assam is highly proactive in encouraging IP creation. Under the latest industrial and startup policies, several incentives are available to encourage trademark filings:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>100% Reimbursement</strong>: Startups can claim full reimbursement of costs incurred for trademark and patent filings.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSME Fee Waiver</strong>: Small businesses registered as MSMEs pay only 50 percent of the standard government filing fee.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>IP Facilitation Support</strong>: The state provides dedicated cells to help entrepreneurs understand and file for intellectual property rights.</li>
                                        </ul>
                                    </section>

                                    <section id="journey" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 8-Step Filing Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "Precision Brand Search", desc: "We conduct an exhaustive search across 45 classes to ensure your name doesn't conflict with existing marks." },
                                                { step: 2, title: "Business Classification", desc: "We guide you in choosing the correct Nice Classification categories to maximize your protection scope." },
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
                                        <p className="mb-6">The statutory fees for trademark registration are uniform across India, but Assam businesses can profit from specific concessions:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals, Sole Proprietors, and Startups</strong>: INR 4,500 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Large Companies and Non-MSMEs</strong>: INR 9,000 for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Physical Filing</strong>: Additional INR 500-1000 per application (Not recommended by IPR Karo).</li>
                                        </ul>
                                        <p className="mb-6">Remember that these fees are per class. If your business operates across multiple product categories, you may need to file in multiple classes to ensure comprehensive and complete brand protection.</p>
                                    </section>

                                    <section id="legal-remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement and Legal Remedies in Assam</h2>
                                        <p className="mb-6">Registration gives you the power to sue for infringement. In Assam, the District Courts and the Gauhati High Court have jurisdiction over trademark disputes. With a registered trademark, you can seek "Interim Injunctions" to immediately stop an infringer. Criminal remedies are also available, including police raids and seizure of counterfeit goods. At IPR Karo, we don't just register your mark; we help you build a technical and legal strategy to defend it for life.</p>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Going Global: Assam to the World</h2>
                                        <p className="mb-6">Assam’s exporters of tea, silk, and spices are increasingly eyeing international markets. Through the Madrid Protocol, we can use your initial Indian trademark filing to apply for protection in over 120 countries, including major trading partners like the USA, UK, and Germany. This streamlines the international process and reduces global legal costs significantly.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Common Pitfalls to Avoid in your Application</h2>
                                        <p className="mb-6">Many Assam businesses fail because of basic errors. Avoid using generic geographical names like "Guwahati Tea" as your primary brand; instead, use a unique name that is arbitrary or suggestive. Ensure your "Date of Use" is supported by documentary evidence like old invoices. Missing a renewal deadline after 10 years is the most common way established brands lose their rights; our automated alerts system is designed to prevent this exact mistake.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Assam Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Assam's Leading Businesses</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Assam Brand Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join hundreds of Assam entrepreneurs who have built a secure legal future for their brands. Get your official TM number today and move toward national recognition.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Assam IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Assam IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Verify your brand availability instantly with our North-East desk. Get a comprehensive legal report for the Kolkata Registry experts.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Assam Search</button>
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
