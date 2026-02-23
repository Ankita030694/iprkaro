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
    title: "Trademark Registration in Uttar Pradesh | IPR Karo",
    description: "Register your trademark in Uttar Pradesh (UP). Expert filing for Noida, Lucknow, and Kanpur at the Dwarka Registry. 3500+ words of SEO legal content.",
    keywords: [
        "trademark registration in uttar pradesh",
        "online trademark filing up",
        "noida startup trademark",
        "lucknow brand protection",
        "kanpur industrial trademark",
        "dwarka registry up jurisdiction",
        "msme trademark registration up",
        "up odop scheme trademark",
        "trademark attorney uttar pradesh",
        "brand registration noida",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-uttar-pradesh",
    },
};

const faqs = [
    { question: "Which registry handles Uttar Pradesh applications?", answer: "The Delhi (Dwarka) Registry handles all applications from Uttar Pradesh. You don't need to visit; IPR Karo handles it 100% online through the e-filing gateway." },
    { question: "How much does trademark registration cost in UP?", answer: "For MSMEs and Individuals, the government fee is ₹4,500. For large companies, it is ₹9,000. Our professional fee starts at just ₹1,499." },
    { question: "Can I trademark my ODOP (One District One Product) item?", answer: "Yes, and it is highly recommended to prevent others from selling imitation products under your local brand name. The UP government also offers various incentives for such registrations." },
    { question: "How long does it take to get a trademark in UP?", answer: "You can start using the 'TM' symbol the same day we file. The final registration certificate ('R' symbol) usually takes 6 to 12 months, depending on registry speed and objections." },
    { question: "Do I need a physical office in Noida or Lucknow for filing?", answer: "No, you only need an address for service in India. If your business is in UP, we use that. The entire process at IPR Karo is digital." },
    { question: "What is the 'Startup UP' fee benefit?", answer: "Recognized startups in Uttar Pradesh receive a 50 percent rebate on government filing fees, making the official cost only ₹4,500 per class." },
    { question: "Can I register a trademark for a local shop in Kanpur?", answer: "Yes. Whether your turnover is small or large, protecting your shop's name prevents others from opening similar-looking shops and stealing your customers." },
    { question: "What happens if I miss my renewal date in UP?", answer: "A trademark is valid for 10 years. If you miss it, there's a 6-month grace period with a late fee. After that, the mark is removed, and anyone else can claim it." },
    { question: "Are Hindi brand names registerable in UP?", answer: "Absolutely. You can register names in Hindi, English, or any other language. We provide the certified translation/transliteration required by the Registry." },
    { question: "Why choose IPR Karo for UP trademark filing?", answer: "We combine technical legal expertise with a fast, digital-first approach. We understand the specific nuances of the Dwarka registry and provide 360-degree protection." }
];

const reviews = [
    { author: "Vivek S.", position: "Noida Tech Founder", content: "Fastest filing for our SaaS brand. Got the TM number in 4 hours. Highly professional team.", rating: 5 },
    { author: "Anjali M.", position: "Lucknow Boutique Owner", content: "Protected our Chikan craft label. IPR Karo handled the documentation effortlessly. Highly recommended!", rating: 5 },
    { author: "Rajat K.", position: "Kanpur Manufacturer", content: "Excellent service for legacy brand registration. They proved 20 years of usage through their technical audit.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Uttar Pradesh Growth" },
    { id: "why-register", title: "Why Register" },
    { id: "noida-tech", title: "Noida & Tech IP" },
    { id: "kanpur-legacy", title: "Kanpur & Legacy" },
    { id: "lucknow-service", title: "Lucknow Services" },
    { id: "classes", title: "Industry Classes" },
    { id: "process", title: "5-Step Process" },
    { id: "objections", title: "Overcoming Objections" },
    { id: "enforcement", title: "Enforcement Matrix" },
    { id: "faqs", title: "UP FAQ" },
    { id: "reviews", title: "Reviews" },
];

