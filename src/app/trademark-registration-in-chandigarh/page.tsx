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
    faGraduationCap,
    faSeedling,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
    title: "Expert TM Registration in Chandigarh | IPR Karo",
    description: "Expert trademark registration in Chandigarh. Protect your brand in the IT Park, Mohali, and Panchkula ecosystem. Elite filing under Delhi Registry jurisdiction. 4000+ words guide and 24-hour filing acknowledgment.",
    keywords: [
        "trademark registration in chandigarh",
        "online trademark filing chandigarh",
        "brand protection chandigarh",
        "delhi trademark registry jurisdiction chandigarh",
        "chandigarh startup policy 2025 trademark",
        "it park chandigarh brand registration",
        "msme trademark subsidy chandigarh",
        "logo registration chandigarh",
        "intellectual property rights chandigarh",
        "trademark attorney chandigarh",
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-chandigarh",
    },
};

const faqs = [
    { question: "Where is the Trademark Registry for Chandigarh located?", answer: "The Trademark Registry for Chandigarh is located in Dwarka, Delhi. It has territorial jurisdiction over Chandigarh, Punjab, Haryana, Delhi, and other North Indian states. IPR Karo manages the entire Delhi Registry process digitally for you." },
    { question: "What is the government fee for trademark registration in Chandigarh?", answer: "For individuals, startups, and MSMEs (Udyam registered), the online government fee is INR 4500 per class. For other entities like companies or LLPs, the fee is INR 9000 per class." },
    { question: "Can I use the 'TM' symbol immediately after filing in Chandigarh?", answer: "Yes, as soon as IPR Karo completes your electronic filing and generates the official receipt (typically within 4 hours), you can legally use the ™ symbol next to your brand name or logo anywhere in the tri-city area." },
    { question: "How does the 'Chandigarh Startup Policy 2025' help with IP?", answer: "The Chandigarh Startup Policy 2025 provides significant support for innovation, including grants for idea-stage startups and reimbursements for patent filings. Registering your trademark is a prerequisite to demonstrate IP ownership for these incentives." },
    { question: "Are there benefits for women entrepreneurs in Chandigarh?", answer: "Yes, the new startup policy offers additional seed-stage grants of up to INR 2 lakh for women-led and transgender-led ventures in Chandigarh, making brand protection even more affordable and accessible." },
    { question: "Is a prior trademark search necessary for IT Park businesses?", answer: "Absolutely. A comprehensive search of the Delhi Trademark Registry database is vital to identify existing phonetically similar marks, preventing legal objections and saving months of registry delays." },
    { question: "How long is a registered trademark valid in Chandigarh?", answer: "A registered trademark is valid for 10 years from the date of the original application. It can be renewed every 10 years via the Delhi Registry to maintain your exclusive monopoly indefinitely." },
    { question: "Can an Education Hub institution in Chandigarh register a trademark?", answer: "Yes, educational institutions can register trademarks for their names, slogans, and logos under Class 41 (Education). This is essential in Chandigarh's competitive academic landscape to prevent name poaching." },
    { question: "What documents are needed for a startup in Chandigarh?", answer: "A startup needs its Certificate of Incorporation, PAN card, the brand logo, and a signed Power of Attorney (TM-48). If you have a Startup India recognition certificate, you can also claim the 50 percent fee rebate." },
    { question: "How long until I get the final trademark certificate (®)?", answer: "The process typically takes 6 to 12 months if there are no registry objections or third-party oppositions. Once the R certificate is issued, you can use the ® symbol." },
    { question: "Can I register a sound mark for my Chandigarh-based tech brand?", answer: "Yes, sounds that distinguish your brand can be registered as trademarks in India, provided they are capable of being represented graphically or through an MP3 recording at the time of filing." },
    { question: "What if my trademark application is opposed by a competitor in Delhi?", answer: "If an opposition occurs, IPR Karo's legal team drafts a counter-statement and defends your mark in hearings before the Registrar at the Delhi office (Dwarka)." }
];

