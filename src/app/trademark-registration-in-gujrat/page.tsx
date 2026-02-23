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
    faGem,
    faShip,
    faFlask,
    faCoins,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Gujarat | Secure Your Brand in India's Business Hub",
    description: "Expert trademark registration in Gujarat. Protect your brand in Ahmedabad, Surat, and GIFT City. Elite filing for Diamonds, Pharma, and Textiles. 4000+ words guide, RIPS indexing, and 4-hour filing acknowledgment.",
    keywords: [
        "trademark registration in Gujarat",
        "online trademark filing Gujarat",
        "brand protection Gujarat",
        "ahmedabad trademark registry",
        "GIFT city trademark registration",
        "surat diamond trademark",
        "vibrant gujarat ipr",
        "pharma trademark gujarat",
        "textile logo registration surat",
        "msme trademark subsidy gujarat",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-gujrat",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Gujarat located?", answer: "The Trademark Registry for Gujarat is located in Ahmedabad. It handles all applications from Gujarat, Rajasthan, and the Union Territories of Daman, Diu, and Dadra & Nagar Haveli. IPR Karo handles the entire Ahmedabad Registry process digitally for you." },
    { question: "What is the government fee for trademark registration in Gujarat?", answer: "For individuals, startups, and MSMEs (Udyam registered), the online government fee is INR 4500 per class. For other entities like companies or LLPs, the fee is INR 9000 per class." },
    { question: "Can I use the 'TM' symbol immediately after filing in Surat?", answer: "Yes, as soon as IPR Karo completes your electronic filing and generates the official receipt (usually within 4 hours), you can legally use the ™ symbol next to your brand name or logo anywhere in Gujarat." },
    { question: "How does the 'Gujarat Textile Policy 2024' help with IP?", answer: "The Gujarat Textile Policy 2024 provides significant support for quality certification and technology acquisition. While trademarks are separate, having a registered brand is critical for textile units to claim subsidies and participate in global exhibitions." },
    { question: "What are the benefits of trademarking in GIFT City?", answer: "GIFT City is a hub for fintech and global finance. Trademarking your fintech brand or software identity is essential for protecting your digital assets in the International Financial Services Centre (IFSC) environment." },
    { question: "Is a prior trademark search necessary for Ahmedabad-based businesses?", answer: "Absolutely. A comprehensive search of the Ahmedabad Trademark Registry database is vital to identify existing phonetically similar marks, preventing legal objections and saving months of registry delays." },
    { question: "How long is a registered trademark valid in Gujarat?", answer: "A registered trademark is valid for 10 years from the date of the original application. It can be renewed every 10 years via the Ahmedabad Registry to maintain your exclusive monopoly indefinitely." },
    { question: "Can a Rajkot-based manufacturing unit claim MSME trademark subsidies?", answer: "Yes, Rajkot's engineering and manufacturing MSMEs can claim a 50 percent rebate on government fees for trademark filing by using their Udyam registration certificate." },
    { question: "What documents are needed for a private limited company in Ahmedabad?", answer: "A company needs its Certificate of Incorporation, PAN card, Board Resolution, the brand logo, and a signed Power of Attorney (TM-48) which IPR Karo prepares for you." },
    { question: "How long until I get the final trademark certificate (®)?", answer: "The process typically takes 6 to 12 months if there are no registry objections or third-party oppositions. Once the R certificate is issued, you can use the ® symbol." },
    { question: "Can I register a trademark for my pharmaceutical brand in Vadodara?", answer: "Yes, pharma brands are highly sensitive. Registering your brand in Class 5 is non-negotiable for Vadodara's pharma hub to prevent 'look-alike' drugs and brand tarnishment." },
    { question: "What if my trademark application is opposed by a competitor?", answer: "If an opposition occurs during the 4-month journal period, IPR Karo's legal team drafts a counter-statement and defends your mark in hearings before the Registrar in Ahmedabad." }
];

