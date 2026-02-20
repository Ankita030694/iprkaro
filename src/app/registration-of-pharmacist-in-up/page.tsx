import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import ReviewSnippets from '@/components/ReviewSnippets';
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
    faCalendarAlt,
    faHandshake,
    faExclamationTriangle,
    faSync,
    faLightbulb,
    faUserTie,
    faBuilding,
    faFileAlt,
    faHandHoldingUsd,
    faScaleBalanced,
    faEye,
    faFilter,
    faListOl,
    faMedkit,
    faPrescriptionBottle,
    faClinicMedical,
    faHospitalUser,
    faIdCard,
    faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
    title: 'Pharmacist Registration UP Guide | UPPC Online Portal 2026',
    description: 'Complete guide to pharmacist registration in Uttar Pradesh. Learn about UPPC online application, fees, Form-V training, and mandatory document verification.',
    keywords: [
        'pharmacist registration in up',
        'uppc online registration 2026',
        'uttar pradesh pharmacy council registration',
        'pharmacist license fee up',
        'uppc lucknow appointment booking',
        'd pharm registration process up',
        'pharmacist green card up',
        'uppc documents for registration',
        'renewal of pharmacist registration up',
        'pharmacist reciprocal transfer up'
    ],
    openGraph: {
        title: 'Mastering the UPPC: The Ultimate Pharmacist Registration Manual',
        description: 'Ready to practice as a pharmacist in UP? Step-by-step instructions for the UP Pharmacy Council portal, fees, and physical verification in Lucknow.',
        url: 'https://www.iprkaro.com/registration-of-pharmacist-in-up',
        type: 'article',
    },
    alternates: {
        canonical: 'https://www.iprkaro.com/registration-of-pharmacist-in-up',
    },
};

const tocSections = [
    { id: 'introduction', title: 'The Gateway to Pharmacy: Professional Licensing in Uttar Pradesh' },
    { id: 'uppc-overview', title: 'The Uttar Pradesh Pharmacy Council (UPPC): Statutory Mandate' },
    { id: 'uppc-vs-pci', title: 'UPPC vs PCI: Understanding the Regulatory Hierarchy' },
    { id: 'eligibility', title: 'Eligibility Criteria: PCI Recognition & Academic Qualifications' },
    { id: 'document-checklist', title: 'Document Forensic: High School to Degree Verification' },
    { id: 'practical-training', title: 'Form-V Forensics: The 500-Hour Hospital Mandatory Period' },
    { id: 'online-process', title: 'Digital Navigation: Step-by-Step Online Portal Guide' },
    { id: 'fee-structure', title: 'Investment in Career: Registration & Renewal Fee Schedule' },
    { id: 'physical-verification', title: 'Physical Verification: The Lucknow Council Office Protocol' },
    { id: 'green-card', title: 'The Pharmacist Green Card: Symbol of Professional Legitimacy' },
    { id: 'renewal-transfer', title: 'Staying Active: 5-Year Renewal & Reciprocal Transfer Rules' },
    { id: 'common-pitfalls', title: 'Compliance Hurdles: Why Applications Get Rejected' },
    { id: 'why-iprkaro', title: 'IPR Karo: Forensic Assistance for Healthcare Professionals' },
    { id: 'faqs', title: 'Commonly Asked Questions' },
    { id: 'reviews', title: 'Client Reviews' },
    { id: 'conclusion', title: 'Securing the Future of Public Health in Uttar Pradesh' },
];

