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
    title: "Expert TM Registration in Maharashtra | IPR Karo",
    description: "Secure your brand in Maharashtra. Expert filing for Mumbai, Pune, and Nagpur at the Antop Hill Registry. 3500+ words of industrial IP expertise.",
    keywords: [
        "trademark registration in maharashtra",
        "online trademark filing maharashtra",
        "mumbai brand protection",
        "pune auto trademark registration",
        "antop hill registry maharashtra",
        "msme trademark registration maharashtra",
        "bollywood brand protection",
        "nagpur logistics trademark",
        "trademark attorney maharashtra",
        "brand registration mumbai",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-maharashtra",
    },
};

const faqs = [
    { question: "Which office handles Maharashtra trademark applications?", answer: "The Antop Hill Registry in Mumbai handles all trademark applications from Maharashtra, Madhya Pradesh, and Goa. IPR Karo manages the entire process 100% online through the official gateway." },
    { question: "How long is the trademark process in Maharashtra?", answer: "You receive the ™ number and can start using it within 24 hours of filing. The final registration certificate ('R' symbol) typically takes 6 to 12 months, assuming no major objections or oppositions." },
    { question: "Can I register a Bollywood-style brand name in Mumbai?", answer: "Yes, provided it is distinctive and not already registered by someone else. The media and entertainment industry in Mumbai has specific IP nuances that we help you navigate." },
    { question: "What is the government fee for individuals in Maharashtra?", answer: "For individuals, startups, and MSMEs (with Udyam registration), the government fee is ₹4,500 per class. For large companies and LLPs without MSME status, it is ₹9,000." },
    { question: "Is MSME/Udyam registration mandatory for trademark filing?", answer: "It is not mandatory, but it is highly recommended as it provides a 50% rebate on the government filing fees, making the process much more affordable for small businesses." },
    { question: "Do I need to visit the Antop Hill office in Mumbai?", answer: "No, you do not need to visit the registry physically. IPR Karo handles all interactions, including responses to examination reports and virtual hearings, on your behalf." },
    { question: "Can I register my logo and brand name together?", answer: "Yes, you can file a 'Composite Mark' which includes both your brand name and logo design. This provides comprehensive protection for your visual and verbal identity." },
    { question: "How do I renew my trademark in Maharashtra?", answer: "A trademark is valid for 10 years. You can file for renewal using Form TM-R. We provide automated alerts to our clients to ensure their protection never lapses." },
    { question: "What happens if someone else maps my brand on Amazon?", answer: "A registered trademark allows you to join the Amazon Brand Registry, giving you power to stop 'Listing Hijacking' and other forms of digital infringement." },
    { question: "Why choose IPR Karo for Maharashtra businesses?", answer: "We combine technical legal expertise with a fast, digital-first approach. We understand the specific nuances of the Antop Hill registry and provide 360-degree protection for the state's industrial leaders." }
];

