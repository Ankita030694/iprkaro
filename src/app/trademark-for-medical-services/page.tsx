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
  faHospital,
  faUserMd,
  faStethoscope,
  faHeartbeat,
  faClinicMedical,
  faMicroscope,
  faAmbulance,
  faSyringe,
  faPills,
  faStar,
  faAward,
  faPhone,
  faGlobe,
  faShieldAlt,
  faGavel,
  faRocket,
  faHandHoldingMedical,
  faBiohazard,
  faVial,
  faFirstAid,
  faBookMedical,
  faNotesMedical
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark for Medical Services | Protect Clinic Brand',
  description: 'Comprehensive guide to trademark registration for hospitals, clinics, diagnostic centers, and healthcare professionals. Secure your medical brand under Class 44.',
  keywords: [
    'trademark for medical services',
    'class 44 trademark registration india',
    'hospital brand protection',
    'clinic name registration',
    'diagnostic center trademark',
    'healthcare brand registration',
    'medical logo registration',
    'trademark for doctors',
    'telemedicine brand protection',
    'pharmaceutical branding india'
  ],
  openGraph: {
    title: 'Medical Brand Protection | Expert Class 44 Registration',
    description: 'Protect your legacy of care. Secure your hospital, clinic, or healthcare brand with India\'s premier IP legal firm.',
    url: 'https://www.iprkaro.com/trademark-for-medical-services',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-medical-services',
  },
};

const tocSections = [
  { id: 'criticality-of-medical-branding', title: 'Why Brand Medical?' },
  { id: 'class-44-breakdown', title: 'Class 44 Decoded' },
  { id: 'legal-framework-mci', title: 'Legal & Ethical Rules' },
  { id: 'practitioner-protection', title: 'Doctor Protections' },
  { id: 'hospital-vs-medicine', title: 'Hospitals vs Medicines' },
  { id: 'registration-workflow', title: 'Registration Flow' },
  { id: 'document-checklist', title: 'Document Checklist' },
  { id: 'handling-objections', title: 'Registry Objections' },
  { id: 'case-studies-medical', title: 'Medical IP Disputes' },
  { id: 'madrid-protocol-medical', title: 'Global Medical IP' },
  { id: 'medical-tourism-ip', title: 'Medical Tourism IP' },
  { id: 'clinical-research-units', title: 'Clinical Research IP' },
  { id: 'franchising-medical-brands', title: 'Franchising IP' },
  { id: 'healthcare-ai-branding', title: 'Healthcare AI IP' },
  { id: 'maintenance-renewal', title: 'Renewal & Care' },
  { id: 'trust-and-goodwill', title: 'Trust & Goodwill' },
  { id: 'diagnostic-center-branding', title: 'Diagnostic IP' },
  { id: 'telemedicine-digital-health', title: 'Telemedicine IP' },
  { id: 'alternative-medicine-ip', title: 'Ayurveda & Wellness' },
  { id: 'veterinary-services-ip', title: 'Veterinary IP' },
  { id: 'reviews-section', title: 'Client Reviews' },
  { id: 'faqs', title: 'Medical FAQs' },
];

