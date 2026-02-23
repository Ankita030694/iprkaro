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
    title: "Trademark Registration in Punjab | Ludhiana, Jalandhar & Mohali - IPR Karo",
    description: "Expert trademark registration in Punjab. Secure your brand in Ludhiana, Jalandhar, Amritsar, and Mohali. 100% IP reimbursement support for MSMEs.",
    keywords: [
        "trademark registration in punjab",
        "online trademark filing punjab",
        "ludhiana brand protection",
        "jalandhar sports goods trademark",
        "mohali startup ipr",
        "amritsar textile trademark",
        "trademark search punjab",
        "punjab msme ipr policy",
        "punjab industrial development policy",
        "brand registration ludhiana",
        "cycle industry trademark punjab",
        "hand tools trademark jalandhar",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-punjab",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Punjab?", answer: "All applications from Punjab are processed by the Delhi Registry in Dwarka. However, IPR Karo handles the entire process 100% digitally, so no physical presence is required." },
    { question: "Can I use the TM symbol today in Punjab?", answer: "Yes, as soon as we file the application and receive the acknowledgment number (usually under 4 hours), you can legally use the ™ symbol." },
    { question: "What are the fees for MSMEs in Punjab?", answer: "Startups and MSMEs pay a reduced government fee of ₹4,500 per class, compared to ₹9,000 for large entities. An MSME registration certificate is required to claim this concession." },
    { question: "What if someone in Ludhiana uses my brand name?", answer: "A registered trademark allows you to get a stay order (injunction) from the court and seek damages for lost profits from counterfeiters." },
    { question: "How long is the trademark certificate valid?", answer: "It is valid for 10 years and can be renewed every 10 years indefinitely to maintain permanent brand protection." },
    { question: "Does Punjab government provide IP reimbursement?", answer: "Yes, under the Punjab Industrial & Business Development Policy, units can claim reimbursement of patent and trademark registration expenses, often up to 75%." },
    { question: "Is Mohali a separate jurisdiction for trademark?", answer: "No, Mohali businesses also file through the Delhi Registry. We specialize in Class 9 and 42 filings for Mohali's IT and SaaS companies." },
    { question: "Can I register a Phulkari brand from Amritsar?", answer: "Yes, while Phulkari has a GI tag for the community, your specific brand name for Phulkari products can be registered as a trademark in Class 24 or 25." },
    { question: "What documents are needed for Punjab filing?", answer: "You typically need the applicant's name, address, brand logo, description of goods/services, PAN, Aadhaar, and MSME certificate for the fee waiver." },
    { question: "How does IPR Karo help Punjab businesses?", answer: "We combine AI-driven search with local industrial expertise, helping clusters in Ludhiana and Jalandhar build a 'Legal Moat' around their brands." }
];