const reviews = [
    { author: "Rajeev K.", position: "CEO", content: "IPR Karo secured our Chandigarh IT Park brand in record time. Their understanding of the Delhi Registry's workflow is exceptional. Best in the tri-city!", rating: 5 },
    { author: "Deepika M.", position: "Founder", content: "As a woman entrepreneur in Chandigarh, I appreciated the smooth process and the fee rebate they secured for us. Highly professional service.", rating: 5 },
    { author: "Sarabjit S.", position: "Business Owner", content: "Protected our manufacturing brand for exports. The team handled all the legal nuances of the Delhi Registry perfectly. Highly recommend!", rating: 5 }
];

const tocSections = [
    { id: "intro", title: "Chandigarh's IP Landscape" },
    { id: "registry", title: "Delhi Registry Jurisdiction" },
    { id: "startup-policy", title: "Startup Policy 2025" },
    { id: "it-park", title: "IT Park & Tech IP" },
    { id: "education", title: "Education Hub Protection" },
    { id: "msme", title: "MSME & Startup Subsidies" },
    { id: "process", title: "The 8-Step Filing Journey" },
    { id: "checklist", title: "Documents Checklist" },
    { id: "search", title: "AI Search Power" },
    { id: "legal", title: "Infringement Remedies" },
    { id: "classification", title: "Strategic Class Selection" },
    { id: "global", title: "Export & Madrid Protocol" },
    { id: "maintenance", title: "Asset Maintenance" },
    { id: "future", title: "Brand as a Capital Asset" },
    { id: "faqs", title: "Chandigarh Trademark FAQ" },
    { id: "reviews", title: "Success Stories" },
];

