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
    faLeaf,
    faHotel,
    faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Trademark Registration in Jammu & Kashmir | IPR Karo",
    description: "Expert trademark registration in Jammu & Kashmir. Secure your brand identity for Pashmina, Saffron, and Tourism. Elite filing under Delhi Registry. 4000+ words guide and 24-hour filing acknowledgment.",
    keywords: [
        "trademark registration in jammu and kashmir",
        "online trademark filing J&K",
        "pashmina brand protection kashmir",
        "saffron trademark registration",
        "J&K startup policy 2024 trademark",
        "horticultural brand protection J&K",
        "msme trademark subsidy kashmir",
        "logo registration srinagar",
        "intellectual property jammu",
        "delhi registry jurisdiction j&k",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-jammu-and-kashmir",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Jammu & Kashmir located?", answer: "The Trademark Registry for Jammu & Kashmir is located in Delhi (Dwarka). It handles all applications from J&K, Punjab, Haryana, and Delhi. IPR Karo manages the entire Delhi Registry process digitally for you." },
    { question: "What is the government fee for trademark registration in J&K?", answer: "For individuals, startups, and MSMEs (Udyam registered), the online government fee is INR 4500 per class. For companies or LLPs, the fee is INR 9000 per class." },
    { question: "Can I use the 'TM' symbol immediately after filing in Srinagar?", answer: "Yes, as soon as IPR Karo completes your electronic filing and generates the official receipt (typically within 4 hours), you can legally use the ™ symbol next to your brand name or logo anywhere in J&K." },
    { question: "How does the 'J&K Startup Policy 2024' help with IP?", answer: "The New J&K Startup Policy 2024-27 provides seed funding of up to INR 20 lakh and significant IP support, including patent filing assistance. Registering your trademark is essential to qualify as an innovative startup." },
    { question: "Is a GI tag different from a trademark for Pashmina?", answer: "Yes, a GI Tag protects a product category's origin (like Kashmiri Pashmina), whereas a trademark protects your specific brand name or logo (like 'Saffron Heritage'). Both are critical for J&K exporters." },
    { question: "Is a prior trademark search necessary for J&K businesses?", answer: "Absolutely. A comprehensive search of the Delhi Trademark Registry database is vital to identify existing phonetically similar marks, preventing legal objections and saving months of registry delays." },
    { question: "How long is a registered trademark valid in Jammu & Kashmir?", answer: "A registered trademark is valid for 10 years from the date of the original application. It can be renewed every 10 years via the Delhi Registry to maintain your exclusive monopoly indefinitely." },
    { question: "Can a guesthouse in Gulmarg register its brand name?", answer: "Yes, hospitality businesses can register trademarks in Class 43. This is vital in J&K's tourism-driven economy to prevent others from using your establishment's name." },
    { question: "What documents are needed for a boutique firm in Jammu?", answer: "You need identity proof (Aadhaar/PAN), business address proof, the brand logo, and a signed Power of Attorney (TM-48) which IPR Karo prepares for you." },
    { question: "How long until I get the final trademark certificate (®)?", answer: "The process typically takes 6 to 12 months if there are no registry objections or third-party oppositions. Once the R certificate is issued, you can use the ® symbol." },
    { question: "Can I register a trademark for my apple orchard brand in Sopore?", answer: "Yes, branding your produce in Classes 31 and 29 is a powerful way to command premium prices and protect your reputation in the national horticulture market." },
    { question: "What if my trademark application is opposed by a competitor?", answer: "If an opposition occurs, IPR Karo's legal team drafts a counter-statement and defends your mark in hearings before the Registrar at the Delhi office (Dwarka)." }
];

