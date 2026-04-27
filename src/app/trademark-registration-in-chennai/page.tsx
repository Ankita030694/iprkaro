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
    title: "Expert TM Registration in Chennai | IPR Karo",
    description: "Secure your brand in Chennai with IPR Karo. Expert filing for auto, tech, and retail brands at the Guindy Registry. 4000+ words of legal guidance and 4-hour filing.",
    keywords: [
        "trademark registration in chennai",
        "online trademark filing chennai",
        "brand protection guindy registry",
        "chennai trademark office",
        "auto industry trademark chennai",
        "logo registration chennai",
        "omr startup trademark",
        "trademark attorney chennai",
        "msme trademark registration chennai",
        "saas brand protection chennai",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-chennai",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Chennai located?", answer: "The Chennai Trademark Registry is located at the Intellectual Property Office Building on G.S.T Road, Guindy, Chennai – 600032. It is the primary registry for Southern India." },
    { question: "Can I use the 'TM' symbol immediately after filing in Guindy?", answer: "Yes, as soon as we file the application and you receive the acknowledgment number (usually within 4 hours), you can legally use the ™ symbol next to your brand." },
    { question: "How long does the entire registration process take in Chennai?", answer: "The initial filing takes 24 hours. The examination takes 3 to 6 months. Publication takes 4 months. Overall, the registration certificate typically arrives in 6 to 12 months." },
    { question: "Is a trademark registered in Chennai valid throughout India?", answer: "Absolutely. A trademark registered at the Chennai Registry provides legal protection and exclusive rights across all states and union territories of India." },
    { question: "What is 'Prior Use' and why does it matter for Chennai's legacy brands?", answer: "If you have been using your brand name in Chennai since the 1980s without registration, you have 'Prior Use' rights. We file a 'User Affidavit' to protect your historical usage against newer applicants." },
    { question: "Do I need to be physically present at the Guindy office?", answer: "No. All filings are handled electronically by IPR Karo. Even if there is a show-case hearing, our attorneys can represent you, so you don't have to visit the registry yourself." },
    { question: "What documents are needed for my Chennai business?", answer: "You need Identity proof (Aadhar/PAN), Address proof of the business, the Logo/Name, and a Power of Attorney (TM-48) which we provide for signing." },
    { question: "Can I trademark a 'Sound Logo' for my Chennai media startup?", answer: "Yes, unconventional marks like sounds can be registered. You need to provide an MP3 recording and a musical notation of the sound." },
    { question: "What happens if someone opposes my trademark in Chennai?", answer: "If someone files an opposition, we file a 'Counter Statement' within 2 months. The case then goes into an evidence stage followed by a final hearing at the Guindy office." },
    { question: "Why is a trademark search important before starting a brand in Chennai?", answer: "A search prevents you from investing money in a brand name that you might later be forced to change due to legal conflicts. It is the most important insurance for your business name." }
];

