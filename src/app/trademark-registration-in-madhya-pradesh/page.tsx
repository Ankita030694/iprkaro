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
    title: "Trademark Registration in Madhya Pradesh | IPR Karo",
    description: "Expert trademark registration in Madhya Pradesh. Secure your brand in Indore, Bhopal, and Pithampur. 50% government fee rebate for MSMEs.",
    keywords: [
        "trademark registration in madhya pradesh",
        "online trademark filing madhya pradesh",
        "indore brand protection",
        "bhopal engineering trademark",
        "pithampur automotive ip",
        "trademark search mp",
        "mp msme ipr policy",
        "madhya pradesh startup ipr benefits",
        "brand registration indore",
        "namkeen industry trademark indore",
        "pharma cluster ip pithampur",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-madhya-pradesh",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for MP?", answer: "Legally, Madhya Pradesh falls under the jurisdiction of the Mumbai Trademark Registry. However, IPR Karo handles the entire process 100% digitally for our MP clients." },
    { question: "How much is the government fee for MSMEs in MP?", answer: "MSMEs, Individuals, and Startups pay a concessional fee of ₹4,500 per class. For large entities without MSME status, the fee is ₹9,000 per class." },
    { question: "Can I register a brand for Indore Namkeen?", answer: "Yes, Indore's famous food industry is a major user of trademarks. We register brand names in Class 30 to protect unique identities in the snack segment." },
    { question: "How long does the registration take in Madhya Pradesh?", answer: "You can use the ™ symbol immediately after filing (usually under 4 hours). The final registration certificate takes approximately 6-12 months." },
    { question: "What is the ‘Detroit of India’ cluster in MP?", answer: "Pithampur is known as the Detroit of India. We specialize in Class 12 and Class 7 filings for automotive and engineering units in this corridor." },
    { question: "Does MP offer reimbursement for IP filings?", answer: "Yes, under the MP MSME Development Policy 2025 and the Startup MP Policy, businesses can claim significant reimbursement for patent and trademark filing costs." },
    { question: "Can I register an IT brand from Bhopal?", answer: "Absolutely. Bhopal is an emerging IT hub. We register tech platforms and SaaS startups in Class 9 and Class 42 for comprehensive digital protection." },
    { question: "What if someone uses my brand name in MP?", answer: "A registered trademark (®) provides an exclusive national monopoly. You can legally stop any entity from using a deceptively similar mark through the courts." },
    { question: "What documents are required for MP filing?", answer: "You need the applicant's name, brand logo, MSME certificate (for fee rebate), Identity proof, and a description of the goods or services." },
    { question: "Why choose IPR Karo for Madhya Pradesh?", answer: "We understand the 'Mini-Mumbai' speed of Indore and the administrative precision of Bhopal, building 'Corporate Moats' for MP's high-growth enterprises." }
];

const reviews = [
    { author: "Animesh J.", position: "Manufacturing CEO", content: "Securing our Namkeen brand was seamless with IPR Karo. They handled the Mumbai Registry filing on the same day. Professional and fast.", rating: 5 },
    { author: "Priya M.", position: "Tech CEO", content: "Their AI search was very thorough. They helped us navigate the Class 42 requirements for our software brand perfectly.", rating: 5 },
    { author: "Sanjay K.", position: "Operations Head", content: "Exceptional service for our manufacturing unit. They secured our mechanical parts brand in Classes 7 and 12 without any hassle.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Renaissance" },
    { id: "indore", title: "Indore: Commercial Capital" },
    { id: "pithampur", title: "Pithampur Hub" },
    { id: "bhopal", title: "Bhopal: Engineering Hub" },
    { id: "gwalior", title: "Gwalior Industrial Corridor" },
    { id: "process", title: "8-Step Filing Workflow" },
    { id: "benefits", title: "MSME & Startup Policy" },
    { id: "valuation", title: "IP as a Financial Asset" },
    { id: "registry", title: "Mumbai Registry Link" },
    { id: "faqs", title: "MP Trademark FAQ" },
    { id: "reviews", title: "Commercial Trust" },
];

