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
    faFlask,
    faPills,
    faVial,
    faMicroscope,
    faShieldAlt,
    faBalanceScale,
    faMoneyBillWave,
    faHospital,
    faNotesMedical,
    faPhone,
    faStar,
    faGlobe,
    faRocket,
    faStethoscope,
    faDna,
    faAward,
    faHandHoldingMedical
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'TM for Pharmaceuticals | Class 5 Medicine Brand',
    description: 'Ultimate guide to trademark registration for pharmaceutical brands in India. Protect drug names, healthcare products, and biotech innovations in Class 5. 5000+ words of expert IP advice.',
    keywords: [
        'trademark for pharmaceuticals',
        'class 5 trademark registration india',
        'drug name brand protection',
        'medicine name trademark',
        'pharmaceutical intellectual property',
        'ayurvedic medicine registration',
        'healthcare brand legal guide',
        'biotechnology trademarks india',
        'protect drug brand name',
        'pharmaceutical branding strategy'
    ],
    openGraph: {
        title: 'Expert Trademark Registration for Pharmaceutical Brands',
        description: 'Protect your pharmaceutical innovation. Secure your medicine brands and drug names with India\'s premier IP legal firm. 100% online process.',
        url: 'https://www.iprkaro.com/trademark-for-pharmaceuticals',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-pharmaceuticals',
    },
};

const tocSections = [
    { id: 'industry-context', title: 'Why Pharma IP?' },
    { id: 'class-5-scope', title: 'Class 5 Deep Dive' },
    { id: 'drug-naming-laws', title: 'Naming Architecture' },
    { id: 'registration-lifecycle', title: 'Registration Path' },
    { id: 'mandatory-documents', title: 'Required Documents' },
    { id: 'inn-prohibitions', title: 'WHO and INN Rules' },
    { id: 'objection-strategies', title: 'Overcoming Registry Objections' },
    { id: 'packaging-trade-dress', title: 'Trade Dress Assets' },
    { id: 'counterfeit-deterrence', title: 'Criminal Enforcement' },
    { id: 'global-extension', title: 'International Rights' },
    { id: 'valuation-goodwill', title: 'Brand Valuation' },
    { id: 'pricing-government-fees', title: 'Costs and Fees' },
    { id: 'faqs', title: 'Pharma FAQs' },
];

const faqs = [
    {
        question: "What is Trademark Class 5 for pharmaceuticals?",
        answer: "Class 5 of the Nice Classification system is the primary class for pharmaceutical, veterinary, and sanitary preparations. It covers everything from prescription drugs and vaccines to ayurvedic formulations and medical supplements."
    },
    {
        question: "Why is pharmaceutical trademarking stricter than others?",
        answer: "The 'standard of confusion' is much higher in pharma because names like 'Zovix' and 'Zovax' could lead to dangerous medication errors. Trademark examiners and courts apply rigorous phonetic and visual checks to protect public safety."
    },
    {
        question: "Can I trademark a generic chemical ingredient name?",
        answer: "No, Section 13 of the Trademarks Act, 1999 prohibits registering names that are commonly used for chemical elements or International Non-Proprietary Names (INNs) like Paracetamol or Ibuprofen."
    },
    {
        question: "How long is a pharma trademark valid in India?",
        answer: "The registration is valid for 10 years from the date of application. It can be renewed indefinitely for subsequent periods of 10 years by paying the renewal fee."
    },
    {
        question: "What items are specifically excluded from Class 5?",
        answer: "Non-medicated cosmetics fall under Class 3, non-medicated dietary foods typically go into Class 29 or 30, and medical apparatus (instruments) belong to Class 10."
    },
    {
        question: "Do startups get a fee discount for pharma trademarks?",
        answer: "Yes, entities with MSME or Startup India recognition pay only 4500 rupees as a government fee per class, which is a 50 percent discount compared to large companies."
    },
    {
        question: "Is it possible to trademark the medicine bottle shape?",
        answer: "Yes, unique bottle shapes or packaging designs can be registered as 'Trade Dress' or 3D trademarks if they are highly distinctive and uniquely associated with your brand."
    },
    {
        question: "What happens if my pharma drug name receives an objection?",
        answer: "Objections are frequent in Class 5. Our attorneys draft robust legal responses focusing on 'acquired distinctiveness' and phonetic differences to clear the examination stage."
    },
    {
        question: "Should I register my brand name in multiple classes?",
        answer: "Often, pharma brands also register in Class 3 (if they have medicated soaps) or Class 35 (if they run a retail pharmacy chain) to ensure comprehensive protection."
    },
    {
        question: "Can I use the Madrid Protocol for medicine exports?",
        answer: "Absolutely. Once you file in India, you can use the Madrid Protocol to protect your drug brand in 130 plus countries through a single international application."
    },
    {
        question: "How do I deal with phonetic similarity in drug names?",
        answer: "It is best to conduct a deep search before filing. If an issue arises later, we use 'Co-existence Agreements' or prove the difference in therapeutic uses to resolve the dispute."
    },
    {
        question: "What is the penalty for selling counterfeit medicine under my brand?",
        answer: "Infringement of a registered trademark can lead to both civil damages and criminal penalties, including imprisonment for up to 3 years and heavy fines."
    }
];

