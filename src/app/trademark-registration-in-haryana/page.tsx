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
    title: "Trademark Registration in Haryana | Gurugram & Faridabad - IPR Karo",
    description: "Expert trademark registration in Haryana. Secure your brand in Gurugram, Faridabad, and Panipat. 100% government fee reimbursement support for startups.",
    keywords: [
        "trademark registration in haryana",
        "online trademark filing haryana",
        "gurugram brand protection",
        "faridabad industrial trademark",
        "haryana startup policy ipr",
        "panipat textile trademark",
        "trademark search haryana",
        "ip protection gurgaon",
        "brand registration haryana",
        "startup haryana ipr incentives",
        "bahadurgarh footwear trademark",
        "ambala scientific instruments ip",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-haryana",
    },
};

const faqs = [
    { question: "Which office handles Haryana trademark applications?", answer: "Haryana falls under the jurisdiction of the Delhi Trademark Registry (Dwarka). IPR Karo manages everything online, so you don't need to visit the office." },
    { question: "What are the government incentives for IPR in Haryana?", answer: "The Haryana State Startup Policy 2022 provides up to 100% reimbursement of patent and trademark registration costs, capped at INR 25 Lakhs per startup." },
    { question: "How do I claim the 100% reimbursement in Haryana?", answer: "You must first obtain the registration certificate. Once you have the certificate and the payment proof, you can apply through the H-MSME portal under the IPR Reimbursement scheme." },
    { question: "Is Gurgaon (Gurugram) a separate jurisdiction?", answer: "No, Gurugram businesses file through the Delhi Registry. However, it is the most active city in Haryana for intellectual property filings across IT and services." },
    { question: "What is the government fee for individual applicants in Haryana?", answer: "Individuals, Startups, and MSMEs pay ₹4,500 per class. Large companies without MSME status pay ₹9,000 per class." },
    { question: "How long does it take to get a trademark in Haryana?", answer: "You can use the ™ symbol immediately after filing (usually within 24 hours). The final registration certificate takes approximately 6-12 months." },
    { question: "Can I get a rebate on government fees in Haryana?", answer: "Yes, by providing an MSME (Udyam) certificate or a Startup Haryana recognition certificate, you get a 50% waiver on government fees." },
    { question: "Do you serve industrial areas like IMT Manesar?", answer: "Yes, we serve all major industrial estates including IMT Manesar, Kundli (Sonipat), and Faridabad's manufacturing clusters." },
    { question: "Can I register a trademark for my real estate brand in Gurgaon?", answer: "Yes, real estate services fall under Class 36 or Class 37. Given the competition in Gurgaon, trademark protection is highly recommended." },
    { question: "Why is IPR Karo best for Haryana entrepreneurs?", answer: "We combine AI-speed with local legal expertise to navigate the specific industrial needs of both NCR and interior Haryana clusters like Bahadurgarh and Ambala." }
];

const reviews = [
    { author: "Vikas G.", position: "Gurugram SaaS Founder", content: "Seamless filing for our tech brand. They even helped us with the Haryana Startup Policy reimbursement documents. Exceptional!", rating: 5 },
    { author: "Sunita S.", position: "Panipat Textile Exporter", content: "Protected our carpet brand globally. Highly professional team who understands the textile export business.", rating: 5 },
    { author: "Arjun M.", position: "Faridabad Auto-Parts MD", content: "Quick and transparent process. Their AI search report caught a similar brand we would have missed. Saved us a lot of trouble.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Industrial Gateway" },
    { id: "incentives", title: "Haryana Govt Incentives" },
    { id: "hmsme", title: "H-MSME Portal" },
    { id: "gurugram-it", title: "Gurugram Tech Hub" },
    { id: "faridabad-mfg", title: "Faridabad Manufacturing" },
    { id: "bahadurgarh-footwear", title: "Bahadurgarh Footwear" },
    { id: "ambala-science", title: "Ambala Scientific" },
    { id: "panipat-textile", title: "Panipat Textiles" },
    { id: "registry", title: "Delhi Registry" },
    { id: "process", title: "Registration Process" },
    { id: "faqs", title: "Haryana FAQ" },
    { id: "reviews", title: "Client Reviews" },
];

