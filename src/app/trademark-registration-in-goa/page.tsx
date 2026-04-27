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
    faUmbrellaBeach,
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
    title: "Expert TM Registration in Goa | IPR Karo",
    description: "Expert trademark registration in Goa. Secure your brand in Panaji, Margao, Vasco, and Mapusa. 100% IP reimbursement support under Goa Startup Policy 2025.",
    keywords: [
        "trademark registration in goa",
        "online trademark filing panaji",
        "goa tourism brand protection",
        "goan feni trademark registration",
        "verna industrial estate ipr",
        "trademark search goa",
        "ip protection margao",
        "brand registration vasco da gama",
        "goa startup policy ipr incentives",
        "hospitality brand registration goa",
        "pharmaceutical trademark goa",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-goa",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Goa located?", answer: "Goa falls under the territorial jurisdiction of the Mumbai Trademark Registry. All hearings and administrative processing are handled by the Mumbai office. However, IPR Karo manages the entire journey digitally, meaning businesses in Panaji or Margao never need to leave the state to secure their brand rights." },
    { question: "Can I use the TM symbol today in Goa?", answer: "Yes, as soon as your application is filed and we receive the official acknowledgment number (usually within 4 to 6 hours), you are legally permitted to use the ™ symbol. This serves as a warning to competitors and establishes your brand's priority in the marketplace." },
    { question: "What are the IP benefits under the Goa Startup Policy 2025?", answer: "The Goa Startup Policy 2025 is incredibly supportive. Certified startups can claim 100 percent reimbursement for the costs of filing domestic and international trademarks. This covers both government fees and professional charges, up to a cap of INR 2 Lakh for domestic and INR 5 Lakh for international filings." },
    { question: "Is a registered trademark valid only in Goa?", answer: "No, a trademark registered in India is valid across all 28 states and 8 union territories. This means your brand registered in Panaji is equally protected in Delhi, Mumbai, or Bengaluru, giving you the freedom to expand your business nationwide without fear of infringement." },
    { question: "How long does it take to get the final ® certificate in Goa?", answer: "The process usually takes between 6 to 12 months, depending on whether the registrar raises any objections or if a third party files an opposition. However, your legal protection begins the moment you file, and the TM symbol can be used throughout the processing period." },
    { question: "Can I trademark a specific brand of Goan Feni?", answer: "While 'Feni' itself is a Geographical Indication (GI), your unique brand name under which you sell Feni can and should be registered as a trademark. This allows you to build a premium brand identity while leveraging the traditional Goan heritage protected by the GI tag." },
    { question: "What documents are required for an individual in Goa?", answer: "For individuals, we only require basic documents: a copy of your PAN card, Aadhaar card, and a representation of your logo or brand name. If you have been using the brand for some time, we may also ask for invoices to prove 'Prior Use' for a stronger legal position." },
    { question: "Are MSMEs in Goa eligible for fee concessions?", answer: "Yes, MSMEs registered under Udyam pay a government fee of only INR 4500 for online filing, which is a 50 percent discount compared to large companies. This makes trademark registration highly accessible for Goa’s small business sector and coastal entrepreneurs." },
    { question: "What happens if someone copies my brand in North Goa?", answer: "With a registered trademark, you can initiate civil and criminal proceedings. You can obtain an interim injunction (stay order) from the court to stop them immediately. Trademark infringement is also a cognizable offense, allowing for police action and seizure of counterfeit materials." },
    { question: "Why is IPR Karo the best choice for Goa's hospitality industry?", answer: "We understand the specific branding needs of hotels, resorts, and restaurants in the coastal belt. We offer high-speed, tech-driven filing that ensures your unique identity is protected before competitors can react, combined with a deep understanding of Goa's specific industrial incentives." }
];