const reviews = [
    { author: "Ishfaq B.", position: "CEO", content: "IPR Karo secured our Pashmina export brand in record time. Their digital process bypassed all geographical barriers. Best IP services for J&K!", rating: 5 },
    { author: "Mehak G.", position: "Founder", content: "Protected our Jammu-based tech startup under the 2024 policy. The team was professional and handled the Delhi Registry perfectly.", rating: 5 },
    { author: "Suhail R.", position: "Business Owner", content: "Secured our hospitality brand in Srinagar. Their understanding of the unique IP needs of the tourism sector is exceptional. Highly recommend.", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "J&K's Economic Renaissance" },
    { id: "registry", title: "Delhi Registry Jurisdiction" },
    { id: "startup-policy", title: "Startup Policy 2024-27" },
    { id: "heritage", title: "Pashmina & Handicrafts IP" },
    { id: "gi-tags", title: "GI Tag vs Trademark" },
    { id: "horticulture", title: "Horticulture & Saffron IP" },
    { id: "tourism", title: "Hospitality & Tourism IP" },
    { id: "msme", title: "MSME & Startup Subsidies" },
    { id: "process", title: "The 8-Step Filing Journey" },
    { id: "checklist", title: "Documents Checklist" },
    { id: "search", title: "AI Search Power" },
    { id: "legal", title: "Infringement Remedies" },
    { id: "classification", title: "Strategic Class Selection" },
    { id: "global", title: "MADRID Protocol & Exports" },
    { id: "maintenance", title: "Asset Maintenance" },
    { id: "future", title: "Brand as a Capital Asset" },
    { id: "faqs", title: "J&K Trademark FAQ" },
    { id: "reviews", title: "Success Stories" },
];

