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
    faGavel,
    faGlobe,
    faShieldAlt,
    faBalanceScale,
    faRocket,
    faMoneyBillWave,
    faCertificate,
    faFileSignature,
    faPhone,
    faChevronRight,
    faStethoscope,
    faHeartbeat,
    faHospital,
    faBriefcaseMedical,
    faUsers,
    faLightbulb,
    faStar,
    faMicroscope,
    faPlusSquare,
    faHandHoldingMedical
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Trademark for Medical Equipment | Class 10 Registration India',
    description: 'Complete guide to trademark registration for medical devices, surgical instruments, and healthcare equipment in India. Secure your medical brand under Class 10 today.',
    keywords: [
        'trademark for medical equipment',
        'medical device brand registration india',
        'class 10 trademark india',
        'surgical instruments trademark',
        'healthcare equipment brand protection',
        'logo registration for medical devices',
        'medical equipment trademark search',
        'protect medical brand india',
        'diagnostic apparatus trademark registration',
        'orthopedic articles trademark'
    ],
    openGraph: {
        title: 'Elite Trademark Registration for Medical Equipment Manufacturers',
        description: 'Protect your healthcare innovation with India\'s leading IP legal team. 100% online process, same-day filing for medical device brands.',
        url: 'https://www.iprkaro.com/trademark-for-medical-equipment',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/trademark-for-medical-equipment',
    },
};

const tocSections = [
    { id: 'importance-of-trademark', title: 'Why It Matters' },
    { id: 'legal-definition', title: 'Legal Definition' },
    { id: 'comprehensive-goods-list', title: 'Class 10 Goods' },
    { id: 'classification-nuances', title: 'Classification Nuances' },
    { id: 'strategic-necessity', title: 'Health Sector Rationale' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'documents-checklist', title: 'Required Documents' },
    { id: 'global-expansion', title: 'Global Protection' },
    { id: 'smart-medical-devices', title: 'Future of Smart Med-Tech' },
    { id: 'monitoring-enforcement', title: 'Monitoring & Enforcement' },
    { id: 'faqs', title: 'FAQs' },
];

const faqs = [
    {
        question: "What is Trademark Class 10 in India?",
        answer: "Trademark Class 10 covers surgical, medical, dental, and veterinary apparatus and instruments. This includes artificial limbs, eyes and teeth, orthopedic articles, and suture materials. It is the primary class for physical medical devices."
    },
    {
        question: "Is software used in medical devices covered under Class 10?",
        answer: "Generally, physical hardware resides in Class 10. However, downloadable software or SaaS platforms for medical diagnostics may also require registration in Class 9 or Class 42 to ensure comprehensive digital protection."
    },
    {
        question: "Can I trademark the name of a specific medical implant?",
        answer: "Yes, you can trademark the brand name of a specific implant, such as a heart valve or orthopedic screw. This prevents competitors from using a similar name for their surgical products."
    },
    {
        question: "Does CE or CDSCO certification provide trademark protection?",
        answer: "No. CE marking and CDSCO (Central Drugs Standard Control Organisation) approvals are regulatory compliance certifications for safety and efficacy. Trademark registration is a separate legal process to protect your brand name and logo."
    },
    {
        question: "How long does it take to register a medical equipment trademark?",
        answer: "The process usually takes 12 to 18 months. However, you can use the TM symbol and begin building brand equity as soon as the application is filed with the Trademark Registry."
    },
    {
        question: "What if my brand name is descriptive of the medical function?",
        answer: "Names that purely describe the function (e.g., 'Clear Heart Monitor') are difficult to trademark as they lack distinctiveness. We recommend choosing suggestive or arbitrary names for stronger legal protection."
    },
    {
        question: "Is a trademark search necessary for life-saving equipment?",
        answer: "It is critical. Rebranding a life-saving device due to a trademark conflict is expensive and can cause confusion among healthcare providers and patients, potentially impacting market trust."
    },
    {
        question: "Can an individual register a trademark for an MRI machine?",
        answer: "Yes, an individual can be a trademark applicant. However, if you have an MSME or Startup certificate, you can avail a 50% discount on the government filing fees."
    },
    {
        question: "Does one trademark cover all types of medical instruments?",
        answer: "A single application in Class 10 can cover a broad range of instruments. However, you must specify the list of goods clearly (e.g., catheters, scalpels, x-ray scanners) in the application."
    },
    {
        question: "Why should I choose IPR Karo for my medical brand?",
        answer: "We specialize in high-tech and healthcare IP. Our team understands the nuances of Class 10 and related classes, ensuring your medical innovation is protected from all legal angles."
    }
];

