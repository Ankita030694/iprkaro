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
    title: "Trademark Registration in Faridabad | Delhi Registry IP Protection",
    description: "Secure your brand in Faridabad with IPR Karo. Expert filing for manufacturing, auto components, and engineering brands at the Delhi Registry. 4000+ words of legal guidance.",
    keywords: [
        "trademark registration in faridabad",
        "online trademark filing faridabad",
        "brand protection delhi registry",
        "faridabad trademark office",
        "manufacturing trademark faridabad",
        "logo registration faridabad",
        "haryana brand protection",
        "trademark attorney faridabad",
        "msme trademark registration faridabad",
        "tractor industry ip faridabad",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-faridabad",
    },
};

const faqs = [
    { question: "Which Trademark Registry handles applications from Faridabad?", answer: "All trademark applications from Faridabad are processed by the Delhi Trade Marks Registry located in Dwarka, New Delhi. This office handles all IP matters for Northern India." },
    { question: "Can I start using the 'TM' symbol immediately after applying?", answer: "Yes, as soon as IPR Karo files your application online and you receive the acknowledgment number (usually within 4 hours), you can legally use the ™ symbol next to your brand." },
    { question: "How long does a trademark registration last in Faridabad?", answer: "A registered trademark is valid for 10 years from the date of filing and can be renewed every 10 years indefinitely." },
    { question: "What is the importance of a 'User Affidavit' in Faridabad?", answer: "If your business has been using the brand name for some years before filing, you must file a User Affidavit with evidence like invoices or ads to protect your rights as a 'Prior User' at the Delhi Registry." },
    { question: "Can a logo and a name be registered in a single application?", answer: "Yes, a 'Device Mark' application can include both a stylized name and a logo. For maximum protection, some businesses also file a separate 'Word Mark' for just the name." },
    { question: "What if my business is an MSME in Sector 25, Faridabad?", answer: "You are entitled to a 50 percent government fee subsidy. You must provide a valid Udyam Registration certificate at the time of filing to avail of this benefit." },
    { question: "What happens if I receive an objection from the Dwarka office?", answer: "The Registrar may issue an Examination Report. You must file a technical legal response within 30 days. We specialize in drafting these replies to clear objections." },
    { question: "Do I need to be physically present for a trademark hearing?", answer: "In most cases, no. Most hearings are now held via video conferencing. Even for physical hearings, our authorized attorneys represent you so you don't have to leave Faridabad." },
    { question: "What documents are needed for a company registration in Faridabad?", answer: "You need the Certificate of Incorporation, Logo image, Identity and Address proof of the Directors, and a Power of Attorney (TM-48)." },
    { question: "Why is a professional search better than a free online search?", answer: "A professional search by IPR Karo uses advanced algorithms to find 'deceptively similar' marks that a simple keyword search might miss, preventing future legal disputes." }
];