const faqs = [
  {
    question: "What is the primary trademark class for medical services?",
    answer: "Class 44 is the primary category for medical services. This includes hospitals, clinics, nursing homes, diagnostic laboratories, and specialized medical treatments. If you also manufacture medical devices or medicines, you may need Class 10 or Class 5 respectively."
  },
  {
    question: "Can a doctor trademark their own name?",
    answer: "Yes, a medical practitioner can trademark their name if it is used to identify their private practice or specialized medical brand. However, names that are very common may face objections unless distinctive styling or logos are added."
  },
  {
    question: "Why is trademark registration critical for hospitals?",
    answer: "Hospitals build decades of trust under a specific name. Without registration, a competitor can open a clinic with a similar name, potentially confusing patients and damaging your reputation through inferior service. Trademarking ensures exclusive rights to that name nationwide."
  },
  {
    question: "Does the MCI or NMC have rules about medical branding?",
    answer: "Yes, the National Medical Commission (NMC) has guidelines regarding medical ethics and advertising. While you can protect your brand via trademark, you must still adhere to ethical codes that prohibit misleading or overly commercialized advertising in the medical profession."
  },
  {
    question: "How long does it take to register a medical trademark in India?",
    answer: "With IPR Karo, we file your application in 24 hours. The final registration certificate typically takes 6-12 months, depending on whether the Registry raises any technical objections or if any third parties oppose the mark."
  },
  {
    question: "What is a 'Descriptive' objection in healthcare?",
    answer: "The Trademark Registry often objects to names like 'City Heart Clinic' or 'Global Dental Care' because they describe the nature of the service. We overcome this by proving 'Acquired Distinctiveness' through proof of massive patient footfall and advertising."
  },
  {
    question: "Can I trademark a telemedicine app name?",
    answer: "Absolutely. Telemedicine brands need a multi-class strategy: Class 44 for the medical service provided and Class 42 for the software/platform that enables the digital consultation."
  },
  {
    question: "Is Class 44 enough for an Ayurvedic wellness center?",
    answer: "Yes, Class 44 covers alternative medicine, including Ayurveda and Yoga therapy. However, if the center sells its own Ayurvedic oils or supplements, Class 5 (medicinal preparations) should also be filed."
  },
  {
    question: "What documents are required for a diagnostic center trademark?",
    answer: "You need the Certificate of Incorporation, Board Resolution (if a company), MSME certificate (for fee discounts), and proof of any clinical establishment licenses obtained from local authorities as evidence of use."
  },
  {
    question: "How do I protect my dental clinic brand in multiple cities?",
    answer: "A single trademark registration in India gives you protection across all states and cities. It prevents any dental practitioner from using a confusingly similar name anywhere in the country."
  },
  {
    question: "Can a yoga center be trademarked under medical services?",
    answer: "Yes, if the yoga center provides therapeutic or health-related services, it falls under Class 44. This ensures that your unique wellness methodology is branded and protected from imitation."
  },
  {
    question: "What happens if a competitor uses my medical logo?",
    answer: "If you have a registered trademark, you can file a suit for infringement and seek an immediate injunction (stay order) from the court to stop them from using the logo. You can also claim damages for brand dilution."
  },
  {
    question: "Do I need a separate trademark for each branch of my clinic?",
    answer: "No. One trademark registration covers the name and logo for all branches of your clinic nationwide. You do not need to file separately for each location."
  },
  {
    question: "Can I trademark the 'color' of my hospital brand?",
    answer: "Color Marks are possible but require high evidence of uniqueness. For example, if a specific shade of blue is exclusively associated with your medical chain across the country, it may be eligible for protection."
  },
  {
    question: "What is the Madrid Protocol for medical brands?",
    answer: "It is an international system that allows you to protect your medical or healthcare brand in 130+ countries through a single application filed from India. This is ideal for medical tourism brands expanding globally."
  }
];

const reviews = [
  {
    name: "Dr. Vikram Sethi",
    role: "MD, City General Hospital",
    text: "Protecting our hospital name was our top priority after a nearby clinic tried to copy our logo. IPR Karo handled the entire registration and the subsequent cease and desist notice with absolute professionalism.",
    rating: 5
  },
  {
    name: "Dr. Ananya Rao",
    role: "Founder, SmileBright Dental",
    text: "As a private practitioner, I didn't think I needed a trademark. I was wrong. They helped me secure my clinic name across Class 44 and now I feel much safer expanding to multiple branches.",
    rating: 5
  },
  {
    name: "Sanjay Gupta",
    role: "Director, LifePath Diagnostics",
    text: "The technical depth regarding Class 44 was impressive. They understood the nuances of diagnostic center IP and ensured our brand was protected against some very specific localized infringers.",
    rating: 5
  },
  {
    name: "Dr. Ramesh Iyer",
    role: "Chairman, AyurCare Wellness",
    text: "Transitioning our Ayurvedic practice into a national brand required a solid IP strategy. IPR Karo's guidance on multi-class filing for services and products was the key to our successful expansion.",
    rating: 5
  },
  {
    name: "Meera Fernandez",
    role: "CEO, VetCare Plus",
    text: "Registering our veterinary clinic chain's brand was seamless. They managed the applications for all 10 locations through a single portfolio, saving us significant time and legal effort.",
    rating: 5
  }
];

export default function TrademarkMedicalServicesPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Trademark for Medical Services", href: "/trademark-for-medical-services" },
  ];

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      })}} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Definitive Guide to Trademark Registration for Medical Services in India",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": { 
          "@type": "Organization", 
          "name": "IPR Karo",
          "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" }
        }
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Medical Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "4850"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
          "reviewBody": review.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
               Protect Your Care: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark Registration for Medical Services
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               Your medical brand represents a legacy of trust and healing. In a crowded healthcare market, secure your hospital, clinic, or specialized practice with India\'s elite IP legal team. Complete Class 44 protection.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Secure Your Medical Brand
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

        {/* 3-Column Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            {/* Left Column - TOC */}
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Medical Guide</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content */}
            <main className="min-w-0">
               <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                  
                  <section id="criticality-of-medical-branding" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Paramount Importance of Trademark Registration in the Healthcare Sector
                    </h2>
                    <p className="mb-6">
                      In the domain of medical services, a name is more than just a label on a building. It is a symbol of professional competence, ethical standards, and patient trust built over years or even decades. Whether it is a multi-specialty hospital, a specialized dental clinic, or a neighborhood pathology lab, the brand identity serves as a beacon for patients seeking reliable care. However, in the rapidly expanding Indian healthcare landscape, this identity is increasingly under threat from unauthorized players who seek to capitalize on the hard-earned goodwill of established practitioners. 
                    </p>
                    <p className="mb-6">
                      Trademark registration for medical services is not merely a legal checkbox. It is a strategic imperative that codifies your brand dominance under the International Nice Classification, specifically in **Class 44**. This class encompasses a wide spectrum of healthcare activities, ranging from traditional medical treatment to modern telemedicine and wellness therapies. Without the shield of a registered trademark, a medical entity remains vulnerable to brand dilution and confusion. 
                    </p>
                    <div className="bg-[rgb(110,94,147)]/10 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-[rgb(110,94,147)] italic font-semibold">
                        "Your medical brand is the covenant of trust between you and your patient. If that identity is not legally anchored, the very foundation of your practice is at risk."
                      </p>
                    </div>
                    <p className="mb-6">
                      Consider the catastrophic impact of a naming dispute on a hospital. Forced rebranding involves changing physical signage, updating patient records, modifying ambulance branding, and launching intensive public relation campaigns to reassure a confused patient base. These logistical and financial burdens can be entirely avoided through proactive brand protection. IPR Karo specializes in navigating the unique legal intersections of medical ethics and intellectual property law, ensuring that your legacy of care remains exclusively yours.
                    </p>
                    <p className="mb-6">
                      Furthermore, the rise of medical tourism in India has made international brand recognition vital. Patients traveling from across the globe look for established hospital brands they can trust. A registered trademark provides the legal foundation for global expansion and prevents the emergence of 'shadow clinics' in foreign markets that might attempt to impersonate your prestigious medical facility.
                    </p>
                  </section>

                  <section id="class-44-breakdown" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Decoding Class 44: The Universal Category for Healthcare</h2>
                    <p className="mb-8 font-medium">
                       The Nice Classification system standardizes trademark filing across 45 classes. For medical professionals and healthcare entities, Class 44 is the primary battlefield. Understanding the nuances of this class is critical for broad legal coverage.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-md">
                          <h3 className="font-bold text-xl mb-4 group-hover:text-white flex items-center">
                            <FontAwesomeIcon icon={faHospital} className="mr-3 w-6 h-6" /> Medical Treatment
                          </h3>
                          <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                             <li>Hospitals and Surgical Centers</li>
                             <li>Multi-specialty and General Clinics</li>
                             <li>Emergency Medical Services</li>
                             <li>Physiotherapy and Rehabilitation</li>
                             <li>Nursing Homes and Convalescent Homes</li>
                          </ul>
                       </div>
                       <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-md">
                          <h3 className="font-bold text-xl mb-4 group-hover:text-white flex items-center">
                            <FontAwesomeIcon icon={faMicroscope} className="mr-3 w-6 h-6" /> Specialized Services
                          </h3>
                          <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                             <li>Diagnostic Imaging and Blood Analysis</li>
                             <li>Pathology Laboratories</li>
                             <li>Dental and Orthodontic Clinics</li>
                             <li>Mental Health and Psychiatry</li>
                             <li>Optical and Optometry Services</li>
                          </ul>
                       </div>
                    </div>
                    <p className="mb-6">
                       However, modern medical entities often require a **Multi-Class Strategy**. If you are a hospital that also operates a medical college, you need **Class 41** (Education). If you sell your own specialized medical equipment, you need **Class 10**. If your facility includes a pharmacy retail chain, **Class 35** (Retail) is essential. Our legal experts at IPR Karo perform a deep audit of your business model to ensure no aspect of your medical vertical remains unprotected.
                    </p>
                  </section>

                  <section id="legal-framework-mci" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Navigating the Intersection: Trade Marks Act vs. Medical Ethics</h2>
                     <p className="mb-6">
                        In India, medical branding is not just governed by the Trade Marks Act, 1999, but also by the stringent ethical codes of the National Medical Commission (NMC). This creates a unique regulatory environment where commercial brand protection must coexist with professional ethics that restrict certain types of advertising. 
                     </p>
                     <p className="mb-6">
                        While a medical practitioner has the absolute right to protect their clinic name and logo via a trademark, the way that brand is marketed must remain within the ethical bounds of the profession. Misleading claims, comparative advertising with other doctors, or overly flamboyant branding can attract scrutiny from medical councils. We help doctors and hospital groups find the perfect balance: building a robust legal fortress for the brand name while ensuring the messaging remains compliant with NMC regulations.
                     </p>
                     <p className="mb-6 font-semibold text-indigo-900 border-l-4 border-indigo-600 pl-4 py-2 bg-indigo-50 rounded-r-xl">
                        A registered trademark is defensive in nature. It does not violate medical ethics; rather, it protects the 'Trust' that is central to those ethics by preventing imposters from using your name to provide substandard care.
                     </p>
                  </section>

                  <section id="practitioner-protection" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">The Practitioner\'s Shield: Why Individual Doctors Need IP Protection</h2>
                     <p className="mb-6">
                        Many independent practitioners believe that trademarks are only for large corporate hospitals. This is a common misconception that often leads to legal complications later in a professional\'s career. A doctor who practices under a specific clinic name or even their own surname (if it has reached a level of fame) should consider trademarking it. 
                     </p>
                     <p className="mb-6">
                        As you gain seniority and reputation, your name becomes a brand. If you decide to expand your practice or partner with other sets of professionals, having a registered trademark ensures that you control the usage of your name. It also prevents former partners or associates from leaving your setup and opening a 'competing' facility with a confusingly similar name. For a specialist doctor, the name is the primary intellectual asset. We assist senior consultants in safeguarding this personal goodwill against institutional appropriation or unauthorized local imitation.
                     </p>
                  </section>

                  <section id="hospital-vs-medicine" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Distinguishing Assets: Hospital Branding vs. Medicine Names</h2>
                     <p className="mb-6 text-gray-700">
                        There is a significant legal distinction between branding a **Medical Service** and branding a **Medical Product**. Hospital names are protected in Class 44, whereas pharmaceutical names are protected in Class 5. The Registry is significantly stricter regarding Class 5 because a confusion between two medicine names can be fatal. 
                     </p>
                     <p className="mb-6 text-gray-700">
                        For a hospital that also manufactures its own in-house pharmaceutical formulations or health supplements, a separate Class 5 filing is non-negotiable. Similarly, the logos used on the medicine packaging may need to be registered as separate device marks to prevent 'Passing Off' by generic manufacturers. At IPR Karo, we manage complex medical portfolios that cover the entire journey from the surgical theater to the pharmacy shelf. 
                     </p>
                  </section>

                  <section id="registration-workflow" className="scroll-mt-32 pt-12">
                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">The Medical IP Protocol</h2>
                     <div className="relative space-y-12">
                        <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>
                        <div className="flex gap-8 items-start relative">
                           <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                              <FontAwesomeIcon icon={faSearch} className="w-10 h-10" />
                           </div>
                           <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                              <h3 className="text-xl font-bold mb-4 font-black">Clinical Clearance (Search)</h3>
                              <p className="text-sm italic text-gray-600">We conduct a diagnostic search across the IP India database to check for phonetic, visual, and conceptual similarities with existing medical brands.</p>
                           </div>
                        </div>
                        <div className="flex gap-8 items-start relative">
                           <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                              <FontAwesomeIcon icon={faFileContract} className="w-10 h-10" />
                           </div>
                           <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                              <h3 className="text-xl font-bold mb-4 font-black">Regulatory Filing (TM-A)</h3>
                              <p className="text-sm italic text-gray-600">We draft the application with precise medical specifications, ensuring the description of services is broad enough to cover future medical specializations.</p>
                           </div>
                        </div>
                        <div className="flex gap-8 items-start relative">
                           <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0 text-center">
                              <FontAwesomeIcon icon={faShieldAlt} className="w-10 h-10" />
                           </div>
                           <div className="p-8 bg-gray-50 rounded-3xl flex-1 hover:shadow-xl transition-shadow border border-gray-100">
                              <h3 className="text-xl font-bold mb-4 font-black">Examination & Protection</h3>
                              <p className="text-sm italic text-gray-600">Our medical IP lawyers represent you during any Registry hearings and handle technical objections regarding distinctiveness under Section 9 and 11.</p>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section id="document-checklist" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-10 border-b-4 border-[rgb(110,94,147)] pb-4">Essential Documentation Pack</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-10 bg-indigo-900 text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                           <h3 className="text-2xl font-black mb-6 flex items-center"><FontAwesomeIcon icon={faHospital} className="mr-4 w-10 h-10 text-indigo-400" /> For Institutions</h3>
                           <ul className="text-sm space-y-4 opacity-80 font-medium">
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-400 w-6 h-6" /> Certificate of Incorporation (if Pvt Ltd)</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-400 w-6 h-6" /> Clinical Establishment License</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-400 w-6 h-6" /> GST/PAN of the Entity</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-400 w-6 h-6" /> MSME Udyam (for 50% fee waiver)</li>
                           </ul>
                        </div>
                        <div className="p-10 bg-slate-100 border-2 border-slate-200 rounded-[2.5rem] shadow-sm group">
                           <h3 className="text-2xl font-black mb-6 flex items-center text-gray-900"><FontAwesomeIcon icon={faUserMd} className="mr-4 w-10 h-10 text-[rgb(110,94,147)]" /> For Practitioners</h3>
                           <ul className="text-sm space-y-4 text-gray-600 font-medium">
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-600 w-6 h-6" /> Medical Registration Certificate</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-600 w-6 h-6" /> Identity Proof (Aadhaar/PAN)</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-600 w-6 h-6" /> Address Proof of Clinic</li>
                              <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-3 text-green-600 w-6 h-6" /> Logo and Signed Power of Attorney</li>
                           </ul>
                        </div>
                     </div>
                  </section>

                  <section id="handling-objections" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Surgical Defense: Overcoming Registry Objections</h2>
                     <p className="mb-6">
                        The Trademark Registry often raises objections based on the **Descriptive Nature** of medical names. Terms like 'General Hospital', 'Kidney Care', or 'Laser Eye Clinic' are initially considered non-distinctive. To overcome these objections, we employ a 'Secondary Meaning' defense. 
                     </p>
                     <p className="mb-6">
                        By providing evidence of extensive usage, patient testimonials, advertising expenditure, and newspaper mentions, we prove that while the name may have started as descriptive, it has now acquired a unique identity in the minds of the public. This process requires a technical legal touch that understands both linguistic nuances and market reality. At IPR Karo, our success rate in overcoming medical brand objections is among the highest in India, thanks to our specialized approach to evidence collection and legal drafting.
                     </p>
                  </section>

                  <section id="case-studies-medical" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Landmark Disputes in Healthcare IP</h2>
                     <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 group hover:shadow-2xl transition-all">
                           <h3 className="font-black text-xl mb-4 text-indigo-950 flex items-center">
                              <FontAwesomeIcon icon={faGavel} className="mr-4 w-8 h-8 text-indigo-700" /> The Apollo Infringement Case
                           </h3>
                           <p className="text-sm leading-relaxed italic text-gray-600">
                             How a major hospital chain successfully sued several smaller clinics that were using the name 'Apollo' to mislead patients, setting a precedent for 'Well-Known Mark' status in the healthcare sector.
                           </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 group hover:shadow-2xl transition-all">
                           <h3 className="font-black text-xl mb-4 text-indigo-950 flex items-center">
                              <FontAwesomeIcon icon={faNotesMedical} className="mr-4 w-8 h-8 text-indigo-700" /> Pharma vs Services Conflict
                           </h3>
                           <p className="text-sm leading-relaxed italic text-gray-600">
                             A critical case where a pharmaceutical company was stopped from using a name that was identical to a famous diagnostic center, proving that 'Likelihood of Confusion' exists even between goods and services.
                           </p>
                        </div>
                     </div>
                  </section>

                  <section id="madrid-protocol-medical" className="scroll-mt-32 pt-12">
                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 text-center">Global Medical IP: The Madrid Protocol</h2>
                     <p className="mb-8 text-lg font-medium text-center text-gray-600 max-w-4xl mx-auto">
                        For Indian medical groups and telemedicine giants, the world is the clinic. Protecting your brand globally doesn\'t need to be a logistical nightmare. 
                     </p>
                     <p className="mb-6 indent-8">
                        The Madrid Protocol allows you to extend your Indian trademark protection to over 130 countries through a single centralized application process. This is particularly vital for institutions engaged in 'Medical Value Travel'; where patients from the MENA region, Southeast Asia, and the West visit India for treatment. By securing your mark in their home countries, you ensure that unauthorized agents or competing clinics cannot use your brand name to divert patients. We facilitate the entire Madrid filing, ensuring your priority date is secured across multiple jurisdictions.
                     </p>
                  </section>

                  <section id="maintenance-renewal" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Maintaining the Health of Your Brand: Renewal & Monitoring</h2>
                     <p className="mb-6">
                        A registered trademark is valid for 10 years, but its 'Health' must be monitored constantly. We provide automated monitoring services that scan new filings every week to identify any medical brands that might be attempting to mirror your identity.
                     </p>
                     <p className="mb-6">
                        Renewal of your trademark is a critical task that should not be missed. If a medical trademark expires, it becomes public property, and anyone; including a competitor; can file for it. For a hospital, losing the trademark rights due to an administrative oversight is a catastrophic risk. IPR Karo\'s maintenance system ensures you are notified months in advance, and the renewal is handled with the same precision as the initial filing.
                     </p>
                  </section>

                  <section id="trust-and-goodwill" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Capitalizing on Trust: The Economic Value of Brand Goodwill</h2>
                     <p className="mb-6 text-gray-700">
                        In healthcare, the 'Goodwill' of a brand is an Intangible Asset that often exceeds the value of the physical hospital infrastructure. When a hospital undergoes valuation for investment or a merger, the strength of its trademark portfolio is a key metric. 
                     </p>
                     <p className="mb-6 text-gray-700">
                        We help medical entities perform **IP Valuations**, showing how their registered brands contribute to the overall enterprise value. A well-protected brand allows for easier franchising, licensing of medical technology, and higher leverage during negotiation with health insurance providers. Your trademark is not just a legal shield; it is a financial instrument that powers your long-term growth.
                     </p>
                  </section>

                  <section id="diagnostic-center-branding" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                        <FontAwesomeIcon icon={faVial} className="mr-4 text-indigo-600 w-10 h-10" /> Diagnostic Centers & Pathology Lab IP
                     </h2>
                     <p className="mb-6">
                        Diagnostic centers operate in a high-volume, trust-driven B2C and B2B market. From blood report logos to specialized testing brand names, every element must be secured. In the pathology sector, the 'Report Format' and the 'Visual Identity' are often the only way a patient distinguishes one lab from another.
                     </p>
                     <p className="mb-6">
                        We assist pathology chains in registering their primary house brands and their specialized sub-brands (e.g., 'WellnessCheck 360'). This prevents local collection centers from using your name to send samples to unauthorized third-party labs, which would otherwise pose a severe risk to your brand reputation and patient health.
                     </p>
                  </section>

                  <section id="telemedicine-digital-health" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                        <FontAwesomeIcon icon={faGlobe} className="mr-4 text-indigo-600 w-10 h-10" /> Telemedicine & Digital Health Ecosystems
                     </h2>
                     <p className="mb-6">
                        The digital transformation of healthcare has moved the clinic to the smartphone screen. Telemedicine startups face a unique challenge: they are both a 'Medical Service' and a 'Software Platform'. 
                     </p>
                     <p className="mb-6">
                        A robust IP strategy for a telemedicine brand involves Class 44 for the doctor-patient interaction and Class 9/42 for the mobile app and cloud infrastructure. Furthermore, as AI-driven diagnosis tools emerge, the branding of these AI models (e.g., 'CareBot AI') becomes a high-value trademark. We provide integrated digital health IP consulting that covers the entire technical and medical stack.
                     </p>
                  </section>

                  <section id="alternative-medicine-ip" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                        <FontAwesomeIcon icon={faHandHoldingMedical} className="mr-4 text-indigo-600 w-10 h-10" /> Ayurveda, Wellness, & Holistic Healing
                     </h2>
                     <p className="mb-6">
                        India is the global epicenter for alternative medicine. Ayurvedic hospitals, Spa therapies, and Yoga retreats are expanding at an unprecedented rate. These brands often rely on 'Traditional Knowledge' but need modern IP protection to prevent global appropriation.
                     </p>
                     <p className="mb-6 text-gray-600 italic font-medium">
                        We help Ayurvedic centers protect their unique names, preventing 'Biopiracy' of their brand identity. By securing trademarks in Class 44, we ensure that traditional healing lineages are preserved under their original brand names.
                     </p>
                  </section>

                  <section id="veterinary-services-ip" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                        <FontAwesomeIcon icon={faStethoscope} className="mr-4 text-indigo-600 w-10 h-10" /> Veterinary Services: Branding Animal Care
                     </h2>
                     <p className="mb-6">
                        Animal healthcare is a specialized subset of Class 44. As pet ownership rises and high-end veterinary hospitals emerge, brand competition has intensified. Trademarking the name of a veterinary clinic or a pet surgical center is vital to prevent brand poaching. 
                     </p>
                     <p className="mb-6">
                        We assist veterinary groups in building brand portfolios that cover specialized animal treatments, grooming services, and pet boarding facilities. Protecting your veterinary brand ensures that you are recognized as the premium provider for the companions patients love most.
                     </p>
                  </section>

                  <section id="medical-tourism-ip" className="scroll-mt-32 pt-12">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                        <FontAwesomeIcon icon={faGlobe} className="mr-4 text-indigo-600 w-10 h-10" /> Branding for Medical Value Travel: The Global Patient Trust
                      </h2>
                      <p className="mb-6">
                        Medical tourism or Medical Value Travel (MVT) is a multi-billion dollar industry in India. Large hospital chains and specialized boutique clinics attract patients from across the globe for complex surgeries, oncology, and wellness treatments. In this context, the trademark is the primary instrument of trust. When a patient in Nairobi or Dubai searches for a hospital in India, they rely on the reputation associated with the brand name.
                      </p>
                      <p className="mb-6">
                        Protecting your medical brand in jurisdictions from where you receive the highest patient footfall is a strategic necessity. If an agent in a foreign country starts using your hospital name to 'facilitate' medical travel without authorization, it poses a severe liability risk. We help MVT-focused brands build an international IP perimeter, ensuring that their name is protected at every touchpoint of the patient's international journey.
                      </p>
                      <p className="mb-6">
                        Furthermore, the rise of medical tourism has led to the emergence of specialized brand categories; such as international fertility centers and global cosmetic surgery hubs. These entities require precise trademark filing that reflects their cross-border operations. IPR Karo facilitates Madrid Protocol filings that allow Indian healthcare brands to be recognized and protected in over 130 countries; ensuring a seamless international expansion.
                      </p>
                   </section>

                   <section id="clinical-research-units" className="scroll-mt-32 pt-12">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                         <FontAwesomeIcon icon={faMicroscope} className="mr-4 text-indigo-600 w-10 h-10" /> Clinical Research & Trial Unit Branding
                      </h2>
                      <p className="mb-6">
                         Modern hospitals are no longer just service providers; they are centers of research and innovation. Many healthcare institutions have dedicated Clinical Research Units (CRUs) that conduct trials for global pharmaceutical giants. The branding of these research units is distinct from the primary hospital brand and requires a technical legal strategy. 
                      </p>
                      <p className="mb-6">
                         Trial Registration Numbers and public trial databases often reference the name of the research facility. Having a registered trademark for your CRU ensures that your research credentials and any ensuing intellectual property; like specialized protocols, data harvesting methodologies, or trial management software; are linked strictly to your brand. This prevents other research entities from 'Passing Off' their work as yours or leveraging your institutional prestige.
                      </p>
                      <p className="mb-6">
                         We assist in the dual-class registration of research units under Class 44 (Medical Services) and Class 42 (Scientific Research). This multi-layered protection is vital when collaborating with international stakeholders who demand proof of IP ownership. Your CRU brand is the evidence of your scientific rigor; it must be legally secured.
                      </p>
                   </section>

                   <section id="franchising-medical-brands" className="scroll-mt-32 pt-12">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                         <FontAwesomeIcon icon={faRocket} className="mr-4 text-indigo-600 w-10 h-10" /> Scaling Through Care: Franchising and Licensing Medical Brands
                      </h2>
                      <p className="mb-6">
                         Franchising is becoming a popular model for scaling dental clinics, primary care centers, and diagnostic labs. However, franchising in healthcare is fraught with legal complexity. If a franchisee provides substandard care, it is the franchisor's brand that suffers the most. The trademark is the central asset that binds the franchise network together.
                      </p>
                      <p className="mb-6">
                         A robust Trademark Licensing Agreement is the bedrock of any medical franchise. This agreement must strictly control the usage of the brand, set clear quality standards, and include provisions for 'Quality Audits' that protect the 'Trust' inherent in the trademark. We draft comprehensive licensing frameworks that empower you to expand your footprint while maintaining absolute control over your brand's ethical and professional integrity.
                      </p>
                      <p className="mb-6">
                         Furthermore, the 'Trade Dress' of your medical facility; the specific interior design, the color palette of the staff uniforms, and even the layout of the reception area; can be protected as part of your trademark portfolio. This ensures a consistent 'Brand Experience' for patients, whether they visit your flagship hospital or a remote franchise clinic. This level of detail in IP protection is what distinguishes a successful national chain from a localized practice.
                      </p>
                   </section>

                   <section id="healthcare-ai-branding" className="scroll-mt-32 pt-12">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center">
                         <FontAwesomeIcon icon={faHandHoldingMedical} className="mr-4 text-indigo-600 w-10 h-10" /> The Future Frontier: Branding Healthcare AI and Machine Learning Models
                      </h2>
                      <p className="mb-6">
                         As Artificial Intelligence begins to assist in diagnostics, surgical planning, and patient monitoring, new intellectual properties are emerging. Technical brands for AI diagnostic tools; like 'NeuroSense AR' or 'CardioAI Diagnostics'; are becoming high-value assets. These names define the cutting edge of your medical capability. 
                      </p>
                      <p className="mb-6">
                         These AI sub-brands need independent protection because they often have a different market life than the clinical service itself. We advise healthcare technology companies and hospitals developing in-house digital tools on how to brand these technical assets. This involves a convergence of medical IP and software IP. Securing these names early prevents 'Cyber-Squatting' and ensures that as your AI grows smarter, your brand grows more valuable.
                      </p>
                      <p className="mb-6">
                         In the era of Digital Health, your algorithms are as much a part of your reputation as your surgeons. Trademarking the branding of these algorithms ensures that you own the digital narrative of your medical expertise. IPR Karo provides the technical depth needed to navigate this complex intersection of technology and healthcare.
                      </p>
                   </section>

                   <section id="reviews-section" className="scroll-mt-32 pt-12">
                     <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-12 text-center tracking-tighter">Voices of Healthcare Leaders</h2>
                     <div className="grid md:grid-cols-3 gap-8">
                        {reviews.map((rev, i) => (
                          <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden group hover:bg-slate-50 transition-colors">
                             <div className="flex text-yellow-500 mb-6">
                                {[...Array(5)].map((_, j) => <FontAwesomeIcon key={j} icon={faStar} className="w-4 h-4 mr-1" />)}
                             </div>
                             <p className="text-gray-600 mb-8 font-medium italic">"{rev.text}"</p>
                             <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black mr-4 shadow-lg">{rev.name[0]}</div>
                                <div>
                                   <p className="font-black text-gray-900 text-sm">{rev.name}</p>
                                   <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{rev.role}</p>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-[0.3em] underline underline-offset-8 decoration-gray-200">The Intelligence Hub: Medical FAQs</h2>
                    <div className="space-y-6">
                      {faqs.map((f, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-8 last:border-0 p-4 transition-all rounded-3xl hover:bg-gray-50">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                             <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mr-4 font-black">Q</div>
                             {f.question}
                          </h3>
                          <p className="text-gray-600 pl-14 leading-relaxed font-medium">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                  
                  {/* Final CTA in Middle Container */}
                  <section className="bg-indigo-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                     <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, #6E5E93 0%, transparent 70%)' }}></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">Anchor Your Care.</h2>
                        <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                          Your medical reputation is your greatest asset. Don\'t let it be diluted by imitators. Secure your legacy with India\'s most technical IP legal team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(120,104,157)] text-white font-black py-6 px-20 rounded-full transition-all transform hover:scale-110 shadow-2xl text-xl uppercase tracking-widest">Connect to Legal Safety</button>
                           </Link>
                           <a href="tel:+919289707648" className="flex items-center justify-center font-bold text-2xl hover:text-[rgb(110,94,147)] transition-colors">
                              <FontAwesomeIcon icon={faPhone} className="w-12 h-12 mr-4" /> +91-9289707648
                           </a>
                        </div>
                     </div>
                  </section>
                </article>
              </div>
            </main>

            {/* Right Column - Sidebar Widgets (Sticky) */}
            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group">
                 <h3 className="text-2xl font-black mb-6 leading-tight">Medical Brand Vitality Scan</h3>
                 <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium">Check your hospital or clinic name across Class 44 databases in 1 business day. Prevent rejection before you invest in signage.</p>
                 <Link href="/contact-us">
                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]">Start Free Clearance</button>
                 </Link>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-600 opacity-5 rounded-bl-full"></div>
                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em]">Healthcare Verticals</h3>
                <ul className="space-y-6">
                  {['Hospitals & Clinics', 'Diagnostic Labs', 'Wellness Centers', 'Dental Practice', 'Veterinary Care'].map((item, idx) => (
                    <li key={idx} className="group">
                      <Link href="#" className="flex items-center text-gray-500 group-hover:text-indigo-600 transition-all font-bold">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-indigo-600 group-hover:scale-150 transition-all"></div>
                        <span>{item}</span>
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
