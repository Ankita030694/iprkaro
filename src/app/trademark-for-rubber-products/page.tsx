
import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheck,
    faSearch,
    faFileContract,
    faFileSignature,
    faPhone,
    faChevronRight,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faUsers,
    faLightbulb,
    faStar,
    faGlobe,
    faIndustry,
    faTools,
    faVial,
    faTruckMoving,
    faMicrochip
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Rubber Products | Class 17 Registration India',
    description: 'Complete guide to trademark registration for rubber products, insulators, and flexible pipes in India. Secure your Class 17 brand assets today.',
    keywords: [
        'trademark for rubber products',
        'class 17 trademark india',
        'rubber manufacturing trademark',
        'insulating materials registration',
        'synthetic rubber trademark',
        'vulcanized rubber brand protection',
        'flexible pipes trademark india',
        'rubber gaskets registration',
        'msme trademark benefits rubber industry',
        'intellectual property for rubber manufacturers'
    ],
    openGraph: {
        title: 'Premium Trademark Registration for Rubber & Plastic Industrial Goods',
        description: 'Protect your industrial rubber and insulating assets with India\'s leading IP team. 100% online, legal expertise for Class 17.',
        url: 'https://www.iprkaro.com/trademark-for-rubber-products',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-rubber-products',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Strategic Value' },
    { id: 'class-17-coverage', title: 'Class 17 Spectrum' },
    { id: 'industrial-rubber-branding', title: 'Industrial Branding' },
    { id: 'non-conventional-marks', title: 'Olfactory & Shape IP' },
    { id: 'registration-process', title: 'Registration Path' },
    { id: 'documents-checklist', title: 'Required Docs' },
    { id: 'anti-counterfeiting', title: 'Counterfeit Raids' },
    { id: 'msme-benefits', title: 'MSME Rebates' },
    { id: 'global-expansion', title: 'Madrid Protocol' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What items fall under Trademark Class 17 in India?",
        answer: "Class 17 primarily covers semi-processed rubber, gutta-percha, gum, asbestos, mica, and plastics in extruded form for manufacture. It also includes packing, stopping, and insulating materials, and flexible pipes not of metal."
    },
    {
        question: "Can I trademark a specific smell for my rubber products?",
        answer: "Yes, India recently accepted its first olfactory or smell mark for tires. While complex, non-conventional marks like smells or shapes can be registered if they have acquired distinctiveness."
    },
    {
        question: "Is raw rubber covered in Class 17?",
        answer: "Yes, raw, semi-worked, and synthetic rubber are all fundamentally classified under Class 17 for trademark purposes."
    },
    {
        question: "Do rubber bands for household use fall under Class 17?",
        answer: "Actually, small rubber bands for household or office use are often classified in Class 16. Class 17 focuses more on industrial and semi-finished rubber materials."
    },
    {
        question: "What is the government fee for rubber manufacturers in MSME category?",
        answer: "Rubber manufacturers with a valid Udyam certificate (MSME) get a 50 percent rebate, paying 4500 as the government filing fee instead of the standard 9000."
    },
    {
        question: "Can I protect a rubber gasket design under trademark?",
        answer: "Trademark protects the brand name and logo. For a unique functional or aesthetic design of a gasket, you should consider a Design Patent or a Utility Patent."
    },
    {
        question: "Does Class 17 include metallic pipes?",
        answer: "No, metallic pipes fall under Class 6. Class 17 is specifically for non-metallic flexible pipes, hoses, and tubes."
    },
    {
        question: "How long does the Class 17 registration process take?",
        answer: "Standard registration takes 8 to 12 months, assuming there are no major objections from the registry or oppositions from third parties."
    },
    {
        question: "How can I stop someone selling fake versions of my branded O-rings?",
        answer: "With a registered trademark, you can initiate criminal proceedings, conduct police raids, and file for civil injunctions to stop the sale and seize counterfeit goods."
    },
    {
        question: "Does Class 17 cover insulating paints?",
        answer: "Yes, insulating paints, oils, and varnishes are included in Class 17 due to their stopping and insulating properties."
    }
];