const reviews = [
    { author: "Hitesh P.", position: "CEO", content: "IPR Karo secured our Ahmedabad-based tech brand in record time. Their digital first approach matches Gujarat's business speed. Highly recommended for startups!", rating: 5 },
    { author: "Zalak S.", position: "Founder", content: "Protected our Surat textile brand for exports to the US. The process was seamless and the team handled all registry queries perfectly.", rating: 5 },
    { author: "Aman V.", position: "Business Owner", content: "Secured our Vadodara pharma brand across 4 classes. Their expertise in the Ahmedabad Registry's nuances is truly elite. Best IP services in Gujarat.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Gujarat's Business Frontier" },
    { id: "registry", title: "The Ahmedabad Registry" },
    { id: "diamonds", title: "Surat: Diamond & Textile IP" },
    { id: "pharma", title: "Pharma Hubs IP Protection" },
    { id: "gift-city", title: "Fintech & GIFT City IP" },
    { id: "msme", title: "MSME & Startup Subsidies" },
    { id: "process", title: "The 8-Step Filing Journey" },
    { id: "checklist", title: "Documents Checklist" },
    { id: "search", title: "AI Search Power" },
    { id: "legal", title: "Infringement Remedies" },
    { id: "classification", title: "Strategic Class Selection" },
    { id: "global", title: "Export & Madrid Protocol" },
    { id: "maintenance", title: "Asset Maintenance" },
    { id: "future", title: "Brand as a Capital Asset" },
    { id: "faqs", title: "Gujarat Trademark FAQ" },
    { id: "reviews", title: "Success Stories" },
];