const reviews = [
    { author: "Rajesh K.", position: "Factory Owner", content: "IPR Karo helped us secure our automotive brand in record time. Their knowledge of the Delhi registry is unmatched. highly recommended for Faridabad industries.", rating: 5 },
    { author: "Sunita M.", position: "CEO", content: "Fast and professional service for our export house. Got our TM number within hours. The 3-column guide on their site was very helpful.", rating: 5 },
    { author: "Vikram S.", position: "Founder", content: "Great experience registering our tech startup's logo. Transparent pricing and expert legal advice. Best IP partner in the NCR region.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Heart" },
    { id: "critical", title: "Why Trademark?" },
    { id: "registry", title: "Delhi Registry" },
    { id: "process", title: "Filing Process" },
    { id: "sectors", title: "Sector Insights" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "legal", title: "Delhi High Court" },
    { id: "benefits", title: "MSME Benefits" },
    { id: "costs", title: "Pricing & Costs" },
    { id: "faqs", title: "Faridabad FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function FaridabadPage() {
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
        "headline": "Trademark Registration in Faridabad: The Strategic Industrial IP Blueprint",
        "description": "Expert guidance on trademark registration in Faridabad. Reach out to IPR Karo for technical legal protection.",
        "image": "https://www.iprkaro.com/assets/faridabad-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-faridabad"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Faridabad",
        "image": "https://www.iprkaro.com/assets/faridabad-trademark-og.jpg",
        "description": "Professional trademark registration services in Faridabad.",
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
                "name": "Trademark Registration in Faridabad",
                "item": "https://www.iprkaro.com/trademark-registration-in-faridabad"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Faridabad</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your industrial identity in the Heart of Haryana. From heavy engineering clusters to Mathura Road startups, we provide elite brand protection at the Delhi Registry.
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
                    <Breadcrumbs items={[{ label: "Trademark Registration in Faridabad", href: "/trademark-registration-in-faridabad" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Faridabad Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Industrial Heart of Haryana</h2>
                                        <p className="mb-6">Faridabad, the largest city in Haryana and a cornerstone of the National Capital Region (NCR), is an industrial powerhouse that has defined Northern India's manufacturing prowess for decades. Known globally for its heavy engineering, tractor manufacturing, and automotive component clusters, Faridabad is a city where tradition meets modern industrial efficiency. From the massive industrial estates in Sector 24, 25, and 58 to the growing tech and service hubs along the Mathura Road, Faridabad is home to over 12,000 MSME units. In this high-octane commercial landscape, where brands are built over generations, trademark registration in Faridabad is the most critical step to secure your business's future. It provides the legal "moat" that protects your identity from competitors and counterfeiters alike. At IPR Karo, we understand that a Faridabad brand is more than just a name; it is a legacy of hard work and engineering excellence. We provide the elite legal support required to navigate the Delhi Trademark Registry in Dwarka, ensuring your intellectual property remains a robust and valuable asset on your balance sheet.</p>
                                    </section>
                                    <section id="critical" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Trademark Registration is Critical</h2>
                                        <p className="mb-6">Operating in an industrial hub like Faridabad without a registered trademark is like running a factory without insurance. The risks are substantial, and the legal consequences of being unprotected can be devastating. A registered trademark gives you a national legal monopoly, granting exclusive rights to use your brand name and logo across India. This is especially vital for Faridabad's exporters and manufacturers who ship goods to every corner of the country. It prevents anyone else from trading under a similar name, ensuring your market share is never diluted. Furthermore, a trademark (using the R symbol) acts as a legal deterrent against counterfeiting, which is a significant threat in the automotive and machinery sectors. It also enhances your business valuation, acting as a tangible intangible asset that appreciates over time, proving essential during bank financing or venture capital due diligence.</p>
                                    </section>
                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdiction: Delhi Trade Marks Registry</h2>
                                        <p className="mb-6">While your business is located in Faridabad, Haryana, your trademark application will be handled by the Delhi Trade Marks Registry, located at Boudhik Sampada Bhawan in Dwarka, New Delhi. This registry handles applications from across North India. Navigating the Delhi Registry requires a deep understanding of their specific procedural preferences. From the way they interpret User Affidavits for legacy brands in Sector 24 to their technical requirements for Show-Cause Hearings, having an expert who handles thousands of applications at the Dwarka office is a major advantage. IPR Karo bridges this distance through our fully digital filing system and a team of attorneys who represent you at the Dwarka office when needed. This jurisdictional connection ensures that Faridabad's industrial spirit is protected by the highest legal standards available in the NCR.</p>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Comprehensive Trademark Filing Process</h2>
                                        <p className="mb-6">At IPR Karo, we have optimized the trademark process to be 100 percent online. The journey begins with an elite AI-powered search of the IP India database, identifying visual, phonetic, and semantic similarities to avoid future legal disputes. Strategic class selection is the next critical step. Heavy manufacturing and tractor components common in Faridabad often fall under Classes 7 and 12, while modern service firms fall under Classes 35 or 42. Once the search is clear, we file the TM-A application. For Faridabad's vibrant MSME sector, we ensure you leverage the 50 percent fee subsidy by providing your Udyam or Startup India certificates. Within 4 hours of filing, you receive your trademark application acknowledgment, allowing you to use the TM symbol immediately.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">AI-Driven Search</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">4-Hour Acknowledgment</span></li>
                                        </ul>
                                    </section>
                                    <section id="sectors" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Sector-Specific IP Insights for Faridabad</h2>
                                        <p className="mb-6 text-gray-800 font-bold underline">Heavy Engineering and Automotive Parts:</p>
                                        <p className="mb-6">Faridabad is the Auto Hub of the North. For manufacturers in Sector 24 and 58, the trademark protects the identity of precision-engineered parts. We also focus on trade dress protection, ensuring that the unique look and packaging of your industrial components are protected from imitation. The reputation of Faridabad's fabrication units is built on these legally secured brands.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Agriculture and Tractor Manufacturing:</p>
                                        <p className="mb-6">With a legacy of tractor production (hosting giants like Escorts and Eicher), the secondary market for parts is massive. We help Faridabad manufacturers secure their 'Parts Brands' to ensure the quality associated with their name is never compromised by sub-standard imitations. Protecting the identity of agricultural implements is vital for regional dominance.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Footwear and Lifestyle Retail:</p>
                                        <p className="mb-6">With numerous footwear manufacturing units, branding is the primary differentiator for Faridabad's consumer goods. We help footwear brands secure their logos and unique names in Classes 25 and 35. This facilitates expansion into national retail chains and e-commerce platforms like Amazon and Flipkart with full legal confidence.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Real Estate and Neharpar Development:</p>
                                        <p className="mb-6">The rapid development along the Greater Faridabad (Neharpar) area has led to a boom in real estate branding. We assist developers in protecting project names early in the planning phase, preventing passing off actions by other builders. Your real estate brand is the primary promise of quality for modern homeowners.</p>
                                    </section>
                                    <section id="search" className="scroll-mt-32 pt-12"><div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div><h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest">Faridabad Trademark Search</h2>
                                        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't launch blindly in the NCR. Our AI-powered search tool scans the New Delhi Registry's database for phonetic and visual similarities instantly.</p>
                                        <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Search Delhi Registry</button></Link>
                                    </div></section>
                                    <section id="pitfalls" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Avoiding Common Pitfalls in Faridabad Filings</h2>
                                        <p className="mb-6">Many local businesses fall into common traps. Using generic terms like 'Faridabad Hydraulics' is often rejected for being too descriptive of the city or the trade. Missing deadlines is another critical error; you have only 30 days to respond to an objection from the Dwarka office. Furthermore, claiming an incorrect user date without proof can lead to the rejection of your User Affidavit. Our legal team audits every Faridabad application for technical compliance, ensuring your industrial brand doesn't face avoidable legal deadlock.</p>
                                    </section>
                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The Legal Strength of the Delhi High Court</h2>
                                        <p className="mb-6">Faridabad businesses benefit from being within the jurisdiction of the Delhi High Court, which is considered India's most IP-savvy judiciary. If someone infringes on your registered trademark, the Delhi High Court can grant injunctions within days. This fast-track legal enforcement is a massive advantage for brands operating in the hyper-competitive industrial zones of Haryana. Registered trademark owners can leverage this powerful judiciary to get damages and protect their market share effectively.</p>
                                    </section>
                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">MSME and Startup India Benefits</h2>
                                        <p className="mb-6">The Indian government and the Haryana state government provide significant support for intellectual property. Startups and MSMEs in Faridabad pay ₹4500 instead of ₹9000 for government filing, a 50 percent rebate. We assistant local firms in obtaining the necessary DPIIT recognition or Udyam registration to unlock these financial and procedural benefits instantly, turning your engineering innovation into a legally protected asset.</p>
                                    </section>
                                    <section id="costs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Cost of Trademark Registration in Faridabad</h2>
                                        <p className="mb-6">Transparency is a core value at IPR Karo. For individuals, startups, and MSMEs, the government fee is ₹4500 per class. For large companies and LLPs, it is ₹9000. Our professional charges cover the end-to-end management of your file, from the initial AI search to the final certificate. We believe in upfront pricing so Faridabad's industrial leaders can plan their intellectual property budgets without hidden surprises.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Renewals and Lifecycle Management in Haryana:</p>
                                        <p className="mb-6">A trademark is not a one-time affair; it is a permanent asset that requires maintenance. Your trademark is valid for 10 years, after which it must be renewed using Form TM-R. We provide automated renewal alerts for our Faridabad clients, ensuring your brand protection never lapses. Missing a renewal can be a catastrophic error, allowing competitors to claim your abandoned rights. Proper lifecycle management also includes updating the registry regarding ownership changes through relevant forms like TM-P.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Trademark Enforcement: Raids and Actions:</p>
                                        <p className="mb-6">In the industrial belts of Faridabad, counterfeiting can be a serious threat. A registered trademark gives you the power to take civil and criminal action. We assist brand owners in coordinating with local law enforcement for raids and in approaching the courts for injunctions. Protection is only as good as its enforcement, and we ensure your Faridabad brand is respected across the NCR market. Enforcement ensures your trademark is a living legal document that commands respect.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Moat for SME Fundraising and M&A:</p>
                                        <p className="mb-6">For SMEs looking for venture capital or planning an exit, the depth of their intellectual property portfolio is a critical metric. VCs and buyers look for a moat, a protective layer that prevents easy imitation. A registered trademark is a tangible component of this moat. It proves that the company has exclusive rights to its market identity, reducing risk for investors. During due diligence, a clean IP report from the Delhi Registry can significantly speed up the fundraising process and improve the valuation of your company. Intellectual property is increasingly becoming the primary driver of corporate success in Faridabad's modern economy.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">The Strategic Value of the Madrid Protocol for Global Exports:</p>
                                        <p className="mb-6">Faridabad is not just an Indian industrial hub; it is a global export center. For companies shipping automotive parts to Europe or engineering goods to the Americas, domestic trademark registration is the first step toward international protection. Through the Madrid Protocol, we help Faridabad enterprises extend their brand rights to over 120 countries using a single application filed at the Delhi Registry. This international protection prevents foreign distributors from 'hijacking' your brand in overseas markets, ensuring that your export growth is sustainable and legally secured. A global brand strategy is the hallmark of a forward-thinking Faridabad industrialist.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Advanced IP Monetization: Licensing and Franchising:</p>
                                        <p className="mb-6">Once your trademark is registered in Faridabad, it can become a source of passive income. Many engineering firms license their technology and brand names to smaller manufacturers across the state. We assist in drafting robust Trademark Licensing Agreements that protect your brand equity while allowing you to collect royalties. Franchising is another powerful route for Faridabad's successful retail and F&B brands. A registered trademark is the legal foundation of every franchise agreement, allowing you to expand your business footprint across India without losing control over your brand's core identity. Monetizing your IP is the ultimate level of business maturity.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Combating Online Brand Infringement on E-commerce:</p>
                                        <p className="mb-6">In today’s digital age, even heavy industrial brands are searched for online. If someone is using your brand name as a keyword for their Google Ads or selling counterfeit parts on portals like Indiamart or Amazon, a registered trademark is your only weapon. We help Faridabad businesses file 'Take-Down Notices' with e-commerce platforms and search engines. Protecting your brand in the digital space is as important as protecting it in the physical industrial estates. Your online reputation is often the first point of contact for global buyers, and it must be legally shielded against digital squatters and bad actors.</p>
                                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[3.5rem] my-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div><h4 className="text-xl font-black mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-indigo-400" />IP Beyond: Faridabad's Industrial Future</h4>
                                            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
                                                <div><p><span className="font-black text-indigo-400">Trade Dress:</span> Protecting the unique look of industrial products.</p><p className="mt-4"><span className="font-black text-indigo-400">Logistics IP:</span> Protecting brands in the supply chain sector.</p></div>
                                                <div><p><span className="font-black text-indigo-400">Global Madrid:</span> Expanding Faridabad brands to international markets.</p><p className="mt-4"><span className="font-black text-indigo-400">IP Valuation:</span> Quantifying brand equity for corporate exits.</p></div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Faridabad Trademark FAQ</h2>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h3><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Faridabad's Industrial Leaders</h2>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Faridabad</h3><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your industrial or retail name is available at the Delhi Registry. Get a comprehensive legal report from our elite attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Corporate Identity</span><h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Faridabad Founders</h2><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join 10,000+ brands protected by India's tech-first IP experts. Get your official TM application number filed at the Delhi Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Faridabad Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