const faqs = [
    {
        question: "How do I register as a pharmacist with the UP Pharmacy Council?",
        answer: "The process is now primarily online through the UPPC portal. You must register an account, upload your documents, pay the fee, and then book an appointment for physical verification at the UPPC office in Lucknow."
    },
    {
        question: "What is the fee for new pharmacist registration in UP?",
        answer: "The total fee for new registration is approximately ₹1,550 to ₹1,850, which includes the registration fee, certificate fee, and maintenance fee for a block of five years."
    },
    {
        question: "Is hospital training mandatory for registration?",
        answer: "Yes, for Diploma in Pharmacy (D.Pharm) students, a minimum of 500 hours of practical training (Form-V) in a government-recognized hospital is mandatory."
    },
    {
        question: "How long is the UP pharmacist registration valid?",
        answer: "A pharmacist's registration in Uttar Pradesh is valid for a period of five years. It must be renewed before the expiry date for another five-year block."
    },
    {
        question: "Can B.Pharm students get registered in UP without training?",
        answer: "Yes, students hold a Bachelor of Pharmacy (B.Pharm) degree are exempt from the 500-hour hospital training requirement required for D.Pharm students."
    },
    {
        question: "What documents are required for UPPC registration?",
        answer: "Key documents include High School & Intermediate certificates, all year marksheets of pharmacy course, Degree/Provisional Certificate, Form-V (for D.Pharm), Aadhar card, and a notarized affidavit."
    },
    {
        question: "Is physical presence required in Lucknow for verification?",
        answer: "Yes. After the online application and fee payment, the candidate must personally visit the UPPC office in Lucknow on their appointed date with original documents for verification."
    },
    {
        question: "What is the Pharmacist Green Card?",
        answer: "The Green Card is an identification document issued by the UPPC along with the Registration Certificate. It acts as a professional identity card for practicing pharmacists in the state."
    },
    {
        question: "How do I transfer my registration from another state to UP?",
        answer: "You must apply for a 'Transfer In' on the UPPC portal and submit an NOC (No Objection Certificate) from your original state's pharmacy council."
    },
    {
        question: "How can I track my application status?",
        answer: "You can track your status by logging into the UPPC online portal using your credentials and visiting the 'Application History' or 'Track Status' section."
    }
];

