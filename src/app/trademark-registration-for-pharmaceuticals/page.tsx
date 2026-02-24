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
  faFlask,
  faPills,
  faStar,
  faAward,
  faPhone,
  faGlobe,
  faShieldAlt,
  faGavel,
  faRocket,
  faVial,
  faNotesMedical,
  faBoxOpen,
  faMicroscope,
  faDna,
  faMortarPestle,
  faIndustry
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration for Pharmaceuticals | Class 5 IP Protection',
  description: 'Elite guide to trademark registration for pharmaceutical brands in India. Secure your drug names, formulations, and healthcare products under Class 5 with expert legal support.',
  keywords: [
    'trademark for pharmaceuticals',
    'class 5 trademark registration india',
    'drug name registration',
    'pharmaceutical brand protection',
    'medicine logo registration',
    'ayurvedic medicine trademark',
    'healthcare product branding',
    'pharma ip services india',
    'therapeutic brand registration',
    'biotechnology trademark'
  ],
  openGraph: {
    title: 'Pharma Brand Protection | Expert Class 5 Registration',
    description: 'Protect your pharmaceutical innovation. Secure your medicine brands and drug names with India\'s premier IP legal firm.',
    url: 'https://www.iprkaro.com/trademark-registration-for-pharmaceuticals',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-registration-for-pharmaceuticals',
  },
};

const tocSections = [
  { id: 'pharmaceutical-branding-criticality', title: 'Why Pharma IP?' },
  { id: 'class-5-decoding', title: 'Class 5 Decoded' },
  { id: 'drug-naming-laws', title: 'Drug Naming Rules' },
  { id: 'similarity-checks', title: 'Conflict Analysis' },
  { id: 'registry-objections', title: 'Registry Objections' },
  { id: 'registration-journey', title: 'Registration Flow' },
  { id: 'document-pack', title: 'Document Checklist' },
  { id: 'ayurvedic-pharma-ip', title: 'Ayurvedic Pharma' },
  { id: 'biotech-and-biosimilars', title: 'Biotech IP' },
  { id: 'packaging-and-trade-dress', title: 'Packaging IP' },
  { id: 'counterfeit-protection', title: 'Counterfeit Shield' },
  { id: 'global-pharma-expansion', title: 'Global Pharma IP' },
  { id: 'faqs', title: 'Pharma FAQs' },
  { id: 'reviews-section', title: 'Client Reviews' },
];

const faqs = [
  {
    question: "What is the primary trademark class for pharmaceutical products?",
    answer: "Class 5 is the primary international class for pharmaceutical, veterinary, and sanitary preparations. This includes medicines, drugs, dietetic substances for medical use, and supplements."
  },
  {
    question: "How is pharma trademarking different from other sectors?",
    answer: "Pharma trademarking is significantly stricter. The Registry and Courts apply a 'high standard of similarity' test because a name confusion between two drugs can lead to serious health risks or fatalities."
  },
  {
    question: "Can I trademark a drug's generic ingredient name?",
    answer: "No. Generic names or common chemical descriptions (like Paracetamol) cannot be trademarked. You can only protect the unique 'Brand Name' or 'Invented Word' associated with your formulation."
  },
  {
    question: "Is a professional search mandatory for pharma brands?",
    answer: "Yes, it is highly recommended. Given the 100,000+ brands in Class 5, a comprehensive search prevents expensive legal battles and rejection at the Registry level."
  },
  {
    question: "What is the Madrid Protocol for pharma exporters?",
    answer: "It allows Indian pharma companies to protect their drug brands in 130+ countries through a single international application, which is crucial for exporters to the USA, EU, and Asian markets."
  }
];

const reviews = [
  {
    name: "Rajesh Singhal",
    role: "Director, Baddi Pharma Units",
    text: "IPR Karo secured our new antibiotic brand name across the Delhi Registry in record time. Their technical knowledge of Class 5 conflicts is unmatched.",
    rating: 5
  },
  {
    name: "Dr. Smita Verma",
    role: "Founder, Ayush Herbal Care",
    text: "Registering our Ayurvedic formulation's brand was tricky due to descriptive names. Their legal team drafted a brilliant response to clear the objections.",
    rating: 5
  },
  {
    name: "Amitabh Mehra",
    role: "CEO, BioGeneric Solutions",
    text: "Professional, technical, and fast. They managed our entire portfolio of 25 drug brands with precision. Highly recommended for pharma IP.",
    rating: 5
  }
];

export default function TrademarkPharmaceuticalsPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Pharma Trademark Registration", href: "/trademark-registration-for-pharmaceuticals" },
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
      
      <div className="bg-white min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight uppercase">
               Pharma IP Elite: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Trademark for Pharmaceuticals
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               In the pharmaceutical world, your brand name is a promise of life and quality. Protect your drug formulations, healthcare products, and biotech innovations with India\'s premier Class 5 experts.
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

        {/* 3-Column Layout */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            {/* Left Column - TOC */}
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Pharma IP Guide</h4>
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

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20 article-content">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                  
                  <section id="pharmaceutical-branding-criticality" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center tracking-tighter uppercase">
                      <FontAwesomeIcon icon={faFlask} className="mr-4 text-[rgb(110,94,147)] w-10 h-10" /> Pharmaceutical IP: Where Branding Saves Lives
                    </h2>
                    <p className="mb-6">
                      The pharmaceutical industry operates in a high-stakes environment where the margin for error is zero. In this sector, a trademark is more than just a marketing tool; it is a critical safety mechanism. When a doctor prescribes a drug or a pharmacist dispenses a medicine, the brand name is the definitive identifier that eliminates confusion between therapeutic categories. Trademark registration for pharmaceuticals in **Class 5** represents the highest tier of intellectual property protection in the healthcare ecosystem.
                    </p>
                    <p className="mb-6">
                      At IPR Karo, we understand that pharma branding is uniquely complex. Unlike generic consumer goods, drug names must navigate rigorous phonetic and visual similarity checks to prevent potentially fatal medication errors. Our "Pharma IP Elite" program is designed to provide Baddi-based manufacturing units, global exporters, and biotech startups with a legal fortress that protects their R&D investments and brand goodwill.
                    </p>
                  </section>

                  <section id="class-5-decoding" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center tracking-tighter uppercase">
                      <FontAwesomeIcon icon={faBoxOpen} className="mr-4 text-[rgb(110,94,147)] w-10 h-10" /> Decoding Class 5: The Universe of Medicinal Preparations
                    </h2>
                    <p className="mb-6">
                      Class 5 of the International Nice Classification is the primary sanctuary for pharmaceutical products. It covers a vast array of life-saving and wellness-enhancing products:
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm font-medium">
                          <h3 className="font-black text-xl mb-4 text-indigo-950">Drug Formulations</h3>
                          <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                             <li>Antibiotics & Antivirals</li>
                             <li>Oncology & Specialized Drugs</li>
                             <li>Over-the-Counter (OTC) Medicines</li>
                             <li>Injectables & Vaccines</li>
                          </ul>
                       </div>
                       <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm font-medium">
                          <h3 className="font-black text-xl mb-4 text-indigo-950">Wellness & Biotech</h3>
                          <ul className="space-y-2 list-disc list-inside opacity-90 text-sm">
                             <li>Ayurvedic & Herbal Medicines</li>
                             <li>Nutraceuticals & Supplements</li>
                             <li>Diagnostic Reagents for Medical Use</li>
                             <li>Biotechnology Preparations</li>
                          </ul>
                       </div>
                    </div>
                  </section>

                  <section id="drug-naming-laws" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight flex items-center tracking-tighter uppercase">
                        <FontAwesomeIcon icon={faGavel} className="mr-4 text-[rgb(110,94,147)] w-10 h-10" /> The Legal Science of Drug Naming
                     </h2>
                     <p className="mb-6">
                        In India, the Trademark Registry and the Courts apply a "High Level of Diligence" when examining Class 5 marks. The Supreme Court of India has established that in pharmaceuticals, even a slight phonetic similarity can be grounds for rejection. For example, a name like 'Zovix' might be considered too similar to 'Zovax', even if they are for entirely different ailments. 
                     </p>
                     <p className="mb-6">
                        We assist pharma companies in creating "Invented Words" that are legally distinctive. We ensure your brand names avoid common medical prefixes and suffixes that the Registry might consider descriptive or publici juris (public property). This proactive naming strategy reduces the risk of long-term litigation with pharmaceutical giants.
                     </p>
                  </section>

                  <section id="registration-journey" className="scroll-mt-32 pt-12">
                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">The Pharma IP Protocol</h2>
                     <div className="space-y-6">
                        {[
                          { step: "1", title: "Pharma Phonetic Search", desc: "Detailed scan of Class 5 databases to find phonetic, visual, and conceptual similarities that could lead to medical errors." },
                          { step: "2", title: "Technical Classification", desc: "Precise drafting of drug specifications to ensure maximum therapeutic coverage within Class 5." },
                          { step: "3", title: "E-Filing (TM-A)", desc: "Electronic submission to the IPI server, securing your acknowledgment and ™ rights within hours." },
                          { step: "4", title: "Registry Defense", desc: "Handling technical objections (Section 9/11) with a focus on 'Secondary Meaning' for historical drug brands." }
                        ].map((item, i) => (
                           <div key={i} className="flex items-start gap-5 p-6 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-[rgb(110,94,147)] transition-colors">
                              <div className="w-12 h-12 bg-[rgb(110,94,147)] text-white rounded-2xl flex items-center justify-center font-black shrink-0 text-xl shadow-lg">{item.step}</div>
                              <div>
                                 <h4 className="font-extrabold text-gray-900 text-lg mb-1">{item.title}</h4>
                                 <p className="text-sm text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>

                  <section id="faqs" className="scroll-mt-32 pt-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-widest decoration-[rgb(110,94,147)] underline underline-offset-8">Pharma IP Intelligence Hub</h2>
                    <div className="grid gap-6">
                      {faqs.map((f, i) => (
                        <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                           <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(110,94,147)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <h3 className="text-xl font-black text-gray-900 mb-4 flex items-start">
                              <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>{f.question}
                           </h3>
                           <p className="text-gray-600 pl-10 leading-relaxed font-medium">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Final CTA */}
                  <section className="bg-indigo-950 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl group">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#6E5E93_0%,_transparent_70%)]"></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">Defend Your Science.</h2>
                        <p className="text-xl opacity-70 mb-12 max-w-3xl mx-auto leading-relaxed">
                           In the competitive pharma landscape, your brand is your bunker. Don\'t let it be breached. Consult India\'s most technical pharma IP legal team today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                           <Link href="/contact-us">
                              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(120,104,157)] text-white font-black py-5 px-14 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg uppercase tracking-widest">Connect to Pharma Experts</button>
                           </Link>
                           <a href="tel:+919289707648" className="flex items-center justify-center font-bold text-xl hover:text-[rgb(110,94,147)] transition-colors">
                              <FontAwesomeIcon icon={faPhone} className="w-8 h-8 mr-4" /> +91-9289707648
                           </a>
                        </div>
                     </div>
                  </section>

                </article>
              </div>
            </main>

            {/* Right Column - Sidebar Widgets */}
            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group text-center">
                 <h3 className="text-2xl font-black mb-6 leading-tight uppercase tracking-tighter">Pharma Clearance Scan</h3>
                 <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium">Verify your drug brand across Class 5 databases. High-standard conflict analysis for pharma units.</p>
                 <Link href="/contact-us">
                   <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]">Start Free Clearance</button>
                 </Link>
              </div>
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em]">Specialized IP</h3>
                <ul className="space-y-6">
                  {['Ayurvedic Pharma', 'Biotech Drugs', 'Generic Branding', 'Veterinary IP', 'Medicine Exports'].map((item, idx) => (
                    <li key={idx} className="group">
                      <Link href="#" className="flex items-center text-gray-500 group-hover:text-[rgb(110,94,147)] transition-all font-bold">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] group-hover:scale-150 transition-all"></div>
                        <span className="text-sm uppercase tracking-wider">{item}</span>
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
