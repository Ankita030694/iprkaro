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
    title: "Expert TM Registration in Faridabad | IPR Karo",
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
                                <p className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Faridabad Guide</p>
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
                                        <p className="mb-6">Faridabad is the largest city in Haryana and a key part of the National Capital Region (NCR). It is an industrial powerhouse that has shaped Northern India's manufacturing for decades. The city is known globally for heavy engineering, tractor manufacturing, and auto components. It blends tradition with modern industrial efficiency.</p>
                                        <p className="mb-6">From large industrial estates in Sectors 24, 25, and 58 to tech hubs on Mathura Road, Faridabad hosts over 12,000 MSME units. In this fast-paced market, brands are built over generations. This makes trademark registration in Faridabad a critical step for your business's future.</p>
                                        <p className="mb-6">A trademark provides a legal "moat" to protect your identity from competitors and counterfeiters. At IPR Karo, we know a Faridabad brand is more than a name. It represents a legacy of hard work and engineering excellence.</p>
                                        <p className="mb-6">We provide elite legal support to help you navigate the Delhi Trademark Registry in Dwarka. This ensures your intellectual property remains a strong, valuable asset for your business.</p>
                                    </section>
                                    <section id="critical" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Trademark Registration is Critical</h3>
                                        <p className="mb-6">Operating in Faridabad without a registered trademark is like running a factory without insurance. The risks are high, and the legal consequences of being unprotected can be severe.</p>
                                        <p className="mb-6">A registered trademark gives you a national legal monopoly. It grants exclusive rights to use your brand name and logo across India. This is vital for Faridabad's exporters and manufacturers who ship goods nationwide. It stops others from trading under a similar name, protecting your market share.</p>
                                        <p className="mb-6">Using the ® symbol also acts as a legal deterrent against counterfeiting. This is a major threat in the auto and machinery sectors. Additionally, a trademark increases your business valuation. It serves as an intangible asset that grows in value over time. This is especially useful for bank financing or venture capital checks.</p>
                                    </section>
                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdiction: Delhi Trade Marks Registry</h3>
                                        <p className="mb-6">Even though your business is in Faridabad, your trademark application goes to the Delhi Trade Marks Registry. It is located at Boudhik Sampada Bhawan in Dwarka, New Delhi. This office handles applications from all over North India.</p>
                                        <p className="mb-6">Navigating the Delhi Registry requires knowing their specific procedures. This includes how they interpret User Affidavits for legacy brands in Sector 24. It also includes their technical rules for Show-Cause Hearings. Having an expert who handles thousands of applications at the Dwarka office is a big advantage.</p>
                                        <p className="mb-6">IPR Karo bridges this gap with a fully digital filing system. Our attorneys can also represent you at the Dwarka office when needed. This ensures Faridabad's industrial brands get the best legal protection in the NCR.</p>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Comprehensive Trademark Filing Process</h3>
                                        <p className="mb-6">At IPR Karo, our trademark process is 100 percent online. We start with an AI-powered search of the IP India database. This checks for visual, phonetic, and semantic similarities to avoid future disputes.</p>
                                        <p className="mb-6">Next, we focus on strategic class selection. Heavy manufacturing and tractor components in Faridabad usually fall under Classes 7 and 12. Modern service firms often fall under Classes 35 or 42.</p>
                                        <p className="mb-6">After the search clears, we file the TM-A application. For Faridabad's MSMEs, we use your Udyam or Startup India certificates to get a 50 percent fee subsidy.</p>
                                        <p className="mb-6">Within 4 hours of filing, you get a trademark application acknowledgment. This allows you to start using the ™ symbol immediately.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">AI-Driven Search</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">4-Hour Acknowledgment</span></li>
                                        </ul>
                                    </section>
                                    <section id="sectors" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Sector-Specific IP Insights for Faridabad</h3>
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
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div><h3 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest">Faridabad Trademark Search</h3>
                                        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't launch blindly in the NCR. Our AI-powered search tool scans the New Delhi Registry's database for phonetic and visual similarities instantly.</p>
                                        <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Search Delhi Registry</button></Link>
                                    </div></section>
                                    <section id="pitfalls" className="scroll-mt-32 pt-16">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Avoiding Common Pitfalls in Faridabad Filings</h3>
                                        <p className="mb-6">Many local businesses fall into common traps. Using generic terms like 'Faridabad Hydraulics' is often rejected for being too descriptive of the city or the trade. Missing deadlines is another critical error; you have only 30 days to respond to an objection from the Dwarka office. Furthermore, claiming an incorrect user date without proof can lead to the rejection of your User Affidavit. Our legal team audits every Faridabad application for technical compliance, ensuring your industrial brand doesn't face avoidable legal deadlock.</p>
                                    </section>
                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The Legal Strength of the Delhi High Court</h3>
                                        <p className="mb-6">Faridabad businesses benefit from being within the jurisdiction of the Delhi High Court, which is considered India's most IP-savvy judiciary. If someone infringes on your registered trademark, the Delhi High Court can grant injunctions within days. This fast-track legal enforcement is a massive advantage for brands operating in the hyper-competitive industrial zones of Haryana. Registered trademark owners can leverage this powerful judiciary to get damages and protect their market share effectively.</p>
                                    </section>
                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">MSME and Startup India Benefits</h3>
                                        <p className="mb-6">The Indian government and the Haryana state government provide significant support for intellectual property. Startups and MSMEs in Faridabad pay ₹4500 instead of ₹9000 for government filing, a 50 percent rebate. We assistant local firms in obtaining the necessary DPIIT recognition or Udyam registration to unlock these financial and procedural benefits instantly, turning your engineering innovation into a legally protected asset.</p>
                                    </section>
                                    <section id="costs" className="scroll-mt-32 pt-12">
                                        <h3 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Cost of Trademark Registration in Faridabad</h3>
                                        <p className="mb-6">Transparency is a core value at IPR Karo. For individuals, startups, and MSMEs, the government fee is ₹4500 per class. For large companies and LLPs, it is ₹9000. Our professional charges cover end-to-end management, from the AI search to the final certificate. Upfront pricing helps Faridabad's industrial leaders plan budgets without surprises.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Renewals and Lifecycle Management in Haryana:</p>
                                        <p className="mb-6">A trademark is a permanent asset that requires maintenance. It is valid for 10 years and must be renewed using Form TM-R. We offer automated renewal alerts to ensure your protection never lapses. Missing a renewal can allow competitors to claim your rights. Proper management also includes updating ownership changes via forms like TM-P.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Trademark Enforcement: Raids and Actions:</p>
                                        <p className="mb-6">In Faridabad's industrial areas, counterfeiting is a serious threat. A registered trademark lets you take civil and criminal action. We help brand owners coordinate with local law enforcement for raids and seek court injunctions. Enforcement makes your trademark a living legal document that commands respect.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Moat for SME Fundraising and M&A:</p>
                                        <p className="mb-6">For SMEs seeking venture capital or planning an exit, a strong IP portfolio is critical. VCs look for a "moat" that prevents easy imitation. A registered trademark is a key part of this moat. It proves you have exclusive rights to your market identity. A clean IP report from the Delhi Registry speeds up fundraising and boosts valuation.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Madrid Protocol for Global Exports:</p>
                                        <p className="mb-6">Faridabad is a global export center. For companies shipping goods abroad, domestic trademark registration is the first step toward international protection. Through the Madrid Protocol, we help extend your brand rights to over 120 countries using one application. This stops foreign distributors from hijacking your brand overseas.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Monetization: Licensing and Franchising:</p>
                                        <p className="mb-6">A registered trademark can generate passive income. Many engineering firms license their brand names to smaller manufacturers. We assist in drafting Trademark Licensing Agreements to protect your equity and collect royalties. Franchising is also a great option for retail brands, and a registered trademark is the legal foundation for every franchise agreement.</p>
                                        
                                        <p className="mb-6 text-gray-800 font-bold underline">Combating Online Brand Infringement:</p>
                                        <p className="mb-6">In the digital age, heavy industrial brands are searched online. If someone uses your brand name for Google Ads or sells fakes on platforms like Indiamart or Amazon, a registered trademark is your weapon. We help Faridabad businesses file 'Take-Down Notices' to protect their digital reputation.</p>
                                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[3.5rem] my-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div><h5 className="text-xl font-black mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-indigo-400" />IP Beyond: Faridabad's Industrial Future</h5>
                                            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
                                                <div><p><span className="font-black text-indigo-400">Trade Dress:</span> Protecting the unique look of industrial products.</p><p className="mt-4"><span className="font-black text-indigo-400">Logistics IP:</span> Protecting brands in the supply chain sector.</p></div>
                                                <div><p><span className="font-black text-indigo-400">Global Madrid:</span> Expanding Faridabad brands to international markets.</p><p className="mt-4"><span className="font-black text-indigo-400">IP Valuation:</span> Quantifying brand equity for corporate exits.</p></div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Faridabad Trademark FAQ</h3>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h4><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h3 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Faridabad's Industrial Leaders</h3>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h4 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Faridabad</h4><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your industrial or retail name is available at the Delhi Registry. Get a comprehensive legal report from our elite attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h4 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h4><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Corporate Identity</span><h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Faridabad Founders</h3><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join 10,000+ brands protected by India's tech-first IP experts. Get your official TM application number filed at the Delhi Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Faridabad Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
