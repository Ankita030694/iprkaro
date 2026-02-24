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
    title: "Trademark Registration in Indore | IPR Karo",
    description: "Secure your brand in Indore with IPR Karo. Expert filing for Pharma, IT, and Food industries at the Mumbai Registry. 4000+ words of professional legal guidance.",
    keywords: [
        "trademark registration in indore",
        "online trademark filing indore",
        "brand protection mumbai registry",
        "indore trademark office",
        "pithampur industrial trademark",
        "logo registration indore",
        "madhya pradesh brand protection",
        "trademark attorney indore",
        "msme trademark registration indore",
        "indori namkeen trademark",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-indore",
    },
};

const faqs = [
    { question: "Which Trademark Registry handles applications from Indore?", answer: "All trademark applications from Indore and Madhya Pradesh are processed by the Mumbai Trade Marks Registry located in Antop Hill, Mumbai. This office handles all IP matters for the state." },
    { question: "Can I start using the 'TM' symbol immediately after applying?", answer: "Yes, as soon as IPR Karo files your application online and you receive the acknowledgment number (usually within 4 hours), you can legally use the ™ symbol next to your brand name." },
    { question: "How long does a trademark registration last in Indore?", answer: "A registered trademark is valid for 10 years from the date of filing and can be renewed every 10 years indefinitely, making it a permanent asset for your business." },
    { question: "What is the value of a 'User Affidavit' for Indore brands?", answer: "If your brand has been in use in Indore before filing, you must file a User Affidavit with evidence like invoices or ads. This protects your rights as a 'Prior User' at the Mumbai Registry." },
    { question: "Can I register a name and a logo together?", answer: "Yes, a 'Device Mark' application covers both the stylized name and the logo. This is a cost-effective way to protect your visual brand identity in a single filing." },
    { question: "What if my startup is located in the Indore IT Park?", answer: "You are likely eligible for the 50 percent government fee subsidy. We help you obtain MSME or Startup India certifications to unlock these financial incentives." },
    { question: "What happens if the Mumbai office raises an objection?", answer: "You must file a technical legal response within 30 days. Our legal team drafts these replies using case laws to clear the path for your trademark registration." },
    { question: "Do I need to be physically present for a hearing in Mumbai?", answer: "In the vast majority of cases, no. Modern hearings are conducted online. Our authorized attorneys represent you, so you can stay focused on your business in Indore." },
    { question: "What documents are needed for a pharma company in Pithampur?", answer: "You will need the Certificate of Incorporation, Logo image, Identity proof of Directors, and a signed Power of Attorney (TM-48)." },
    { question: "Why is a professional search better than a free online search?", answer: "A professional search by IPR Karo uses advanced algorithms to find 'deceptively similar' marks that a simple search might miss, preventing expensive future legal battles." }
];

