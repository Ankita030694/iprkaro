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
    title: "Expert TM Registration in Karnataka | IPR Karo",
    description: "Expert trademark registration in Karnataka. Secure your brand in Bengaluru (Silicon Valley), Mysuru, and Hubballi. 100% IP reimbursement for startups.",
    keywords: [
        "trademark registration in karnataka",
        "online trademark filing karnataka",
        "bengaluru brand protection",
        "mysuru textile trademark",
        "hubballi industrial ip",
        "trademark search karnataka",
        "startup karnataka ipr policy",
        "karnataka industrial policy ipr",
        "brand registration bengaluru",
        "saas trademark bengaluru",
        "biotech ip protection karnataka",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-karnataka",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Karnataka?", answer: "The Intellectual Property Office in Guindy, Chennai, handles the southern jurisdiction, including Karnataka. IPR Karo manages this entire process digitally for our Karnataka clients." },
    { question: "What is the government fee for startups in Karnataka?", answer: "Startups and MSMEs pay a reduced fee of ₹4,500 per class, while large entities pay ₹9,000. Startups recognized by Startup Karnataka can also seek 100% reimbursement." },
    { question: "Can I register my app's icon as a trademark in Bengaluru?", answer: "Yes, app icons and logos are registered as 'Device Marks.' This is highly recommended for Bengaluru's tech startups to protect their UI/UX identity." },
    { question: "How long does the trademark process take in Karnataka?", answer: "The ™ symbol can be used within 4 hours of filing. The final registration certificate (®) typically takes 6-12 months, depending on registry speed." },
    { question: "What are the benefits under Startup Karnataka Policy 2022-27?", answer: "Significant reimbursements are available: up to ₹2 lakh for national patents/trademarks and ₹10 lakh for international filings for recognized startups." },
    { question: "Can I register a brand for Mysuru Silk?", answer: "While Mysuru Silk itself is a GI (Geographical Indication), your specific brand name for silk products can be registered as a trademark in Class 24 or 25." },
    { question: "Do you serve Tier-II cities like Hubballi and Mangaluru?", answer: "Yes, we serve all major industrial nodes including Hubballi-Dharwad, Mangaluru, and Belagavi, providing elite legal protection beyond Bengaluru." },
    { question: "What if a competitor in another state uses my brand name?", answer: "A registered trademark gives you an exclusive monopoly across all of India. You can legally stop any entity from using your mark in any state." },
    { question: "What documents are needed for Karnataka trademark filing?", answer: "Key documents include applicant details, brand logo, MSME/Startup certificate (for fee waiver), Identity proof, and a description of goods/services." },
    { question: "Why is IPR Karo best for Karnataka entrepreneurs?", answer: "We match the tech-first speed of Bengaluru, providing automated monitoring and elite legal precision for the Silicon Valley of India." }
];

const reviews = [
    { author: "Karthik R.", position: "Founder & CEO", content: "IPR Karo matches the speed of a tech startup. They filed our brand in Class 42 within hours. The automated updates were amazing.", rating: 5 },
    { author: "Sneha M.", position: "Brand Owner", content: "Seamless experience. They helped us understand the MSME fee waivers and secured our brand across two classes. Very professional.", rating: 5 },
    { author: "Vijay B.", position: "Managing Director", content: "Exceptional legal support for our manufacturing unit. They secured our mechanical parts brand quickly and transparently.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Digital Frontier" },
    { id: "bengaluru", title: "Bengaluru: Silicon Valley" },
    { id: "mysuru", title: "Mysuru: Diversification" },
    { id: "hubballi", title: "Hubballi: Industrial Node" },
    { id: "coastal", title: "Coastal Karnataka IP" },
    { id: "process", title: "8-Step High-Speed Process" },
    { id: "incentives", title: "Startup Policies" },
    { id: "deeptech", title: "DeepTech & AI IP" },
    { id: "registry", title: "Chennai Registry Link" },
    { id: "faqs", title: "Karnataka Trademark FAQ" },
    { id: "reviews", title: "Client Trust" },
];