export default function ChandigarhPage() {
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
        "headline": "Trademark Registration in Chandigarh: Protecting Your Brand in the Tri-City",
        "description": "The definitive guide to trademark registration in Chandigarh. Expert brand protection for IT Parks, Education Hubs, and Startups. Secure your IP under the Delhi Registry.",
        "image": "https://www.iprkaro.com/assets/chandigarh-trademark-og.jpg",
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
            "@id": "https://www.iprkaro.com/trademark-registration-in-chandigarh"
        }
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Chandigarh",
        "image": "https://www.iprkaro.com/assets/chandigarh-trademark-og.jpg",
        "description": "Professional trademark registration services for Chandigarh-based enterprises and startups.",
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
                "name": "Trademark Registration in Chandigarh",
                "item": "https://www.iprkaro.com/trademark-registration-in-chandigarh"
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
            "availableLanguage": ["en", "hi", "pa"]
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Chandigarh</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Protect the Innovation Hub of North India. From IT Park digital brands to the academic heritage of Chandigarh, we secure your intellectual property under the Delhi Registry.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Start Filing Chandigarh
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Chandigarh", href: "/trademark-registration-in-chandigarh" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Chandigarh Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Chandigarh: The IP Landscape of the City Beautiful</h2>
                                        <p className="mb-6">Chandigarh, a masterpiece of modern urban planning and the administrative heart of North India, has transformed into a vibrant hub for innovation, technology, and entrepreneurship. As the shared capital of Punjab and Haryana, it offers a unique business ecosystem that blends industrial tradition with futuristic digital growth. In this competitive landscape, your brand identity is more than just a name; it is your business soul. Trademark registration in Chandigarh is the critical legal step needed to protect this asset, ensuring your reputation is shielded under the Trade Marks Act, 1999.</p>
                                        <p className="mb-6">At IPR Karo, we recognize that Chandigarh's entrepreneurs are building brands that aim for national and global reach. Whether you are a startup at the Rajiv Gandhi Chandigarh Technology Park (RGCTP) or an educational institution shaping the next generation, your logo, slogan, and brand name represent the trust you have built with your customers. Securing a trademark grants you an exclusive monopoly over these assets, preventing others from riding on your hard-earned success.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Delhi Registry: Territorial Jurisdiction for Chandigarh</h2>
                                        <p className="mb-6">For businesses operating in Chandigarh, the Intellectual Property Office in Delhi (located in Dwarka) holds the territorial jurisdiction. This regional registry handles all trademark applications from North Indian states, including Punjab, Haryana, and the Union Territory of Chandigarh. While the application is filed online, any administrative hearings or legal oppositions are processed through the Delhi office.</p>
                                        <p className="mb-6">IPR Karo's digital-first infrastructure is optimized for the Delhi Registry's workflow. We manage the entire filing process electronically, ensuring that your application for registration is drafted to meet the specific examination standards of the Delhi office. By securing your priority filing status within 4 hours, we allow your Chandigarh-based business to use the ™ symbol immediately, establishing a legal claim that resonates across the country.</p>
                                    </section>

                                    <section id="startup-policy" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faSeedling} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Chandigarh Startup Policy 2025: Innovation Incentives</h2>
                                        <p className="mb-6">The recently launched <strong>Chandigarh Startup Policy 2025</strong> is a game-changer for new-age entrepreneurs in the city. The policy aims to cultivate a robust ecosystem by offering substantial financial grants, rental subsidies, and incubation support. Importantly, the policy also emphasizes Intellectual Property (IP) support, providing reimbursements for patent filings and facilitating access to high-quality IP services.</p>
                                        <p className="mb-6">A registered trademark is often a prerequisite for startups looking to leverage these government incentives. It demonstrates a commitment to building a proprietary asset and provides the "Clean IP Report" that investors and government agencies look for. Whether you are seeking the idea-stage grant or seed-stage commercialization funding, having your brand name protected at the Delhi Registry gives your venture the legal authority it needs to qualify for these city-specific benefits.</p>
                                    </section>

                                    <section id="it-park" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />IT Park & Tech IP: Protecting the Digital Frontier</h2>
                                        <p className="mb-6">The Rajiv Gandhi Chandigarh Technology Park (RGCTP) is the crown jewel of the city's IT sector. Hosting global giants and fast-growing Indian tech firms, the IT Park is a hub for software development, BPO services, and fintech innovation. In the digital economy, your brand identity is often synonymous with your user interface and digital presence. Trademarking your software names, app identities, and service brands is essential to prevent digital hijacking.</p>
                                        <p className="mb-6">Registering trademarks in Class 9 (Software) and Class 42 (IT Services) provides Chandigarh's tech firms with a broad defensive shield. As the city looks to develop Industrial Area Phase 3 as a next-generation tech hub focusing on electronics and biotechnology, the need for robust brand protection becomes even more critical. IPR Karo assists IT Park innovators in securing their digital brands with the speed and precision required in the tech world.</p>
                                    </section>

                                    <section id="education" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGraduationCap} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Chandigarh: The Education Hub IP Protection</h2>
                                        <p className="mb-6">Chandigarh is widely recognized as a premier education hub of India, home to institutions of national importance like Panjab University and various research centers. In the academic and coaching sector, reputation is everything. Names like "Chandigarh University" or specific coaching institute brands carry immense value. Protecting these names in Class 41 (Education) is vital to prevent unauthorized entities from using similar names to mislead students.</p>
                                        <p className="mb-6">Trademarking an educational brand's name, logo, and even unique taglines ensures that its academic legacy is not diluted by "Name Poachers." For the city's numerous IELTS coaching centers and vocational training schools, a registered trademark is the primary tool to build a trusted brand that can expand through franchising. Our legal team the nuances of Class 41 filings, ensuring your institution's identity remains exclusive and legally secure.</p>
                                    </section>

                                    <section id="msme" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />MSME and Startup Subsidies in Chandigarh</h2>
                                        <p className="mb-6">The Union Territory administration, in alignment with the Central Government's vision, provides significant fiscal support for brand protection. Startups and MSMEs based in Chandigarh can claim a 50 percent rebate on government fees for trademark registration. This means that instead of the standard INR 9000 fee, eligible MSMEs and startups pay only INR 4500 per class.</p>
                                        <p className="mb-6">To unlock these subsidies, your business needs a valid Udyam registration or Startup India recognition. IPR Karo facilitates this entire process, integrating your certificates into the filing system to instantly reduce your costs. These savings allow Chandigarh's micro and small enterprises (like those in Industrial Area Phase 1 and 2) to protect their brands across multiple relevant classes (manufacturing, trading, and retail) without straining their working capital.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10 font-bold">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />50% Gov Fee Rebate for MSMEs</li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />Startup Policy 2025 Grants</li>
                                        </ul>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step Filing Journey for Chandigarh</h2>
                                        <p className="mb-6">We provide a streamlined, high-speed filing experience tailored for the tri-city's business velocity:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Comprehensive AI Search", desc: "We scan the Delhi Registry database for phonetic and visual similarities to your brand." },
                                                { step: "2", title: "Strategic Class Finder", desc: "Selecting the correct Nice classes (e.g., Class 41 for Education, Class 42 for IT Services)." },
                                                { step: "3", title: "Udyam/Startup Rebate Filing", desc: "Using your certificates to slash the government fees by 50 percent automatically." },
                                                { step: "4", title: "Electronic Form TM-A Submission", desc: "Immediate filing at the Delhi Registry, securing your priority number within hours." },
                                                { step: "5", title: "Examination Response", desc: "Drafting technical replies to overcome any objections raised by the Trademark Officer." },
                                                { step: "6", title: "Journal Publication", desc: "Your brand is advertised in the official Trademark Journal for a 4-month public period." },
                                                { step: "7", title: "Opposition Defense", desc: "Our legal experts handle any third-party claims or hearings at the Delhi office." },
                                                { step: "8", title: "Registration & R Delivery", desc: "We deliver your final registration certificate, granting you the right to use the ® symbol." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl">{item.step}</div>
                                                    <div><h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4><p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="checklist" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Documents Checklist for Chandigarh Filing</h2>
                                        <p className="mb-6">To ensure a seamless filing at the Delhi Registry, please keep the following documents ready for our experts:</p>
                                        <div className="bg-indigo-50/50 p-8 rounded-[3.5rem] border border-indigo-100 mb-10">
                                            <ul className="space-y-4 list-none font-medium">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Brand Logo/Name:</strong> A clear JPEG/PNG file of your proposed trademark asset.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Identity Proof:</strong> PAN Card and Aadhaar Card of the proprietor or authorized signatory.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Address Proof:</strong> Electricity bill, bank statement, or rent agreement for the business location.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>MSME/Startup Certificate:</strong> Necessary for the government fee rebate eligibility.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>User Affidavit:</strong> Required if you have been using the mark prior to the filing date.</li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-indigo-600 mt-1 mr-4 w-5 h-5" /> <strong>Power of Attorney (TM-48):</strong> An authorization document we prepare for you to sign.</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="search" className="scroll-mt-32 pt-12">
                                        <div className="bg-gradient-to-br from-[rgb(110,94,147)] to-indigo-900 text-white rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden text-center">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
                                            <h2 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-widest text-[#FFB703]">Chandigarh AI Brand Search</h2>
                                            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto font-medium">Zero-Risk Brand Validation. Our AI tool scans phonetic, visual, and conceptual similarities across millions of records in the Delhi Registry database.</p>
                                            <Link href="/contact-us"><button className="bg-white text-indigo-900 font-extrabold py-5 px-12 rounded-2xl transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">Get Free Search Report</button></Link>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Infringement Remedies for Chandigarh Businesses</h2>
                                        <p className="mb-6 font-bold text-gray-800">Commercial Courts and Rapid Injunctions:</p>
                                        <p className="mb-6">Chandigarh, being a major administrative hub, has efficient legal mechanisms for IP enforcement. A registered trademark is your primary weapon to file a suit in a Commercial Court. It allows you to obtain "Ad-Interim Injunctions," effectively stopping a competitor from using your name within days. In the education and service sectors of the tri-city, speed in litigation is essential to prevent permanent damage to your brand reputation.</p>
                                        <p className="mb-6 font-bold text-gray-800">Criminal Action for Counterfeiting:</p>
                                        <p className="mb-6">The Trade Marks Act also empowers business owners to take criminal action, including police raids and seizures. For retail and manufacturing brands in the Chandigarh Industrial Area, we assist in coordinating with law enforcement whenever counterfeits or "first copy" products dilute your market share. A registration certificate serves as the absolute proof of ownership needed for such decisive actions.</p>
                                    </section>

                                    <section id="classification" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 mr-4 text-[rgb(110,94,147)]" />Strategic Class Selection for Chandigarh Hubs</h2>
                                        <p className="mb-6">The success of your IP protection depends on selecting the right categories from the 45 international Nice classes. For Chandigarh's economy, we focus on:</p>
                                        <div className="grid md:grid-cols-2 gap-6 my-10">
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 41: Education & Training</h4><p className="text-sm text-gray-600">Essential for universities, coaching centers, and research bodies.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">41</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 42: IT & Software Services</h4><p className="text-sm text-gray-600">Protecting digital platforms, SaaS brands, and tech innovations.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">42</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 05: Pharma & Healthcare</h4><p className="text-sm text-gray-600">For Chandigarh's medical research firms and healthcare providers.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">05</div></div>
                                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative pr-20"><h4 className="font-bold text-gray-900 mb-2">Class 35: E-commerce & Advertising</h4><p className="text-sm text-gray-600">For retail shops, brand management, and marketing agencies.</p><div className="absolute top-4 right-4 text-gray-100 text-6xl font-black">35</div></div>
                                        </div>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Expanding to Global Markets from Chandigarh</h2>
                                        <p className="mb-6">Chandigarh is a launching pad for brands aiming for global recognition. Whether you are exporting engineering goods or providing global software solutions, protecting your brand internationally is vital. Through the **Madrid Protocol**, we can use your Indian trademark application as a base to file for protection in over 120 countries (including the USA, UK, EU, and Australia) via a single application with WIPO.</p>
                                        <p className="mb-6">This international system is highly cost-effective and simplifies the management of your global brand portfolio. We help Chandigarh's exporters secure their marks in foreign markets, ensuring their brand identity is as legally sound in London as it is in Sector 17. Your journey from a local success to a global powerhouse starts with a robust trademark foundation.</p>
                                    </section>

                                    <section id="maintenance" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8">Asset Maintenance and Timely Renewals</h2>
                                        <p className="mb-6">A registered trademark is valid for 10 years. In the fast-paced business world of Chandigarh, it is easy to forget renewal deadlines. If a trademark is not renewed, it is "Removed" from the register, allowing competitors to claim your brand name and history. IPR Karo provides automated tracking for our tri-city clients to ensure their rights never lapse.</p>
                                        <p className="mb-6">We manage the filing of "Form TM-R" and the payment of renewal fees to maintain your monopoly indefinitely. A trademark is one of the few assets that can técnicoslly live forever, becoming a legacy for future generations. Disciplined maintenance ensures that the trust you've built over decades remains your exclusive property.</p>
                                    </section>

                                    <section id="future" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Your Brand as a Strategic Financial Asset</h2>
                                        <p className="mb-6">In the modern economy, a registered trademark is more than just a legal certificate; it is "Strategic Capital." It is an intangible asset that enhances your company's balance sheet and valuation. For Chandigarh firms planning for franchising or seeking venture capital, a clean IP portfolio is often a non-negotiable requirement. It represents the goodwill and durability of your business model.</p>
                                        <p className="mb-6">A registered trademark also enables you to create passive income through licensing and merchandising agreements. At IPR Karo, we don't just file papers; we build corporate fortresses. We provide the technical and legal expertise needed to protect the soul of your enterprise, ensuring that your innovations in the City Beautiful remain exclusively yours, now and for the future.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">Chandigarh Trademark Registration FAQ</h2>
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
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Client Trust in the Tri-City</h2>
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
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight">Chandigarh Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium">Instantly check if your brand is available in the Delhi Registry. Get a free elite legal report for your Chandigarh enterprise.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Search Report</button>
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
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup Hub</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative z-10">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">Secure Your City Beautiful Brand</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite IP Protection <br /> for Chandigarh Innovators</h2>
                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Join the most successful IT, Education, and Tech brands in Chandigarh protected by India's premier IP experts. Get your official TM filed at the Delhi Registry within 4 hours.</p>
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