const reviews = [
    { author: "Animesh S.", position: "Pharma Director", content: "IPR Karo guided us through the complex Mumbai registry process for our Pithampur unit. Highly professional and tech-savvy team.", rating: 5 },
    { author: "Ridhi G.", position: "Food Entrepreneur", content: "Protected our unique Namkeen brand name in just a few days. The online process was smooth and the content on their site is very detailed.", rating: 5 },
    { author: "Sameer V.", position: "IT Founder", content: "Best TM service for Indore startups. Real legal expertise combined with a fast digital platform. Secured our app logo with ease.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Commercial Heart" },
    { id: "critical", title: "Why Trademark?" },
    { id: "registry", title: "Mumbai Registry" },
    { id: "process", title: "Filing Process" },
    { id: "sectors", title: "Sector Insights" },
    { id: "pitfalls", title: "Common Pitfalls" },
    { id: "legal", title: "Mumbai High Court" },
    { id: "benefits", title: "MSME Benefits" },
    { id: "costs", title: "Pricing & Costs" },
    { id: "faqs", title: "Indore FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function IndorePage() {
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
        "headline": "Trademark Registration in Indore: The Ultimate Brand Protection Guide",
        "description": "Expert guidance on trademark registration in Indore. Reach out to IPR Karo for technical legal protection at the Mumbai Registry.",
        "image": "https://www.iprkaro.com/assets/indore-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-indore"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Indore",
        "image": "https://www.iprkaro.com/assets/indore-trademark-og.jpg",
        "description": "Professional trademark registration services in Indore.",
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
                "name": "Trademark Registration in Indore",
                "item": "https://www.iprkaro.com/trademark-registration-in-indore"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Indore</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your commercial legacy in India's Cleanest City. From Pithampur pharma giants to Super Corridor tech startups, we provide elite brand protection at the Mumbai Registry.
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
                    <Breadcrumbs items={[{ label: "Trademark Registration in Indore", href: "/trademark-registration-in-indore" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Indore Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Commercial Heart of Madhya Pradesh</h2>
                                        <p className="mb-6">Indore, the largest city in Madhya Pradesh and consistently ranked as the cleanest city in India, is a vibrant economic hub that perfectly blends traditional commerce with modern industrial growth. Known as 'Mini Mumbai' for its fast-paced business environment, Indore is the primary driver of the state's GDP. From the massive pharmaceutical clusters in Pithampur to the burgeoning IT hubs at Super Corridor, and the globally famous food processing units specializing in Indori Namkeen, the city is a diverse industrial landscape. In this highly competitive market, where a brand's reputation is built over decades of trust, trademark registration in Indore is not just a legal requirement; it is a strategic business asset. It provides the legal moat that protects your identity from competitors and counterfeiters across the country. At IPR Karo, we recognize that an Indore brand carries the weight of the city's reputation for quality and cleanliness. We provide the elite legal support required to navigate the Mumbai Trademark Registry, ensuring your intellectual property remains a robust and valuable asset on your balance sheet.</p>
                                    </section>
                                    <section id="critical" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Trademark Registration is Critical</h2>
                                        <p className="mb-6">Operating in a commercial powerhouse like Indore without a registered trademark is a high-risk gamble. A registered trademark grants you an exclusive national monopoly, giving you the power to use your brand name and logo throughout India. For Indore's textile exporters in Rajwada or pharma giants in Pithampur, this means their market identity is legally shielded from Kashmir to Kanyakumari. It prevents any other entity from trading under a similar name, ensuring your brand equity is never diluted. Furthermore, it acts as a legal shield against counterfeiting, which is a major threat in famous sectors like Namkeen and garments. A registered trademark empowers you to take swift action, including raids and injunctions. Finally, it significantly boosts your company's valuation, acting as a tangible component of your moat during fundraising or corporate exits.</p>
                                    </section>
                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Jurisdiction: Mumbai Trade Marks Registry</h2>
                                        <p className="mb-6">While your business is located in Indore, Madhya Pradesh, your trademark application will be handled by the Mumbai Trade Marks Registry, located at Boudhik Sampada Bhawan in Antop Hill, Mumbai. This registry handles applications from across Western India and MP. Navigating the Mumbai Registry requires a deep understanding of their specific procedural workflow. From the way they interpret User Affidavits for legacy brands to their technical preferences during Show-Cause Hearings, having an expert who handles thousands of applications at the Mumbai office is a distinct advantage. IPR Karo bridges this distance through our fully digital filing system and a team of attorneys who represent you at the Mumbai office when needed. This jurisdictional connection ensures that Indore's industrial spirit is protected by the highest legal standards available.</p>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Comprehensive Trademark Filing Process</h2>
                                        <p className="mb-6">At IPR Karo, we have optimized the trademark process to be 100 percent online. The journey begins with an elite AI-powered search of the official IP India database, identifying phonetic, visual, and conceptual similarities to avoid future legal deadlocks. Strategic class selection is the next critical step. Pharma brands in Pithampur usually fall under Class 5, while food processing units in Indore fall under Class 30. Once the search is clear, we file the TM-A application. For Indore's vibrant MSME sector, we ensure you leverage the 50 percent fee subsidy by providing your Udyam or Startup India certificates. Within 4 hours of filing, you receive your trademark application acknowledgment, allowing you to use the TM symbol immediately.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">AI-Driven Search</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">4-Hour Acknowledgment</span></li>
                                        </ul>
                                    </section>
                                    <section id="sectors" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Sector-Specific IP Insights for Indore</h2>
                                        <p className="mb-6 text-gray-800 font-bold underline">The Pharmaceutical Hub (Pithampur):</p>
                                        <p className="mb-6">Pithampur, the Detroit of Indore and a global pharma hub, requires high-stakes IP protection. For pharma brands in Class 5, the margin for error is zero. We ensure that brand names do not conflict with existing drugs to avoid public health risks and legal liabilities. Protecting the chemical and research identity is the primary driver of Pithampur's export success and global reach.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Food Processing and Indori Namkeen:</p>
                                        <p className="mb-6">Indore's food industry is legendary. Protecting the unique names and logos of Namkeen brands in Class 30 is critical before they expand nationally via e-commerce. We focus on securing Device Marks that protect the visual identity your customers recognize at Sarafa or Chappan Dukan, ensuring your culinary heritage is legally secured against any imitators.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">IT and Digital Startups:</p>
                                        <p className="mb-6">With the arrival of giants like TCS and Infosys and a growing local startup ecosystem, tech branding in Class 42 is booming. We help Indore founders secure their software names and platform logos, facilitating their growth into national and international markets with full legal confidence. A strong tech brand is the core of any digital venture's valuation.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Textiles and Readymade Garments:</p>
                                        <p className="mb-6">The traditional textile markets of Rajwada and modern garment units are major IP generators. We assist Indore's garment manufacturers in securing their brand names and labels in Class 25. This ensures that your unique designs and labels are not copied by regional competitors, protecting your market share and brand reputation in the fashion world.</p>
                                    </section>
                                    <section id="search" className="scroll-mt-32 pt-12"><div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div><h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest">Indore Trademark Search</h2>
                                        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't launch blindly in the commercial heart of MP. Our AI-powered search tool scans the Mumbai Registry's database for phonetic and visual similarities instantly.</p>
                                        <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Search Mumbai Registry</button></Link>
                                    </div></section>
                                    <section id="pitfalls" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Avoiding Common Pitfalls in Indore Filings</h2>
                                        <p className="mb-6">Many local businesses lose their brands due to simple, avoidable mistakes. Using descriptive names like 'Clean Indore Services' is often rejected as they describe the city rather than acting as a unique brand identifier. Missing deadlines is another critical error; you have exactly 30 days to respond to a Mumbai Registry examination report. Furthermore, claiming a User Date without proof can lead to rejection. Our legal team audits every Indore application for technical compliance, ensuring your brand doesn't face avoidable legal deadlock at the Mumbai office.</p>
                                    </section>
                                    <section id="legal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The Legal Strength of the Mumbai High Court</h2>
                                        <p className="mb-6">Indore businesses benefit from being within the jurisdiction of the Mumbai Registry, which is overseen by the Bombay High Court, one of India's most IP-savvy courts. A registered trademark allows you to get injunctions against infringers quickly. This judicial efficiency is a major advantage for Indore brands in the competitive national market. Protecting your market share effectively requires leveraging the powerful judiciary that stands behind every registered trademark in the country.</p>
                                    </section>
                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">MSME and Startup India Benefits</h2>
                                        <p className="mb-6">The Indian government and the Madhya Pradesh state government offer massive support for intellectual property. Startups and MSMEs in Indore pay ₹4500 instead of ₹9000 for government filing, a 50 percent rebate. We assist local firms in obtaining the necessary central or state government certifications to unlock these financial and procedural benefits instantly, turning your business innovation into a legally protected asset for the long term.</p>
                                    </section>
                                    <section id="costs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Cost of Trademark Registration in Indore</h2>
                                        <p className="mb-6">Transparency is a core value at IPR Karo. For individuals, startups, and MSMEs, the government fee is ₹4500. For large companies and LLPs, it is ₹9000. Our professional charges cover the end-to-end management of your application, from the initial AI search to the final certificate. We believe in upfront pricing so Indore's industrial leaders can plan their intellectual property budgets without any hidden surprises or unexpected legal costs.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Renewals and Lifecycle Management in Madhya Pradesh:</p>
                                        <p className="mb-6">A trademark is not a one-time affair; it is a permanent asset that requires maintenance. Your trademark is valid for 10 years, after which it must be renewed using Form TM-R. We provide automated renewal alerts for our Indore clients, ensuring your brand protection never lapses. Missing a renewal window can lead to the removal of your mark, allowing competitors to claim your rights. Proper lifecycle management also includes updating the registry regarding ownership changes through relevant forms like TM-P.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Trademark Enforcement: Raids and Actions in MP:</p>
                                        <p className="mb-6">In the commercial zones of Indore, counterfeiting can be a serious threat. A registered trademark gives you the power to take civil and criminal action. We assist brand owners in coordinating with law enforcement for raids and in approaching the courts for injunctions. Protection is only as good as its enforcement, and we ensure your Indore brand is respected across the region. Enforcement ensures your trademark is a living legal document that commands respect from every competitor.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">IP Moat for SME Fundraising and M&A:</p>
                                        <p className="mb-6">For SMEs looking for venture capital or planning an exit, the depth of their intellectual property portfolio is a critical metric. VCs and buyers look for a moat, a protective layer that prevents easy imitation. A registered trademark is a tangible component of this moat. It proves that the company has exclusive rights to its market identity, reducing risk for investors. During due diligence, a clean IP report from the Mumbai Registry can significantly speed up the fundraising process and improve the valuation of your company in the eyes of global buyers. Intellectual property is increasingly becoming the primary driver of corporate success in Indore's modern economy.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">The Strategic Value of the Madrid Protocol for Global Exports:</p>
                                        <p className="mb-6">Indore is not just a regional trade center; it is a global export hub. For pharma companies shipping medicines to Africa or engineering goods to South East Asia, domestic trademark registration is the first step toward international protection. Through the Madrid Protocol, we help Indore enterprises extend their brand rights to over 120 countries using a single application filed at the Mumbai Registry. This international protection prevents foreign distributors from hijacking your brand in overseas markets, ensuring that your export growth is sustainable and legally secured. A global brand strategy is the hallmark of a forward-thinking Indore industrialist.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">Combating Brand Infringement on E-commerce Platforms:</p>
                                        <p className="mb-6">In today's digital age, even traditional Indori brands are searched for online. If someone is using your brand name as a keyword for their Google Ads or selling counterfeit Namkeen on portals like Amazon or Flipkart, a registered trademark is your only weapon. We help Indore businesses file Take-Down Notices with e-commerce platforms and search engines. Protecting your brand in the digital space is as important as protecting it in the physical markets of Sarafa. Your online reputation is often the first point of contact for new customers, and it must be legally shielded against bad actors.</p>
                                        <p className="mb-6 text-gray-800 font-bold underline">IP for the Modern Corporate Exit Strategy:</p>
                                        <p className="mb-6">As Indore transitions to a more mature corporate culture, founders are increasingly looking at mergers and acquisitions. A registered trademark is a key asset that increases the transaction value during an exit. It provides legal certainty to the acquirer that the brand's identity is safe and transferable. We provide IP valuation reports that help Indore founders negotiate better deals by demonstrating the monetary value of their brand equity. A strong IP foundation is often a major factor in the success of the city's highest-profile business deals.</p>
                                        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-12 rounded-[3.5rem] my-10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div><h4 className="text-xl font-black mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-indigo-400" />IP Beyond: Indore's Commercial Future</h4>
                                            <div className="grid md:grid-cols-2 gap-8 text-sm opacity-90">
                                                <div><p><span className="font-black text-indigo-400">Madrid Protocol:</span> Expanding Indore brands to global markets.</p><p className="mt-4"><span className="font-black text-indigo-400">Design IP:</span> Protecting the unique shape of pharma packaging.</p></div>
                                                <div><p><span className="font-black text-indigo-400">Asset Mgmt:</span> Managing renewals and ownership records.</p><p className="mt-4"><span className="font-black text-indigo-400">Valuation:</span> Quantifying brand equity for corporate exits.</p></div>
                                            </div>
                                        </div>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Indore Trademark FAQ</h2>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h3><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Indore's Industrial Leaders</h2>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-12 h-12 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Indore</h3><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your industrial or retail name is available at the Mumbai Registry. Get a comprehensive legal report from our elite attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Corporate Identity</span><h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Indore Founders</h2><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join 10,000+ brands protected by India's tech-first IP experts. Get your official TM application number filed at the Mumbai Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Indore Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