const reviews = [
    { author: "Vikram N.", position: "Founder", content: "IPR Karo helped us secure our SaaS brand in record time. They handled the Mumbai Registry filing perfectly and helped us claim the full reimbursement under the Goa Startup Policy. Seamless experience!", rating: 5 },
    { author: "Maria D.", position: "Owner", content: "Protecting our boutique hotel's name was our top priority. The team at IPR Karo managed the entire process professionally. Their AI search tool identified a potential conflict early, saving us from future legal headaches.", rating: 5 },
    { author: "Savio F.", position: "MD", content: "Highly technical and transparent. They handled our multi-class brand registration across three different categories with precision. Best IP consultants for Goan manufacturers.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Coastal Innovation" },
    { id: "strategic", title: "Strategic Security" },
    { id: "panaji-hub", title: "Panaji Tech Hub" },
    { id: "tourism-ip", title: "Hospitality Branding" },
    { id: "pharma-verna", title: "Pharma and Manufacturing" },
    { id: "margao-commerce", title: "Margao Trade Center" },
    { id: "vasco-logistics", title: "Vasco Logistics Node" },
    { id: "traditional-feni", title: "Feni and Heritage" },
    { id: "startup-2025", title: "Startup Policy 2025" },
    { id: "journey", title: "8-Step Journey" },
    { id: "fees", title: "Fee Structure" },
    { id: "legal-enforcement", title: "Legal Remedies" },
    { id: "international", title: "Global Expansion" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "faqs", title: "Goa FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function GoaPage() {
    const averageRating = 4.9;
    const reviewsCount = 135;

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
        "headline": "Trademark Registration in Goa: Protecting Innovation in the Emerald of the East",
        "description": "Comprehensive guide to trademark registration in Goa. Secure your brand in Panaji, Margao, and Vasco with expert IPR services.",
        "image": "https://www.iprkaro.com/assets/goa-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-goa"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Goa Trademark Registration",
        "image": "https://www.iprkaro.com/assets/goa-trademark-og.jpg",
        "description": "Premium trademark registration services for Goan businesses.",
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
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Goa", "item": "https://www.iprkaro.com/trademark-registration-in-goa" }
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Goa</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your legacy in Pearl of the Orient. From Panaji's tech ecosystem to the premium resorts of South Goa, we secure your brand at the Mumbai Registry with elite legal protection.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Goa Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Goa", href: "/trademark-registration-in-goa" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Goa Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Goa: The Coastal Hub of Innovation and Creativity</h2>
                                        <p className="mb-6">Goa, the "Emerald of the East," is undergoing a profound economic transformation. Historically celebrated as a global tourism paradise, India's smallest state is now rapidly positioning itself as a destination for high-tech innovation, creative industries, and advanced manufacturing. With its high literacy rate and exceptional quality of life, Goa has become a magnet for digital nomads, tech-startups, and premium manufacturers. In this vibrant and competitive commercial environment, trademark registration in Goa has emerged as the definitive tool for entrepreneurs to secure their market presence. From the coastal shacks of Calangute to the industrial nodes of Verna, protecting intellectual property is now a strategic priority for every Goan business.</p>
                                        <p className="mb-6">At IPR Karo, we recognize that a Goan brand carries a unique blend of lifestyle and excellence. Whether you are launching an organic food brand in Mapusa or a sophisticated software platform in Panaji, your brand identity is your most valuable business asset. Our specialized trademark services are designed to navigate the complexities of the IP India system, providing Goan entrepreneurs with elite brand protection that matches their global ambitions. By registering your trademark, you ensure that your unique Goan identity is legally protected across all 28 states of India, allowing you to scale without fear of infringement.</p>
                                        <p className="mb-6">The transition from a "Generic Commodity" to a "Legally Protected Brand" is the first step toward long-term business maturity. A registered trademark provides an exclusive monopoly, ensuring that no one else can exploit your hard-earned reputation to sell inferior goods or services. In a market where brand trust is the ultimate currency, having the ® symbol is your strongest competitive advantage.</p>
                                    </section>

                                    <section id="strategic" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Importance of Brand Protection</h2>
                                        <p className="mb-6">A trademark registration (®) in Goa provides a "Legal Moat" around your business. It is a national right that prevents anyone from using a deceptively similar name, logo, or slogan for their products. For a Goan business, this protection is multifaceted. It safeguards your brand from "Passing Off," where imitators ride on your success, and it builds an intangible asset that increases in value as your business grows.</p>
                                        <p className="mb-6">The legal certainty provided by a registered trademark is invaluable. It shifts the burden of proof in court cases, making it significantly easier to stop infringers. For companies looking to expand through franchising or licensing, a registered trademark is a mandatory legal requirement. It ensures that your partners are using a brand that you legally own and control, maintaining quality standards across your network.</p>
                                        <p className="mb-6">Furthermore, a trademark is a monetizable asset. It can be sold, pledged for loans, or valued during a company merger. In Goa’s emerging startup ecosystem, investors often view trademark registration as a key indicator of a founder’s commitment to building a serious and scalable enterprise. It is the first line of defense in protecting what you have created from scratch.</p>
                                    </section>

                                    <section id="panaji-hub" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Panaji: The Tech and Administrative Epicenter</h2>
                                        <p className="mb-6">As the state capital and a growing IT hub, Panaji is the focal point of Goa's tech aspirations. The city is home to numerous creative agencies, ed-tech startups, and boutique consulting firms. For these entities, the "Product" is often digital code or creative design, making the "Brand" the primary differentiator.</p>
                                        <p className="mb-6">We assist Panaji’s tech-preneurs in securing trademarks in Class 9 (Software) and Class 42 (IT Services). The rise of co-working spaces in areas like Patto and Miramar has fostered a culture of rapid innovation. We facilitate fast-track filings for these teams, ensuring their "TM" status is secured within hours of inception, allowing them to focus on building great products while we handle the legal security at the Mumbai Registry.</p>
                                    </section>

                                    <section id="tourism-ip" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faUmbrellaBeach} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Hospitality and Tourism: Safeguarding the Goan Experience</h2>
                                        <p className="mb-6">Tourism is the cornerstone of Goa's economy. From high-end luxury resorts in South Goa to vibrant beach clubs in the North, the brand identity is everything. In the hospitality sector, consumers make decisions based on brand perception and reputation. A trademark in Class 43 (Services for providing food and drink) is essential for every Goan restaurant, hotel, and shack owner.</p>
                                        <p className="mb-6">We often see cases where successful Goan restaurant names are copied by entities in other states to mislead customers. With a registered trademark, you can legally block such attempts anywhere in India. This is particularly important for Goan hospitality brands looking to expand into cities like Mumbai or Delhi. We provide detailed "Conflict Search" reports to ensure that your chosen name is unique and defensible before you invest in expensive signage and marketing.</p>
                                    </section>

                                    <section id="pharma-verna" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Pharma and Manufacturing: The Industrial Backbone</h2>
                                        <p className="mb-6">The Verna Industrial Estate is a world-class manufacturing hub, particularly for the pharmaceutical and electronic sectors. For Goan pharmaceutical manufacturers, trademarks are governed by strict ethical and legal considerations under Class 5. A brand name for a drug or medical product must be distinct to avoid medical errors, making trademark search even more critical.</p>
                                        <p className="mb-6">Beyond pharma, Goa has a strong presence in food processing, FMCG, and electronic component manufacturing. We help these industrial units register their marks across multiple classes (multi-class filing), ensuring that their brand identity is protected whether it's on a chemical additive or a finished consumer good. This multi-layered protection is vital for securing large export orders and meeting international compliance standards.</p>
                                    </section>

                                    <section id="margao-commerce" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Margao: The Commercial Hub of South Goa</h2>
                                        <p className="mb-6">Margao is the commercial lifeline of South Goa, known for its busy markets and established retail houses. The rise of organized retail and home-grown consumer brands in Salcete has created a high demand for brand protection. Whether it's a specialty bakery, a furniture showroom, or a local beverage brand, a trademark ensures that your family legacy is protected for future generations.</p>
                                        <p className="mb-6">The traditional markets of Margao are modernizing, with many local retailers now selling online through e-commerce platforms. To list products on major platforms like Amazon or Flipkart under "Brand Registry," a trademark application number is a mandatory requirement. We facilitate these filings, allowing Margao’s retailers to reach consumers across the world while keeping their identity legally secure.</p>
                                    </section>

                                    <section id="vasco-logistics" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Vasco da Gama: Logistics, Shipping, and Trade</h2>
                                        <p className="mb-6">Named after the legendary explorer, Vasco da Gama is Goa's primary logistics and shipping node. For companies operating in logistics, warehousing, and maritime services, a trademark in Class 39 (Transport and Packaging) is a key corporate asset. It signals stability and trust to global shipping partners and port authorities.</p>
                                        <p className="mb-6">The industrial clusters around Vasco, including the port and the airport, are seeing high investments in infrastructure services. We assist these B2B entities in securing their technical brand names, ensuring that they are not replaced by generic service providers in the supply chain. A registered brand name is often a requirement for qualifying for port tenders and international logistics contracts.</p>
                                    </section>

                                    <section id="traditional-feni" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Heritage Protection: Feni and Goan Handicrafts</h2>
                                        <p className="mb-6">Goa is home to unique heritage products like Goan Cashew Feni, which holds a prestigious Geographical Indication (GI) tag. However, while the GI protects the region, individual distillers and cooperative brands need their own trademarks to distinguish their premium products from others. A trademark allows a premium Feni brand to command a higher price point in the global spirits market.</p>
                                        <p className="mb-6">Similarly, Goan handicrafts, traditional garments like the Kunbi Saree, and local artisanal products are seeing a resurgence. We help Goan artisans bridge the gap between tradition and modern legal protection, ensuring their unique designs and names are secured for the long term. This helps in preventing the commercial exploitation of traditional Goan knowledge by unauthorized entities.</p>
                                    </section>

                                    <section id="startup-2025" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Goa Startup Policy 2025: IP Benefits</h2>
                                        <p className="mb-6">In August 2025, the Goa state cabinet approved a visionary Startup Policy aimed at making Goa a top innovation hub in South Asia. For certified startups in Goa, the intellectual property benefits are world-class:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>100% Reimbursement</strong>: Full coverage of costs for domestic and international trademark filings.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSME Concessions</strong>: 50 percent off government fees for Udyam-registered businesses.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>IPR Facilitation Cells</strong>: Specialized state support for patent and trademark searches.</li>
                                        </ul>
                                    </section>

                                    <section id="journey" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 8-Step Filing Journey</h2>
                                        <div className="space-y-8">
                                            {[
                                                { step: 1, title: "AI-Powered Conflict Search", desc: "We scan the entire IPO database to ensure your chosen Goan brand name is unique and legally defensible." },
                                                { step: 2, title: "Strategic Class Identification", desc: "We guide you in choosing the right categories from the 45 classes to ensure complete business protection." },
                                                { step: 3, title: "Startup/MSME Certification", desc: "We verify your credentials to ensure you benefit from the 50 percent government fee concessions." },
                                                { step: 4, title: "Drafting Technical Form TM-A", desc: "Our attorneys draft the application with precise descriptions to minimize registry objections and delays." },
                                                { step: 5, title: "Online Filing (4-Hour Window)", desc: "We file digitally at the Mumbai Registry, providing you with the ™ symbol almost instantly." },
                                                { step: 6, title: "Examination Management", desc: "We track and respond to any examination reports or queries raised by the registrar within record time." },
                                                { step: 7, title: "Journal Monitoring", desc: "During the 4-month window, we monitor the official gazette to defend your mark against any oppositions." },
                                                { step: 8, title: "Registration Certificate (®)", desc: "Upon approval, we deliver your digitized registration certificate, securing your brand for 10 years." }
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-6">
                                                    <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-xl mb-1 text-gray-900">{item.title}</h4><p>{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="fees" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Understanding the Fee Structure in Goa</h2>
                                        <p className="mb-6">To encourage small business growth, the government offers significant fee concessions for online trademark applications:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Individuals and Startups</strong>: INR 4,500 per class for online filing (50% reduction).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>MSMEs (with Udyam)</strong>: INR 4,500 per class for online filing.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Large Companies</strong>: Standard government fee of INR 9,000 per class for online filing.</li>
                                        </ul>
                                        <p className="mb-6">Note that physical (offline) filing is more expensive and slower. IPR Karo recommends 100 percent digital filing for all Goan entrepreneurs to save both time and money.</p>
                                    </section>

                                    <section id="legal-enforcement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Legal Enforcement and Remedies</h2>
                                        <p className="mb-6">A registered trademark (®) provides you with powerful tools to stop counterfeiters. In Goa, you can approach the District Courts or the High Court for relief. Civil remedies include interim injunctions, damages for profit loss, and destruction of infringing goods. Criminal actions are also possible, allowing for the search and seizure of duplicate products by the local police authorities.</p>
                                    </section>

                                    <section id="international" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Going Global via the Madrid Protocol</h2>
                                        <p className="mb-6">Goan exporters, particularly in the pharma and design sectors, often need protection in Europe and North America. Through the Madrid Protocol, we use your Goan trademark application as a base to apply for protection in over 120 countries. This centralizes the international process through the World Intellectual Property Organization (WIPO) in Geneva, significantly reducing global legal costs.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Top Pitfalls to Avoid in Goa Brand Filing</h2>
                                        <p className="mb-6">Avoid using generic Goan terms like "Baga Beach" or "Panaji Resort" as your main brand name; they are legally weak. Ensure you have proper "NOCs" if you are a partnership or a company. The most critical mistake is missing the 10-year renewal window; we provide automated reminders to Goan businesses to ensure their assets remain protected indefinitely.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Goa Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Goa's Rising Brands</h2>
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
                                            <h3 className="text-3xl font-black mb-6">Secure Your Goan Identity Today</h3>
                                            <p className="mb-8 text-gray-300 text-lg">Join the hundreds of Goan entrepreneurs building a secure future. Get your official TM number today and move toward national recognition.</p>
                                            <Link href="/contact-us">
                                                <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-xl uppercase tracking-wider">
                                                    Consult Goa IP Expert
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Goa IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Verify your brand availability instantly with our West India desk. Get a detailed legal report for the Mumbai Registry experts.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Goa Search</button>
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