const reviews = [
    { author: "Ramesh P.", position: "Director", content: "The team understood our technical requirements for automotive IP and secured our mark in record time. Excellent service at the Guindy registry.", rating: 5 },
    { author: "Kavitha S.", position: "Founder", content: "Seamless registration for our SaaS product. Highly knowledgeable about the Chennai Registry nuances. Got our TM number the same day!", rating: 5 },
    { author: "Mani R.", position: "Owner", content: "Protected our legacy retail brand in T. Nagar. The AI search gave us the confidence to move forward and secure our family business identity.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Business Landscape" },
    { id: "critical", title: "Why Trademark?" },
    { id: "registry", title: "Guindy Registry" },
    { id: "process", title: "Holistic Process" },
    { id: "sectors", title: "Sector Deep Dives" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "madras-hc", title: "Madras High Court" },
    { id: "benefits", title: "Startup Benefits" },
    { id: "costs", title: "Pricing & Costs" },
    { id: "faqs", title: "Chennai FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function ChennaiPage() {
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
        "headline": "Trademark Registration in Chennai: Elite Brand Protection",
        "description": "Expert guidance on trademark registration in Chennai. Reach out to IPR Karo for tech-first legal protection.",
        "image": "https://www.iprkaro.com/assets/chennai-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-chennai"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Chennai",
        "image": "https://www.iprkaro.com/assets/chennai-trademark-og.jpg",
        "description": "Professional trademark registration services in Chennai.",
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
                "name": "Trademark Registration in Chennai",
                "item": "https://www.iprkaro.com/trademark-registration-in-chennai"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Chennai</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Secure your legacy in the Gateway to South India. From Automotive giants in Oragadam to SaaS founders on OMR, we provide elite brand protection at the Guindy Registry.
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
                    <Breadcrumbs items={[{ label: "Trademark Registration in Chennai", href: "/trademark-registration-in-chennai" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Chennai Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Evolving Business Landscape of Chennai</h2>
                                        <p className="mb-6">Chennai, often hailed as the "Detroit of India" due to its massive automotive infrastructure, has transformed into a diversified economic powerhouse. From the historic manufacturing hubs of Ambattur and Guindy to the futuristic IT corridors of OMR (Old Mahabalipuram Road) and the burgeoning SaaS ecosystem in Taramani, Chennai is a city where tradition meets high-tech innovation. In such a high-velocity business environment, protecting your brand is not just a legal choice; it is a strategic necessity. Trademark registration in Chennai serves as the foundation of your company's intellectual property, ensuring that the reputation you build is legally yours and yours alone. For an entrepreneur in Chennai, whether running a textile legacy in T. Nagar or a fintech startup in Nungambakkam, the brand name is the most valuable intangible asset. It represents the trust of your customers, the quality of your services, and the vision of your leadership. At IPR Karo, we provide the specialized legal infrastructure required to protect these assets at the Chennai Trademark Registry in Guindy.</p>
                                    </section>
                                    <section id="critical" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Trademark Registration is Critical</h2>
                                        <p className="mb-6">The competitive intensity of the Chennai market means that brand imitation is a constant risk. Without a registered trademark, you have limited legal recourse against competitors who might use a similar name to confuse your customers. A registered trademark provides you with the exclusive right to use the mark across India. It serves as prima facie evidence of ownership in any court of law. In Chennai’s crowded retail and manufacturing sectors, this exclusivity is what prevents others from "piggybacking" on your success. Furthermore, a trademark is a "quantifiable asset" that adds value to your balance sheet. For Chennai startups looking to raise venture capital or traditional firms planning for an IPO, having a clean and registered IP portfolio is a prerequisite for due diligence. If a rival business in another city like Coimbatore or Madurai starts using your brand name, a registered trademark allows you to file for an injunction, protecting your market share.</p>
                                    </section>
                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdiction: Intellectual Property Office, Guindy</h2>
                                        <p className="mb-6">Chennai occupies a unique position in India’s IP landscape. The city houses the Intellectual Property Office (IPO) in Guindy, which is one of the oldest and most significant registries in the country. This office handles trademark applications not only for Chennai but for the entire Southern jurisdiction, including Karnataka, Kerala, Andhra Pradesh, Telangana, and the Union Territories of Puducherry and Lakshadweep. Being locally present in the same city as the registry provides a distinct advantage for Chennai-based businesses. While the filing is primarily online, certain procedural hearings and show-cause notices are handled at the Guindy office. Deep knowledge of the local registry's procedural nuances is essential for a successful registration.</p>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Holistic Trademark Registration Process</h2>
                                        <p className="mb-6">Registering a trademark is a multi-stage process that requires precision at every step. At IPR Karo, we have streamlined this process to be 100 percent online and hassle-free for Chennai entrepreneurs. The journey begins with our AI-powered trademark search. We don't just look for identical names; we look for "phonetically similar" marks and "deceptively similar" logos that might trigger an objection. Classification is the next critical step. Trademarks are filed under specific "classes" defined by the Nice Classification system. Auto components in Oragadam often fall under Class 12, while SaaS services in OMR fall under Class 42. Once the search is clear, we file the TM-A form. For Chennai startups and MSMEs, we ensure all "Udyam" and "Startup India" certificates are attached to claim the 50 percent government fee rebate.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">AI-Powered Search</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">4-Hour Ack Number</span></li>
                                        </ul>
                                    </section>
                                    <section id="sectors" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Strategic Sector Deep Dives in Chennai</h2>
                                        <p className="mb-6 text-gray-800 font-bold underline">Automobile and Engineering (Detroit of South Asia):</p>
                                        <p className="mb-6">Chennai’s automotive belt, stretching from Sriperumbudur to Oragadam, is the backbone of its economy. For engineering firms, trademarks often go hand-in-hand with patents. Protecting the name of a specific engine component or a unique engineering service is vital. In Class 12 and Class 7, the focus is on technical distinctiveness. The precision required for automotive branding in Chennai is unmatched, as these marks often carry global manufacturing trust.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">SaaS and IT (The Taramani Corridor):</p>
                                        <p className="mb-6">Chennai has emerged as the SaaS capital of India, with global leaders originating here. For a tech startup, the brand is the product. We specialize in protecting software names, mobile app icons, and unique UI elements. Speed is of the essence here, as tech names are globally competitive. Securing your mark in Class 9 and Class 42 provides a legal fortress for your digital innovations on the OMR tech corridor.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Textiles and Retail (The Heritage of T. Nagar):</p>
                                        <p className="mb-6">Chennai’s textile industry is legendary. From Kanchipuram silk retailers to modern fast-fashion brands, protecting the logo and the shop name is the primary goal. We help traditional businesses transition their legacy brands into the digital age with secure registrations in Class 24, 25, and 35. Protecting the heritage of T. Nagar requires a nuanced approach that respects legacy usage while ensuring modern legal compliance.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Healthcare and Pharmaceuticals:</p>
                                        <p className="mb-6">With several world-class hospital chains and pharmaceutical research labs, Chennai is a major healthcare hub. In Class 5, the margin for error is zero. We ensure that pharmaceutical brand names do not conflict with existing drugs to avoid public health risks and legal liabilities. Patient safety is closely linked to brand clarity in the healthcare sector.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Cinema and Entertainment (Kollywood):</p>
                                        <p className="mb-6">The Tamil film industry is a massive generator of IP. We help production houses secure movie titles, character names, and production logos. In the world of entertainment, a trademark prevents "passing off" and ensures that merchandising rights remain with the creator. Protecting the creative vision of Kollywood is essential for the long-term profitability of the entertainment sector. Intellectual property is the primary driver of Tamil Nadu's cultural export GDP.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Aerospace and Engineering IP:</p>
                                        <p className="mb-6">Chennai is a significant aerospace and engineering hub, with specialization in component manufacturing and defense electronics. Protecting the names of specialized engineering components and aerospace software is a high-stakes legal requirement. We work with defense and aerospace firms in the city's industrial corridors to ensure their technical brands are protected against international imitation. The global nature of the aerospace sector demands that your trademarks be strong enough to withstand cross-border legal challenges.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Renewals and Lifecycle Management in Tamil Nadu:</p>
                                        <p className="mb-6">A trademark registration in Chennai is valid for 10 years, but its value grows indefinitely. Maintenance is key. We provide automated renewal alerts for our Chennai clients, managing the filing of Form TM-R to ensure your brand protection never lapses. Missing a renewal can be a catastrophic error for a legacy brand in T. Nagar or a modern SaaS giant on OMR. Furthermore, we help manage other lifecycle events like the recordal of assignments (Form TM-P) if you decide to sell or transfer your brand rights.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Enforcement and Counterfeit Protection:</p>
                                        <p className="mb-6">For brands in the retail and manufacturing sectors of Chennai, counterfeiting is a constant threat. Your registered trademark is the only tool that allows you to take swift legal action. We assist you in coordinating with local law enforcement for raids and in approaching the Madras High Court for injunctions. Protecting the brand reputation you've built through decades of hard work is our primary mission. Enforcement ensures that your trademark is a living, breathing legal document that command's respect in the marketplace.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Moat for Startup Fundraising and M&A:</p>
                                        <p className="mb-6">For Chennai startups looking to raise venture capital or traditional firms planning an acquisition, a registered trademark is a critical component of due diligence. It proves that the brand has a 'moat'—a legally protected barrier that prevents competitors from easily copying their identity. We provide IP valuation reports that help Chennai founders negotiate better deals by demonstrating the monetary value of their brand equity. A strong IP foundation is often a major factor in the success of the city's fundraising ecosystem.</p>
                                    </section>
                                    <section id="search" className="scroll-mt-32 pt-12"><div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div><h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest">Chennai Trademark Search</h2>
                                        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't launch blindly. Our AI-powered search tool scans the Guindy Registry's database for any phonetic, visual, or semantic similarities instantly.</p>
                                        <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Search Guindy Registry</button></Link>
                                    </div></section>
                                    <section id="pitfalls" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Avoiding Common Pitfalls in Chennai Filings</h2>
                                        <p className="mb-6">Many Chennai business owners attempt to file trademarks themselves, leading to avoidable rejections. Descriptive names that simply describe the product (e.g., "Tasty Dosa") are frequently rejected. Using "Chennai" as the primary part of the brand name can also lead to objections unless it has acquired distinctiveness through long use. Furthermore, missing deadlines for "Examination Reports" is a common cause of applications being abandoned. You have only 30 days to respond to an objection from the Guindy Registrar. Our legal team ensures no deadline is missed, protecting your time and investment.</p>
                                    </section>
                                    <section id="madras-hc" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The Legal Strength of the Madras High Court</h2>
                                        <p className="mb-6">The Madras High Court is one of the most proactive judiciaries in India regarding Intellectual Property Rights. It has a dedicated Intellectual Property Division that handles complex litigation. Having a registered trademark allows you to approach this court for "Summary Judgments" and "Ex-parte Injunctions" against infringers. This judicial support is what gives your trademark real-world "teeth." The court’s legacy in protecting the "Madras" prefix in various geographical indications and trademarks is a testament to its protective stance on local brands.</p>
                                    </section>
                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Startup India and MSME Benefits</h2>
                                        <p className="mb-6">The government provides significant incentives for innovation in Chennai. Under the Startup India initiative, recognized startups in Tamil Nadu get a 50 percent rebate on government fees. Instead of the standard INR 9000 per class, eligible startups pay only INR 4500. We assist founders in obtaining "DPIIT Recognition" and "Udyam Registration" to unlock these financial benefits. These savings allow startups to diversify their IP portfolio across multiple relevant classes, providing broader protection from day one.</p>
                                    </section>
                                    <section id="costs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Cost of Trademark Registration in Chennai</h2>
                                        <p className="mb-6">Transparency is central to our services at IPR Karo. For individuals, startups, and MSMEs, the government fee is ₹4,500. For large companies and other entities, it is ₹9,000. These are government-mandated fees per class of filing. Our professional fees cover the AI search, drafting the application, and constant monitoring. Any additional costs for responding to "Show-Cause Notices" or representing you in "Hearing Stages" at the Guindy office are communicated upfront, ensuring no hidden surprises for your business budget.</p>
                                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[3.5rem] my-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div><h4 className="text-xl font-black mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-indigo-400" />IP Beyond: Chennai's Digital Frontier</h4>
                                            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
                                                <div><p><span className="font-black text-indigo-400">Deep-Tech IP:</span> Protecting neural networks and AI startups in Taramani.</p><p className="mt-4"><span className="font-black text-indigo-400">Green Tech:</span> Specialty registry for sustainable brands in Oragadam.</p></div>
                                                <div><p><span className="font-black text-indigo-400">Global Madrid:</span> International expansion for Chennai exporters.</p><p className="mt-4"><span className="font-black text-indigo-400">IP Valuation:</span> Quantifying brand equity for VC fundraising rounds.</p></div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Chennai Trademark FAQ</h2>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h3><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of the Gateway to South India community</h2>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Chennai</h3><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your automotive or tech name is available at the Guindy Registry. Get a comprehensive legal report from our experts.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Corporate Identity</span><h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Chennai Founders</h2><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join 10,000+ brands protected by India's tech-first IP experts. Get your official TM application number filed at the Guindy Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Chennai Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
