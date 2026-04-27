import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket, faShieldHalved, faBuilding, faMicrochip,
    faScaleBalanced, faGlobe, faSearch, faAward,
    faCheck, faStar, faPhone, faChartLine, faFlask,
    faLeaf, faBuildingColumns, faLightbulb, faGem, faIndustry, faHammer, faAnchor
} from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
    title: "Expert TM Registration in Odisha | IPR Karo",
    description: "Register your trademark in Odisha with IPR Karo. Professional brand protection for Bhubaneswar tech hubs, Rourkela industries, and handloom sectors. Claim 100% MSME cost reimbursement.",
    keywords: [
        "trademark registration in odisha",
        "bhubaneswar trademark filing",
        "brand protection rourkela",
        "cuttack trademark office",
        "msme trademark subsidy odisha",
        "startup odisha ip benefits",
        "sambalpuri handloom trademark",
        "kolkata trademark registry odisha",
        "logo registration bhubaneswar",
        "online trademark odisha"
    ],
    alternates: {
        canonical: "https://www.iprkaro.com/trademark-registration-in-odisha",
    },
};

export default function OdishaTrademark() {

    const tocSections = [
        { id: 'intro', title: 'Odisha Industrial Renaissance' },
        { id: 'registry', title: 'Territorial Jurisdiction: Kolkata Office' },
        { id: 'msme', title: '100% Reimbursement (MSME Policy 2022)' },
        { id: 'startup', title: 'Startup Odisha: 50% Fee Rebate' },
        { id: 'steel', title: 'Industrial IP: Rourkela & Cuttack' },
        { id: 'handloom', title: 'Silk & Handloom: Sambalpur Heritage' },
        { id: 'bhbnswr', title: 'IT & Bio-Tech Hub: Bhubaneswar' },
        { id: 'process', title: '8-Step Filing Workflow' },
        { id: 'documents', title: 'Mandatory Document Checklist' },
        { id: 'legal', title: 'Trademark Infringement Protection' },
        { id: 'global', title: 'International Branding (Madrid Protocol)' },
        { id: 'faqs', title: 'Odisha Trademark FAQ' }
    ];

    const faqs = [
        {
            question: "Which trademark office has jurisdiction over Odisha?",
            answer: "Every trademark application originating from Odisha, including those from Bhubaneswar, Cuttack, and Rourkela, falls under the territorial jurisdiction of the Kolkata Trademark Registry. All examinations and hearings are conducted by the Kolkata branch of the Trade Marks Registry."
        },
        {
            question: "What is the 100% trademark reimbursement for Odisha MSMEs?",
            answer: "Under the Odisha MSME Development Policy 2022, eligible MSMEs can claim 100% reimbursement of the expenditure incurred for obtaining a trademark registration, with a maximum cap of INR 3 lakh. This applies to units undertaking expansion, modernization, or diversification."
        },
        {
            question: "What are the trademark benefits for startups in Odisha?",
            answer: "Recognized startups in Odisha receive a 50% rebate on government filing fees through the Startup India initiative. Additionally, Startup Odisha provides sustenance allowances and facilitation support for intellectual property protection and commercialization."
        },
        {
            question: "What is the government fee for online trademark filing in Bhubaneswar?",
            answer: "For individuals, dedicated startups, and small enterprises (MSMEs), the official government fee is INR 4,500 per class for online filing. For larger companies and other entities, the fee is INR 9,000 per class."
        },
        {
            question: "How long does it take to register a trademark in Odisha?",
            answer: "The typical timeline for trademark registration in Odisha is between 8 to 18 months. This includes the search, filing, examination, journal publication for opposition, and the final issuance of the registration certificate by the Kolkata Registry."
        },
        {
            question: "Is physical presence required in Kolkata for trademark hearings?",
            answer: "No, the entire process is now digitized. Show-cause hearings are generally conducted via video conferencing by the Kolkata Trademark Registry, allowing Odisha-based business owners to represent their cases from Bhubaneswar or any other city."
        },
        {
            question: "Can I use the ™ symbol immediately after filing in Odisha?",
            answer: "Yes, immediately after we submit your application to the registrar and generate the official filing receipt (TM-A), you are legally permitted to use the ™ symbol alongside your brand name or logo."
        },
        {
            question: "What items can be trademarked by a Sambalpuri handloom business?",
            answer: "Handloom businesses can trademark their unique brand names, logos, device marks for specific patterns, and slogans under Class 24 (Textiles and textile goods) and Class 25 (Clothing)."
        },
        {
            question: "Does a trademark registered in Odisha provide protection in other states?",
            answer: "Yes, a trademark registration obtained through the Kolkata Registry grants you exclusive, statutory rights across all states and Union Territories in India, providing nationwide brand protection."
        },
        {
            question: "What documents are required for a company applicant in Cuttack?",
            answer: "A company requires its Certificate of Incorporation, Board Resolution/Power of Attorney (TM-48), GST certificate, a representation of the trademark, and a user affidavit if the brand has been used prior to filing."
        }
    ];

    const reviews = [
        { author: "Sujit Patnaik", content: "IPR Karo secured our Bhubaneswar-based tech brand in record time. Their guidance on the Odisha MSME subsidy was invaluable.", rating: 5, position: "CEO" },
        { author: "Meenakshi Das", content: "The best service for Sambalpuri handloom brands. They understood our heritage and protected our specific device marks perfectly.", rating: 5, position: "Founder" },
        { author: "Abhijeet Rout", content: "Professional handling of our Rourkela steel unit's logo. They managed the Kolkata Registry examination smoothly. Highly recommended.", rating: 5, position: "MD" }
    ];

    const averageRating = (reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length).toFixed(1);
    const reviewsCount = reviews.length + 920;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.answer
            }
        }))
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Trademark Registration in Odisha: The Definitive MSME & Startup Guide",
        "description": "Expert guide to trademark registration in Odisha. Learn about the 100% MSME reimbursement, Startup Odisha benefits, and the Kolkata Registry filing process.",
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
        "datePublished": "2024-01-25",
        "dateModified": "2024-02-23"
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Service - Odisha",
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
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iprkaro.com/" },
            { "@type": "ListItem", "position": 2, "name": "Trademark Registration in Odisha", "item": "https://www.iprkaro.com/trademark-registration-in-odisha" }
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
            "contactType": "customer service"
        }
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
                        in <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Odisha</span>
                    </h1>
                    <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                        Empowering the Temple State with Intellectual Assets. From the steel mills of Rourkela to the digital corridors of Bhubaneswar, we provide 100% MSME-funded brand protection.
                    </p>
                    <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                            Claim 100% Reimbursement
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-gray-50 border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 max-w-[1400px]">
                    <Breadcrumbs items={[{ label: "Trademark Registration in Odisha", href: "/trademark-registration-in-odisha" }]} />
                </div>
            </div>

            <div className="w-full px-4 lg:px-8 py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-8 items-start">
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Odisha IP Guide</h4>
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
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faRocket} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Odisha: The Rising Phoenix of Industrial and Intellectual Enterprise</h2>
                                        <p className="mb-6">Odisha, traditionally revered for its spiritual heritage and architectural marvels, is undergoing a profound industrial metamorphosis. As the state positions itself as a global hub for steel, aluminum, and manufacturing, the value of intellectual property has never been more significant. From the bustling silver filigree workshops of Cuttack to the high-tech IT parks of Bhubaneswar, Odisha's entrepreneurs are shifting their focus from mere commodity production to brand-driven growth. Trademark Registration in Odisha has emerged as the most critical legal instrument for any business aiming to protect its unique identity and market reputation in this rapidly evolving economy.</p>
                                        <p className="mb-6">At IPR Karo, we view a trademark as more than just a legal necessity; it is the "Heritage Anchor" of your business. It represents your commitment to quality, your promise to the consumer, and your shield against market predators. Under the Trade Marks Act, 1999, registration grants you an exclusive 10-year monopoly over your brand identifiers, ensuring that your hard-earned goodwill remains your property alone. For Odisha's ambitious business community, a registered trademark is the foundation of a nationwide legacy.</p>
                                    </section>

                                    <section id="registry" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faBuilding} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The Kolkata Registry Nexus: Centralized Administration for Odisha IP</h2>
                                        <p className="mb-6">While Odisha is an independent economic powerhouse, the administrative processing of its intellectual property is managed by the Kolkata Trademark Registry. Every application originating from cities like Bhubaneswar, Sambalpur, or Rourkela is examined by the specialists at the Nizam Palace office in Kolkata. This territorial jurisdiction means that Odisha's brand names are evaluated against the same regional and national standards that apply to the entire Eastern India corridor. Navigating the nuances of the Kolkata Registry’s examination patterns is vital for achieving a successful registration without unnecessary delays.</p>
                                        <p className="mb-6">Digital transformation has flattened the geographical barrier between Odisha and the Kolkata Registry. IPR Karo’s advanced digital infrastructure is directly integrated with the IP India e-filing servers, allowing us to lodge your application within 4 hours. This instant filing provides your business with an immediate application number and the legal right to use the ™ symbol. We serve as your digital bridge, providing expert legal representation at the Kolkata Registry without requiring a single mile of travel from your office in Odisha.</p>
                                    </section>

                                    <section id="msme" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faAward} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Odisha MSME Development Policy 2022: Total Cost Reimbursement</h2>
                                        <p className="mb-6">The Government of Odisha has introduced some of the most entrepreneur-friendly intellectual property incentives in India. Under the **Odisha MSME Development Policy 2022**, the state offers a remarkable incentive: **100% reimbursement of the expenditure incurred for obtaining a trademark**, capped at INR 3 lakh per unit. This visionary policy is tailored for units undertaking expansion, modernization, or diversification, effectively making brand protection a zero-cost investment for eligible local manufacturers.</p>
                                        <p className="mb-6">This strategic support is designed to encourage Odisha’s MSMEs to institutionalize their brands and compete on a global scale. At IPR Karo, we specialize in maximizing these state-level benefits for our clients. We ensure that your trademark filing is conducted in strict accordance with the policy's guidelines, enabling you to claim your reimbursement seamlessly. By combining Odisha's 100% refund policy with the central government's 50% fee rebate for small entities, we help you secure world-class assets with zero financial burden.</p>
                                    </section>

                                    <section id="startup" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Startup Odisha: Fueling Innovation with IP Rebates and Support</h2>
                                        <p className="mb-6">The **Startup Odisha Policy** is the cornerstone of the state's vision to become one of the top three startup destinations in India. For a recognized startup, the brand is often its most valuable asset, especially during valuation for venture capital rounds. The policy offers an **80% rebate on patent filing fees** and a **50% rebate on trademark filing fees**, alongside dedicated monthly sustenance allowances. This ecosystem ensures that a tech innovator in Bhubaneswar can secure their brand globally while focusing their capital on product development.</p>
                                        <p className="mb-6">In the digital age, a "Local Innovation" can be replicated globally in an instant. We work with Startup Odisha's founders to ensure their digital trademarks, encompassing app names, algorithms (via patents), and distinctive UI designs (via copyrights and marks), are locked in at the earliest possible priority date. Our tech-centric filing approach mirrors the agility of the startup world, ensuring your brand is protected before your code goes live.</p>
                                    </section>

                                    <section id="steel" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faIndustry} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Industrial IP Strategy: Protecting Rourkela Steel and Cuttack Trade</h2>
                                        <p className="mb-6">Rourkela, the industrial heart of Odisha, and Cuttack, its historic commercial hub, are the twin engines of the state's traditional economy. In the heavy industrial sector, a trademark serves as a "Seal of Engineering Trust." When steel products or industrial components are shipped nationally or exported, the mark on the product is the customer's primary assurance of safety and metallurgical specifications. Similarly, for the legacy traders of Cuttack, the brand name is a multi-generational asset representing reliability and fair trade.</p>
                                        <p className="mb-6">For these heavy-hitting sectors, we provide deep-dive industrial audits. We specialize in Class 6 (Metals) and Class 7 (Heavy Machinery) filings, ensuring that your corporate identity is walled off from competitors who might attempt to piggyback on Rourkela's industrial reputation. Our defensive trademarking strategy involves securing not just the primary name, but also key logos and sub-brands to create a comprehensive IP perimeter around your industrial enterprise.</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none p-0 my-10 font-bold">
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />100% MSME Refund Support</li>
                                            <li className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />Defensive Industrial TM Audits</li>
                                        </ul>
                                    </section>

                                    <section id="handloom" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faLeaf} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Silk, Handloom, and GI: Preserving the Heritage of Sambalpur</h2>
                                        <p className="mb-6">Odisha is a treasure trove of traditional knowledge, particularly in the handloom and textile sectors of Sambalpur and Berhampur. For these artisans and co-operatives, the trademark is a story of "Authenticity and Origin." The Sambalpuri saree is not just a product; it is a cultural icon. Protecting these identifiers through Collective Marks or Certification Marks ensures that the value created by local weavers is not siphoned off by industrial mass-producers selling imitations.</p>
                                        <p className="mb-6 font-bold text-gray-800">The Power of Geographical Indication (GI) Pairing:</p>
                                        <p className="mb-6 text-gray-700">We help Odisha's artisanal brands pair their specific corporate trademarks with the state's prestigious Geographical Indications. This dual protection strategy establishes your brand as an authorized producer of genuine Odishan products, allowing you to command a premium price in international luxury markets and providing a solid legal basis for taking down counterfeit listings on global e-commerce platforms like Amazon and Etsy.</p>
                                    </section>

                                    <section id="bhbnswr" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faFlask} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Bhubaneswar: The Digital and Bio-Tech Brand Frontier</h2>
                                        <p className="mb-6">Bhubaneswar is rapidly emerging as the Eastern Gateway for IT, Ed-Tech, and Bio-Technology. In these sectors, your brand's phonetic distinctiveness is its most valuable "Intangible Capital." For an Ed-Tech startup or a Bio-Tech research firm, the trademark is the primary touchpoint for students, researchers, and global partners. A weak or generic name can lead to catastrophic legal challenges just as the company begins to scale nationally.</p>
                                        <p className="mb-6">Our specialized "Phonetic Similarity Audit" is designed to prevent these future crises. We analyze your proposed brand name against millions of existing national entries at the Kolkata Registry to ensure your mark is truly unique. For Bhubaneswar's digital pioneers, we also manage domain name synchronization and social media handle protection, ensuring your brand has a unified and legally protected presence across all digital platforms.</p>
                                    </section>

                                    <section id="process" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faChartLine} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />The 8-Step Filing Journey: Your Path to Brand Monopoly</h2>
                                        <p className="mb-6">We have digitized the entire workflow of the Kolkata Registry into a seamless 8-step journey for Odisha's entrepreneurs:</p>
                                        <div className="space-y-6">
                                            {[
                                                { step: "1", title: "Global Availability Search", desc: "A comprehensive audit of the national registry to ensure your brand name doesn't conflict with existing marks." },
                                                { step: "2", title: "Strategic Classification", desc: "Mapping your business activities across 45 classes to ensure max legal protection for Rourkela steel or Cuttack trade." },
                                                { step: "3", title: "Digital TM-A Submission", desc: "Instant filing with the Kolkata Registry, generating your application number and ™ status within 4 hours." },
                                                { step: "4", title: "Registry Examination", desc: "The registrar reviews the application for absolute and relative grounds for refusal under the Trademark Act." },
                                                { step: "5", title: "Objection Response", desc: "If an examination report is issued with objections, our attorneys draft professional justifications to clear the mark." },
                                                { step: "6", title: "Journal Publication", desc: "Your mark is published in the Official Trademark Journal for a 4-month window for third-party opposition." },
                                                { step: "7", title: "Opposition Defense", desc: "If challenged, we provide expert legal representation in hearings at the Kolkata Registry via virtual link." },
                                                { step: "8", title: "Registration Issuance", desc: "The final registration certificate is issued, granting you a 10-year exclusive monopoly and the right to use the ® symbol." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                                                    <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl">{item.step}</div>
                                                    <div><h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4><p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p></div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="documents" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faScaleBalanced} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Mandatory Document Checklist for Odisha Applicants</h2>
                                        <p className="mb-6">To lock in your priority date and accelerate the filing process at the Kolkata Registry, please keep these documents ready:</p>
                                        <div className="bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] border border-blue-100 mb-10">
                                            <ul className="grid md:grid-cols-2 gap-6 list-none p-0 font-medium">
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Trademark Artwork:</strong> Clear JPEG/PNG of the logo or name style.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Identity Proof:</strong> Aadhaar/PAN of the Proprietor or Director.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>Business Identity:</strong> MSME/Udyam Cert or COI for Companies.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>User Affidavit:</strong> Required if the brand has been used prior to filing.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><strong>TM-48 authorization:</strong> Power of Attorney for legal representation.</span></li>
                                                <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-4 w-5 h-5" /> <span><span><strong>Startup India Cert:</strong> To claim the 50% government fee rebate.</span></span></li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section id="legal" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faShieldHalved} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />Infringement Protection: The Legal Shield of your Brand</h2>
                                        <p className="mb-6">In Odisha's competitive retail and industrial landscape, the threat of brand theft is constant. A registered trademark at the Kolkata Registry is your "Inevitable Legal Shield." It transforms your brand from a vulnerable idea into a statutory property. With registration, you have the right to file infringement suits in District Courts or the Orissa High Court, seeking permanent injunctions, seizure of counterfeit products, and significant monetary damages.</p>
                                        <p className="mb-6 font-bold text-gray-800">Why Statutory Protection is Non-Negotiable:</p>
                                        <p className="mb-6 text-gray-700">Relying on "Common Law" protection (Passing Off) is remarkably difficult and requires exhaustive proof of market reputation. A registered trademark, however, provides "Prima Facie" evidence of your ownership across India. This is especially vital for Rourkela's industrial suppliers, where brand confusion among corporate clients can lead to massive commercial disruption and erosion of institutional trust. We provide the end-to-end legal support needed to enforce your rights and maintain your market dominance.</p>
                                    </section>

                                    <section id="global" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 flex items-center"><FontAwesomeIcon icon={faGlobe} className="w-12 h-12 mr-4 text-[rgb(110,94,147)]" />International Branding: The Madrid Protocol and Beyond</h2>
                                        <p className="mb-6">Odisha is a global exporter of minerals, machinery, and textiles. Whether you are exporting precision components to the EU or shipping Sambalpuri silks to the USA, your domestic trademark is the foundation of your global expansion. Through the **Madrid Protocol**, we use your Kolkata Registry application to secure brand protection in over 120 countries through a single, cost-effective application with the WIPO in Geneva.</p>
                                        <p className="mb-6 text-gray-700">This international framework eliminates the need to hire expensive local attorneys in every target country. It allows you to manage your entire global brand portfolio through a single window. Your journey to becoming a global brand starts with securing your home turf in Odisha. We handle the complexities of international IP treaties, ensuring that as your exports grow, your brand remains legally untouchable on every continent.</p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-16">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-tighter">Odisha Trademark IP FAQ</h2>
                                        <div className="grid gap-6 text-left">
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
                                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center text-[rgb(110,94,147)] uppercase tracking-widest">Industry Voices from Odisha</h2>
                                        <div className="grid md:grid-cols-3 gap-8 text-left">
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
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-white/5 text-white relative overflow-hidden group text-center">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight uppercase tracking-tighter">Odisha Brand Search</h3>
                                <p className="text-sm opacity-70 mb-10 leading-relaxed relative z-10 font-medium px-2">Professional availability report within 2 hours. Secure your corporate name at the Kolkata Registry today.</p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl text-sm uppercase tracking-widest">Free Odisha Search</button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10">
                                    <Link href="tel:+919289707648" className="font-black text-xl hover:text-indigo-400 transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-3" /> +91-9289707648
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-sm font-black text-gray-400 mb-8 uppercase tracking-[0.3em]">IP Resources</h3>
                                <ul className="space-y-6 text-left">
                                    <li><Link href="/trademark-class-finder" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faSearch} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Class Finder</span></Link></li>
                                    <li><Link href="/fast-track-trademark-registration" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faRocket} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Fast-Track Filing</span></Link></li>
                                    <li><Link href="/want-to-register-trademark-for-startup" className="group flex items-center text-gray-900 hover:text-[rgb(110,94,147)] transition-all"><div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-xl mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:text-white transition-all"><FontAwesomeIcon icon={faAward} className="w-5 h-5" /></div><span className="font-black text-xs uppercase tracking-widest">Startup IP Guru</span></Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a1130] rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden mt-16 shadow-2xl border border-white/5 group">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-[rgb(110,94,147)] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative z-10">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.25em] mb-8 inline-block backdrop-blur-md">The Shield of Bhubaneswar & Beyond</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Master Your Market <br /> with Odisha's IP Elite</h2>
                            <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">Secure 100% government reimbursement for your trademark registration. Join Odisha's most successful industrialists in building a global brand identity today.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link href="/contact-us">
                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-14 rounded-full transition-all shadow-[0_20px_40px_rgba(110,94,147,0.4)] text-lg uppercase tracking-[0.15em]">Consult Odisha Expert</button>
                                </Link>
                                <a href="tel:+919289707648">
                                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-black py-5 px-14 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-xl group/btn">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-4 group-hover/btn:rotate-12 transition-transform" />+91-9289707648
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