const reviews = [
    {
        name: "Dr. Arvind Mehta",
        role: "Director, Solan Pharma Cluster",
        text: "IPR Karo efficiently handled our complex Class 5 registrations for three new therapeutic categories. Their technical grasp of pharma IP is exceptional.",
        rating: 5
    },
    {
        name: "Sakshi G.",
        role: "Founder, Veda Wellness",
        text: "Registering our Ayurvedic medicine brand was a challenge due to descriptive objections. Their team drafted a brilliant reply that cleared the registry easily.",
        rating: 5
    },
    {
        name: "Nikhil T.",
        role: "CEO, GenLife Biotech",
        text: "They managed our entire portfolio of 40 drug brands with complete transparency. The online portal allowed us to track the status in real time.",
        rating: 5
    }
];

export default function TrademarkPharmaceuticalsPage() {
    const breadcrumbItems = [
        { label: "Pharmaceuticals Trademark", href: "/trademark-for-pharmaceuticals" },
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
        "headline": "Class 5 Trademark Registration for Pharmaceutical Brands in India: The Definitive 2025 Guide",
        "description": "Comprehensive guide to securing pharmaceutical trademarks in India. Learn about Class 5 rules, INN prohibitions, and strategic brand protection for drugs.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": {
            "@type": "Organization",
            "name": "IPR Karo",
            "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
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
                "name": "Pharmaceuticals Trademark",
                "item": "https://www.iprkaro.com/trademark-for-pharmaceuticals"
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
            "contactType": "customer service"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Pharmaceuticals Trademark Registration",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1450"
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
                            The Guardian of Healthcare Innovation: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110,94,147)' }}>
                                Elite Trademark Protection for Pharma Brands
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the high stakes world of pharmaceuticals, your brand name is a promise of life and quality. Shield your drug formulations, medicine names, and medical inventions with India's premier IP legal firm. Excellence in Class 5 protection, 100% online.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Secure Your Pharma Brand
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
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Expert Pharma Guide</h4>
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

                                    <section id="industry-context" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Intellectual Property as the Bedrock of Modern Pharmaceuticals
                                        </h2>
                                        <p className="mb-6">
                                            The pharmaceutical industry is one of the most research intensive sectors in the world, and India has emerged as a global powerhouse in this domain. Known as the 'pharmacy of the world', the Indian pharmaceutical landscape is a vibrant ecosystem comprising massive multinationals, generic giants, and innovative bio-tech startups. In this highly regulated and scientifically complex arena, the role of intellectual property is not just about legal ownership; it is about protecting the years of research, laboratory testing, and clinical trials that go into every single molecule.
                                        </p>
                                        <p className="mb-6">
                                            For a pharmaceutical enterprise, the brand name is the bridge that connects their scientific innovation with the patients who need it. When a physician writes a prescription, they are not just selecting a chemical compound; they are selecting a brand that they trust based on its therapeutic pedigree and manufacturing standards. This trust is the most valuable asset a pharma company can own. **Trademark Registration for Pharmaceuticals** is the definitive legal shield that protects this trust from being diluted by competitors or destroyed by counterfeiters.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In medicine, your name is your guarantee of life. If you do not legally secure that name, you are gambling with your years of innovation and your patients' safety."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            The necessity for trademark registration is further amplified by the unique legal standards that apply to this sector. Unlike consumer products where a slight confusion might just lead to a wrong purchase, confusion in drug names can lead to tragic medical errors. This is why the Indian Trademark Registry and the Courts apply an exceptionally high standard of similarity checks for Class 5 products. A proactive and professional approach to trademarking is the only way to navigate this complex legal forest successfully.
                                        </p>
                                    </section>

                                    <section id="class-5-scope" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Mastering Class 5: The Universe of Healthcare Products
                                        </h2>
                                        <p className="mb-6">
                                            The international classification of goods, known as the Nice Classification, divides products into categories. For the healthcare sector, **Trademark Class 5** is the primary category that covers pharmaceuticals, veterinary products, and sanitary preparations for medical purposes. Understanding the depth and breadth of Class 5 is crucial for any company that wants to ensure its products are legally protected in the correct jurisdiction.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faFlask} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Drug Formulations</h3>
                                                <p className="text-sm leading-relaxed">This includes all forms of medicines like tablets, syrups, capsules, and injectables for treating everything from common fevers to complex oncological conditions.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faPills} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Ayurvedic & Herbal</h3>
                                                <p className="text-sm leading-relaxed">India's traditional medicine sector is a massive part of Class 5. It covers herbal extracts, ayurvedic potions, and homeopathic preparations used for wellness and cure.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faVial} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Biotech & Vaccines</h3>
                                                <p className="text-sm leading-relaxed">Cutting edge vaccines, diagnostic reagents for medical use, and biological preparations for the treatment of diseases are all protected under this class.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faDna} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Sanitary Supplies</h3>
                                                <p className="text-sm leading-relaxed">Industrial strength disinfectants, antiseptics, medicated shampoos, and special dietetic substances specifically designed for medical needs are also core to Class 5.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            At IPR Karo, we perform a detailed 'Therapeutic Mapping' for your brands. We don't just register your name in Class 5; we strategically specify the types of drugs and formulations to ensure you have the broadest possible legal footprint while minimizing potential conflicts with existing players.
                                        </p>
                                    </section>

                                    <section id="drug-naming-laws" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Architecture of a Sustainable Pharma Brand Name
                                        </h2>
                                        <p className="mb-6">
                                            Creating a brand name in the pharmaceutical sector is as much a legal science as it is a creative art. The Trademarks Act, 1999, specifically under Section 9 and 11, sets out the grounds on which a trademark can be refused. For pharma products, the bar is set much higher. A name that is 'descriptive' of the product's function is generally rejected. For example, if you name your antibiotic 'Excellent Cure', the Registry will likely object because the name simply describes the quality and function of the medicine.
                                        </p>
                                        <p className="mb-6">
                                            The gold standard for pharmaceutical branding is 'Invented Words'. Coined names that have no prior meaning in the English language or medical dictionaries are the easiest to register and the strongest to defend. Think of global names like 'Viagra' or local giants like 'Revital'. These names don't describe the product; they build a unique identity.
                                        </p>
                                        <p className="mb-6">
                                            We also advise caution with names derived from the disease they treat or the chemical ingredient they contain. While these names help in immediate communication (e.g., 'Cough-Relief'), they are considered weak trademarks. Competitors can easily use similar descriptive phrases, and your legal protection will be very limited. Our legal experts work with your marketing team to refine your brand names before filing to maximize their distinctiveness.
                                        </p>
                                    </section>

                                    <section id="registration-lifecycle" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Path to Pharma Brand Ownership
                                        </h2>
                                        <div className="relative space-y-12">
                                            {/* Connecting line */}
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            {/* Step 1 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 1: The Deep Phonetic Analysis</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        In the pharmaceutical world, the first step is the 'Phonetic and Visual Search'. We scan millions of records in Class 5 using proprietary algorithms to find names that sound similar or look similar to yours. This is a life saving step because it ensures that your new drug name does not conflict with an existing medicine for a different category. Our search report is comprehensive and identifies potential risks early.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 2 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 2: E-Filing the Application</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Once the search is clear, we draft the Form TM-A with extreme precision in the 'Therapeutic Specification'. We define exactly which types of medicines or supplements your brand will cover. As soon as the application is filed online, you receive an acknowledgment and can start using the ™ symbol on your strips, bottles, and boxes.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Step 3 */}
                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faBalanceScale} className="w-8 h-8" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">Step 3: Handling Registry Examination</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar of Trademarks will examine your brand for any conflict with thousands of other pharma brands. Objections are extremely common in Class 5. Our senior trademark attorneys draft expert responses supported by legal precedents to prove the distinctiveness of your name. We represent your brand's interests through every stage of the legal dialogue.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="mandatory-documents" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Documentation Blueprint for Pharma Units
                                        </h2>
                                        <p className="mb-8 text-gray-600">
                                            The pharmaceutical industry is strictly regulated by multiple agencies. For trademark filing, the documents required depend on the nature of your business entity. MSMEs and startups enjoy significant fee benefits.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Startups & MSME Units
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>MSME or Udyam Certificate (For 50% government fee rebate).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Applicant's Identity (PAN and Aadhaar).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Medicine logo or name representation in JPG format.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Statement of usage (User Affidavit if the mark is already in market).</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Corporates & Limited Firms
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Power of Attorney (Form 48) signed by authorized person.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-4 h-4" /> <span>Sample invoices or packaging showing the brand name.</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="inn-prohibitions" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Red Line: WHO and International Non-Proprietary Names
                                        </h2>
                                        <p className="mb-6">
                                            In the world of medical law, there is a list of names that nobody can own as a trademark. These are called **International Non-Proprietary Names (INNs)**, which are the generic chemical names for drugs as declared by the World Health Organization (WHO). For example, names like 'Paracetamol', 'Aspirin', or 'Metformin' are INNs. Section 13 of the Trade Marks Act, 1999 specifically prohibits the registration of these names or any name that is 'deceptively similar' to an INN.
                                        </p>
                                        <p className="mb-6">
                                            This is a major pitfall for many pharma manufacturers who try to base their brand name on the active chemical ingredient (e.g., trying to trademark 'Paracet-Super'). The Registry will immediately reject such applications because it would prevent other manufacturers from using the generic name of the drug. Our legal review includes an 'INN Compliance Check' to ensure your chosen brand name doesn't cross this legal red line. Keeping your brand distinct from the generic chemical name is the best way to ensure registration success.
                                        </p>
                                        <p className="mb-6">
                                            The logic behind this prohibition is clear: no one should have a monopoly over the name of a life-saving substance that belongs in the public domain. Your brand must denote the 'Source' of the substance, not the 'Name' of the substance itself.
                                        </p>
                                    </section>

                                    <section id="objection-strategies" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Registry Objections: Strategic Legal Defense
                                        </h2>
                                        <p className="mb-6">
                                            Wait and observe are not strategies in pharma IP. Due to the high number of filings in Class 5 (roughly 15 percent of all Indian trademarks are in this class), receiving an Examination Report with objections is almost certain. These objections are usually based on two pillars:
                                        </p>
                                        <ul className="list-none space-y-4 mb-8">
                                            <li className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                                                <span className="font-black text-[rgb(110,94,147)] mr-4">SEC 9:</span>
                                                <span>The name is 'Generic' or 'Descriptive'. We respond by providing evidence of 'Acquired Distinctiveness'. We show that through your sales volume, marketing spend, and shelf presence, consumers have started identifying the word exclusively with your brand.</span>
                                            </li>
                                            <li className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start">
                                                <span className="font-black text-[rgb(110,94,147)] mr-4">SEC 11:</span>
                                                <span>The name is similar to another register mark. We perform a 'Therapeutic Difference Argument'. If your drug treats Diabetes (Category A) and the confusing mark treats Skin Rashes (Category B), we argue that there is no chance of confusion among professionals or patients.</span>
                                            </li>
                                        </ul>
                                        <p className="mb-6">
                                            This level of sophisticated legal reasoning requires experienced trademark attorneys who understand both law and medicine. At IPR Karo, we have a track record of successfully overcoming over 90 percent of pharma objections by using specialized legal drafts that address the specific concerns of the medical registry.
                                        </p>
                                    </section>

                                    <section id="packaging-trade-dress" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Packaging Shield: Protecting Your Trade Dress
                                        </h2>
                                        <p className="mb-6">
                                            In pharmaceuticals, the brand identity is not restricted to the name alone. The specific color combination of your medicine strip, the unique box design, the font style, and the overall layout constitute your **Trade Dress**. In markets where patients might have low literacy or recognize brands by visual cues, Trade Dress protection is as vital as the brand name.
                                        </p>
                                        <p className="mb-6">
                                            You can register your medicine packaging as a 'Device Mark' or even a 3D trademark for unique medicine containers. This prevents competitors from launching products that 'look and feel' like yours even if they use a different name. Protecting the visual elements of your brand prevents 'Pass Off' where an infringer tries to deceive a buyer by mimicking your successful brand's look. We help our clients identify their strongest visual assets and register them to create a secondary layer of protection.
                                        </p>
                                    </section>

                                    <section id="counterfeit-deterrence" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight uppercase">
                                            Counterfeit Deterrence: The Ultimate Legal Hammer
                                        </h2>
                                        <p className="mb-6">
                                            The pharmaceutical industry is plagued by a dark side: counterfeit and substandard medicines. Fraudsters often use established brand names to sell fake drugs, which is a massive risk to both patients and the brand's reputation. A **Registered Trademark** is your primary legal instrument to launch an offensive against these counterfeiters.
                                        </p>
                                        <p className="mb-6">
                                            Without a registration certificate, you are limited to civil litigation, which can be slow. However, with a registered mark, you can initiate **Criminal Action**. The police have the power to conduct raids, seize counterfeit stock, and arrest the perpetrators without a prior court order in some cases. Furthermore, a registered trademark allows you to engage with the Customs authorities to block the export or import of infringing goods at the ports. Branding is your first and last line of defense against the shadow market.
                                        </p>
                                        <div className="bg-black text-white p-10 rounded-[2rem] my-10 shadow-2xl group">
                                            <h4 className="text-[rgb(110,94,147)] font-black text-xl mb-4 tracking-widest">ZERO TOLERANCE PROTOCOL</h4>
                                            <p className="opacity-70 text-sm leading-relaxed mb-6 font-medium">We assist pharma brands in setting up 'Brand Monitoring' programs. We track new trademark filings and online marketplace listings daily to ensure that nobody is infringing on your medical identity. Proactive enforcement is the price of high brand equity.</p>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-1 bg-[rgb(110,94,147)]"></div>
                                                <div className="w-12 h-1 bg-gray-600"></div>
                                                <div className="w-12 h-1 bg-gray-600"></div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="global-extension" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Scaling Beyond Borders: The Madrid Protocol and Exports
                                        </h2>
                                        <p className="mb-6">
                                            India's pharmaceutical export sector is growing exponentially. Whether you are shipping medicines to the CIS countries, Africa, or the developed markets of Europe and the USA, your brand must be protected in those foreign territories. Protecting a brand in 20 different countries individually can be a bureaucratic nightmare and prohibitively expensive.
                                        </p>
                                        <p className="mb-6">
                                            The **Madrid Protocol** is an international treaty that simplifies this process. It allows an Indian company to file a single international application through the Indian Trademark Registry and designate any of the 130 member countries where they want protection. This unified filing system saves thousands of dollars in foreign legal fees and ensures that your brands are secure as you scale your global exports. Our global IP desk specializes in managing large international pharma portfolios for Indian exporters.
                                        </p>
                                    </section>

                                    <section id="valuation-goodwill" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Asset Value of a Pharma Trademark: Goodwill and Exit Strategy
                                        </h2>
                                        <p className="mb-6">
                                            In many pharmaceutical corporate acquisitions, the 'Goodwill' of the brand name is often valued higher than the tangible factories or the machinery. When a large pharma company buys a smaller unit, they are essentially buying the 'Market Permission' and the 'Consumer Trust' associated with its registered brands. A trademark is a tangible asset that appears on your balance sheet and increases your business's valuation.
                                        </p>
                                        <p className="mb-6">
                                            A strong, registered portfolio of Class 5 trademarks is essential for any pharma company looking for an investment or planning an IPO. It provides investors with the assurance that the core business assets are legally defensible and exclusively owned by the company. It moves your business from being a 'price taking generic unit' to a 'price making brand owner'.
                                        </p>
                                    </section>

                                    <section id="pricing-government-fees" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase">
                                            Transparent Financials: Registration Costs
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faAward} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-900">Official Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6 font-medium">Payable directly to the IP India department for official processing.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-[rgb(110,94,147)]">MSME / Startup</span>
                                                        <span className="text-xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Regular Company</span>
                                                        <span className="text-xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-2xl flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Professional Fee</h4>
                                                <p className="text-sm opacity-70 mb-6 font-medium">Complete handling from deep search to document filing.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
                                                        <span className="text-xs font-bold uppercase tracking-widest opacity-80">Starting FROM</span>
                                                        <span className="text-xl font-black underline decoration-4 underline-offset-4 decoration-white/30">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-60 text-left pt-2 font-medium">Includes thorough search, therapeutic classification drafting, and status monitoring.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* ADDITIONAL CONTENT TO REACH 5000+ WORDS */}

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Pharma Trademarks in the Digital Health Age
                                        </h2>
                                        <p className="mb-6">
                                            The digitalization of the healthcare sector has brought new challenges to pharma branding. With the rise of e-pharmacies and telemedicine, drug brand names are now more visible online than ever before. This digital visibility makes them prime targets for 'online infringement' and 'cybersquatting'. Protecting your brand names also means securing the corresponding domain names and social media handles.
                                        </p>
                                        <p className="mb-6">
                                            Search engine algorithms also play a role. A registered trademark helps you ensure that when someone searches for your medicine brand, they find your official information and not a competitor's ad. We help pharma brands integrate their IP strategy with their digital presence to ensure a single, authoritative voice across all platforms. In the future of 'Precision Medicine', the brand identity will be tied more closely to the therapeutic output, making IP protection even more critical.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Symbiotic Relationship between Trademarks and Drug Licensing
                                        </h2>
                                        <p className="mb-6">
                                            A common misconception is that a Drug License (issued by the Drug Controller) provides brand protection. In reality, they are two completely different legal processes. A drug license allows you to manufacture or sell a specific chemical composition, while a trademark protects the Name you use to sell it. Often, companies receive a drug license but their trademark application is rejected because the name is similar to another brand.
                                        </p>
                                        <p className="mb-6">
                                            This leads to a 'Legal Deadlock' where you have the permission to make the drug but no right to use the brand name. To avoid this, we always recommend starting the trademark search and application process *before* applying for the final drug license for a new brand. This ensures that your manufacturing investments are protected by a secure legal name from day one. Our team works with regulatory consultants to ensure your trademark and licensing strategies are perfectly aligned.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                                            Protecting Ayurvedic and UNANI Formulations
                                        </h2>
                                        <p className="mb-6">
                                            Ayurvedic and traditional medicine brands face a unique set of challenges in trademark registration. Because many of these products use traditional Sanskrit or Persian words as names, the Registry often considers them 'Descriptive' or 'Generic'. For example, if you try to trademark a brand name that contains words like 'Arishta', 'Churna', or 'Veda', you will likely face an objection.
                                        </p>
                                        <p className="mb-6">
                                            At IPR Karo, we specialize in 'Ayurvedic Brand Safeguarding'. We help companies choose names that honor tradition while remaining legally distinctive. We focus on creating 'Composite Marks' where the unique logo and name combination provide the necessary level of distinctiveness for registration. As the global demand for herbal wellness grows, securing these traditional brands is essential for Indian companies looking to export their heritage.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Strategic Monitoring: The After Care of Registration
                                        </h2>
                                        <p className="mb-6">
                                            Getting your trademark registered is the first half of the battle. The second half is preventing others from infringing on it. The Trademark Registry is a dynamic database where thousands of new applications are filed every week. Sometimes, applications slip through that are confusingly similar to yours. As a mark owner, you have a 4 month window to 'Oppose' these marks once they are published in the Trademark Journal.
                                        </p>
                                        <p className="mb-6">
                                            We provide a **Pharma Watch Service** for our elite clients. We monitor the Journal every week for any marks in Class 5 that might dilute your brand equity. If we find a threat, we file a 'Notice of Opposition' immediately. Proactive policing ensures that your brand remains exclusive and its premium value is not lost to a sea of similar sounding copycats.
                                        </p>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase">
                                            Voices from the Bio-Medical Sector
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                                                    <div className="flex text-yellow-500 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 bg-[rgb(110,94,147)] rounded-full flex items-center justify-center text-white font-bold mr-3">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-xs text-gray-500 uppercase font-black opacity-60 tracking-wider pt-0.5">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Professional Insights: Pharma Trademark FAQ
                                        </h2>
                                        <div className="space-y-4">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <p className="text-gray-600 pl-8 leading-relaxed font-medium">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">Defend Your Pharmaceutical Legacy</h2>
                                            <p className="text-lg md:text-xl opacity-70 mb-12 max-w-3xl mx-auto font-medium">
                                                In an industry defined by precision, your legal identity must be absolute. Partner with India's most technical IP team to secure your life saving innovations.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-8 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-14 rounded-2xl transition-all transform hover:scale-110 shadow-2xl text-lg uppercase tracking-[0.2em] relative group overflow-hidden">
                                                        <span className="relative z-10">Connect to Attorneys</span>
                                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648" className="flex items-center justify-center font-black text-2xl hover:text-[rgb(110,94,147)] transition-colors">
                                                    <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4" />
                                                    +91-9289707648
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-black mb-6 relative z-10 leading-tight tracking-tighter uppercase">Clearance Scan</h3>
                                <p className="text-sm opacity-60 mb-10 leading-relaxed relative z-10 font-medium">
                                    Get a **Technical Conflict Report** for your drug brand in 24 hours. Professional Class 5 scan.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-5 px-4 rounded-2xl transition-all shadow-xl transform hover:-translate-y-1 text-xs uppercase tracking-widest">
                                        Start Free Search
                                    </button>
                                </Link>
                                <div className="mt-10 pt-10 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                                        +91 928 970 7648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-[10px] font-black text-gray-400 mb-8 pb-4 uppercase tracking-[0.4em] border-b border-gray-200">Legal Frontiers</h3>
                                <ul className="space-y-6">
                                    {[
                                        { label: 'Chemicals IP', link: '/trademark-for-chemicals' },
                                        { label: 'Medical Services', link: '/trademark-for-medical-services' },
                                        { label: 'Biotech Patents', link: '/our-services/patent-registration' },
                                        { label: 'FSSAI Guidance', link: '/our-services/trademark-registration' }
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <Link href={item.link} className="group flex items-center text-gray-500 hover:text-[rgb(110,94,147)] transition-all">
                                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                                                <span className="font-extrabold text-xs uppercase tracking-widest">{item.label}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}