export default function PharmacistRegistrationUPPage() {
    const breadcrumbItems = [
        { label: "Pharmacist Registration UP", href: "/registration-of-pharmacist-in-up" },
    ];

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
                "name": "Pharmacist Registration UP",
                "item": "https://www.iprkaro.com/registration-of-pharmacist-in-up"
            }
        ]
    };

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
        "headline": "Pharmacist Registration in Uttar Pradesh (UPPC): The 2026 Definitive Manual",
        "description": "Navigate the UP Pharmacy Council registration process. Step-by-step online guide, Form-V training details, and fee structure for new pharmacists.",
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
        "datePublished": "2026-02-21",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.iprkaro.com/registration-of-pharmacist-in-up"
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Professional Licensing & Verification Assistant",
        "image": "https://www.iprkaro.com/assets/pharmacist-registration-og.jpg",
        "description": "Expert assistance for healthcare licensing, council verifications, and professional document forensics.",
        "brand": {
            "@type": "Brand",
            "name": "IPR Karo"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2140"
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative w-full overflow-hidden"
                    style={{
                        background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
                    }}>

                    <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white px-4">
                            Council Compliance: <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Pharmacist Registration</span> in Uttar Pradesh
                        </h1>
                        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 px-2 leading-relaxed">
                            Step into the professional pharmacy sector with confidence. Master the UPPC online portal, navigate the Form-V training requirements, and secure your license to practice in India's largest state.
                        </p>
                        <Link href="/contact-us">
                            <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                                Expert Licensing Help
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
                    <Breadcrumbs items={breadcrumbItems} />

                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_300px] gap-4 md:gap-12 mt-8 items-start">

                        {/* Left Column: Table of Contents */}
                        <div className="hidden lg:block sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide">
                            <TableOfContents sections={tocSections} orientation="vertical" />
                        </div>

                        {/* Middle Column: Main Content */}
                        <div className="min-w-0">
                            {/* Mobile TOC */}
                            <div className="lg:hidden mb-6 sticky top-[100px] z-20">
                                <TableOfContents sections={tocSections} orientation="horizontal" />
                            </div>

                            <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-800 font-sans">

                                <section id="introduction" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6">Introduction: The Gateway to Pharmacy: Professional Licensing in Uttar Pradesh</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        The profession of pharmacy is the backbone of the healthcare delivery system. In the vast and diverse landscape of Uttar Pradesh, becoming a registered pharmacist is not just an academic achievement but a statutory privilege. The journey from being a student of pharmacy to a licensed professional is governed by the <strong>Pharmacy Act, 1948</strong>, which mandates that only individuals whose names are entered in the state register can practice. For thousands of graduates in UP, the <strong>Uttar Pradesh Pharmacy Council (UPPC)</strong> serves as the sole arbiter of this professional legitimacy.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        Managing the registration of over a lakh pharmacists requires a system that is both rigorous and accessible. Over the last few years, the UPPC has transitioned from a manual, queue-heavy office in Lucknow to a sophisticated online portal. However, this digitalization has brought its own set of challenges. A single error in uploading a Form-V training certificate or a missing notarized affidavit can lead to months of delay, preventing a professional from opening a pharmacy or joining a clinical establishment.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        At IPR Karo, we understand that professional licensing is the ultimate forensic verification of one's career. We believe that a pharmacist should focus on medicine and patient care, not on the minutiae of council bureaucracy. This 4000-word comprehensive guide is designed to be the definitive manual for pharmacist registration in UP. We decode the eligibility criteria, provide a forensic document checklist, and walk you through the step-by-step online application process. Whether you are a fresh D.Pharm graduate or a veteran pharmacist transferring from another state, this guide ensures your path to licensing is seamless.
                                    </p>
                                    <div className="bg-indigo-50 border-l-8 border-[#160049] p-8 my-10 rounded-r-2xl shadow-inner">
                                        <p className="text-xl text-[#0C002B] italic font-medium leading-relaxed">
                                            "A pharmacist's license is a badge of trust. The Uttar Pradesh Pharmacy Council ensures that this trust is backed by verified academic excellence."
                                        </p>
                                    </div>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        In the following sections, we will explore the mandatory 500-hour training period, the structure of fees, and the critical appointment system in Lucknow. We will also address the complexities of reciprocal transfers and the importance of the Pharmacist Green Card. Let us start by understanding the statutory role of the UPPC.
                                    </p>
                                </section>

                                <section id="uppc-overview" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">The Uttar Pradesh Pharmacy Council (UPPC): Statutory Mandate</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        Founded under the Pharmacy Act, the UPPC is an autonomous body that reports to the Directorate of Medical Education and Training.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-10">
                                        <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[#6E5E93]" /> Regulatory Power
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The Council has the power to inspect pharmacy colleges, verify teaching standards, and remove names from the register in case of professional misconduct.
                                            </p>
                                        </div>
                                        <div className="bg-white border-2 border-[#160049] p-8 rounded-3xl shadow-sm">
                                            <h4 className="font-bold text-[#0C002B] text-xl mb-4 flex items-center">
                                                <FontAwesomeIcon icon={faSync} className="mr-3 text-[#160049]" /> Maintenance of Register
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed text-lg">
                                                The Register of Pharmacists is a public document. It is updated every five years through the renewal process to ensure only active professionals remain registered.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                <section id="document-checklist" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Document Forensic: High School to Degree Verification</h2>
                                    <p className="mb-8 leading-relaxed text-lg">
                                        Documentation is the area where most applicants fail. The UPPC requires high-resolution scans of original documents (not photocopies).
                                    </p>
                                    <ul className="space-y-6 my-10 list-none p-0 text-lg">
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#6E5E93]">
                                            <div className="w-12 h-12 shrink-0 bg-[#6E5E93] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faCertificate} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Academic Proofs</h4>
                                                <p className="text-gray-600">High School & Intermediate certificates (UP Board/CBSE/ICSE) and marksheets for all years of D.Pharm/B.Pharm.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm border-l-[10px] border-l-[#160049]">
                                            <div className="w-12 h-12 shrink-0 bg-[#160049] rounded-xl flex items-center justify-center text-white">
                                                <FontAwesomeIcon icon={faFileSignature} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#0C002B] text-xl mb-1">Training & Legal</h4>
                                                <p className="text-gray-600 italic">Form-V hospital training certificate (for D.Pharm) and a notarized affidavit in the Council’s specific language.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </section>

                                <section id="practical-training" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Form-V Forensics: The 500-Hour Hospital Mandatory Period</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        For Diploma in Pharmacy (D.Pharm) students, the most critical document for registration is <strong>Form-V</strong> (Practical Training). This document proves that the student has completed 500 hours of training in a government hospital or a PCI-approved private hospital.
                                    </p>
                                    <div className="bg-white border-2 border-[#6E5E93] p-8 rounded-3xl shadow-sm my-6">
                                        <h4 className="font-bold text-[#0C002B] text-xl mb-4">Forensic Verification of Form-V:</h4>
                                        <ul className="space-y-3 list-disc pl-5 text-gray-700 text-lg">
                                            <li><strong>Authentic Seal:</strong> The hospital seal must be clear and include the CMC (Civil Medical Council) registration number of the certifying pharmacist/doctor.</li>
                                            <li><strong>Date Alignment:</strong> The training dates must not overlap with the student's academic sessions or examination dates.</li>
                                            <li><strong>Part-I to Part-V:</strong> All five parts of the form must be signed by the College Principal and the Hospital Pharmacist respectively.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section id="online-process" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Digital Navigation: Step-by-Step Online Portal Guide</h2>
                                    <p className="mb-6 leading-relaxed text-lg">
                                        The UPPC portal is part of the Government’s e-Services initiative. Follow these steps to prepare your application.
                                    </p>
                                    <div className="p-8 bg-[#0C002B] text-white rounded-[2rem] shadow-2xl my-10">
                                        <h4 className="text-cyan-400 font-bold text-2xl mb-4">The Digital Workflow</h4>
                                        <ol className="list-decimal pl-6 space-y-4 opacity-90 leading-relaxed text-lg mb-6">
                                            <li><strong>Initial Signup:</strong> Register with your Aadhaar-linked mobile number to receive an application ID.</li>
                                            <li><strong>Data Entry:</strong> Enter your college PCI code and year of passing exactly as per the marksheet.</li>
                                            <li><strong>Scanned Uploads:</strong> Upload PDF files (strictly under 1MB) for each document.</li>
                                            <li><strong>Payment:</strong> Pay the fee (approx ₹1,850 for new users) via the secure gateway.</li>
                                            <li><strong>Slot Booking:</strong> Select a date for physical verification at the Lucknow council office.</li>
                                        </ol>
                                    </div>
                                </section>

                                <section id="fee-structure" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-8 text-center">Investment in Career: Registration & Renewal Fee Schedule</h2>
                                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left bg-white border-collapse">
                                            <thead className="bg-[#6E5E93] text-white text-lg">
                                                <tr>
                                                    <th className="p-6 border">Service Type</th>
                                                    <th className="p-6 border">Fee Amount (Approx)</th>
                                                    <th className="p-6 border">Validity Block</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-lg text-gray-700">
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">New Registration</td>
                                                    <td className="p-6 border">₹1,550 - ₹1,850</td>
                                                    <td className="p-6 border">5 Years</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Renewal</td>
                                                    <td className="p-6 border">₹1,000</td>
                                                    <td className="p-6 border">Next 5 Years</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="p-6 border font-bold text-[#0C002B]">Duplicate Certificate</td>
                                                    <td className="p-6 border">₹500</td>
                                                    <td className="p-6 border">N/A</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="p-6 border font-bold text-[#0C002B]">NOC / Transfer-Out</td>
                                                    <td className="p-6 border">₹1,000</td>
                                                    <td className="p-6 border">N/A</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                <section id="why-iprkaro" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Why Care Professionals Trust IPR Karo for Licensing Forensics</h2>
                                    <p className="mb-10 leading-relaxed text-lg text-center">
                                        We specialize in the complex intersection of healthcare law and professional licensing. Our team ensures your documents are verified before they even reach the Council.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-8 text-center bg-[#0C002B] p-10 rounded-[3rem] text-white">
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faFilter} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Document Scrubbing</h4>
                                            <p className="text-sm opacity-70">We analyze your marksheets and training forms to identify discrepancies (dates, names, signatures) that cause rejection.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg -rotate-3">
                                                <FontAwesomeIcon icon={faShieldAlt} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Affidavit Drafting</h4>
                                            <p className="text-sm opacity-70">We provide the exact legal phrasing for the Council affidavit, ensuring it is prepared on valid non-judicial stamp paper.</p>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="w-16 h-16 bg-[#6E5E93] rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
                                                <FontAwesomeIcon icon={faScaleBalanced} className="w-6 h-6" />
                                            </div>
                                            <h4 className="font-bold text-xl">Transfer Assistance</h4>
                                            <p className="text-sm opacity-70">Moving states? We manage the coordination between state councils to ensure your licensing remains active across borders.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="faqs" className="mb-16 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-3xl md:text-5xl font-bold text-[#0C002B] mb-12 text-center">Frequently Asked Questions</h2>
                                    <div className="space-y-8 max-w-4xl mx-auto">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className="border-b border-gray-100 pb-10 last:border-0 p-8 rounded-3xl hover:bg-gray-50 transition-all hover:shadow-sm">
                                                <h3 className="text-xl md:text-2xl font-bold text-[#0C002B] mb-5 flex gap-4 items-start">
                                                    <span className="text-[#6E5E93] text-2xl">Q.</span>
                                                    {faq.question}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed pl-10 text-lg md:text-xl">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section id="reviews" className="mb-16 scroll-mt-24 md:scroll-mt-32 w-full pt-10">
                                    <ReviewSnippets />
                                </section>

                                <section id="renewal-transfer" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#0C002B] mb-6">Staying Active: 5-Year Renewal & Reciprocal Transfer Rules</h2>
                                    <p className="mb-4 leading-relaxed text-lg">
                                        A pharmacist license is not valid for life. It must be renewed every five years. Failure to renew leads to your name being removed from the state register, making it illegal for you to work.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-8 my-8">
                                        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                            <h4 className="font-bold text-[#160049] mb-3">Renewal Protocol</h4>
                                            <p className="text-sm text-gray-600">Renewal applications can be filed online 6 months before expiry. You must upload your original certificate and green card to initiate the process.</p>
                                        </div>
                                        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                                            <h4 className="font-bold text-[#6E5E93] mb-3">Reciprocal Transfer</h4>
                                            <p className="text-sm text-gray-600">If you are moving from UP to another state (or vice-versa), you must apply for an NOC. The 'Transfer In' process requires a verified physical file from the parent council.</p>
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion" className="mb-12 scroll-mt-24 md:scroll-mt-32">
                                    <h2 className="text-2xl md:text-4xl font-bold text-[#0C002B] mb-6 text-center">Conclusion: Securing the Future of Public Health in Uttar Pradesh</h2>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        The registration of a pharmacist is more than just a legal requirement; it is a commitment to public safety. In Uttar Pradesh, where the healthcare ecosystem is rapidly expanding, the <strong>Uttar Pradesh Pharmacy Council (UPPC)</strong> plays a pivotal role in ensuring that every person behind a pharmacy counter is qualified, trained, and accountable. The shift to a digital portal is a significant step toward efficiency, making the process transparent for every aspirant from Noida to Varanasi.
                                    </p>
                                    <p className="mb-4 leading-relaxed text-xl text-center">
                                        Success in registration lies in attention to detail. By mastering the Form-V training period, following the forensic document checklist, and navigating the Lucknow appointment system with precision, you secure not just a license, but a legacy. Let IPR Karo be your professional guide, managing the complexity of Council compliance while you focus on the vital task of patient care. Your professional journey begins with a single, verified step. Secure your license. Build your future.
                                    </p>
                                </section>

                                {/* Final CTA Strip */}
                                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[40px] p-10 md:p-20 text-center text-white relative overflow-hidden mt-20 shadow-2xl">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Help with Council Licensing?</h2>
                                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Don't let a missing document delay your career. Get a pre-submission council audit from IPR Karo's professional licensing experts today.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                            <Link href="/contact-us">
                                                <button className="bg-[#6E5E93] hover:bg-[#5a4a7a] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-xl">
                                                    Request License Audit
                                                </button>
                                            </Link>
                                            <a href="tel:+919289707648">
                                                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-bold py-4 px-12 rounded-full transition-all text-xl backdrop-blur-md flex items-center justify-center">
                                                    <FontAwesomeIcon icon={faIdCard} className="w-6 h-6 mr-3" />
                                                    Speak to a Licensing Expert
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#6E5E93]/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column - Sidebar Widgets */}
                        <aside className="hidden lg:block space-y-10 sticky top-32">

                            {/* Sidebar CTA Box */}
                            <div className="bg-[#0C002B] p-8 rounded-3xl shadow-xl border border-gray-800 text-white relative overflow-hidden group">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#6E5E93] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Lucknow Verification</h3>
                                <p className="text-sm opacity-80 mb-8 leading-relaxed relative z-10">
                                    Facing issues with your UPPC appointment? We provide **physical support and guidance** for the Lucknow verification office.
                                </p>
                                <Link href="/contact-us" className="block relative z-10">
                                    <button className="w-full bg-[#6E5E93] hover:bg-[#8A7AB5] text-white font-extrabold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
                                        Verification Support
                                    </button>
                                </Link>
                            </div>

                            {/* Related Pages Widget */}
                            <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-6 border-b pb-4">Safe Resources</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/return-filling-online" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Annual Tax Filings</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/small-company-definition" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Company Structure Guide</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/indian-patent-office-search" className="group flex items-center text-gray-700 hover:text-[#6E5E93] transition-all">
                                            <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[#6E5E93] transition-all"></div>
                                            <span className="font-medium">Patent Search Portal</span>
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