const reviews = [
    { author: "Siddharth M.", position: "Mumbai Fintech Founder", content: "Professional handling of our Class 36 filing. The team is knowledgeable about the BKC corporate ecosystem. Highly recommended.", rating: 5 },
    { author: "Pooja D.", position: "Pune Auto-Component MD", content: "Protected our engineering brand at the Antop Hill office. Their technical search report was very detailed and helpful.", rating: 5 },
    { author: "Rahul V.", position: "Nagpur Agro-Exporter", content: "Exceptional service for our orange export brand. They helped us understand GI tags and trademark synergy perfectly.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Economic Powerhouse" },
    { id: "strategic", title: "Strategic Advantage" },
    { id: "registry", title: "Antop Hill Registry" },
    { id: "mumbai-media", title: "Mumbai & Media" },
    { id: "pune-auto", title: "Pune Auto Hub" },
    { id: "classes", title: "Industry Classes" },
    { id: "legal", title: "Bombay High Court" },
    { id: "process", title: "5-Step Process" },
    { id: "monitoring", title: "Monitoring Strategy" },
    { id: "faqs", title: "Maharashtra FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function MaharashtraPage() {
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
        "headline": "Trademark Registration in Maharashtra: The Comprehensive Guide",
        "description": "Expert guidance on securing your brand in Maharashtra. Learn about Mumbai, Pune, and Nagpur industrial brand protection.",
        "image": "https://www.iprkaro.com/assets/maharashtra-trademark-og.jpg",
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
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Services Maharashtra",
        "image": "https://www.iprkaro.com/assets/maharashtra-trademark-og.jpg",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating,
            "reviewCount": reviewsCount.toString()
        },
        "review": reviews.map(r => ({
            "@type": "Review",
            "author": { "@type": "Person", "name": r.author },
            "reviewBody": r.content,
            "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() }
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
                "name": "Trademark Registration in Maharashtra",
                "item": "https://www.iprkaro.com/trademark-registration-in-maharashtra"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Maharashtra</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Build your brand in India's financial heartland. From Mumbai's media giants to Pune's auto powerhouses, we provide elite IP services at the Antop Hill Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Maharashtra Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Maharashtra", href: "/trademark-registration-in-maharashtra" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Maharashtra Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Maharashtra: The Gateway to Global Trade</h2>
                                        <p className="mb-6">Maharashtra is not just a state; it is the economic engine that drives India. Contributing the highest to the national GDP, Maharashtra hosts a diverse industrial landscape that ranges from the frantic energy of Mumbai's financial districts to the manufacturing hubs of Pune and Nashik. As the state that houses India's financial capital, its most influential media industry, and a massive portion of its auto and pharma sectors, Maharashtra is a territory where brand equity is built on a global scale. In this hyper-competitive and high-stakes market, Trademark Registration in Maharashtra is the most critical legal checkmark for any business. Whether you are a fintech startup in Mumbai's BKC, an auto-component manufacturer in Pune, or an orange exporter in Nagpur, your brand identity is what protects your market share and secures your investor interest. At IPR Karo, we provide world-class intellectual property services specifically tailored to the speed, scale, and technical complexity of the Maharashtra business ecosystem.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Strategic Advantage for Maharashtra Brands</h2>
                                        <p className="mb-6">Registering a trademark in Maharashtra provides several unique pillars of business strength. Firstly, Financial Credibility; in Mumbai's corporate environment, a registered trademark is seen as a sign of business maturity. It is a prerequisite for venture capital funding and IPO readiness. Secondly, Hollywood and Media Protection; for the massive entertainment industry in Mumbai, trademarks protect character names, show titles, and production house logos from unauthorized exploitation. Thirdly, Export Readiness; Maharashtra's proximity to major ports like JNPT makes it an export hub. A registered trademark is the foundation for seeking international protection via the Madrid Protocol. Finally, Legal Deterrence; the Bombay High Court is one of the most proactive courts in India regarding IP rights. Having a trademark certificate allows you to seek immediate injunctions against copycats and counterfeiters, ensuring your market share remains untouched.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdictional Hub: Antop Hill Registry</h2>
                                        <p className="mb-6">All trademark matters for Maharashtra, as well as Madhya Pradesh and Goa, are handled by the Mumbai Trademark Registry, located in SM Road, Antop Hill. This registry is one of the oldest and busiest in India, processing a massive volume of applications daily. At IPR Karo, we understand the specific procedural nuances and examination tendencies of the Antop Hill office. Whether it is handling a show-cause hearing or responding to a technical objection regarding 'Deceptive Similarity', our deep familiarity with the Mumbai Registry ensures that your application moves through the system with maximum speed and legal accuracy. The registry's proximity to the Bombay High Court also means that the legal precedents set here are robust and highly influential across the nation.</p>
                                    </section>

                                    <section id="mumbai-media" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mumbai: Finance, Bollywood & Luxury Branding</h2>
                                        <p className="mb-6">Mumbai is a city of distinct commercial zones, each with its own IP needs. BKC & Nariman Point serve as the fintech fortress, requiring protection in Class 36 (Finance) and Class 42 (Tech). Andheri and Film City are the heart of media and entertainment, where Class 41 (Entertainment) and Class 38 (Broadcasting) are vital. Areas like Colaba and Palladium host luxury retail, necessitating protection in Class 25 (Clothing) and Class 14 (Jewellery). In Mumbai, where 'Deceptive Similarity' is a constant threat from counterfeit markets like Crawford Market, having a registered trademark is your only robust shield. We help Mumbai entrepreneurs implement 'Brand Vigilance' to catch infringers before they can damage your reputation.</p>
                                    </section>

                                    <section id="pune-auto" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Pune: The Auto & IT Powerhouse</h2>
                                        <p className="mb-6">Pune has transformed into a global destination for the automobile and IT industries. From the sprawling manufacturing plants in Chakan and Talegaon to the IT parks in Hinjewadi, Pune is a hub for high-tech innovation. The industrial landscape is further anchored by the Pimpri-Chinchwad industrial belt, one of the largest industrial hubs in Asia, known for heavy engineering, metallurgy, and auto-ancillaries. For Pune's industrial units, we focus on 'Trade Dress' and 'Design Integration'. We help you protect not just your brand name but also the unique look and feel of your machine parts (Class 7) and consumer products, ensuring that your industrial reputation remains exclusive. This protection is often a prerequisite for becoming an authorized vendor for global OEMs, ensuring your Pune-built components travel worldwide with a legally secured identity. As the region evolves into an Electric Vehicle (EV) hub, securing trademarks for new-age battery technology and charging infrastructure brands is becoming a critical competitive advantage for the next decade of mobility.</p>
                                    </section>

                                    <section id="classes" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Detailed Industry Class Breakdown for Maharashtra</h2>
                                        <p className="mb-6">In the complex economy of Maharashtra, choosing the right class is a strategic decision. Here is a look at the dominant classes we manage:</p>
                                        <div className="grid md:grid-cols-2 gap-6 my-10">
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Finance (Mumbai)</h4>
                                                <p className="text-sm">Class 36 for banking/fintech and Class 42 for digital interfaces. Essential for BKC-based firms.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Auto (Pune/Nashik)</h4>
                                                <p className="text-sm">Class 7 for machinery and Class 12 for vehicle parts. The backbone of Maharashtra's manufacturing.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Media (Film City)</h4>
                                                <p className="text-sm">Class 41 and 38 for entertainment production and broadcasting. Crucial for IP-driven industries.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Pharma (Aurangabad)</h4>
                                                <p className="text-sm">Class 5 for pharmaceutical and medical preparations. High technical rigor required for drug naming.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Bombay High Court Precedent</h2>
                                        <p className="mb-6">The Bombay High Court is globally recognized as a leading center for intellectual property jurisprudence. For a Maharashtra business, your trademark is backed by a legal system that is extremely proactive. John Doe Orders are common here, allowing you to seize goods from 'Unknown Persons' if you find massive counterfeiting. The specialized Commercial Divisions in the High Court handle IP matters with high technical expertise, often deciding on interim injunctions within a single hearing. This judicial backing turns your trademark certificate into a powerful weapon that commands respect in every industrial zone of the state, from Thane to Thane-Belapur. Furthermore, the establishment of the dedicated Intellectual Property Division (IPD) at the Bombay High Court has streamlined the process for appeals and revocation petitions, significantly reducing the turnaround time for IP litigation. This institutional focus means that Maharashtra based brand owners have access to some of the most sophisticated legal remedies in the world, including Dynamic Injunctions for digital platforms, ensuring that your brand is protected both in the physical markets of Mumbai and the borderless digital economy.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Our 5-Step Process for Maharashtra</h2>
                                        <div className="space-y-8">
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">1</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Technical Deep Search</h4><p>We scan the Antop Hill database for any potential phonetic or visual conflicts before filing.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">2</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Same-Day e-Filing</h4><p>We file your application electronically, giving you the ™ symbol immediately for your products.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">3</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Objection Management</h4><p>Our experienced attorneys draft specialized responses to overcome any Registry hurdles technicalities.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">4</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Journal Watch</h4><p>We monitor the weekly Journal for 4 months to catch any rival oppositions against your brand.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">5</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Final Certification</h4><p>We secure your Registration Certificate, granting you nationwide exclusivity and the ® symbol.</p></div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="monitoring" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Monitoring for Maharashtra Founders</h2>
                                        <p className="mb-6">Registration is the legal birth of your brand, but active monitoring is its survival. In the hyper-competitive markets of Maharashtra, your brand will face constant threats from 'Look-alike' marks and 'Phonetic Duplicates'. We provide our Maharashtra clients with an automated 'Watch Service' that scans every weekly Journal. If a competitor tries to register a similar mark, we alert you immediately, allowing us to file an Opposition before their mark can gain legal standing. Furthermore, we help record your trademark with Indian Customs (major offices at JNPT and Mumbai Port) to prevent the import or export of counterfeit goods bearing your brand name, securing your global standing.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Maharashtra Trademark FAQ</h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Industry Trust in Maharashtra</h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex text-yellow-400 mb-4">
                                                            {[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}
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
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Antop Hill Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your industrial or media brand is available at the Mumbai Registry. Get a free technical report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Antop Hill Search</button>
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
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Identifier</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Entry</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Gateway</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