const reviews = [
    {
        name: "Sandeep R.",
        role: "CEO, Elastomer Tech India",
        text: "Securing our Class 17 mark was vital for our export business. IPR Karo handled the complexities of industrial classification perfectly.",
        rating: 5
    },
    {
        name: "Meera Deshmukh",
        role: "Founder, GreenSeal Gaskets",
        text: "The MSME fee rebate guidance saved us thousands. Their digital process for our rubber parts brand was smooth and professional.",
        rating: 5
    },
    {
        name: "Arjun Khanna",
        role: "Director, Vulcan Industries",
        text: "Protecting our synthetic rubber line required deep legal knowledge. They managed the registry objections with absolute precision.",
        rating: 5
    }
];

export default function RubberProductsPage() {
    const breadcrumbItems = [
        { label: "Trademark for Rubber Products", href: "/trademark-for-rubber-products" },
    ];

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
        "headline": "Definitive Guide to Trademark Registration for Rubber Products in India (Class 17)",
        "description": "Expert insights into Class 17 legal protection for rubber, plastics, and insulating materials. Strategy for MSMEs, industrial branding, and global IP enforcement.",
        "author": {
            "@type": "Organization",
            "name": "IPR Karo"
        }
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
                "name": "Trademark for Rubber Products",
                "item": "https://www.iprkaro.com/trademark-for-rubber-products"
            }
        ]
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Trademark Registration for Rubber and Insulating Products",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1420"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />

            <div className="bg-white min-h-screen font-sans text-gray-800">

                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
                            Elastic Strength, <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Immutable Brand Protection for Rubber
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            From industrial gaskets to advanced insulating materials, your Class 17 brand is the bridge of trust with global manufacturers. Secure your rubber and plastic assets with India's premier IP law firm. Same day filing, 100% digital, zero hassle.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Legalize Your Rubber Brand
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Breadcrumb Row */}
                <div className="bg-gray-50 border-b border-gray-200 py-4">
                    <div className="container mx-auto px-4 max-w-[1400px]">
                        <Breadcrumbs items={breadcrumbItems} />
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="container mx-auto px-4 max-w-[1600px] py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

                        {/* Left Column - TOC */}
                        <aside className="hidden lg:block sticky top-32">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Insights</h4>
                                <TableOfContents sections={tocSections} orientation="vertical" />
                            </div>
                        </aside>

                        {/* Middle Column - Main Content */}
                        <main className="min-w-0">
                            {/* TOC (Mobile) */}
                            <div className="lg:hidden mb-6 sticky top-24 z-20">
                                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                                    <TableOfContents sections={tocSections} orientation="horizontal" />
                                </div>
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                                    <section id="importance-of-trademark" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Vital Importance of Trademarking in the Rubber Logistics and Industrial Sector
                                        </h2>
                                        <p className="mb-6">
                                            The rubber industry in India is a massive, multi-tiered ecosystem ranging from raw material plantations to highly specialized industrial manufacturing. In this technical and high-volume market, your brand name is not just a marketing tool; it is a critical signal of material integrity, safety standards, and engineering precision. Whether you manufacture industrial O-rings, flexible non-metallic pipes, or advanced insulating varnishes, a registered trademark is your primary defense against market dilution and legal vulnerability.
                                        </p>
                                        <p className="mb-6">
                                            <strong>Trademark Registration for Rubber Products</strong> under Class 17 provides the essential legal framework for building a brand that industrial buyers can trust. In an industry where components are often hidden inside larger machines or construction projects, the brand name on the packaging or the product itself is the only guarantee of quality. Without a registered mark, you are at the mercy of counterfeiters who can easily replicate your product designs but fail on the material performance, ultimately damaging your hard-earned reputation.
                                        </p>
                                        <div className="bg-purple-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-purple-900 italic font-medium">
                                                "In industrial rubber, your trademark is the 'seal of safety.' If the seal isn't legally yours, you are not just losing a brand; you are assuming the liability of everyone who copies you."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Under the Trade Marks Act, 1999, registration gives you the exclusive right to use the mark across the entire Indian subcontinent. For rubber manufacturers supplying to the automotive, aerospace, or construction giants, this legal certainty is often a mandatory procurement requirement. Large institutional clients do not just look for material specifications; they look for the legal and commercial stability that only a registered trademark provides. It acts as a badge of origin and a testament to your long-term commitment to the Indian industrial landscape.
                                        </p>
                                        <p className="mb-6">
                                            Beyond enforcement, a trademark is a powerful intangible asset that elevates your company's valuation. For MSMEs in the rubber sector, a registered brand is frequently a key requirement for securing bank financing and government tenders. It demonstrates that your business is built on a foundation of intellectual property, making it more attractive to investors and strategic partners. In a globalized market, where Indian rubber products are increasingly reaching foreign shores, a solid domestic trademark is the first step toward building an international IP portfolio.
                                        </p>
                                    </section>

                                    <section id="class-17-coverage" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Class 17 Spectrum: From Synthetic Polymers to Insulating Fabrics
                                        </h2>
                                        <p className="mb-8 font-semibold">
                                            Class 17 is the definitive home for industrial semi-finished materials. Understanding its specific breadth ensures your application covers all relevant commercial activities.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTools} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Rubber & Elastomers</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Raw, semi-worked, and synthetic rubber. Sheets, blocks, and rolls. Also includes vulcanized fiber, gutta-percha, and liquid rubber solutions used in manufacturing.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faVial} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Insulating & Stopping</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Electrical, thermal, and acoustic insulation. Insulating oils, paints, and varnish. Also covers stopping materials like gaskets, joint packings, and sealant compounds.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faTruckMoving} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Flexible Pipes & Hoses</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Non-metallic flexible tubes, pipes, and hoses. Includes garden hoses, fire hoses (when non-metallic), and industrial connective tubing for liquids and gases.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faMicrochip} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Semi-Processed Plastics</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Plastics in extruded form for use in manufacture. Films, rods, and tubes that serve as raw material for other industries. Also includes acrylic resins.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is vital to distinguish between a Class 17 trademark and others. For example, while a rubber gasket is Class 17, the machine part it belongs to might be Class 7. Similarly, finished plastic consumer goods often fall in Class 21. At IPR Karo, we perform a '360-Degree Classification Audit' to ensure your brand is protected not just for the material you sell, but for the actual commercial use cases your customers associate with your brand.
                                        </p>
                                        <p className="mb-6">
                                            Class 17 also includes niche items like asbestos, mica, and certain types of threads not for textile use. For the rubber industry, the inclusion of 'Packing, stopping and insulating materials' is the most significant. This allows companies producing high-tech seals and barriers to claim a broad protection over the 'Safety Component' market. By securing your Class 17 rights, you own the identity of the hidden but critical elements that keep modern machinery running.
                                        </p>
                                    </section>

                                    <section id="industrial-rubber-branding" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Industrial Branding Strategy: Creating Value in the Commodity Market
                                        </h2>
                                        <p className="mb-6">
                                            Industrial rubber is often perceived as a commodity, but the most successful firms are those that have successfully 'Branded the Commodity.' When a buyer asks for a specific brand of O-ring or a particular type of insulating tape, they are not just buying rubber; they are buying the reliability and engineering standards associated with that name. Trademarks are the primary tool for this transformation.
                                        </p>
                                        <p className="mb-6">
                                            For rubber startups, our advice is always to avoid descriptive names. Using a word like "Stretchy" or "Black Rubber" as a trademark is a recipe for rejection by the registry. Instead, we help you create sounds, names, or abstract marks that can grow into highly recognizable industry standards. This 'Arbitrary or Fanciful' approach to naming ensures that your mark is naturally strong and easier to defend in court against infringers who might try to confuse your B2B clients.
                                        </p>
                                        <div className="bg-gray-900 text-white p-10 rounded-3xl my-10 shadow-xl overflow-hidden relative">
                                            <div className="relative z-10">
                                                <h3 className="text-2xl font-bold mb-4 text-[#6E5E93] uppercase tracking-tighter">The B2B Brand Moat</h3>
                                                <p className="opacity-80 leading-relaxed font-light italic">
                                                    "In a B2B market, your brand is the shortcut to trust. A registered trademark is the legal fence that keeps your competitors from taking that shortcut at your expense."
                                                </p>
                                            </div>
                                            <div className="absolute bottom-0 right-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                                                <FontAwesomeIcon icon={faIndustry} className="w-64 h-64" />
                                            </div>
                                        </div>
                                    </section>

                                    <section id="non-conventional-marks" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Beyond Logos: The Era of Olfactory and Shape Trademarks in Rubber
                                        </h2>
                                        <p className="mb-6">
                                            The Indian trademark landscape is evolving rapidly. In a historic move, the registry recently accepted its first olfactory (smell) trademark for tires-specifically, a floral fragrance reminiscent of roses applied to tires. This opens a new frontier for branding in the rubber industry. If your products have a unique smell, texture, or even a distinctive shape that consumers can recognize, these 'Non-Conventional Trademarks' can be registered if they have acquired secondary meaning.
                                        </p>
                                        <p className="mb-6">
                                            While the legal threshold for these marks is higher-requiring proof of graphical representation and distinctiveness-they provide an incredibly powerful market advantage. A competitor can copy a name, but copying a scent or a specific tactile feel of a high-end gasket is much harder. We guide our clients through the scientific and legal rigors needed to register these advanced marks, turning sensory attributes into ownable intellectual property. This is the future of industrial differentiation in the Class 17 space.
                                        </p>
                                        <p className="mb-6">
                                            Shape trademarks are also becoming highly relevant for rubber components. A uniquely shaped buffer or a specifically designed hose connector can be trademarked if the shape is what customers use to identify the source. By securing the 'Form' of your product as a trademark, you gain a level of protection that outlasts the shorter lifespan of patents and designs, creating a permanent legal monopoly over your product's signature look.
                                        </p>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight leading-[1.1]">
                                            Professional Roadmap to Class 17 Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Deep Search & Conflict Audit</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        We go beyond simple word searches. We analyze the IP India database for phonetically similar marks, cross-class conflicts, and existing Class 17 registrations that might pose a risk. This detailed risk assessment ensures that your application doesn't get stuck in multi-year litigations at the registry.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileSignature} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Strategic Filing (Form TM-A)</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Our legal experts draft your 'Goods and Services' description to be 'Objection-Proof.' For rubber products, we ensure every nuance-from synthetic compounds to stopping materials-is captured. Upon filing, you instantly receive your application number and the legal right to use the ™ symbol.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all border border-transparent hover:border-purple-100">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Examination, Journal & Registration</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar examines your mark. If an objection is raised (usually for similarity or lack of distinctiveness), we draft a robust response backed by high-court precedents. Once cleared, it is published in the Trademark Journal. After the 4-month window for public opposition, you receive your official ® certificate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation Checklist: Preparing Your Legal Fortress
                                        </h2>
                                        <p className="mb-8">
                                            Preparation is the key to a fast-track registration. Having these documents ready allows our team to file your application within 24 hours.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-purple-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    For Individual Proprietors & SME Owners
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Applicant's Identity Proof (Aadhaar or Passport).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>PAN Card details for tax and registry records.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>Udyam/MSME Registration (Mandatory for the 50% fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-[rgb(110,94,147)] mt-1 mr-3" /> <span>A high-resolution logo or name-style graphic.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-50 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    For Industrial Units & Limited Companies
                                                </h3>
                                                <ul className="space-y-4 text-gray-600 font-medium">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>COI or Partnership Deed of the entity.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>GST Registration Certificate for location proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>Signed Power of Attorney (Form TM-48).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-gray-400 mt-1 mr-3" /> <span>User Affidavit (If claiming use before the application date).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="anti-counterfeiting" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Stopping the Shadow Factories: Counterfeit Enforcement in rubber
                                        </h2>
                                        <p className="mb-6">
                                            The rubber industry, particularly O-rings and gaskets, is highly susceptible to small-scale, unregulated manufacturers who use inferior materials to print your brand name on fake products. These 'Shadow Factories' don't just steal your revenue; they create massive liability. If a counterfeit branded seal fails in an industrial plant, the legal and financial blowback can be catastrophic for your brand.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark is your most potent enforcement weapon. It permits you to initiate **Criminal Raids and Seizures** against counterfeiters. Under the Trademarks Act, if you have a registration, the police can move without a warrant to seize infringing goods and close down illegal production units. This swift action is critical in the industrial world to prevent substandard parts from entering the supply chain under your name.
                                        </p>
                                        <p className="mb-6">
                                            We also handle **Customs IPR Recordation**. If you export or import your components, registering your mark with the Central Board of Indirect Taxes and Customs (CBIC) allows customs officials at ports to stop and seize counterfeit shipments. This creates a virtual wall around the Indian market, ensuring your distributors and clients only ever receive original, high-performance parts that carry your legal guarantee of quality.
                                        </p>
                                    </section>

                                    <section id="msme-benefits" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Economic Incentives: The MSME Advantage for Rubber Manufacturers
                                        </h2>
                                        <p className="mb-6">
                                            The Indian government actively encourages rubber manufacturers and exporters to secure their brands. Under recent notifications, MSMEs (Micro, Small, and Medium Enterprises) and startups recognized by the DPIIT are eligible for a **50 percent rebate** on the official government filing fees. This means your core filing cost is reduced from 9000 to 4500 per class, making brand protection affordable for even the smallest manufacturing units.
                                        </p>
                                        <p className="mb-6">
                                            To claim this rebate, you must have a valid Udyam Registration certificate. At IPR Karo, we consider this an essential part of our consultation. We don't just file your trademark; we ensure your business structure is optimized to take full advantage of these government incentives. This allows you to allocate more capital toward R&D and market expansion while maintaining a legally bulletproof IP portfolio.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, many state governments offer additional reimbursements for trademark registration costs to incentivize 'Make in India' initiatives. We keep our clients informed of these dynamic state policies, ensuring that the cost of your brand protection is as low as possible. In essence, the government is paying half your bill to help you build a more competitive, globally-recognized Indian brand.
                                        </p>
                                    </section>

                                    <section id="global-expansion" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Global Reach: Madrid Protocol for Rubber Exports
                                        </h2>
                                        <p className="mb-6">
                                            Indian rubber products-from specialized hoses to medical-grade stoppers-are in high demand in the Middle East, Southeast Asia, and Europe. If you are exporting, protecting your brand only in India is a major risk. A local competitor in your export destination could register 'your' brand name and block your shipments at their ports.
                                        </p>
                                        <p className="mb-6">
                                            The **Madrid Protocol** offers a streamlined 'Single Application' process to protect your brand in over 125 member countries through your base Indian registration. This is significantly cheaper and more efficient than hiring individual foreign lawyers. A global trademark portfolio is not just about protection; it is a major asset when negotiating with international distributors, as it proves that you are a serious, legally-conscious global player.
                                        </p>
                                        <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                            <div className="relative z-10">
                                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Your Industrial Identity, LEGALLY SECURED</h2>
                                                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                                                    Don't let your Class 17 assets be commoditized. Start your official trademark application today and turn your manufacturing expertise into a permanent legal monopoly.
                                                </p>
                                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                    <Link href="/contact-us">
                                                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                            Consult IP Expert
                                                        </button>
                                                    </Link>
                                                    <a href="tel:+919289707648">
                                                        <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                                                            <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mr-3" />
                                                            +91-9289707648
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
                                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>
                                        </div>
                                    </section>

                                    <section className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Olfactory Trademarks: The New Frontier in Rubber Product Differentiation
                                        </h2>
                                        <p className="mb-6">
                                            As mentioned briefly, the recent acceptance of a 'Smell Trademark' for tires signifies a massive shift in how the Indian Trademark Registry views distinctiveness. For rubber manufacturers, this is a game-changer. Rubber by its nature often has a pungent or industrial odor that many consumers find off-putting. If a manufacturer can imbue their product with a unique, pleasant, and identifiable scent-and prove that this scent is not a functional requirement of the product-they can potentially claim a trademark.
                                        </p>
                                        <p className="mb-6">
                                            This is the ultimate form of brand differentiation. Imagine a brand of yoga mats or industrial gloves that has a signature 'Ocean Breeze' or 'Lavender' scent. This sensory branding creates a direct emotional connection with the user and is incredibly difficult for competitors to replicate without infringing on the trademark. At IPR Karo, we are at the forefront of these non-conventional mark strategies, helping innovative rubber companies explore the full sensory potential of their brand identity.
                                        </p>
                                        <p className="mb-6">
                                            Registering an olfactory mark requires a detailed scientific analysis and a robust legal argument that the scent has become a 'Source Identifier.' We work with chemical experts and branding professionals to build this evidence, ensuring that your unique product experience is protected by law. This high-level legal strategy turns a simple product attribute into a high-value intellectual property asset that can define an entire market category.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Role of Trademarks in Rubber Recycling and Sustainability
                                        </h2>
                                        <p className="mb-6">
                                            With the global push toward a circular economy, rubber recycling and the manufacture of products from reclaimed rubber are booming sectors. In this space, branding is the primary way to communicate 'Eco-Integrity.' Customers in the automotive and footwear industries are willing to pay a premium for verified recycled content, but only if they trust the brand behind the claim.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark for your recycled rubber line-names like "ReTred" or "EcoPoly" (subject to availability)-allows you to own the 'Sustainability Narrative.' It prevents 'Greenwashing' by competitors who might try to use similar-sounding names for products that don't meet the same environmental standards. By securing your Class 17 rights for your green products, you are not just protecting a name; you are protecting the trust of an environmentally-conscious global market.
                                        </p>
                                        <p className="mb-6">
                                            We also help these firms with 'Certification Marks' branding. If you have developed a unique standard for rubber re-processing, trademarking that standard allows you to license it to other manufacturers. This creates an additional revenue stream and establishes your brand as the 'Authority of Quality' in the sustainable rubber industry. This strategic use of trademarks allows small, innovative recycling firms to punch way above their weight in the global industrial market.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Legal Precedents: Rubber Industry Trademarks in Indian Courts
                                        </h2>
                                        <p className="mb-6">
                                            Indian courts have long recognized the importance of material and brand integrity in the rubber sector. The case of *London Rubber Co. Ltd. v. Durex Products Inc.* is a foundational Supreme Court judgment that dealt with the registration of identical marks for rubber products. The court's focus on 'Honest Concurrent Use' and the potential for deceptive similarity is still the guiding light for how Class 17 cases are handled today.
                                        </p>
                                        <p className="mb-6">
                                            Understanding these precedents is vital for any company entering the rubber market. It allows us to build 'Litigation-Ready' trademark applications. When we conduct a search, we are not just looking for identical names; we are analyzing the 'Likelihood of Confusion' based on decades of Indian case law. This proactive legal approach ensures that your brand is built on solid ground, minimizing the risk of expensive court battles down the line.
                                        </p>
                                        <p className="mb-6">
                                            Recent cases have also seen courts take a tough stance on 'Passing Off' in the industrial pipe and hose industry. Manufacturers who use similar color schemes or packaging styles to mimic a market leader have been restrained from doing so, even if their brand names were different. This confirms that 'Trade Dress' and overall brand impression are as important as the name itself. We help our clients secure and defend these visual assets, ensuring their market position is protected from every possible angle.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Synthetic Rubber and the Future of Polymer Trademarks
                                        </h2>
                                        <p className="mb-6">
                                            The shift from natural rubber to specialized synthetic polymers (EPDM, Nitrile, Silicone) has created a high-tech manufacturing niche. Branding in this space is more like branding a pharmaceuticals or high-tech chemicals. The name of the synthetic compound often becomes the brand itself. Trademarking these names is essential to prevent them from becoming generic terms that everyone can use.
                                        </p>
                                        <p className="mb-6">
                                            We assist chemical engineering firms in trademarking their proprietary synthetic rubber brands in Class 17. This ensures that their R&D investments are commercialized exclusively under their own brand. It also allows for clear 'Component Branding' deals, where a hose manufacturer can advertise that their products are "Made with [Trademarked Polymer]," creating a powerful 'Intel Inside' style marketing effect for the polymer manufacturer.
                                        </p>
                                        <p className="mb-6">
                                            As we look toward the future, the branding of 'Bio-Based Polymers' is the next big frontier. Companies that can successfully trademark their unique bio-rubber brands today will own the premium market of tomorrow. This forward-looking IP strategy is the hallmark of our approach at IPR Karo, as we help our clients build brands that are not just legally secure today, but are positioned for leadership in the next industrial revolution.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Institutional Credibility: Trademarks in Government and Defense Tenders
                                        </h2>
                                        <p className="mb-6">
                                            For rubber manufacturers aiming to supply to the Indian Railways, the Defense sector, or major electricity boards, a registered trademark is often a mandatory 'Pre-qualification' criterion. These bodies view a registered mark as a sign of a stable, authentic, and legally compliant manufacturer. Without an ® certificate, your application for many high-value tenders may be rejected at the technical stage itself.
                                        </p>
                                        <p className="mb-6">
                                            A trademark in Class 17 acts as your 'Institutional Identity Card.' It provides the procurement officer with the assurance that the products you supply are genuine and covered by legal warranties of origin. This credibility is what separates institutional-grade manufacturers from local workshops. By securing your trademark early, you open the doors to these massive, stable revenue streams that can form the backbone of your manufacturing growth.
                                        </p>
                                        <p className="mb-6">
                                            We also help our clients manage 'Tender-Specific Branding.' If you have developed a specialized rubber product specifically for a defense contract, trademarking that specific product name ensures that competitors cannot 'Pass Off' their generic products as meeting the same high-security specifications. This strategic use of IP ensures that your innovations and your relationship with the state are protected from commercial interference.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Trademark Monitoring: Defending your Rubber Brand 24/7
                                        </h2>
                                        <p className="mb-6">
                                            Registration is the beginning, not the end, of brand protection. The industrial market is dynamic, and new applications are filed every day. Without active monitoring, a competitor could register a 'Deceptively Similar' name in Class 17 and slowly eat away at your market share. By the time you notice them in the market, they might have already secured a registration that is hard to cancel.
                                        </p>
                                        <p className="mb-6">
                                            We provide automated and manual 'Trademark Watch' services for our Class 17 clients. We scan the weekly Trademark Journal for any marks that might conflict with yours. If we find a threat, we file a 'Notice of Opposition' within the 4-month window, preventing the infringing mark from ever being registered. This proactive defense is much cheaper and more effective than trying to cancel a registered mark or suing for infringement after they have already established themselves in the market.
                                        </p>
                                        <p className="mb-6">
                                            Our monitoring also extends to digital marketplaces and social media. In the age of 'B2B E-commerce,' counterfeiters often use your brand name in their search keywords or product descriptions to hijack your traffic. We use our legal and technical expertise to take down these infringing listings, ensuring that your digital brand presence remains pure and productive.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Conclusion: The Long-Term Value of Class 17 IP
                                        </h2>
                                        <p className="mb-6">
                                            Investing in a Class 17 trademark is a long-term commitment to your business's future. It is a one-time process that provides security for decades. As the Indian rubber and plastics industry moves toward becoming a 'Global Manufacturing Hub,' the value of these brands will only increase. A registered mark today is the legacy you leave for or sell to the next generation of industrial leaders.
                                        </p>
                                        <p className="mb-6">
                                            In the end, branding in rubber and plastics is about building a 'Legacy of Reliability.' In industrial engineering, reliability is the only currency that matters. A trademark is the legal certificate of that reliability. At IPR Karo, we are honored to partner with India's industrial pioneers, helping them turn their technical excellence into ownable, defensible, and high-value intellectual property.
                                        </p>
                                        <p className="mb-10 text-gray-500 italic">
                                            IPR Karo is India's leading digital platform for intellectual property matters. With a team of over 50 legal experts and technologists, we have helped over 50,000 businesses secure their identities. Our Class 17 division is specifically designed to handle the complexities of industrial manufacturing, providing a seamless, expert-led path to brand ownership.
                                        </p>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32 pt-12 text-gray-700">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Frequently Asked Questions: Class 17 Mastery
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="scroll-mt-32 pt-20">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            Voices of Trust: Client Testimonials
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-inner">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                </article>
                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Check Name Availability</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10 font-light">
                                    Don't build your industrial brand on quicksand. Get a **Free Class 17 Conflict Report** in 24 hours.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                                        Start Search Now
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mr-3" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Related Industries</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-metal-goods" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Metal Goods (Class 6)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-vehicles" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Automotive (Class 12)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-paper-goods-and-printing" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">Paper & Printing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-base">All Services</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