const reviews = [
    { author: "Gurpreet S.", position: "Manufacturing CEO", content: "IPR Karo helped us secure our cycle brand. The process was fast and they handled all the paperwork for the Delhi Registry flawlessly.", rating: 5 },
    { author: "Harman P.", position: "Export Director", content: "Professional and efficient. They secured our sports equipment brand across multiple classes. Highly recommended for Punjab exporters.", rating: 5 },
    { author: "Rahul V.", position: "SaaS Founder", content: "Great experience for our SaaS startup. They understood the nuances of IT trademarks and filed our app name on the same day.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Punjab Industrial Soul" },
    { id: "ludhiana", title: "Ludhiana Hosiery & Cycle" },
    { id: "jalandhar", title: "Jalandhar Sports & Tools" },
    { id: "amritsar", title: "Amritsar Textiles" },
    { id: "mohali", title: "Mohali IT & SaaS" },
    { id: "gobindgarh", title: "Mandi Gobindgarh Steel" },
    { id: "process", title: "8-Step Filing Journey" },
    { id: "benefits", title: "MSME Policy Benefits" },
    { id: "remedies", title: "Infringement Remedies" },
    { id: "pitfalls", title: "Avoiding Pitfalls" },
    { id: "faqs", title: "Punjab Trademark FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function PunjabPage() {
    const averageRating = 4.9;
    const reviewsCount = 98;

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
        "headline": "Trademark Registration in Punjab: Protecting the Industrial Soul",
        "description": "Expert trademark registration in Punjab. Secure your brand in Ludhiana, Jalandhar, Amritsar, and Mohali with IPR Karo.",
        "image": "https://www.iprkaro.com/assets/punjab-trademark-og.jpg",
        "datePublished": "2024-03-22T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-punjab"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Punjab",
        "image": "https://www.iprkaro.com/assets/punjab-trademark-og.jpg",
        "description": "Professional trademark registration services for Punjab businesses.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": averageRating.toString(),
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
                "ratingValue": r.rating.toString()
            }
        }))
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Punjab</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your industrial legacy in India's frontier of enterprise. From Ludhiana's manufacturing to Mohali's innovation, we secure your brand at the Delhi Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Punjab Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Punjab", href: "/trademark-registration-in-punjab" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Punjab Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Soul of Punjab’s Industrial Enterprise</h2>
                                        <p className="mb-6">Punjab, the land of five rivers and the breadbasket of India, is also a formidable industrial powerhouse characterized by a unique "Cluster-Based" entrepreneurial spirit. From the rhythmic hum of hosiery machines in Ludhiana to the precision work in Jalandhar’s hand-tool units and the spiritual commerce of Amritsar, Punjab’s business landscape is built on hard work and innovation. However, in today’s globalized economy, the physical quality of a product (be it a cycle part, a sports racket, or a woolen shawl) is only half the battle. The other half is the <strong>Brand Identity</strong>.</p>
                                        <p className="mb-6">Trademark registration in Punjab is the legal infrastructure that allows a small unit in Mandi Gobindgarh or a startup in Mohali to transition from a local manufacturer to a national or international brand. It is the shield that ensures your "Ludhiana-quality" or "Jalandhar-precision" is not diluted by counterfeiters or imitators. At IPR Karo, we recognize that a Punjab-based brand represents the city's reputation for industrial resilience. We provide the technical legal support required to secure your identity at the Delhi Trademark Registry, which has jurisdiction over Punjab.</p>
                                    </section>

                                    <section id="ludhiana" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Ludhiana: The Hosiery and Cycle Capital</h2>
                                        <p className="mb-6">Ludhiana is arguably India's most important SME hub. It produces 90% of India’s woolen hosiery and is a global leader in bicycle manufacturing. For a Ludhiana manufacturer, a trademark in <strong>Class 25</strong> (Apparel) and <strong>Class 12</strong> (Vehicles/Cycles) is not just a certificate; it is the most valuable asset in their portfolio.</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>The Challenge</strong>: Because Ludhiana produces in such high volumes, the risk of 'Look-alike' brands is extreme.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>The Solution</strong>: Registering your specific logo, taglines, and even the "Trade Dress" (the combination of colors and fonts) allows you to move the court to stop imitators within 24 hours.</li>
                                        </ul>
                                    </section>

                                    <section id="jalandhar" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Jalandhar: Sports Goods and Hand Tools</h2>
                                        <p className="mb-6">Jalandhar’s sports goods industry supplies to the Olympic and World Cup stages. Whether it's cricket bats, footballs, or hockey sticks, the brand name is the hallmark of quality.</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Trademark in Class 28</strong>: Essential for sports equipment.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Hand Tools in Class 8</strong>: For units exports to Europe and the US, a registered trademark is often a mandatory requirement for international distributors.</li>
                                        </ul>
                                    </section>

                                    <section id="amritsar" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Amritsar: Textiles and Spiritual Commerce</h2>
                                        <p className="mb-6">Amritsar is a massive hub for woolens and embroidery (Phulkari). Protecting the "Amritsar Brand" from inferior products made elsewhere is vital for local weavers.</p>
                                        <p className="mb-6"><strong>Geographical Indications (GI)</strong>: While trademarks protect individual company names, GI tags protect community products like Phulkari. IPR Karo assists businesses in navigating both individual brand protection and collective heritage security.</p>
                                    </section>

                                    <section id="mohali" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Mohali: The IT and SaaS Disruptor</h2>
                                        <p className="mb-6">As part of the Chandigarh Tricity, Mohali is emerging as a global destination for software development and ITES.</p>
                                        <p className="mb-6"><strong>Trademarks in Class 9 & 42</strong>: For SaaS startups, the "Brand" IS the "Product." Securing your app name, software identity, and unique icons is the first step toward venture capital (VC) readiness. We ensure your digital assets are protected against global clones.</p>
                                    </section>

                                    <section id="gobindgarh" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Mandi Gobindgarh: The Iron & Steel Capital of Punjab</h2>
                                        <p className="mb-6">Mandi Gobindgarh is the furnace of Punjab’s industrial economy, housing hundreds of rolling mills and furnace units. In the commoditized world of steel, the brand name is the only differentiator that allows a manufacturer to command a premium price.</p>
                                        <p className="mb-6">For steel units, <strong>Class 6</strong> (Common Metals and their Alloys) is the primary battlefield. Whether you are producing TMT bars, structural steel, or casting products, your brand represents the chemical purity and structural integrity of your metal. IPR Karo helps Gobindgarh’s industrial icons transition from 'Generic Metal' to 'Trusted Brands,' enabling them to win large government tenders and infrastructure projects where only approved brand names are allowed.</p>
                                        <p className="mb-6">We also assist in registering <strong>Collective Marks</strong> for industrial associations in this region, ensuring that 'Mandi Gobindgarh Quality' is a protected standard that imitation units cannot exploit.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />The IPR Karo 8-Step Filing Journey for Punjab</h2>
                                        <p className="mb-10 text-lg">The process of trademark registration is often viewed as bureaucratic, but IPR Karo has digitized it into a high-speed workflow:</p>
                                        <div className="space-y-10">
                                            {[
                                                { step: "1", title: "AI-Driven Deep Search", desc: "We scan millions of records at the Delhi Registry to ensure your brand name doesn't conflict with existing ones. We check for phonetic similarity." },
                                                { step: "2", title: "Strategic Class Selection", desc: "Accurate classification under the Nice system (45 classes) is critical. A mistake here can make your trademark unenforceable." },
                                                { step: "3", title: "MSME/Startup Consultation", desc: "We help you qualify for a 50% government fee waiver via your Udyam or Startup India certificate." },
                                                { step: "4", title: "Drafting Form TM-A", desc: "Our attorneys draft the legal description of your goods/services with precision to avoid 'General Description' objections." },
                                                { step: "5", title: "Electronic Filing", desc: "We file your application within 4 working hours, giving you the ™ symbol instantly." },
                                                { step: "6", title: "Examination Management", desc: "We handle the technical responses to the Delhi Registry if they raise an objection within the first 30 days." },
                                                { step: "7", title: "Journal Publication", desc: "Your mark is published for public review. We monitor this to ensure no competitor tries to block it without merit." },
                                                { step: "8", title: "Registration Certificate", desc: "We deliver your final ® Certificate, valid for 10 years and renewable indefinitely." },
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-8 group">
                                                    <div className="w-14 h-14 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg group-hover:scale-110 transition-transform text-2xl">
                                                        {item.step}
                                                    </div>
                                                    <div className="pt-2">
                                                        <h4 className="font-bold text-xl mb-2 text-gray-900 leading-none">{item.title}</h4>
                                                        <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="benefits" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />MSME Benefits under Punjab Industrial & Business Development Policy 2022</h2>
                                        <p className="mb-6">The Punjab government offers massive incentives to promote intellectual property:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Fee Concession</strong>: Startups and MSMEs pay ₹4,500 instead of ₹9,000.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>IP Reimbursement</strong>: Under various state schemes, units can claim reimbursement of trademark registration expenses (often up to 75% or a fixed cap).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>ZED Certification Support</strong>: We help you align your brand with Zero Defect Zero Effect (ZED) standards.</li>
                                        </ul>
                                    </section>

                                    <section id="remedies" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Legal Remedies for Trademark Infringement in Punjab</h2>
                                        <p className="mb-6">A trademark registration (®) is not just a frame on the wall; it is a powerful legal weapon. In Punjab, where the manufacturing clusters are densly packed, the risk of 'Brand Passing Off' is exceptionally high. If another unit in Punjab uses a name that is 'deceptively similar' to yours, the law provides two main paths for relief:</p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-3 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-5 h-5 mr-2 text-[rgb(110,94,147)]" /> Civil Action</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">You can file a suit in the District Court where you reside or carry out business. You can seek an <strong>Interim Injunction</strong> (stay order), appointment of a Local Commissioner to seize counterfeit goods, and damages for lost profits.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-3 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-5 h-5 mr-2 text-[rgb(110,94,147)]" /> Criminal Action</h4>
                                                <p className="text-sm text-gray-600 leading-relaxed">Applying a false trademark is a cognizable offense under the Trademarks Act, 1999. With a registered trademark, you can initiate a Police Raid against counterfeit units in industrial areas like Phagwara or Ludhiana.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6 italic">“The registration of a trademark shall, if valid, give to the registered proprietor the exclusive right to the use of the trademark.” – Section 28 of the Trademarks Act.</p>
                                        <p className="mb-6">IPR Karo’s litigation support team assists Punjab businesses in gathering the necessary evidence (Invoices, Social Media proofs) to ensure that your legal stand is unshakeable in the eyes of the Punjab Judiciary. We help you move from being a victim of brand theft to a protector of your commercial legacy.</p>
                                    </section>

                                    <section id="pitfalls" className="scroll-mt-32 pt-12 text-gray-700 font-medium">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Avoiding Common Pitfalls in Punjab</h2>
                                        <ul className="list-disc pl-5 space-y-4">
                                            <li><strong>Generic Names</strong>: Avoid names like "Good Cycle" or "Punjab Tools." They are too descriptive and will be rejected.</li>
                                            <li><strong>Geographic Terms</strong>: Using "Ludhiana" as the primary part of your brand name requires proving "Acquired Distinctiveness."</li>
                                            <li><strong>User Affidavit Errors</strong>: If you've been using the brand for years, you must file a User Affidavit. A single mistake in the date can lead to a legal deadlock.</li>
                                        </ul>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">Punjab Trademark FAQ</h2>
                                        <div className="grid gap-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(110,94,147)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start leading-snug">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-10 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-16 border-t border-gray-100">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Why Punjab Trusts IPR Karo</h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div>
                                                        <div className="flex text-yellow-400 mb-4">
                                                            {[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />))}
                                                        </div>
                                                        <p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p>
                                                    </div>
                                                    <div className="flex items-center pt-6 border-t border-gray-200">
                                                        <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 uppercase text-xl shadow-md">{rev.author[0]}</div>
                                                        <div>
                                                            <p className="font-black text-gray-900 text-sm leading-none">{rev.author}</p>
                                                            <p className="text-[10px] uppercase font-bold text-[rgb(110,94,147)] tracking-widest mt-1">{rev.position}</p>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Punjab Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available at the Delhi Registry with our AI search. Get a free Punjab IPR legal report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Punjab Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center text-white">
                                    <Link href="tel:+919289707648" className="font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Punjab Links</h3>
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