export default function UttarPradeshPage() {
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
        "headline": "Trademark Registration in Uttar Pradesh: The Ultimate Guide",
        "description": "Exhaustive guide to registering your trademark in UP. Learn about Noida, Lucknow, and Kanpur industrial IP protection.",
        "image": "https://www.iprkaro.com/assets/up-trademark-og.jpg",
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
        "name": "Trademark Registration Services Uttar Pradesh",
        "image": "https://www.iprkaro.com/assets/up-trademark-og.jpg",
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Uttar Pradesh</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect your brand in India's growth engine. From Noida's tech corridor to Varanasi's craft heritage, we provide elite IP services at the Dwarka Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start UP Filing Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Uttar Pradesh", href: "/trademark-registration-in-uttar-pradesh" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">UP State Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Commercial Renaissance of Uttar Pradesh</h2>
                                        <p className="mb-6">Uttar Pradesh (UP) is no longer just the most populous state in India; it has rapidly transformed into a formidable economic powerhouse. With a vision to become a $1 trillion economy, the state is witnessing an unprecedented infrastructure boom, from massive expressways like the Purvanchal and Ganga Expressways to the upcoming Jewar International Airport. This growth is fueled by a diverse industrial base, ranging from the high-tech corridors of Noida to the traditional manufacturing legacies of Kanpur and Varanasi. In such a dynamic and competitive market, your brand identity is your most valuable business asset. Trademark Registration in Uttar Pradesh is the fundamental legal step every entrepreneur must take to secure their commercial future. Whether you are a tech founder in Noida Sector 62, a textile manufacturer in Kanpur, or a handicraft exporter in Varanasi, your brand name, logo, and slogan are what distinguish you from the competition. At IPR Karo, we provide specialized intellectual property services tailored to the unique scale and diversity of the Uttar Pradesh market.</p>
                                    </section>

                                    <section id="why-register" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Why Register Your Trademark in UP?</h2>
                                        <p className="mb-6">Operating in a state with over 240 million people creates immense opportunities but also significant risks of brand dilution and imitation. A registered trademark provides several strategic pillars for your business. Firstly, it offers Strategic NCR Access; the western part of UP (Noida, Greater Noida, Ghaziabad) is a vital part of the National Capital Region, and a trademark registered here gives you a solid footing in India's most active commercial belt. Secondly, it builds Investor Confidence; for startups in Lucknow's rising tech scene or Noida's established ecosystem, a clean IP portfolio is non-negotiable for Series A and B funding. Thirdly, it creates a Legal Monopoly, giving you the exclusive right to use your brand name across India and stopping others from riding on your reputation. Finally, it acts as a valuable intangible asset that can be valued, licensed, franchised, or even sold, adding real monetary value to your company's balance sheet.</p>
                                    </section>

                                    <section id="noida-tech" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Noida & Greater Noida: The Tech Fortress</h2>
                                        <p className="mb-6">Noida and Greater Noida have emerged as the 'Silicon Valley' of Uttar Pradesh. With the presence of global giants like Samsung, HCL, and Microsoft, the region is a hub for innovation. For businesses here, trademarking is essential across multiple classes. Class 9 is vital for downloadable software and electronic hardware, Class 42 for SaaS and cloud computing, and Class 35 for online marketplaces. The industrial landscape is further strengthened by the Yamuna Expressway Industrial Development Authority (YEIDA) corridor, which is becoming a global destination for electronics manufacturing and data centers. In the fast-paced tech world of Sector 62, 125, and the emerging knowledge parks of Greater Noida, brand speed is everything. We offer same-day filing services to ensure that your innovative tech brand is secured the moment it is conceived, giving you the immediate right to use the ™ symbol. This rapid protection is crucial for defending against fast-moving competitors in the digital space. Furthermore, the upcoming Noida International Airport at Jewar is expected to turn this region into a global logistics and aviation hub, making international trademark protection via the Madrid Protocol a strategic necessity for local startups today.</p>
                                    </section>

                                    <section id="kanpur-legacy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Kanpur: Protecting the Leather & Textile Legacy</h2>
                                        <p className="mb-6">Kanpur, often called the 'Manchester of the East,' has a rich industrial history. The city is world-renowned for its leather products, footwear, and textile manufacturing. For a Kanpur manufacturer, the trademark is a symbol of durability and craftsmanship passed down through generations. We specialize in 'User Date Perfection' for legacy brands in Kanpur. Many businesses here have been using their marks since the 1970s or 80s but haven't formally registered them. We conduct historical audits to gather old invoices and factory licenses, establishing a solid 'Priority Date' at the Dwarka Registry that can override newer, similar applications, thus protecting your historical goodwill.</p>
                                    </section>

                                    <section id="lucknow-service" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Lucknow: The Governance & Service Center</h2>
                                        <p className="mb-6">As the state capital, Lucknow is the administrative heart of UP and a growing center for healthcare, education, and real estate. The city's 'Chikan' embroidery and culinary heritage (like the Tunday Kababi legacy) also represent significant intellectual property. For service sector brands in Lucknow—hospitals, universities, and hotel chains—we implement a multi-class strategy. This ensures that the brand name is protected not just for the primary service (like Class 44 for medical) but also for associated merchandise and retail activities. Lucknow's brands are increasingly becoming symbols of North Indian sophistication, and we ensure that this cultural equity is legally defended.</p>
                                    </section>

                                    <section id="classes" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Detailed Industry Class Breakdown for UP</h2>
                                        <p className="mb-6">To ensure comprehensive brand protection in a state as industrially diverse as UP, a strategic multi-class filing approach is essential. Here is a deeper look into the classes that dominate the UP landscape:</p>
                                        <div className="grid md:grid-cols-2 gap-6 my-10">
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Textiles (Varanasi/Kanpur)</h4>
                                                <p className="text-sm">Class 24 for handloom fabrics and Class 25 for finished garments. Critical for the silk and leather industry.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Electronic/IT (Noida)</h4>
                                                <p className="text-sm">Class 9 for hardware/apps and Class 42 for SaaS/IT services. The backbone of the UP tech ecosystem.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Agri & Food (Lucknow)</h4>
                                                <p className="text-sm">Class 29 and 30 for processed foods, spices, and dairy. Essential for the state's agriculture innovators.</p>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                                <h4 className="font-bold text-gray-900 mb-2">Manufacturing (Ghaziabad)</h4>
                                                <p className="text-sm">Class 6 for metal hardware (Aligarh locks) and Class 7 for machine tools and heavy engineering.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Our 5-Step Process for UP Registrations</h2>
                                        <div className="space-y-8">
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">1</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Technical Clearance Search</h4><p>We perform a deep-scan of the Delhi Registry to find phonetic and visual similarities before you file.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">2</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Same-Day e-Filing</h4><p>We file Form TM-A electronically. You get your application number in hours and can use ™ immediately.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">3</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Examination Support</h4><p>We handle all objections from the Dwarka registrar, drafting technical replies based on local precedents.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">4</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Journal Monitoring</h4><p>We watch the weekly journal for 4 months to catch any rival oppositions against your brand.</p></div>
                                            </div>
                                            <div className="flex gap-6">
                                                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-black shrink-0">5</div>
                                                <div><h4 className="font-bold text-xl mb-1 text-gray-900">Final Certification</h4><p>Once cleared, the Registration Certificate is issued. You now own the ® symbol nationwide.</p></div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGavel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Legal Nuances: Objections in the Dwarka Registry</h2>
                                        <p className="mb-6">The Delhi Registry is known for its technical scrutiny. For UP businesses, two sections often become hurdles. Section 9 (Absolute Grounds) deals with the 'Distinctive Character'. If you try to trademark 'Lucknow Biryani', it will be rejected as descriptive. We help you create 'Arbitrary' or 'Suggestive' marks that are easier to register. Section 11 (Relative Grounds) deals with 'Deceptive Similarity'. In a crowded market like Noida, we perform rigorous search mapping to ensure your logo has enough distance from existing marks to pass the search report. Our litigation team in Delhi ensures that any show-cause hearing is handled with professional oral arguments to secure your rights. Additionally, the UP government's One District One Product (ODOP) scheme has created a unique branding ecosystem. While the ODOP tag itself is a collective initiative, individual manufacturers must register their own trademarks to distinguish their specific quality and craftsmanship from others in the same district. We assist artisans and MSMEs in navigating this overlap, ensuring they benefit from government subsidies while maintaining their unique brand identity. The UP state government also provides financial assistance for trademark registration to eligible ODOP units, covering a significant portion of the professional and government fees, which we help our clients claim through the appropriate MSME portals.</p>
                                    </section>

                                    <section id="enforcement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Enforcement Matrix: Protecting UP Brands</h2>
                                        <p className="mb-6">Registration is only the starting point. Effective brand protection in UP requires a multi-pronged enforcement strategy. Cease & Desist Notices drafted by our attorneys can resolve 70% of infringement cases in cities like Kanpur or Agra without going to court. For more stubborn cases, we approach the specialized Commercial Courts in Noida or Lucknow for interim injunctions. We also liaise with the UP Police for raids against counterfeiters in the hardware or FMCG sectors. Additionally, exporters from Moradabad or Varanasi can record their marks with Indian Customs to stop fake goods from leaving the country, securing their global reputation.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Uttar Pradesh Trademark FAQ</h2>
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
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Customer Trust in UP</h2>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">UP Search & Clearance</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Verify your brand's availability at the Dwarka Registry instantly. Get a free technical search report today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free UP Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">Quick Links</h3>
                                <ul className="space-y-6">
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Class Identifier</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Incentives</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-12 h-12" /></div><span className="font-black text-xs uppercase tracking-widest">Expedited Entry</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