export default function MadhyaPradeshPage() {
    const averageRating = 4.9;
    const reviewsCount = 112;

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
        "headline": "Trademark Registration in Madhya Pradesh: The Industrial Renaissance",
        "description": "Expert trademark registration in Madhya Pradesh. Secure your brand in Indore, Bhopal, and Pithampur with IPR Karo.",
        "image": "https://www.iprkaro.com/assets/mp-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-madhya-pradesh"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Madhya Pradesh",
        "image": "https://www.iprkaro.com/assets/mp-trademark-og.jpg",
        "description": "Professional trademark registration services for Madhya Pradesh businesses.",
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
                "name": "Trademark Registration in Madhya Pradesh",
                "item": "https://www.iprkaro.com/trademark-registration-in-madhya-pradesh"
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Madhya Pradesh</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Secure the commercial heart of India. From Indore's trade to Pithampur's manufacturing, we provide high-speed brand protection at the Mumbai Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start MP Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Madhya Pradesh", href: "/trademark-registration-in-madhya-pradesh" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">MP Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Industrial Renaissance of Madhya Pradesh</h2>
                                        <p className="mb-6">Madhya Pradesh (MP), once primarily agrarian, has transitioned into a diversified industrial powerhouse, now leading the nation in sustainable and high-tech manufacturing. Hosting the 'Detroit of India' and India's cleanest city, MP offers a unique blend of heritage commerce and future-forward innovation. Whether you are a Namkeen manufacturer in Indore, a heavy electrical unit in Bhopal, or a pharma giant in Pithampur, your <strong>Brand Identity</strong> is your most potent competitive weapon.</p>
                                        <p className="mb-6">Trademark registration in Madhya Pradesh is the legal bedrock upon which long-term enterprise value is built. In a market as vast as MP, a registered trademark (®) provides an exclusive national monopoly, ensuring that no other entity can profit from the reputation you have built. At IPR Karo, we bridge the gap between regional excellence and national protection, managing your filings at the Mumbai Trademark Registry, which oversees MP operations.</p>
                                    </section>

                                    <section id="indore" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Indore: The Commercial Capital</h2>
                                        <p className="mb-6">Indore is the beating heart of MP’s economy, famous for its food processing excellence (Indori Namkeen) and textile heritage. The city is a powerhouse of brand generation.</p>
                                        <ul className="list-none space-y-4 mb-8 font-medium">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Trademarks in Class 30</strong>: Vital for food products. Protecting unique brand names for snacks and confectionery is a high-priority legal requirement for Indore’s exporters.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Textiles in Class 25</strong>: Protecting legacy brand names in the clothing and readymade segment ensures your market share in Central India remains secure.</li>
                                        </ul>
                                    </section>

                                    <section id="pithampur" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Pithampur: The Global Automotive and Pharma Hub</h2>
                                        <p className="mb-6">Pithampur is one of India’s most successful industrial corridors, housing global auto giants and a massive pharmaceutical cluster. This high-stakes environment requires premium IP protection.</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Pharma in Class 5</strong>: Precision is non-negotiable. Brand names for medicines must be distinctly different from existing marks to avoid legal rejections.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Automotive in Class 12</strong>: Protecting brand names for auto parts and components is essential for maintaining supply chain integrity.</li>
                                        </ul>
                                    </section>

                                    <section id="bhopal" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Bhopal: The Capital of Engineering and Chemicals</h2>
                                        <p className="mb-6">As the state capital, Bhopal is a major hub for heavy electrical equipment and chemicals, benefiting from proximity to educational institutions and government support.</p>
                                        <p className="mb-6"><strong>Engineering in Class 7</strong>: For units manufacturing machinery and motors, a registered trademark is a badge of technical reliability. We also specialize in <strong>Class 1 (Chemicals)</strong> for specialized product branding for international extensions.</p>
                                    </section>

                                    <section id="gwalior" className="scroll-mt-32 pt-12 font-medium">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Gwalior and Bhind: The Emerging Industrial Corridor</h2>
                                        <p className="mb-6">Gwalior, along with the Malanpur industrial area in Bhind, forms a critical manufacturing corridor in North Madhya Pradesh. This region is a major contributor to the state's textile, food processing, and chemical production.</p>
                                        <p className="mb-6">For businesses in Gwalior, a trademark in <strong>Class 24</strong> (Textiles) or <strong>Class 30</strong> (Processed Foods) is crucial for distinguishing themselves in the competitive North Indian market. We assist local manufacturers in navigating the specific documentation required to prove their brand's legacy, often leveraging their decades-long history of trade in the Gwalior-Chambal region. The registration process at the Mumbai Registry ensures that these regional powerhouses can scale their sales to neighboring states like Rajasthan and Uttar Pradesh without the risk of brand infringement.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />The IPR Karo 8-Step Filing Workflow for MP</h2>
                                        <div className="space-y-10 mt-10">
                                            {[
                                                { step: "1", title: "AI-Conflict Search", desc: "We use proprietary tools to scan the Mumbai Registry's database for phonetic and visual similarities." },
                                                { step: "2", title: "Class Strategy", desc: "We ensure your product is registered in the correct Nice Classification (e.g., Namkeen in Class 30, Software in Class 42)." },
                                                { step: "3", title: "Digital Documentation", desc: "We assist in compiling your Incorporation Certificate, Identity proofs, and MSME certificate for the fee rebate." },
                                                { step: "4", title: "Instant TM Symbol", desc: "We file online and generate your acknowledgment number within 4 hours, allowing you to use ™ immediately." },
                                                { step: "5", title: "Objection Management", desc: "If the Mumbai registrar issues an Examination Report, our attorneys draft a technical response within 24 hours." },
                                                { step: "6", title: "Journal Watch", desc: "We monitor the Trademark Journal to ensure no third party opposes your mark without merit." },
                                                { step: "7", title: "Evidence of Use", desc: "For legacy Indore brands, we draft the 'User Affidavit' to prove prior use, critical for legal dominance." },
                                                { step: "8", title: "® Certification", desc: "We deliver your Registration Certificate, ensuring your brand is a permanent legal asset." },
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

                                    <section id="benefits" className="scroll-mt-32 pt-12 font-medium">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />MSME and Startup MP Policy Benefits</h2>
                                        <p className="mb-6">Madhya Pradesh offers some of India's most aggressive incentives for intellectual property:</p>
                                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                                            <li><strong>MP MSME Development Policy 2025</strong>: Provides extensive support for technology up-gradation and IP protection.</li>
                                            <li><strong>Government Fee Rebate</strong>: MSMEs and startups pay only ₹4,500 (a 50% discount) for filing.</li>
                                            <li><strong>Startup MP Policy 2022/2025</strong>: Offers sustenance allowance, marketing grants, and significant reimbursement for patent and trademark filings.</li>
                                            <li><strong>Infrastructure Support</strong>: Tech-first brands get subsidized power and plug-and-play facilities in MP's industrial parks.</li>
                                        </ul>
                                    </section>

                                    <section id="valuation" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Intellectual Property as a Financial Strategic Asset in MP</h2>
                                        <p className="mb-6">In the modern economic landscape of Madhya Pradesh, a registered trademark (®) is increasingly being recognized not just as a legal shield, but as a <strong>Quantifiable Financial Asset</strong>. For growth-oriented companies in Indore and Bhopal, your brand value can be leveraged for various strategic financial purposes:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Collateral for Bank Loans</strong>: Nationalized and private banks are now more open to accepting 'Intangible Assets' like registered trademarks as secondary collateral for working capital loans under MSME schemes.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Company Valuation for M&A</strong>: If you are looking to sell your business or seek investment from PE/VC firms, a registered trademark significantly inflates your 'Goodwill' value, leading to a higher multiplier for your EBITDA.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Licensing and Franchising</strong>: Your ® allows you to legally license your brand to partners across MP and India, creating a recurring royalty stream without additional manufacturing overhead.</li>
                                        </ul>
                                        <p className="mb-6">IPR Karo’s team doesn't just register your mark; we help you integrate it into your balance sheet. We provide the 'Renewal Watch' and 'Infringement Monitoring' services that maintain the asset's health, ensuring it continues to grow in value as your business expands across Central India.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />The Jurisdictional Link: Mumbai Registry</h2>
                                        <p className="mb-6">Legally, Madhya Pradesh falls under the jurisdiction of the Mumbai office (Antop Hill) for all IP matters. IPR Karo manages this entire jurisdictional link digitally. Our attorneys are experts in the specific examination trends of the Mumbai Registry, ensuring that your MP-based brand is projected with the same legal rigor as the country's financial capital.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">MP Trademark FAQ</h2>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Industry Trust in MP</h2>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">MP Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available with our AI search. Get a free Madhya Pradesh IPR legal report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free MP Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center text-white">
                                    <Link href="tel:+919289707648" className="font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">MP Resources</h3>
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