const reviews = [
    {
        name: "Dr. Vikram M.",
        role: "CEO, MedTech Innovations",
        text: "The search report for our heart monitoring device was exceptionally thorough. They helped us navigate a tricky conflict in Class 9 that we hadn't even considered.",
        rating: 5
    },
    {
        name: "Anjali R.",
        role: "Founder, OrthoSmart",
        text: "Professional and efficient. We got our registration certificate for our surgical tools line without a single objection, thanks to their strategic filing.",
        rating: 5
    },
    {
        name: "Sandeep K.",
        role: "Director, LifeLine Devices",
        text: "Same-day filing allowed us to launch our first-aid kits under a new brand name with immediate legal markers. Excellent service for medical startups.",
        rating: 5
    }
];

export default function TrademarkForMedicalEquipmentPage() {
    const breadcrumbItems = [
        { label: "Trademark for Medical Equipment", href: "/trademark-for-medical-equipment" },
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
        "headline": "The Ultimate Guide to Trademark Registration for Medical Equipment in India",
        "description": "Comprehensive legal guide for medical device manufacturers and distributors on Class 10 trademarking. Learn about process, costs, and strategic brand protection.",
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
                "name": "Trademark for Medical Equipment",
                "item": "https://www.iprkaro.com/trademark-for-medical-equipment"
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
                    "name": "Trademark Registration for Medical Equipment",
                    "image": "https://www.iprkaro.com/images/medical-trademark.jpg",
                    "description": "Expert trademark registration services for medical devices, surgical instruments, and healthcare apparatus under Class 10.",
                    "brand": {
                        "@type": "Brand",
                        "name": "IPR Karo"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "2180"
                    },
                    "review": reviews.map(r => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": r.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
                        "reviewBody": r.text
                    }))
                })
            }} />
            <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
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
                            Secure Your Healthcare Innovation: <br />
                            <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                                Elite Trademark for Medical Equipment
                            </span>
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
                            In the high-stakes world of medical technology, your brand is a badge of trust and safety. Protect your surgical instruments, diagnostic apparatus, and healthcare devices with India's leading IP attorneys. 100% online, same-day filing.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                                Register Your Medical Brand
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
                        <aside className="hidden lg:block sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-4 scrollbar-hide">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Guide Content</h4>
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
                                            The Strategic Power of Trademark Registration for Medical Equipment
                                        </h2>
                                        <p className="mb-6">
                                            In the rapidly evolving landscape of Indian healthcare, the medical device sector is witnessing unprecedented growth. From advanced diagnostic AI-integrated scanners to precision surgical instruments, the market is filled with innovation. However, in an industry where safety and trust are the primary currencies, your brand name is more than just a marketing tool. It is a promise of medical grade quality and reliability. <strong>Trademark Registration for Medical Equipment</strong> is the legal bedrock upon which this trust is built.
                                        </p>
                                        <p className="mb-6">
                                            For a med-tech company, a trademark serves as a massive defensive moat. It prevents counterfeiters from flooding the market with substandard, potentially dangerous equipment using your brand name. In the medical field, a case of brand confusion is not just a commercial loss; it can be a patient safety risk. If a hospital procures a faulty surgical instrument believing it to be yours due to brand imitation, the legal and reputational fallout for your company could be catastrophic.
                                        </p>
                                        <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                                            <p className="text-xl text-blue-900 italic font-medium">
                                                "In the medical industry, your brand is the face of your clinical integrity. A registered trademark ensures that your innovation is never diluted or hijacked by low-quality imitators."
                                            </p>
                                        </div>
                                        <p className="mb-6">
                                            Furthermore, the investment required to bring a medical device to market is substantial. Between R&D, clinical trials, and CDSCO regulatory approvals, the financial stakes are high. Neglecting to secure your trademark early in the development cycle is a gamble with your entire capital investment. Imagine receiving a cease and desist notice just as your product receives its final healthcare certification. The cost of renaming a medical device-re-printing manuals, changing software interfaces, and re-educating the medical community-often far exceeds the cost of the initial registration.
                                        </p>
                                        <p className="mb-6">
                                            A registered trademark under Class 10 also provides a significant advantage during investor pitches. Whether you are a bootstrapped startup or a mid-size manufacturer looking for Series A funding, owning your intellectual property is a non-negotiable requirement for institutional investors. It proves that you have considered the long-term defensibility of your market position.
                                        </p>
                                    </section>

                                    <section id="legal-definition" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Defining Medical Equipment in Trademark Law: The Class 10 Scope
                                        </h2>
                                        <p className="mb-8 font-medium">
                                            The Indian Trademark Office follows the Nice Classification system, which organizes all goods into specific classes. For medical devices, Class 10 is the primary container, but its definition is intentionally broad to cover everything from simple suture needles to complex robotic surgery systems.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faStethoscope} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Surgical & Medical Apparatus</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">This category covers the core instruments used in operation theaters and clinics. This includes scalpels, forceps, surgical scissors, catheters, and endoscopes. It also includes diagnostic tools like stethoscopes and thermometers.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faPlusSquare} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Dental & Veterinary Instruments</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Dental chairs, drills, artificial teeth, and orthodontic appliances fall here. Simultaneously, it covers specialized medical equipment used for animal care, ensuring veterinary brands are equally protected.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Artificial Limbs & Implants</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">The class includes artificial limbs (prosthetics), eyes, and teeth. Orthopedic articles such as braces, soles, and crutches are also protected here, along with internal implants like stents and pacemakers.</p>
                                            </div>
                                            <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                                                <div className="text-[rgb(110,94,147)] mb-4">
                                                    <FontAwesomeIcon icon={faBriefcaseMedical} className="w-12 h-12" />
                                                </div>
                                                <h3 className="font-bold text-xl mb-3 text-gray-900">Supportive & Nursing Gear</h3>
                                                <p className="text-sm leading-relaxed text-gray-600">Everything from feeding bottles and teats to condoms and non-chemical contraceptives are classified under Class 10. It also covers thermal packs, ambulance stretchers, and specialized hospital beds.</p>
                                            </div>
                                        </div>
                                        <p className="mb-6">
                                            It is important to note that the *intent of use* is what defines the classification. For instance, a standard chair is Class 20, but a "dentist's armchair" specifically designed for medical procedures is Class 10. Similarly, standard gloves are Class 25, but "surgical gloves" are Class 10. This nuance is where many unguided applications fail.
                                        </p>
                                    </section>

                                    <section id="comprehensive-goods-list" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Exhaustive Goods List for Class 10: Where Your Brand Fits
                                        </h2>
                                        <p className="mb-6">
                                            When filing for a trademark, the "Description of Goods" must be precise. Vague descriptions can lead to official objections or, worse, leave your competitor with a loophole. Below is an categorized breakdown of items that fall under Class 10 trademarking.
                                        </p>
                                        <div className="space-y-6">
                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Diagnostic and Monitoring Systems
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> X-ray apparatus for medical purposes</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> Diagnostic apparatus for medical use</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> Electrocardiographs (ECG)</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> Blood pressure monitors</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> Magnetic Resonance Imaging (MRI)</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHeartbeat} className="text-blue-500 mr-2" /> Pulse oximeters</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Surgical and Operative Instruments
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Scalpels and surgical knives</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Surgical robots and workstations</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Suture materials and needles</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Laser systems for medical surgery</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Trocar and Cannula devices</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faMicroscope} className="text-green-500 mr-2" /> Defibrillators</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm">
                                                <h3 className="text-xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center">
                                                    Orthopedic and Prosthetic Devices
                                                </h3>
                                                <ul className="grid md:grid-cols-2 gap-4 text-gray-600 font-medium">
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Artificial eyes and implants</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Orthopedic soles and footwear</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Knee and spinal braces</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Hearing aids and cochlear implants</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Plaster bandages for orthopedic purposes</li>
                                                    <li className="flex items-center text-sm"><FontAwesomeIcon icon={faHandHoldingMedical} className="text-orange-500 mr-2" /> Compression garments</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="classification-nuances" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Art of Multi-Class Protection: Classification Nuances
                                        </h2>
                                        <p className="mb-6">
                                            Modern medical equipment rarely exists in a vacuum. A high tech ventilator is not just a Class 10 device; it's a software-driven (Class 9) life support system often sold via professional medical consultancy (Class 44). To truly protect your brand, you must look beyond the obvious.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-[rgb(110,94,147)] transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 5 vs Class 10</h4>
                                                <p className="text-xs text-gray-600 leading-relaxed">If you manufacture pre-filled syringes or medicated nasal sprays, the liquid content is Class 5 (Pharmaceuticals) while the delivery device is Class 10. You likely need both.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-[rgb(110,94,147)] transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 9 vs Class 10</h4>
                                                <p className="text-xs text-gray-600 leading-relaxed">Standalone medical software, AI diagnostic apps, and downloadable medical databases fall under Class 9. As digital health booms, this is a critical secondary class for device makers.</p>
                                            </div>
                                            <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:bg-white hover:border-[rgb(110,94,147)] transition-all">
                                                <h4 className="font-bold text-[rgb(110,94,147)] mb-2">Class 44 vs Class 10</h4>
                                                <p className="text-xs text-gray-600 leading-relaxed">If your business also provides the service of medical imaging (like a diagnostic center) rather than just the machine, the service itself must be registered under Class 44.</p>
                                            </div>
                                        </div>
                                        <p className="mt-8">
                                            Our specialized "IP Landscape Audit" at IPR Karo analyzes your entire product ecosystem. We dont just look at what you sell today, but where your innovation is heading. This prevents 'class-clashing' where a competitor might register your name in a related category and leverage it to confuse your distributors.
                                        </p>
                                    </section>

                                    <section id="strategic-necessity" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Why Medical Brands Cannot Afford to Wait: The Sector Specific Rationale
                                        </h2>
                                        <p className="mb-6">
                                            The medical device industry in India is characterized by high barriers to entry and intense regulatory scrutiny. Once a device is launched and gains traction in hospitals or pharmacies, the "Goodwill" associated with its name grows exponentially. This goodwill is the value that a trademark protects.
                                        </p>
                                        <div className="bg-gray-100 p-10 rounded-[2rem] my-10 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-10"></div>
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10">Combatting the Grey Market</h3>
                                            <p className="text-gray-700 relative z-10 mb-6">
                                                One of the biggest threats to medical device manufactures is the grey market and counterfeit surgical supplies. Counterfeiters often use slightly modified versions of famous logos or names (e.g., "Medtronic" vs "Med-Tronix") to deceive hospital procurement departments. A registered trademark gives you the power to engage Customs authorities to seize infringing arrivals at ports and grants you the right to file for immediate court injunctions.
                                            </p>
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900 relative z-10"> investor Defensibility</h3>
                                            <p className="text-gray-700 relative z-10">
                                                In the age of venture capital and private equity, medical technology is a hot sector. However, the first check a VC makes during due diligence is on the IP portfolio. If your brand is not trademarked, your company is considered to have a 'fatal flaw'. A trademark turns your brand name from an intangible idea into a documented asset that sits on your company ledger, significantly increasing the valuation of your enterprise.
                                            </p>
                                        </div>
                                    </section>

                                    <section id="registration-process" className="scroll-mt-32">
                                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                                            The Engineering behind a Successful Trademark
                                        </h2>
                                        <div className="relative space-y-12">
                                            <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">1. Precision Search & Clearance</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Our search process for medical brands is surgical. We don't just look for direct name matches. We analyze phonetic similarities (e.g., 'Phonetic equivalency') and visual confusing similarities in Class 10. We also cross-check Class 5 (Pharma) and Class 44 (Hospital services) as many disputes in the healthcare space arise from these overlapping domains.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">2. Drafting & Strategic Filing</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        Filing Form TM-A requires expert drafting of the "Specification of Goods". We ensure that your list of medical items is broad enough to cover future expansions but specific enough to pass the Trademark Examiner's scrutiny. Once filed, you can officially use the ™ symbol, signaling to the market that your brand is under legal protection.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-8 items-start relative">
                                                <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                                                    <FontAwesomeIcon icon={faGavel} className="w-12 h-12" />
                                                </div>
                                                <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                                                    <h3 className="text-xl font-bold mb-4 text-gray-900">3. Examination & Defense</h3>
                                                    <p className="text-base text-gray-600 mb-4">
                                                        The Registrar may issue an Examination Report with objections (Section 9 for descriptiveness or Section 11 for similarity). Our team of attorneys drafts comprehensive legal responses, citing past case laws and distinctiveness proofs to overcome these hurdles. We manage the entire legal dialogue until the mark is advertised in the Journal.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="documents-checklist" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Documentation Checklist for Class 10 Applicants
                                        </h2>
                                        <p className="mb-8">
                                            To ensure a smooth filing process without administrative delays, keep the following documents ready based on your entity type.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                                                    Proprietors & Small Enterprises
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Applicant's PAN and Aadhaar Card.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>MSME / Udyam Certificate (Essential for 50% fee discount).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Signed Power of Attorney (Form 48).</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Digital file of the brand logo or wordmark.</span></li>
                                                </ul>
                                            </div>
                                            <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                                    <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                                                    Companies, LLPs & Partnerships
                                                </h3>
                                                <ul className="space-y-4 text-gray-600">
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Certificate of Incorporation or Partnership Deed.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Company PAN Card and registered office address proof.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Board Resolution authorizing the signatory.</span></li>
                                                    <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3" /> <span>Startup India Certificate (if claiming fee rebate).</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="objections-handling" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Overcoming Objections in Medical Trademarking
                                        </h2>
                                        <p className="mb-6">
                                            The medical field often faces two specific types of legal challenges during registration:
                                        </p>
                                        <p className="mb-6">
                                            <strong>1. Descriptiveness (Section 9):</strong> Founders often want names that describe what the machine does (e.g., 'SharpScalpel' or 'DeepScan MRI'). The Registry objects to these because no single company should own common descriptive terms. Our strategy is to emphasize 'Suggestedness'-arguing that the name requires a leap of imagination and is therefore distinctive.
                                        </p>
                                        <p className="mb-6">
                                            <strong>2. Phonetic Similarity (Section 11):</strong> Because medical terminology is derived from Latin or Greek roots, many brand names sound similar. We perform detailed 'Phonetic Audits' to distinguish your brand. We argue that the 'sophisticated purchaser' (doctors and hospital administrators) is unlikely to be confused by minor phonetic overlaps, a key principle in healthcare trademark law.
                                        </p>
                                    </section>

                                    <section id="global-expansion" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Exporting Health: Global IP Protection for Medical Brands
                                        </h2>
                                        <p className="mb-6">
                                            India is the "Pharmacy of the World" and is rapidly becoming a global hub for medical device manufacturing. If you plan to export your equipment to markets like the USA, EU, or the Middle East, a domestic trademark is only the first step. The complexity of international healthcare regulations means that your brand must be legally bulletproof before it enters foreign soil.
                                        </p>
                                        <p className="mb-6">
                                            Through the <strong>Madrid Protocol</strong>, we assist Indian med-tech companies in expanding their brand protection to over 130 countries with a single application. This international strategy is vital because surgical equipment often travels across borders for exhibitions, clinical trials, and multinational sales tenders. Without international protection, a competitor in a foreign market could register your brand name and block your entry into that territory, effectively killing your export ambitions.
                                        </p>
                                        <p className="mb-6">
                                            International trademarking also involves navigating local linguistic nuances. A brand name that sounds professional in India might have a negative or medical-slang connotation in another country. Our global clearance searches help identify these cultural and legal risks before you spend millions on international marketing and distribution logistics.
                                        </p>
                                    </section>

                                    <section id="smart-medical-devices" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            The Future of Smart Med-Tech: AI, IoT, and Brand Identity
                                        </h2>
                                        <p className="mb-6">
                                            As we move towards the era of Industry 4.0 in healthcare, medical devices are becoming increasingly "smart." We are seeing the rise of wearable heart monitors that sync with cloud databases, AI-powered diagnostic tools that read X-rays, and robotic surgery systems operated remotely. This technological convergence is blurring the traditional lines of trademark classification.
                                        </p>
                                        <p className="mb-6">
                                            For manufacturers of smart medical devices, the brand name often spans both the physical machine (Class 10) and the software app (Class 9). If your brand name is 'SmartHeart', and you only register it in Class 10, a software developer could launch an app called 'SmartHeart App' in Class 9 and confuse your users. This is why we advocate for a "Vertical Protection Strategy," securing your brand across all digital and physical touchpoints of the patient experience.
                                        </p>
                                        <p className="mb-6">
                                            Furthermore, as medical devices collect more patient data, the brand becomes a signal of "Data Integrity" and "Privacy Compliance." A patient is more likely to use a wearable device from a brand they recognize and trust to handle their sensitive health information. Protecting that brand name is thus essential for maintaining user enrollment and data-driven business models.
                                        </p>
                                    </section>

                                    <section id="monitoring-enforcement" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Post-Registration Vigilance: Monitoring and Civil Remedies
                                        </h2>
                                        <p className="mb-6">
                                            Securing your registration certificate is a milestone, not the finish line. The Trademark Registry is a dynamic database where thousands of new marks are applied for every month. Some of these may be deceptively similar to your medical brand. Active monitoring is required to identify queste potential infringers early.
                                        </p>
                                        <p className="mb-6">
                                            Once an infringement is detected, the legal remedies in India are robust. As a registered trademark owner, you can file a 'Suit for Infringement' in a District Court or High Court. You can seek 'Permanent Injunctions' to stop the infringer from using your name, and 'Damages' for the loss of business and reputation. In the medical sector, courts are particularly strict with infringers because of the public safety implications. A 'John Doe' order can even be obtained to search and seize counterfeit medical supplies when the exact identity of the manufacturers is hidden.
                                        </p>
                                    </section>

                                    <section className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                                            Synergy Between Patent and Trademark Law
                                        </h2>
                                        <p className="mb-6">
                                            In the medical device domain, a product is often protected by both a patent (for the technical invention) and a trademark (for the brand name). While the patent expires after 20 years, the trademark can last forever. This is a crucial strategic point. When your patent expires and 'generics' or 'copies' of your device enter the market, your trademark is what keeps your brand relevant and premium. Customers will still ask for the 'Original' brand name they trust, even if cheaper alternatives are available.
                                        </p>
                                    </section>

                                    <section id="pricing" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center underline decoration-[rgb(110,94,147)] underline-offset-8">
                                            Transparent Pricing for Professional Protection
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4 text-gray-900">Government Fees</h4>
                                                <p className="text-sm text-gray-600 mb-6">Standard statutory fees per class for medical devices.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                                                        <span className="text-xs font-bold uppercase text-gray-400">Individuals/MSMEs</span>
                                                        <span className="text-xl font-black text-gray-900">₹4,500</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm">
                                                        <span className="text-xs font-bold uppercase text-gray-400">Partnerships/Companies</span>
                                                        <span className="text-xl font-black text-gray-900">₹9,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-2xl flex flex-col items-center text-center relative">
                                                <div className="absolute top-4 right-4 bg-white text-[rgb(110,94,147)] text-[10px] font-black px-3 py-1 rounded-full uppercase">Most Trusted</div>
                                                <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                                    <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                                                </div>
                                                <h4 className="font-bold text-xl mb-4">IPR Karo Service Fee</h4>
                                                <p className="text-sm opacity-80 mb-6">From search to final certification, we handle it all.</p>
                                                <div className="space-y-4 w-full">
                                                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
                                                        <span className="text-xs font-bold uppercase tracking-widest">Medical Specialty Package</span>
                                                        <span className="text-2xl font-black underline decoration-white/30 decoration-4">₹2,999</span>
                                                    </div>
                                                    <p className="text-[10px] opacity-70 text-left pt-2 leading-relaxed">Includes deep-search analysis, drafting by IP attorneys, electronic filing, and lifetime status tracking with timely alerts.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section id="reviews" className="scroll-mt-32 pt-12">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Trusted by the Healthcare Industry
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-8">
                                            {reviews.map((review, idx) => (
                                                <div key={idx} className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                                                    <div className="flex text-yellow-400 mb-4">
                                                        {[...Array(review.rating)].map((_, i) => (
                                                            <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4 mr-1" />
                                                        ))}
                                                    </div>
                                                    <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
                                                    <div className="flex items-center">
                                                        <div className="w-12 h-12 bg-gray-100 group-hover:bg-[rgb(110,94,147)] transition-colors rounded-xl flex items-center justify-center text-gray-400 group-hover:text-white font-black text-lg mr-4">
                                                            {review.name[0]}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                                            <p className="text-[10px] text-gray-500 uppercase font-black truncate max-w-[150px]">{review.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    <section id="faqs" className="scroll-mt-32">
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                                            Expert FAQ: Medical Equipment Trademarks
                                        </h2>
                                        <div className="space-y-6">
                                            {faqs.map((faq, index) => (
                                                <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-gray-200 transition-all">
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                                                        <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                                                        {faq.question}
                                                    </h3>
                                                    <div className="h-px bg-gray-200 w-full mb-4"></div>
                                                    <p className="text-gray-600 pl-8 leading-relaxed text-base font-normal">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Call to Action Section */}
                                    <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubic-mesh.png')] opacity-10"></div>
                                        <div className="relative z-10">
                                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Your Innovation Deserves Ironclad Protection</h2>
                                            <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
                                                Don't let legal ambiguity stall your medical breakthrough. Start your official trademark application today with India's most trusted IP legal bridge.
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                                <Link href="/contact-us">
                                                    <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                                                        Consult IP Expert Now
                                                    </button>
                                                </Link>
                                                <a href="tel:+919289707648">
                                                    <button className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md group">
                                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-3 group-hover:animate-pulse" />
                                                        +91-9289707648
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </section>

                                </article>

                            </div>
                        </main>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-8 sticky top-32 h-[calc(100vh-100px)] overflow-y-auto pr-2 scrollbar-hide">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Verify Your Medical Brand Name</h3>
                                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                                    Enter the healthcare market with confidence. Get a **Multi-Class Search Report** in 24 hours from Senior IP Attorneys.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-tighter">
                                        Request Free Search
                                    </button>
                                </Link>
                                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                                    <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-lg hover:text-white transition-colors flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-2" /> +91-9289707648
                                    </a>
                                </div>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Healthcare Law</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/trademark-for-electronics-and-software" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Tech & Software</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-cosmetics-cleaning" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Class 3 Cosmetics</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">Restaurant Rights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/our-services/trademark-registration" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                                            <span className="font-bold text-sm">General Registration</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Why IPR Karo Box */}
                            <div className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl relative overflow-hidden">
                                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl"></div>
                                <h4 className="font-black text-gray-900 mb-4 uppercase tracking-widest text-xs">Why IPR Karo?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-xs text-gray-500 font-medium">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        15+ Years specialized Tech IP experience.
                                    </li>
                                    <li className="flex items-start text-xs text-gray-500 font-medium">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        10,000+ Brands registered successfully.
                                    </li>
                                    <li className="flex items-start text-xs text-gray-500 font-medium">
                                        <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 mt-0.5" />
                                        End-to-end legal support via senior lawyers.
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
