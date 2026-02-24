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
    faLeaf,
    faGem,
    faHotel,
    faUtensils,
    faTractor,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Rajasthan | IPR Karo",
    description: "Secure your brand in Rajasthan with IPR Karo. Expert filing for handicrafts, tourism, textiles, and tech at the Ahmedabad Registry. 4000+ words guide, 4-hour filing, and RIPS 2024 benefits.",
    keywords: [
        "trademark registration in Rajasthan",
        "online trademark filing Rajasthan",
        "brand protection Rajasthan",
        "ahmedabad trademark registry rajasthan",
        "istart rajasthan trademark",
        "rips 2024 trademark subsidy",
        "logo registration Jaipur",
        "ipr consultants Jodhpur",
        "handicraft trademark rajasthan",
        "tourism brand protection rajasthan",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-rajasthan",
    },
};

const faqs = [
    { question: "Which office handles Trademark Registration for Rajasthan?", answer: "All trademark applications from Rajasthan are processed by the Ahmedabad Trademark Registry. While the physical registry is in Gujarat, the entire process is handled 100 percent online by IPR Karo, ensuring you don't need to leave Rajasthan." },
    { question: "What is the government fee for trademark registration in Rajasthan?", answer: "For individuals, startups, and MSMEs (Udyam registered), the government fee is INR 4500 per class for online filing. For large companies and other entities, the fee is INR 9000 per class." },
    { question: "Can I use the 'TM' symbol after filing in Rajasthan?", answer: "Yes, once IPR Karo files your application and provides the official acknowledgment (usually within 4 hours), you can immediately start using the ™ symbol next to your brand name or logo." },
    { question: "What is the RIPS 2024 benefit for trademark filing?", answer: "Under the Rajasthan Investment Promotion Scheme (RIPS) 2024, eligible businesses can claim a 50 percent reimbursement of the costs incurred for acquiring trademarks and patents, up to a limit of INR 1 crore for R&D units." },
    { question: "How does the 'iStart Rajasthan' program help with IP?", answer: "Startups registered under iStart are eligible for various IP support measures, including monthly sustenance allowances which can be used to fund brand protection and marketing commercialization." },
    { question: "Is a trademark search mandatory before registration in Rajasthan?", answer: "While not legally mandatory, a search is critical. It identifies if your chosen name is similar to any existing marks in the Ahmedabad Registry, preventing legal notices and application rejection." },
    { question: "How long is a trademark valid in Rajasthan?", answer: "A registered trademark is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the prescribed renewal fees." },
    { question: "Can I trademark a traditional Rajasthani handicraft design?", answer: "Unique logos or brand names for handicrafts can be trademarked. However, for protecting the traditional craft of a specific region (like Blue Pottery of Jaipur), a Geographical Indication (GI) tag is more appropriate." },
    { question: "What documents are required for an individual applicant in Jaipur?", answer: "An individual needs their Aadhaar Card, PAN Card, the brand logo, and a Power of Attorney (TM-48) form which we provide for signing." },
    { question: "How long does it take to get the final registration certificate?", answer: "If there are no objections or oppositions, it takes 6 to 12 months. Once registered, you will receive a digital certificate from the registry and can use the ® symbol." },
    { question: "Can I register a trademark for my Rajasthan-based tourism startup?", answer: "Yes, tourism services (resorts, travel agencies) are usually registered under Class 39 or Class 43. This is essential for protecting your online identity on booking platforms." },
    { question: "What if someone opposes my trademark in Rajasthan?", answer: "If an opposition is filed during the 4-month journal period, our legal team will draft a counter-statement and represent you in hearings at the Ahmedabad Registry to defend your rights." }
];

const reviews = [
    { author: "Vikram S.", position: "CEO", content: "IPR Karo secured our Jaipur-based jewelry brand across 3 classes. The RIPS 2024 advisory was a massive help. Highly professional!", rating: 5 },
    { author: "Anjali R.", position: "Founder", content: "Fast and digital. We got our TM acknowledgment by the afternoon. Perfect for the fast-paced startup culture in Rajasthan.", rating: 5 },
    { author: "Rajesh K.", position: "Business Owner", content: "Protected our traditional textile brand for the global market. Their understanding of the Ahmedabad Registry's nuances is elite.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Rajasthan's Brand Heritage" },
    { id: "importance", title: "Why Register in Rajasthan?" },
    { id: "ahmedabad-registry", title: "The Ahmedabad Jurisdiction" },
    { id: "handicrafts", title: "Handicrafts & Textiles" },
    { id: "tourism", title: "Tourism & Hospitality" },
    { id: "mining", title: "Mining & Industrial IP" },
    { id: "startups", title: "iStart & RIPS 2024" },
    { id: "process", title: "The 8-Step Journey" },
    { id: "documents", title: "Filing Checklists" },
    { id: "search", title: "AI Search Power" },
    { id: "legal", title: "Infringement Remedies" },
    { id: "global", title: "International Scaling" },
    { id: "renewals", title: "Asset Maintenance" },
    { id: "future", title: "IP as Corporate Wealth" },
    { id: "faqs", title: "Rajasthan FAQ" },
    { id: "reviews", title: "Client Stories" },
];