export default function HaryanaPage() {
    const averageRating = 4.9;
    const reviewsCount = 124;

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
        "headline": "Trademark Registration in Haryana: India's Industrial Gateway",
        "description": "Expert trademark registration in Haryana. Secure your brand in Gurugram, Faridabad, and Panipat with IPR Karo.",
        "image": "https://www.iprkaro.com/assets/haryana-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-haryana"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Haryana",
        "image": "https://www.iprkaro.com/assets/haryana-trademark-og.jpg",
        "description": "Professional trademark registration services for Haryana businesses.",
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Haryana</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your industrial legacy in India's leading startup and manufacturing hub. From Gurugram's tech towers to Panipat's exports, we secure your brand at the Delhi Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Haryana Filing
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Haryana", href: "/trademark-registration-in-haryana" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Haryana Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Haryana: India's Industrial Gateway</h2>
                                        <p className="mb-6">Haryana has transformed from an agrarian state into a powerhouse of modern commerce and innovation. Strategically encircling the national capital on three sides, the state has leveraged its geography to become a global hub for Information Technology, Automobile manufacturing, and high-end textiles. From the high-rise corporate towers of Gurugram (Gurgaon) to the massive industrial estates of Faridabad, Haryana is the ground zero for business growth in North India. In this hyper-competitive market, your brand identity is your most valuable asset. Trademark Registration in Haryana is not just a legal requirement but a strategic necessity to prevent brand confusion and protect your market share in the National Capital Region (NCR).</p>
                                    </section>

                                    <section id="incentives" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Haryana State Startup Policy 2022: IPR Incentives</h2>
                                        <p className="mb-6">The Haryana government is one of the most proactive proponents of Intellectual Property Rights in India. Under the Haryana State Startup Policy 2022, startups recognized by the state government can avail of remarkable fiscal benefits to protect their innovations:</p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>100% Reimbursement</strong> of patent and trademark registration costs (up to INR 25 Lakhs per startup).</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Seed Grants</strong> of up to INR 10 Lakh for prototype development and validation of early-stage ideas.</li>
                                            <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-green-500 mt-1 mr-3 shrink-0" /> <strong>Lease Rental Support</strong> covering 30% to 45% of rental costs for startups operating in Haryana.</li>
                                        </ul>
                                    </section>

                                    <section id="hmsme" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The H-MSME Portal and IPR Facilitation</h2>
                                        <p className="mb-6">For small businesses in Ambala, Rohtak, and Panchkula, the Haryana government has launched the <strong>H-MSME portal</strong>. This digital gateway allows businesses to apply for 100% IPR cost reimbursement easily. Under the Haryana Enterprises Promotion Policy (HEEP 2020), the state has established sector-focused IPR facilitation centers. These centers guide MSMEs through the complexities of trademark searches and filings, ensuring that even the smallest units in interior Haryana can protect their brand legacy with the same legal rigor as global corporations in Gurugram.</p>
                                    </section>

                                    <section id="gurugram-it" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Gurugram: The Silicon Valley of North India</h2>
                                        <p className="mb-6">Gurugram hosting more than 250 of the Fortune 500 companies, it is a global destination for SaaS, Fintech, and IT services. Branding in Gurugram is about premium perception. Whether it is a luxury real estate project on Golf Course Road or a tech disruptor in Cyber City, a registered trademark (®) provides the institutional trust required to attract global investors and high-value clients. Given the high concentration of digital startups, we specialize in Class 9 (Software), Class 42 (IT Services), and Class 35 (E-commerce) filings for our Gurugram clients.</p>
                                    </section>

                                    <section id="faridabad-mfg" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Faridabad: The Manufacturing Heart</h2>
                                        <p className="mb-6">Faridabad is the industrial soul of Haryana, known for its heavy engineering, automobile components, and home appliance manufacturing clusters. For Faridabad's SME and MSME units, a trademark is a shield against the counterfeiting of machine tools and spare parts. Protecting your 'Trade Dress' and brand name in Class 7 (Machines), Class 11 (Appliances), and Class 12 (Vehicles) ensures that your engineering reputation is never diluted by inferior copies.</p>
                                    </section>

                                    <section id="bahadurgarh-footwear" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Bahadurgarh: The Footwear City of India</h2>
                                        <p className="mb-6">Bahadurgarh has emerged as one of the largest footwear manufacturing hubs globally. With units ranging from small MSMEs to massive production plants, the region faces a high risk of 'Look-alike' brands. For Bahadurgarh manufacturers, protecting the logo and trade dress in Class 25 is vital. A registered trademark allows these units to prevent counterfeiters in local markets from copying their unique sole designs or brand names, securing their dominance in the Indian footwear market.</p>
                                    </section>

                                    <section id="ambala-science" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Ambala: The Scientific Instruments Hub</h2>
                                        <p className="mb-6">Ambala is Asia’s largest market for scientific and surgical instruments, housing over 800 units. For these precision-based businesses, a trademark is a badge of quality. Registration in Class 9 and Class 10 is mandatory for Ambala's exporters to maintain their reputation in international labs and hospitals. IPR Karo assists these manufacturers in securing nationwide coverage, preventing others from using 'Ambala-generic' names that could dilute their specific brand value in global scientific communities.</p>
                                    </section>

                                    <section id="panipat-textile" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Panipat & Sonipat: Global Exports</h2>
                                        <p className="mb-6">Panipat's textile world-class products and Sonipat's growing food processing hubs (Rai & Kundli) are major export contributors. For businesses in these zones, an Indian trademark is the prerequisite for international brand expansion. Under the Madrid Protocol, your Haryana-based trademark serve as the platform to seek protection in over 120 countries. We help Panipat's weavers and Sonipat's agri-entrepreneurs secure their identities in Class 24 (Textiles) and Class 30 (Food Products) for a global audience.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />The Jurisdictional Hub: Delhi Registry (Dwarka)</h2>
                                        <p className="mb-6">All trademark applications for Haryana are processed by the Delhi Trademark Registry, located in Dwarka. This is one of India's most advanced registries. IPR Karo maintains a seamless digital link with the Delhi Registry, enabling same-day e-filing. Our attorneys are experts in the specific examination trends of the Delhi Registry, allowing us to proactively address potential objections regarding 'Prohibited Marks' or 'Deceptive Similarity' unique to the North Indian market.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">The IPR Karo 5-Step Process for Haryana</h2>
                                        <div className="space-y-8">
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">1</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">AI-Powered Deep Search</h4><p>We scan millions of records at the Delhi Registry to ensure your brand name is 100% unique.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">2</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">MSME/Startup Consultation</h4><p>We help you identify if you qualify for the 50% government fee waiver and 100% cost reimbursement via H-MSME portal.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">3</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Instant e-Filing</h4><p>Using our digital gateway, we file your application and give you the ™ symbol in under 24 hours.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">4</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Proactive Monitoring</h4><p>We keep a weekly watch on the Trademark Journal to block any competitors trying to copy your brand.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">5</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Final Certification</h4><p>We handle all legal responses to the Registry until you receive your final Registration Certificate (®).</p></div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Haryana Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Industry Trust in Haryana</h2>
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
                                </article>
                            </div>
                        </main>

                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Haryana IP Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available at the Delhi Registry with our AI search. Get a free Haryana IPR legal report.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Haryana Search</button>
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