export default function JKPage() {
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
        "headline": "Trademark Registration in Jammu & Kashmir: Building Global Brands in the Himalayas",
        "description": "The definitive guide to trademark registration in Jammu & Kashmir. Expert brand protection for Pashmina, Saffron, Tourism, and Startups. Secure your IP at the Delhi Registry.",
        "image": "https://www.iprkaro.com/assets/jk-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-jammu-and-kashmir"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Jammu & Kashmir",
        "image": "https://www.iprkaro.com/assets/jk-trademark-og.jpg",
        "description": "Professional trademark registration services for J&K-based enterprises, artisans, and startups.",
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
                "name": "Trademark Registration in Jammu & Kashmir",
                "item": "https://www.iprkaro.com/trademark-registration-in-jammu-and-kashmir"
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
            "availableLanguage": ["en", "hi", "ur"]
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Jammu & Kashmir</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Build a Global Legacy in the Land of GI Tags. From Saffron and Pashmina to the 2024 Startup Renaissance, we secure the intellectual soul of Jammu and Kashmir.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing J&K
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Jammu & Kashmir", href: "/trademark-registration-in-jammu-and-kashmir" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">J&K IP Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Jammu & Kashmir: An Economic Renaissance</h2>
                                        <p className="mb-6">Jammu & Kashmir is witnessing an unprecedented economic transformation, moving from a land of traditional excellence to a modern hub of innovation and global trade. The union territory is now fertile ground for a new generation of entrepreneurs, artisans, and tech visionaries. From the world-famous saffron fields of Pulwama and the pashmina looms of Srinagar to the industrial hubs of Samba and the burgeoning tech scene in Jammu, the "IP soul" of the region is more valuable than ever. Trademark registration in Jammu & Kashmir is the definitive legal process of building your "Brand Fortress," ensuring your unique identity is protected under the Trade Marks Act, 1999.</p>
                                        <p className="mb-6">At IPR Karo, we understand that J&K's brands are often rooted in centuries-old heritage but targeted at a 21st-century global audience. Whether you are an artisan collective preserving traditional crafts or a high-tech startup emerging from a local incubator, your brand name, logo, and slogan represent the trust and quality associated with the Himalayas. Securing a trademark grants you an exclusive monopoly over these symbols, preventing others from exploiting your hard-earned reputation.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Delhi Registry: Territorial Jurisdiction for J&K</h2>
                                        <p className="mb-6">For any business or individual operating in Jammu & Kashmir, the primary office for intellectual property protection is the Trademark Registry in Delhi (located in Dwarka). This regional registry holds territorial jurisdiction over the states of North India, including J&K, Punjab, Haryana, and Delhi. While the entire filing process is now handled digitally, any official hearings or administrative disputes are assigned to the Delhi office.</p>
                                        <p className="mb-6">IPR Karo's technical infrastructure is deeply integrated with the Delhi Registry's electronic filing system. We eliminate all geographical barriers, allowing J&K's entrepreneurs to file for protection from the comfort of their offices in Srinagar or Jammu. By securing your priority filing status within 4 hours, we enable you to use the ™ symbol immediately, establishing your legal claim across all 28 states and 8 union territories of India.</p>
                                    </section>

                                    <section id="startup-policy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faSeedling} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />New J&K Startup Policy 2024-27: A New Frontier</h2>
                                        <p className="mb-6">Launched in March 2024, the <strong>New Jammu & Kashmir Start-up Policy 2024-27</strong> is a visionary initiative designed to establish the region as a leading startup ecosystem by 2027. With a target of fostering 2,000 new startups, the policy offers one-time seed funding of up to INR 20 lakh and significant grants for early-stage commercialization. Crucially, the policy includes proactive provisions for Intellectual Property (IP) support and patent-related assistance.</p>
                                        <p className="mb-6">A registered trademark is the fundamental requirement for any startup seeking to capitalize on these government incentives. It serves as proof of original innovation and protects the brand equity needed to attract venture capital from the new INR 250 Crore Venture Fund. Whether you are a biotech firm in Jammu or a sustainable fashion startup in Srinagar, your trademark is the asset that validates your participation in J&K's new economic era.</p>
                                    </section>

                                    <section id="heritage" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGem} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Heritage Protection: Pashmina and Handicrafts IP</h2>
                                        <p className="mb-6">Kashmiri handicrafts, including Pashmina shawls, Kani shawls, and Paper Mache, are the global benchmarks for luxury and craftsmanship. In these sectors, your brand is the consumer's only guarantee of "Real vs. Fake." As global markets become flooded with machine-made imitations, a registered trademark in Class 24 (Textiles) or Class 27 (Carpets) is the primary tool for artisans to command a premium price and protect their legacy.</p>
                                        <p className="mb-6">We assist J&K's master craftsmen and co-operative societies in securing their unique logos and family brand names. A registered trademark allows you to transition from a generic supplier to a "Legacy House," enabling you to sell directly to global boutiques and high-end consumers from New York to London with the legal authority of the Government of India behind you.</p>
                                    </section>

                                    <section id="gi-tags" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />GI Tag Integration: Protecting Regional Identity</h2>
                                        <p className="mb-6">Jammu & Kashmir is a leader in Geographical Indication (GI) tags, with over 18 crafts and products already holding GI status, including Saffron, Pashmina, and Solai Honey. While a GI tag protects the regional origin of a product category, a trademark protects your specific company's brand name within that category. For example, the GI tag ensures it is "Kashmir Saffron," but your trademark ensures it is "Company X's Premium Kashmir Saffron."</p>
                                        <p className="mb-6">The J&K administration is actively pursuing more GI tags (aiming for all 63 notified crafts) to preserve cultural heritage. IPR Karo specializes in the dual protection of regional identity and corporate branding. We ensure your individual brand is strategically registered to complement the collective strength of J&K's GI-tagged assets, maximizing your market dominance in high-value exports.</p>
                                    </section>

                                    <section id="horticulture" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Horticulture and Saffron IP: Branding the Harvest</h2>
                                        <p className="mb-6">Horticulture is the backbone of J&K's rural economy, contributing nearly 8 percent to the UT's GDP. From the vast apple orchards of North Kashmir to the walnut grooves of Jammu, branding is becoming the key to price command. In the absence of a registered trademark, J&K's world-class produce is often sold as generic "Indian Fruit," with middlemen capturing most of the value.</p>
                                        <p className="mb-6">Registering trademarks in Class 31 (Fresh Produce) and Class 29 (Processed Foods) allows orchard owners and FPOs (Farmer Producer Organizations) to build direct-to-consumer brands. A registered brand for your apples or saffron ensures that your unique quality—whether it is organic, high-altitude, or specific variety—is recognized and rewarded by health-conscious consumers globally.</p>
                                    </section>

                                    <section id="tourism" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faHotel} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Tourism and Hospitality: Protecting the Experience</h2>
                                        <p className="mb-6">Tourism is the face of Jammu & Kashmir, with the region hosting millions of travelers annually in Gulmarg, Pahalgam, and Sonamarg. In the age of digital bookings and social media, your establishment's name is your most valuable online asset. Houseboats, boutique hotels, and trekking agencies spend years building a reputation for hospitality. A registered trademark in Class 43 (Services) is necessary to prevent others from using your famous name to divert bookings.</p>
                                        <p className="mb-6">A registered trademark also provides the legal basis to stop "Copy-Cat" websites and social media profiles that impersonate your hotel or tour agency. For J&K's hospitality sector, IP protection is about ensuring that the tourists' trust is never compromised and that your brand remains the exclusive symbol of your unique Himalayan experience.</p>
                                    </section>

                                    <section id="msme" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME and Startup Subsidies for J&K Applicants</h2>
                                        <p className="mb-6">The Government of India and the J&K Administration offer significant fiscal incentives to encourage IP creation. Under the NCSS (New Central Sector Scheme) and the MSME protocols, registered micro and small enterprises from Jammu & Kashmir can claim a 50 percent rebate on government fees for trademark filing. This lowers the official fee from INR 9000 to just INR 4500 per class.</p>
                                        <p className="mb-6">Furthermore, the proposed amendments to the Industrial Policy 2021-30 include one-time incentives covering 100 percent of actual filing costs for patents (up to INR 5 lakh). IPR Karo helps you utilize your Udyam (MSME) registration or J&K Startup recognition to instantly unlock these subsidies, ensuring that the cost of protection never a barrier for the region's smallest and most talented entrepreneurs.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10 font-bold">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />50% Gov Fee Rebate for J&K MSMEs</li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />100% IP Reimbursement for Startups</li>
                                        </ul>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step High-Altitude Filing Journey</h2>
                                        <p className="mb-6">We match the speed of modern J&K with a streamlined 8-step filing journey at the Delhi Registry:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Smart Brand Search", desc: "Our AI scans the Delhi Registry database for phonetic and visual similarities." },
                                                { step: "2", title: "Strategic Classification", desc: "Selecting the correct Nice classes (e.g., Handicrafts in Class 24, Saffron in Class 31)." },
                                                { step: "3", title: "MSME/Startup Rebate", desc: "Integrating your certificates to instantly reduce your government fees by 50 percent." },
                                                { step: "4", title: "Electronic Filing (TM-A)", desc: "Electronic submission to the Delhi office, securing your priority number within hours." },
                                                { step: "5", title: "Examination Management", desc: "Drafting technical responses to examination reports to overcome registry objections." },
                                                { step: "6", title: "Journal Publication", desc: "Your brand is advertised in the Trademark Journal for a 4-month public period." },
                                                { step: "7", title: "Opposition Defense", desc: "Our legal experts defend your rights at the Delhi Registry against any third-party claims." },
                                                { step: "8", title: "R Certificate Delivery", desc: "We deliver your final registration certificate, granting you the use of the ® symbol." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl">{item.step}</div>
                                                    <div><h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4><p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Documents Checklist for J&K Registration</h2>
                                        <p className="mb-6">To ensure a high-speed filing at the Delhi Registry, please keep the following documents ready for our experts:</p>
                                        <div className="bg-indigo-50/50 p-8 rounded-[3.5rem] border border-indigo-100 mb-10">
                                            <ul className="space-y-4 list-none font-medium">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Brand Asset:</strong> A high-resolution JPEG/PNG of your logo or stylized brand name.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Identity Proof:</strong> Aadhaar Card and PAN Card of the authorized signatory.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Business Proof:</strong> GST Certificate, Certificate of Incorporation, or Partnership Deed.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>MSME/Startup Certificate:</strong> Essential for claiming the government fee subsidy.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>User Affidavit:</strong> Required if the brand has been used prior to the current filing date.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Power of Attorney (TM-48):</strong> A standardized authorization form we provide for your signature.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="search" className="scroll-mt-32 pt-12">
                                        <div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                                            <h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest text-[#FFB703]">J&K Heritage Brand Search</h2>
                                            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Don't risk your heritage on a guess. Our AI scan detects phonetic, visual, and conceptual similarities across millions of records in the Delhi Registry.</p>
                                            <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Get Free Search Report</button></Link>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Infringement Remedies for J&K Brands</h2>
                                        <p className="mb-6 font-bold text-gray-800">Civil Suits and Immediate Injunctions:</p>
                                        <p className="mb-6">A registered trademark is your legal title to a brand name. If a competitor uses a similar name to sell imitation pashmina or saffron, you can file a civil suit in a Commercial Court. Registration allows you to seek "Ad-Interim Injunctions," effectively stopping the infringer from using your name within days. This is critical in the export market to prevent damage to your international reputation.</p>
                                        <p className="mb-6 font-bold text-gray-800">Criminal Action against Counterfeits:</p>
                                        <p className="mb-6">The Trade Marks Act also provides for criminal action, including search and seizure by police. For established handicrafts and consumer brands in Jammu and Srinagar, we assist in coordinating with law enforcement to conduct raids on facilities manufacturing counterfeit products. A registration certificate is the only document that provides the authority needed for such decisive legal strikes.</p>
                                    </section>

                                    <section id="classification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Strategic Classification for J&K Sectors</h2>
                                        <p className="mb-6">The success of your brand protection depends on selecting the right categories from the 45 international Nice classes. For J&K's economy, we focus on:</p>
                                        <div className="grid md:grid-cols-2 gap-6 my-10">
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 24: Textiles & Shawls</h4><p className="text-sm text-gray-600">Essential for Pashmina, Kani, and other handmade textile crafts.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">24</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 31: Saffron & Produce</h4><p className="text-sm text-gray-600">Protecting the harvested heritage of horticultural entrepreneurs.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">31</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 43: Tourism & Hotels</h4><p className="text-sm text-gray-600">Vital for protecting the names of J&K's world-class hotels.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">43</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 42: Tech & Software</h4><p className="text-sm text-gray-600">For the emerging tech ecosystem and IT startups in Jammu.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">42</div></div>
                                        </div>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MADRID Protocol: Global Export from J&K</h2>
                                        <p className="mb-6">Kashmiri brands are global brands. Whether it is saffron for the Middle East or walnuts for Europe, international protection is mandatory. Through the **Madrid Protocol**, we can use your Indian trademark application as a base to file for protection in over 120 countries (including the EU, USA, and GCC) via a single application with the WIPO.</p>
                                        <p className="mb-6">This international system is highly cost-efficient and allows J&K's exporters to bypass the need for hiring local attorneys in every target country. We manage the entire international lifecycle, ensuring your brand name is as legally secure on the docks of Dubai as it is in the markets of Srinagar. Your global expansion starts with a single Indian registration.</p>
                                    </section>

                                    <section id="maintenance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Asset Maintenance and Timely Renewals</h2>
                                        <p className="mb-6">A trademark in India is valid for 10 years. In the busy world of J&K's new economy, it is easy for founders to miss renewal deadlines. If a trademark is not renewed, it is "Removed" from the register, allowing competitors to claim your brand name and legal priority. IPR Karo provide automated tracking for our tri-city and J&K clients to ensure their rights never expire.</p>
                                        <p className="mb-6">We handle the filing of "Form TM-R" and the payment of renewal fees to maintain your exclusive monopoly indefinitely. A trademark is one of the few business assets that técnicoslly never depreciates; it only gains value as your reputation grows over the decades.</p>
                                    </section>

                                    <section id="future" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Your Brand as a Strategic Capital Asset</h2>
                                        <p className="mb-6">In the modern economy, a registered trademark is more than just a legal document; it is "Strategic Financial Capital." It is a measurable intangible asset that adds significant value to your company's balance sheet. For J&K industrial units planning for an IPO or seeking venture funding, a clean IP portfolio is often the key to achieving a higher valuation and attracting premium global partners.</p>
                                        <p className="mb-6">A registered trademark also enables you to enter into high-value licensing and franchising agreements, creating passive income from your brand's reputation. At IPR Karo, we don't just file trademarks; we build Himalayan fortresses. We provide the legal precision needed to protect the soul of your enterprise, ensuring that your innovations in Jammu & Kashmir remain exclusively your assets, now and forever.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">J&K Trademark Registration FAQ</h2>
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
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Client Trust in J&K</h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((rev, idx) => (
                                                <div key={idx} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden group h-full flex flex-col justify-between hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[rgb(110,94,147)] opacity-5 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                                                    <div>
                                                        <div className="flex text-yellow-400 mb-4">
                                                            {[...Array(5)].map((_, i) => (<FontAwesomeIcon key={i} icon={faStar} className="w-5 h-5 mr-1" />))}
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">J&K Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available in the Delhi Registry. Get a free elite legal report for your J&K enterprise.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free J&K Search</button>
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
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your J&K Legacy</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite IP Protection <br /> for J&K's Crafthouses</h2>
                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join the most successful J&K exporters, tech startups, and hospitality leaders protected by India's premier IP experts. Get your official TM filed at the Delhi Registry within 4 hours.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact-us">
                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Tri-City Expert</button>
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