export default function RajasthanPage() {
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
        "headline": "Trademark Registration in Rajasthan: Protecting the Land of Kings",
        "description": "Expert guide on trademark registration in Rajasthan. From Jaipur's handicrafts to Jodhpur's tech startups, we provide elite brand protection via the Ahmedabad Registry.",
        "image": "https://www.iprkaro.com/assets/rajasthan-trademark-og.jpg",
        "datePublished": "2024-03-26T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-rajasthan"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Rajasthan",
        "image": "https://www.iprkaro.com/assets/rajasthan-trademark-og.jpg",
        "description": "Professional trademark registration services for businesses in Rajasthan.",
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
                "item": "https://www.iprkaro.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Trademark Registration in Rajasthan",
                "item": "https://www.iprkaro.com/trademark-registration-in-rajasthan"
            }
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "IPR Karo",
        "url": "https://www.iprkaro.com",
        "logo": "https://www.iprkaro.com/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-9289707648",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
            "https://www.facebook.com/iprkaro",
            "https://www.twitter.com/iprkaro",
            "https://www.instagram.com/iprkaro",
            "https://www.linkedin.com/company/iprkaro"
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            <div className="relative w-full overflow-hidden"
                style={{
                    background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                }}>
                <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white uppercase tracking-tighter">
                        Trademark Registration <br />
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Rajasthan</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Secure your brand in the Land of Kings. From Jaipur's handicrafts to Jodhpur's startups, we build the legal moat for Rajasthan's rising enterprises.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing Rajasthan
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Rajasthan", href: "/trademark-registration-in-rajasthan" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Rajasthan Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Rajasthan's Brand Heritage</h2>
                                        <p className="mb-6">Rajasthan, the vibrant land of forts, palaces, and a thousand years of heritage, is undergoing a profound economic transformation. While its traditional strengths in handicrafts, textiles, and jewelry remain global benchmarks, a new era of technology startups and industrial innovation is rising in cities like Jaipur, Jodhpur, and Udaipur. In this competitive landscape, your brand is not just a name; it is the embodiment of your business integrity and market value. Trademark registration in Rajasthan has become the non-negotiable first step for any entrepreneur aiming to protect their identity and scale their vision across India and the world.</p>
                                        <p className="mb-6">At IPR Karo, we understand the soul of Rajasthan's enterprise. Whether you are preserving an ancient handicraft legacy or launching a disruptive fintech platform, your intellectual property is your most valuable asset. The "Trademark Moat" we build for your business ensures that your creative efforts, marketing investments, and reputation remain exclusively yours, protected by the full force of the Trade Marks Act, 1999.</p>
                                    </section>
                                    <section id="importance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Strategic Importance of Brand Protection</h2>
                                        <p className="mb-6">For a Rajasthan-based business, a trademark is the definitive mark of authenticity. In markets saturated with imitations, the Registered symbol (®) acts as a legal beacon, signaling to customers and rivals alike that your brand is protected. It provides the owner with a national monopoly, preventing others from using similar names, logos, or slogans in the same industry. This protection is vital for Rajasthan's diverse economy, ranging from high-end hospitality and gemstone trading to massive solar energy projects and cement manufacturing.</p>
                                        <p className="mb-6">A registered trademark also transforms your brand into a quantifiable business asset. It can be valued, licensed for royalties, franchised across the state, or even sold like physical property. For startups seeking capital in Jaipur's growing VC ecosystem, a clean intellectual property report is often a prerequisite for serious investment and due diligence. Protecting your brand today is the simplest way to build multi-generational corporate wealth tomorrow.</p>
                                    </section>
                                    <section id="ahmedabad-registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Ahmedabad Registry: Jurisdiction for Rajasthan</h2>
                                        <p className="mb-6">A common point of confusion for entrepreneurs in Rajasthan is the location of their trademark office. While Rajasthan has specialized centers for MSME and startups, all formal trademark applications originating from the state fall under the jurisdiction of the Ahmedabad Trademark Registry. This regional office, located in Gujarat, is the legal hub for examining, publishing, and hearing trademark matters for all districts of Rajasthan, from Bikaner to Banswara.</p>
                                        <p className="mb-6">Despite the physical office being in Ahmedabad, the entire filing process is now 100 percent digital. At IPR Karo, we leverage this digitalization to file your Rajasthan trademark applications directly from our tech-enabled platform. We handle all responses to the Ahmedabad office examiners, ensuring that your application is drafted with the technical precision required to pass the examination phase without unnecessary delays or objections. Your brand gets its priority status within hours, regardless of the physical distance from the registry.</p>
                                    </section>
                                    <section id="handicrafts" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGem} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Handicrafts & Textiles: Protecting the Artisanal Brand</h2>
                                        <p className="mb-6">Rajasthan is the heart of India's handicraft and textile sector. Blue Pottery, Block Printing, Marble Carving, and Bandhani are not just crafts; they are global brands. For manufacturers and exporters in Jaipur or Sanganer, trademark registration in Class 24 (Textiles) and Class 21 (Houseware) is the primary shield against global copycats. While the "Style" might be regional, the "Brand" you use to sell these products is your private intellectual property.</p>
                                        <p className="mb-6">We specialize in helping Rajasthani artisans and retailers move beyond being commodity suppliers to becoming recognized brand names. By protecting your unique logo and name, you can command a premium price on international e-commerce platforms like Etsy and Amazon. This protection prevents unauthorized agents from using your reputation to sell inferior quality products, thereby maintaining the sanctity of Rajasthan's artisanal excellence.</p>
                                    </section>
                                    <section id="tourism" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faHotel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tourism & Hospitality: Branding the Royal Experience</h2>
                                        <p className="mb-6">Tourism is the lifeblood of Rajasthan's economy. From heritage hotel chains in Udaipur to boutique desert camps in Jaisalmer, "Experience Branding" is the core of customer acquisition. In the digital age, where bookings are driven by online reputations, a registered trademark is essential for protecting your digital identity. Class 43 (Accommodations and Food) and Class 39 (Travel Services) are the critical categories for Rajasthan's hospitality kings.</p>
                                        <p className="mb-6">A registered trademark allows resort owners to take down fraudulent websites and social media profiles that use their name to scam tourists. It also protects unique service names or slogans that define your hospitality brand. IPR Karo works with Rajasthan's hoteliers to build comprehensive IP portfolios that cover their names, logos, and even unique "Trade Dress" (the specific look and feel of a brand) to prevent imitation in other tourist circuits.</p>
                                    </section>
                                    <section id="mining" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mining & Industrial IP: Protecting the Supply Chain</h2>
                                        <p className="mb-6">Rajasthan leads India in the production of marble, granite, silver, and zinc. For the industrial giants and mining units based in Jodhpur or Bhilwara, a trademark is the hallmark of quality in the global supply chain. In the industrial sector, brands are used to differentiate the purity, strength, and reliability of materials. Registering these brands in Class 19 (Building Materials) or Class 1 (Chemicals) ensures that your market share is protected from substandard competitors using confusingly similar names.</p>
                                        <p className="mb-6">For the mining sector, trademarking also facilitates easier entry into international markets. Global construction firms and distributors seek brands that have a verified legal standing. We help Rajasthan's industrial players secure their marks at the Ahmedabad Registry, providing the documentation needed to verify ownership during large-scale tenders and export contracts.</p>
                                    </section>
                                    <section id="startups" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />iStart and RIPS 2024: Massive IP Benefits</h2>
                                        <p className="mb-6">The Government of Rajasthan, through its "iStart" program and the Rajasthan Investment Promotion Scheme (RIPS) 2024, offers some of the most aggressive incentives for IP creation in India. Startups registered in the state are eligible for significant financial support for protect their brands. RIPS 2024 specifically provides a 50 percent reimbursement of costs incurred for acquiring trademarks and patents, marking a major boost for the state's knowledge economy.</p>
                                        <p className="mb-6">At IPR Karo, we handle the technical filing and documentation required to unlock these benefits. We ensure that your startup is correctly recognized by the central government (DPIIT) and the state's MSME department to claim the 50 percent government fee rebate. Instead of paying INR 9000, eligible Rajasthan entrepreneurs pay only INR 4500 per class. These cost savings allow young founders to protect their brand across multiple relevant classes (like software, retail, and hardware) without draining their bootstrap capital.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">50% Gov Fee Rebate</span></li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" /><span className="font-bold">iStart IP Support</span></li>
                                        </ul>
                                    </section>
                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step Filing Journey</h2>
                                        <p className="mb-6">Navigating the trademark system doesn't have to be complicated. Our standardized high-speed process for Rajasthan includes:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Public Search", desc: "We scan the Ahmedabad Registry records for phonetic and visual similarities." },
                                                { step: "2", title: "Class Identification", desc: "Accurate selection from 45 Nice classes based on your Rajasthan business model." },
                                                { step: "3", title: "Rebate Verification", desc: "Attaching MSME/Startup certificates to instantly reduce government fees by 50 percent." },
                                                { step: "4", title: "Form TM-A Filing", desc: "Digital submission to the IP India portal, securing your priority date within hours." },
                                                { step: "5", title: "Examination Response", desc: "Drafting technical replies to any objections raised by the registry examiners." },
                                                { step: "6", title: "Journal Publication", desc: "Your brand is advertised in the official Trademark Journal for a 4-month public window." },
                                                { step: "7", title: "Opposition Management", desc: "Our attorneys defend your brand against any third-party claims during the notice period." },
                                                { step: "8", title: "Final Registration", desc: "We deliver your digital Registration Certificate, allowing use of the ® symbol." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-4">
                                                    <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                                    <div><h4 className="font-bold text-gray-900">{item.title}</h4><p className="text-sm text-gray-600">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                    <section id="documents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Documents Required for Rajasthan Registration</h2>
                                        <p className="mb-6">To ensure a smooth and speedy filing at the Ahmedabad Registry, please keep the following documents ready for our team:</p>
                                        <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mb-10">
                                            <ul className="space-y-4 list-none">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Brand Asset:</strong> A high-resolution JPEG or PNG of your logo or brand name.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>ID & Address Proof:</strong> Aadhaar Card, PAN Card, or Passport of the applicant.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Business Registration:</strong> Incorporation certificate, Partnership deed, or GST certificate.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Power of Attorney (TM-48):</strong> A simple authorization form provided by IPR Karo.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>MSME/Startup Certificate:</strong> Essential for claiming the 50 percent government fee rebate.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>User Affidavit:</strong> Required if the brand has been in use prior to the date of filing.</li>
                                            </ul>
                                        </div>
                                    </section>
                                    <section id="search" className="scroll-mt-32 pt-12">
                                        <div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                                            <h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest text-[#FFB703]">Rajasthan AI Trademark Search</h2>
                                            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't guess with your brand. Our AI engine scans millions of records at the Ahmedabad Registry for phonetic and visual conflicts.</p>
                                            <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Get Free Search Report</button></Link>
                                        </div>
                                    </section>
                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Legal Framework & Infringement Remedies</h2>
                                        <p className="mb-6 font-bold text-gray-800">Civil Remedies and Interim Relief:</p>
                                        <p className="mb-6">In the event of brand infringement in Rajasthan, owners can seek relief through specialized Commercial Courts. A registered trademark grants you the right to seek "Interim Injunctions," stop a competitor from using your brand almost immediately while the final case is pending. The registration certificate serves as prima facie evidence of your ownership, significantly lowering the burden of proof in court compared to unregistered marks.</p>
                                        <p className="mb-6 font-bold text-gray-800">Criminal Enforcement and Raids:</p>
                                        <p className="mb-6">The Trade Marks Act also provides for criminal search and seizure. With a registered trademark, you can move the local police in Jaipur or Jodhpur to conduct raids and seize counterfeit goods. IPR Karo assists businesses in obtaining "Anton Piller" orders, which allow legal teams to enter an infringer’s premises without prior notice to secure evidence of counterfeiting. This is essential for protecting established retail and industrial brands in Rajasthan.</p>
                                    </section>
                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Madrid Protocol: International Scaling</h2>
                                        <p className="mb-6">Rajasthan’s economy is deeply export-driven. Whether it is gemstones for New York or handicrafts for the Middle East, international brand protection is a mandatory requirement for global trade. Through the Madrid Protocol, we can use your Indian trademark application as a base to file for protection in over 120 countries simultaneously through a single application to WIPO (World Intellectual Property Organization).</p>
                                        <p className="mb-6">This international system is highly cost-effective, allowing you to pay a centralized set of fees in Swiss Francs instead of hiring local attorneys in every country. We manage the entire international lifecycle for our Rajasthan clients, ensuring that their brand identity is as secure in the global markets as it is in Rajasthan. Global expansion begins with a solid Indian trademark registration.</p>
                                    </section>
                                    <section id="renewals" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Asset Maintenance and Renewals</h2>
                                        <p className="mb-6">A trademark in India is valid for 10 years. In the busy world of industrial production and startup growth, it is easy to forget renewal deadlines. If a trademark is not renewed within the prescribed window, it is "Removed" from the register, leaving your brand open to hijacking by competitors. At IPR Karo, we provide automated renewal monitoring to ensure our Rajasthan clients never lose their valuable legal priority.</p>
                                        <p className="mb-6">We handle the filing of "Form TM-R" and the payment of renewal fees to maintain your rights indefinitely. A trademark is one of the few assets that can theoretically last forever, provided it is renewed every decade. Many of Rajasthan’s heritage business houses have maintained their brands for over 50 years through disciplined lifecycle management and timely renewals. We ensure your legacy brand remains a permanent asset for your future generations.</p>
                                    </section>
                                    <section id="future" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />IP as Strategic Corporate Wealth</h2>
                                        <p className="mb-6">In the modern economy, a registered trademark is more than just a legal certificate; it is "Strategic Corporate Wealth." It is a measurable intangible asset that adds value to your balance sheet. For Rajasthan entrepreneurs planning a franchise model or an international joint venture, a registered brand name is the core driver of valuation. It allows you to enter into licensing agreements, creating passive income streams from your brand reputation.</p>
                                        <p className="mb-6">We provide intellectual property audit and valuation services that help Rajasthan businesses quantify the worth of their mark. Whether you are an industrial unit in Bhilwara or a tech startup in Jaipur's Smart City, your trademark portfolio is the key to negotiating better deals and attracting high-value partnerships. At IPR Karo, we don't just file trademarks; we help you build corporate fortresses through technical legal protection.</p>
                                    </section>
                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)]">Expert Insights: Rajasthan Trademark FAQ</h2>
                                        <div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"><h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start leading-snug"><span className="text-[rgb(110,94,147)] mr-4 font-black text-2xl">Q.</span>{faq.question}</h3><p className="text-gray-600 pl-10 leading-relaxed text-base md:text-lg">{faq.answer}</p></div>))}</div>
                                    </section>
                                    <section id="reviews" className="scroll-mt-32 pt-16">
                                        <h2 className="text-3xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest">Trust of Rajasthan's Elite Brands</h2>
                                        <div className="grid md:grid-cols-3 gap-8">{reviews.map((rev, idx) => (<div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between group h-full"><div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div><div><div className="flex text-yellow-400 mb-4">{[...Array(rev.rating)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />))}</div><p className="text-gray-700 italic mb-10 text-lg leading-relaxed font-medium">"{rev.content}"</p></div><div className="flex items-center pt-6 border-t border-gray-200"><div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-black mr-4 text-xl">{rev.author[0]}</div><div><p className="font-black text-gray-900 text-sm leading-none mb-1">{rev.author}</p><p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{rev.position}</p></div></div></div>))}</div>
                                    </section>
                                </article>
                            </div>
                        </main>
                        <aside className="hidden lg:block space-y-8 sticky top-32">
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group"><div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div><h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Free Brand Search in Rajasthan</h3><p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Discover if your jewelry, tech, or hospitality name is available at the Ahmedabad Registry. Get a comprehensive legal report from our elite attorneys.</p>
                                <Link href="/contact-us" className="block relative z-10"><button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Get Free Report</button></Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center"><a href="tel:+919289707648" className="text-white font-black text-xl hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3" /> +91 928 970 7648</a></div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100"><h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3><ul className="space-y-6"><li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li><li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li><li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li></ul></div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div><div className="relative z-10"><span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your Identity in Rajasthan</span><h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Brand Protection <br /> for Rajasthan's Enterprises</h2><p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join thousands of Rajasthan's heritage and tech brands protected by India's tech-first IP experts. Get your official TM application filed at the Ahmedabad Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center"><Link href="/contact-us"><button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Rajasthan Expert</button></Link><a href="tel:+919289707648"><button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn"><FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648</button></a></div>
                        </div>
                    </section>
                </div></div>
        </>
    );
}