export default function KarnatakaPage() {
    const averageRating = 4.9;
    const reviewsCount = 142;

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
        "headline": "Trademark Registration in Karnataka: The Silicon Valley of India",
        "description": "Expert trademark registration in Karnataka. Secure your brand in Bengaluru, Mysuru, and Hubballi with IPR Karo.",
        "image": "https://www.iprkaro.com/assets/karnataka-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-karnataka"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Karnataka",
        "image": "https://www.iprkaro.com/assets/karnataka-trademark-og.jpg",
        "description": "Professional trademark registration services for Karnataka businesses.",
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
                "name": "Trademark Registration in Karnataka",
                "item": "https://www.iprkaro.com/trademark-registration-in-karnataka"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Karnataka</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect the Silicon Valley of India. From Bengaluru's tech to Hubballi's industry, we provide high-speed brand protection at the Chennai Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Karnataka Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Karnataka", href: "/trademark-registration-in-karnataka" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Karnataka Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Frontier of Digital and Industrial Innovation</h2>
                                        <p className="mb-6">Karnataka, the tech-state of India, is the primary engine of India’s digital economy. Leading the nation in IT exports, biotechnology, and aerospace, Karnataka is a global lighthouse for innovation. Whether you are a SaaS founder in Indiranagar, a biotechnology researcher in Electronics City, or a heavy engineering unit in Hubballi, your <strong>Brand Identity</strong> is the most valuable intangible asset you own.</p>
                                        <p className="mb-6">Trademark registration in Karnataka is the formal legal process of securing your brand's future. In an ecosystem where a single name or logo can represent billions of dollars in valuation, a registered trademark (®) provides the essential 'Legal Moat' that protects your intellectual capital from global and domestic competition. At IPR Karo, we specialize in high-speed filings for Karnataka’s elite entrepreneurs, managed through our digital link with the Chennai Trademark Registry.</p>
                                    </section>

                                    <section id="bengaluru" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Bengaluru: The Silicon Valley of India</h2>
                                        <p className="mb-6">Bengaluru is the global hub for startups, SaaS, and deep-tech. In this high-velocity market, brands are the primary driver of customer acquisition and venture capital trust.</p>
                                        <ul className="list-none space-y-4 mb-8 font-medium">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Trademarks in Class 9 & 42</strong>: Absolute must-haves for software, mobile applications, and IT services. We prevent 'Squatting' from competitors.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Retail and E-commerce in Class 35</strong>: For the city's burgeoning D2C brands, protecting the storefront name is critical for national scale.</li>
                                        </ul>
                                    </section>

                                    <section id="mysuru" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mysuru: The Diversification Hub</h2>
                                        <p className="mb-6">Mysuru is rapidly growing into a significant center for electronics, food processing, and heritage textiles. Protecting the 'Mysuru Brand' and its specific company identities is vital for regional growth.</p>
                                        <p className="mb-6"><strong>Textiles and Silk (GI Context)</strong>: While trademarks protect individual company names, GI tags protect community products like Mysuru silk. IPR Karo assists businesses in <strong>Class 24</strong> and <strong>Class 30</strong> filings for confectionery and processed foods segment.</p>
                                    </section>

                                    <section id="hubballi" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Hubballi-Dharwad: Manufacturing and Logistics</h2>
                                        <p className="mb-6">The twin cities are the industrial soul of North Karnataka, excelling in automotive parts and agro-processing. Proper trademarking ensures these units can become authorized global vendors.</p>
                                        <p className="mb-6"><strong>Automotive in Class 12</strong>: Protecting brand names for auto-components and engineering goods. We also handle <strong>Class 39 (Logistics)</strong> for the region's emerging supply chain services. Our presence in the Hubballi-Dharwad cluster ensures that local manufacturers have the legal tools to transition from 'Suppliers' to 'National Brands.'</p>
                                    </section>

                                    <section id="coastal" className="scroll-mt-32 pt-12 font-medium">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Coastal Karnataka and Mangaluru: Maritime & Food Branding</h2>
                                        <p className="mb-6">Mangaluru, with its all-weather port and vibrant commercial ecosystem, is the maritime gateway of Karnataka. The region is world-renowned for its cashew processing, banking heritage, and food tech innovation (Mangalorean cuisine).</p>
                                        <p className="mb-6">For the 'Coastal Powerhouses,' a trademark in <strong>Class 29 and 30</strong> (Processed Foods) and <strong>Class 36</strong> (Financial Services) is the ultimate safeguard. As these businesses scale beyond the Konkan coast, protecting their unique brand names ensures they are not diluted by generic competitors in national markets. IPR Karo assists Mangaluru’s entrepreneurs in securing their legacy names, enabling them to leverage the 'Mangaluru Quality' hallmark across India and the Middle East.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />The IPR Karo 8-Step Process for Karnataka</h2>
                                        <div className="space-y-10 mt-10">
                                            {[
                                                { step: "1", title: "AI-Conflict Analytics", desc: "We perform an exhaustive search of the Guindy Registry's database to identify phonetic and visual similarities." },
                                                { step: "2", title: "Strategic Classification", desc: "We categorize your innovation into the correct Nice class (e.g., Biotech in Class 42, Hardware in Class 9)." },
                                                { step: "3", title: "MSME/Startup Integration", desc: "We attach your certificates to unlock the 50% government fee rebate instantly." },
                                                { step: "4", title: "4-Hour Filing Milestone", desc: "We file your Form TM-A online and generate the application acknowledgment within hours." },
                                                { step: "5", title: "Objection Defense", desc: "Our legal team drafts responses to any Examination Reports using Madras and Karnataka High Court precedents." },
                                                { step: "6", title: "Journal Period Monitoring", desc: "We keep a 24/7 watch on the Trademark Journal during the 4-month opposition window." },
                                                { step: "7", title: "Prior Use Affidavits", desc: "For established Bengaluru brands, we draft evidence-based affidavits to secure 'Prior User' status." },
                                                { step: "8", title: "® Final Registration", desc: "We deliver your official Registration Certificate, making your brand a quantifiable business asset." },
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

                                    <section id="incentives" className="scroll-mt-32 pt-12 font-medium">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Incentives under Startup Karnataka and Industrial Policy</h2>
                                        <p className="mb-6">Karnataka offers some of the world's most supportive environments for IP creators:</p>
                                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                                            <li><strong>Startup Karnataka Policy 2022-2027</strong>: Offers reimbursements up to ₹2 lakh for national and ₹10 lakh for international filings.</li>
                                            <li><strong>Fees Rebate</strong>: Startups and MSMEs pay only ₹4,500 for trademark filing (50% reduction).</li>
                                            <li><strong>Beyond Bengaluru Initiative</strong>: Huge incentives for brands established in Tier-II and Tier-III cities like Mysuru and Mangaluru.</li>
                                            <li><strong>KAIDB Allotment</strong>: Registered MSMEs with active IPR are often prioritized for land allotment.</li>
                                        </ul>
                                    </section>

                                    <section id="deeptech" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />DeepTech and AI: The New IP Frontier in Bengaluru</h2>
                                        <p className="mb-6">In the 'Silicon Valley of India,' the nature of assets has shifted from physical machinery to complex algorithms, neural networks, and AI-driven models. While patents traditionally protect the underlying 'Function,' trademarks protect the 'Recognition' and brand authority of your AI platform in a crowded global marketplace.</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Software-as-a-Brand (SaaB)</strong>: We assist DeepTech firms in registering their platform names as trademarks in Class 9 and 42. This ensures that your AI-driven identities are unique across the global GitHub, App Store, and enterprise software ecosystems, preventing clones from confusing your user base.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Investor Readiness and Valuation</strong>: For startups looking to raise Series A or B funding, a 'Clean IP Report' (showing no trademark conflicts) is a non-negotiable requirement. We provide the thorough search and registration needed to clear legal due diligence with top-tier VC firms.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Global Export Logic</strong>: Many Bengaluru startups serve US and EU markets. We help you use your Indian trademark application as a priority document for international filings under the Madrid Protocol, securing your tech brand globally.</li>
                                        </ul>
                                        <p className="mb-6">IPR Karo's Bengaluru-focused team understands the 'High-Velocity' requirements of tech founders. We ensure your digital trademarks are filed with the same speed at which you push code, providing a seamless legal interface for the state's brightest innovators.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Jurisdictional Hub: Chennai Registry</h2>
                                        <p className="mb-6">The Intellectual Property Office in Guindy, Chennai, handles the southern jurisdiction, including Karnataka. IPR Karo manages this entire process digitally. We match the tech-first speed of Bengaluru, providing automated monitoring and elite legal precision, ensuring that your Karnataka-born innovation is ready for global domination.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">Karnataka Trademark FAQ</h2>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Client Trust in Karnataka</h2>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Karnataka Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available with our AI search. Get a free Karnataka IPR legal report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Karnataka Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center text-white">
                                    <Link href="tel:+919289707648" className="font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648
                                    </Link>
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