export default function GujaratPage() {
    const averageRating = 4.9;
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
        "headline": "Trademark Registration in Gujarat: Protecting the Business Powerhouse",
        "description": "The definitive guide to trademark registration in Gujarat. Expert brand protection for Ahmedabad, Surat, Vadodara, and GIFT City. Secure your IP at the Ahmedabad Registry.",
        "image": "https://www.iprkaro.com/assets/gujarat-trademark-og.jpg",
        "datePublished": "2024-03-27T08:00:00+05:30",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-gujrat"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Gujarat",
        "image": "https://www.iprkaro.com/assets/gujarat-trademark-og.jpg",
        "description": "Professional trademark registration services for Gujarat-based enterprises and startups.",
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
                "name": "Trademark Registration in Gujarat",
                "item": "https://www.iprkaro.com/trademark-registration-in-gujrat"
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
            "availableLanguage": ["en", "hi", "gu"]
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Gujarat</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect the Business Powerhouse of India. From Ahmedabad's pharma hubs to Surat's diamond markets and GIFT City's fintech, we secure Gujarat's global brand dominance.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing Gujarat
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Gujarat", href: "/trademark-registration-in-gujrat" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Gujarat Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Gujarat: The Business Frontier of India</h2>
                                        <p className="mb-6">Gujarat, the engine room of India's growth and the global gateway for entrepreneurs, is home to a unique business culture characterized by speed, scale, and strategic vision. From the industrial behemoths of Ahmedabad and Vadodara to the glittering diamond hubs of Surat and the futuristic fintech corridors of GIFT City, Gujarat is where brands become global powerhouses. In this high-stakes environment, your intellectual property (IP) is your most defensive and offensive weapon. Trademark registration in Gujarat is the formal process of building your "Legal Moat," ensuring your brand identity is protected under the Trade Marks Act, 1999.</p>
                                        <p className="mb-6">At IPR Karo, we mirror the "Vibrant Gujarat" spirit by providing tech-first, elite legal protection for the state's most ambitious brands. Whether you are a Rajkot-based MSME manufacturing high-precision engineering parts or a Gandhinagar tech startup, your brand name, logo, and slogan are the assets that contain your business's reputation and customer trust. Secure them today to build a legacy that transcends borders.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Ahmedabad Registry: The IP Epicenter</h2>
                                        <p className="mb-6">For any business in Gujarat, the Intellectual Property Office in Ahmedabad is the jurisdictional heart. This regional registry, one of only five in India, handles all trademark applications from the states of Gujarat and Rajasthan. Being physically located in Ahmedabad provides Gujarat-based businesses with a unique advantage, as administrative hearings and official queries are handled within the state's own business capital.</p>
                                        <p className="mb-6">IPR Karo's digital infrastructure is deeply integrated with the Ahmedabad Registry's electronic filing system. We ensure that your application for registration is drafted with meticulous attention to the specific Examination Guidelines of the Ahmedabad office. By managing the entire process online, we secure your priority filing status within 4 hours, allowing you to use the ™ symbol immediately and establishing your legal claim against any potential infringers across the country.</p>
                                    </section>

                                    <section id="diamonds" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGem} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Surat: Diamond and Textile IP Dominance</h2>
                                        <p className="mb-6">Surat is the global capital for diamond cutting and polishing, and the primary manufacturing hub for India's textile industry. In these sectors, brands are the ultimate signifiers of quality and ethical sourcing. Diamond traders in Varachha and textile giants in Pandesara know that a registered trademark in Class 14 (Jewelry) and Class 24 (Textiles) is essential for international trust and retail expansion.</p>
                                        <p className="mb-6">The recently unveiled <strong>Gujarat Textile Policy 2024</strong> emphasizes quality standards and global competition. A registered trademark allows Surat's manufacturers to transition from "Anonymous Suppliers" to "Recognized Brands," enabling them to capture higher margins in exports and organized retail. We help Surat's entrepreneurs protect their unique logos and sub-brands, ensuring they are not diluted by generic competitors in the massive global marketplace.</p>
                                    </section>

                                    <section id="pharma" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faFlask} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Pharma Hubs: Vadodara and Ahmedabad IP Safety</h2>
                                        <p className="mb-6">Gujarat accounts for nearly 30 percent of India's pharmaceutical production and 40 percent of its pharma exports. In the lifesaving world of medicine, brand identity is life-critical. Pharmaceutical trademarks in Class 5 are subject to the highest levels of scrutiny to prevent "Confusingly Similar" drug names that could lead to medical errors. For Vadodara and Ahmedabad's pharma giants, a registered trademark is the primary defense against counterfeiters and generic look-alikes.</p>
                                        <p className="mb-6">Our legal team specialize in the complex "Phonetic and Visual" search requirements for the pharma sector. We perform exhaustive audits of the Ahmedabad Registry to ensure your drug brand name is not just unique but also distinctive enough to pass the stringent "Search Report" criteria of the Controller General. Protecting your pharma IP in Gujarat isn't just a business move; it is a commitment to patient safety and brand integrity.</p>
                                    </section>

                                    <section id="gift-city" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faCoins} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />GIFT City: Protecting the Future of Fintech</h2>
                                        <p className="mb-6">GIFT City (Gujarat International Finance Tec-City) is India's flagship Smart City and International Financial Services Centre (IFSC). As a hub for global banking, insurance, and the emerging fintech sector, brand protection in GIFT City is focused on digital assets, software identities, and financial service names. In the world of high-velocity fintech, your digital brand is your storefront.</p>
                                        <p className="mb-6">Registering trademarks in Class 9 (Software) and Class 36 (Financial Services) is a mandatory requirement for fintech startups in GIFT City to attract venture capital and build consumer trust. A registered trademark at the Ahmedabad Registry provides the legal foundation needed for a "Clean IP Report," which is often a non-negotiable condition for Series A and B funding. IPR Karo assists GIFT City's innovators in securing their digital brands with the same tech-forward speed at which they build their platforms.</p>
                                    </section>

                                    <section id="msme" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME and Startup Subsidies in Gujarat</h2>
                                        <p className="mb-6">The Government of Gujarat is world-renowned for its pro-business policies. Under the current Industrial Policy, the state provides proactive financial support for startups and MSMEs to protect their intellectual property. Registered manufacturing units and startups in Gujarat can claim significant reimbursements for trademark and patent filing costs, emphasizing the state's push towards an "Innovation-Led Economy."</p>
                                        <p className="mb-6">By utilizing your Udyam (MSME) registration or Startup India recognition, IPR Karo helps you unlock a 50 percent rebate on government fees. Instead of the standard fee of INR 9000, eligible Gujarat-based applicants pay only INR 4500 per class. These cost savings allow entrepreneurs to protect their brands across multiple relevant classes (like manufacturing, retail, and service) without exhausting their operational capital.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10 font-bold">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />50% Gov Fee Rebate for MSMEs</li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />Startup Gujarat IP Support</li>
                                        </ul>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step High-Speed Process for Gujarat</h2>
                                        <p className="mb-6">We match the business velocity of Gujarat with a streamlined 8-step filing journey at the Ahmedabad Registry:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Smart Availability Check", desc: "Our AI scans the Ahmedabad Registry for any phonetic, visual, or conceptual similarities." },
                                                { step: "2", title: "Strategic Classification", desc: "Expert selection from the 45 Nice classes (e.g., Pharma in Class 5, Textiles in Class 24)." },
                                                { step: "3", title: "Udyam/MSME Rebate", desc: "We integrate your certificates to instantly slash government fees by 50 percent." },
                                                { step: "4", title: "Digital Filing (Form TM-A)", desc: "Electronic submission to the Ahmedabad office, securing your priority within hours." },
                                                { step: "5", title: "Examination Management", desc: "Drafting technical responses to examination reports to overcome registry objections." },
                                                { step: "6", title: "Trademark Journal Entry", desc: "Your brand is advertised to the world for a 4-month public opposition period." },
                                                { step: "7", title: "Opposition Defense", desc: "Our legal team defends your rights against any third-party claims during the notice window." },
                                                { step: "8", title: "Registration Certificate", desc: "We deliver your digital certificate, officially granting you the use of the ® symbol." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl">{item.step}</div>
                                                    <div><h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4><p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Documentation for Gujarat Filing</h2>
                                        <p className="mb-6">To facilitate a high-speed filing at the Ahmedabad Registry, please keep the following documents ready for our team:</p>
                                        <div className="bg-indigo-50/50 p-8 rounded-[3.5rem] border border-indigo-100 mb-10">
                                            <ul className="space-y-4 list-none font-medium">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Brand Asset:</strong> High-resolution JPEG or PNG of your logo or font-specific brand name.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>ID Proof:</strong> Aadhaar Card, PAN Card, or Voter ID of the individual or authorized signatory.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Business Proof:</strong> Certificate of Incorporation, GST Registration, or Partnership Deed.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>MSME/Startup Certificate:</strong> Essential to claim the 50 percent government fee subsidy.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>User Affidavit:</strong> Required if the brand has been used prior to the current application date.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Power of Attorney (TM-48):</strong> A standardized authorization form we provide for your signature.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="search" className="scroll-mt-32 pt-12">
                                        <div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                                            <h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest text-[#FFB703]">Gujarat AI Trademark Search</h2>
                                            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't risk your brand on a guess. Our AI scan detects phonetic, visual, and conceptual similarities across millions of records in the Ahmedabad Registry.</p>
                                            <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Get Free Search Report</button></Link>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Infringement Remedies in Gujarat</h2>
                                        <p className="mb-6 font-bold text-gray-800">Commercial Courts and Injunctions:</p>
                                        <p className="mb-6">Gujarat has a specialized and highly efficient system of Commercial Courts (e.g., in Ahmedabad, Vadodara, and Surat) designed for the rapid resolution of IP disputes. A registered trademark is prerequisites for filing an infringement suit. It allows you to seek "Ad-Interim Injunctions," which can stop a competitor from using your name within days of filing, protecting your market share during the trial. The registration certificate serves as definitive proof of ownership in any Gujarat court.</p>
                                        <p className="mb-6 font-bold text-gray-800">Criminal Action and Police Raids:</p>
                                        <p className="mb-6">The Trade Marks Act also provides for criminal search and seizure. For established retail brands in Gujarat, we assist in obtaining search warrants to conduct police raids on counterfeit manufacturers. This is especially critical for Gujarat's FMCG, chemical, and apparel sectors, where "First Copies" and counterfeits can tarnish a brand's hard-earned credibility and safety record.</p>
                                    </section>

                                    <section id="classification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Strategic Classification for Gujarat Sectors</h2>
                                        <p className="mb-6">The success of your brand protection depends on choosing the correct categories from the 45 international Nice classes. For Gujarat's economy, we focus on:</p>
                                        <div className="grid md:grid-cols-2 gap-6 my-10">
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 14: Diamond & Jewelry</h4><p className="text-sm text-gray-600">Non-negotiable for Surat's gems and Jaipur's jewelry exports.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">14</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 5: Pharma & BioTech</h4><p className="text-sm text-gray-600">Stringent protection for medicines and biological products.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">05</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 24 & 25: Textiles & Apparel</h4><p className="text-sm text-gray-600">Protecting Surat's fabrics and Ahmedabad's garment brands.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">24</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 35: E-commerce & Retail</h4><p className="text-sm text-gray-600">Essential for multi-brand storefronts and digital marketplaces.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">35</div></div>
                                        </div>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Global Export and the Madrid Protocol</h2>
                                        <p className="mb-6">Gujarat is India's export powerhouse, accounting for over 30 percent of the nation's total exports. Whether it is industrial pumps from Rajkot or ceramic tiles from Morbi, global brand protection is a mandatory requirement for international trade. Through the **Madrid Protocol**, we can use your Ahmedabad Registry application as a priority base to file for protection in over 120 countries (including the US, EU, and Middle East) via a single application to WIPO.</p>
                                        <p className="mb-6">This international system is highly cost-efficient, allowing Gujarat's exporters to bypass the need for hiring local attorneys in every target country. We manage the entire international lifecycle, ensuring your brand is as legally secure on the docks of Dubai as it is in the markets of Rajkot. Your global expansion starts with a rock-solid Indian trademark registration.</p>
                                    </section>

                                    <section id="maintenance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Asset Maintenance and Timely Renewals</h2>
                                        <p className="mb-6">A trademark in India is valid for 10 years. In the high-velocity world of Gujarat's industry, it is easy for busy CEOs to miss renewal deadlines. If a mark is not renewed, it is "Removed" from the register, allowing competitors to hijack your brand name and legal priority. At IPR Karo, we provide automated monitoring for our Gujarat clients to ensure their rights never expire.</p>
                                        <p className="mb-6">We handle the filing of "Form TM-R" and the payment of renewal fees to maintain your exclusive monopoly indefinitely. A trademark is one of the few business assets that can technically last forever, becoming a legacy for your future generations. Many of Gujarat's most respected business houses have maintained their trademarks for over 50 years through disciplined maintenance and timely renewals.</p>
                                    </section>

                                    <section id="future" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Brand as a Strategic Capital Asset</h2>
                                        <p className="mb-6">In the modern knowledge economy, a registered trademark is more than just a legal document; it is "Strategic Capital Wealth." It is a measurable intangible asset that adds significant value to your company's balance sheet. For Gujarat's industrial units planning for an IPO or seeking venture funding in GIFT City, a clean IP portfolio is the key to achieving a higher valuation and attracting premium partners.</p>
                                        <p className="mb-6">A registered trademark also enables you to enter into high-value licensing and franchising agreements, creating passive income streams from your brand's reputation. At IPR Karo, we don't just file trademarks; we help you build corporate fortresses. We provide the legal precision needed to protect the soul of your enterprise, ensuring that your innovations in Gujarat remain exclusively your assets, now and forever.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">Gujarat Trademark Registration FAQ</h2>
                                        <div className="grid gap-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
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

                                    <section id="reviews" className="scroll-mt-32 pt-20 border-t border-gray-100">
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Client Trust in Gujarat</h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Gujarat Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available in the Ahmedabad Registry. Get a free elite legal report for your Gujarat enterprise.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Gujarat Search</button>
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
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Gateway</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative z-10">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Vibrant Gujarat Brand Security</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite IP Protection <br /> for Gujarat's Powerhouses</h2>
                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join thousands of Gujarat's most successful pharmaceutical, textile, and fintech brands protected by India's tech-first IP experts. Get your official TM filed at the Ahmedabad Registry within 24 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact-us">
                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Gujarat Expert</button>
                                </Link>
                                <a href="tel:+919289707648">
                                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648
                                    </button>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
