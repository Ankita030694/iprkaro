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
  faCalendarAlt,
  faHandshake,
  faExclamationTriangle,
  faSync
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark Registration in India | IPR Karo',
  description: 'Register your trademark online in India with IPR Karo. Expert legal filing, expedited processing, and comprehensive objection handling from ₹1499. Secure your brand now.',
  keywords: [
    'trademark registration',
    'online trademark filing',
    'brand registration india',
    'tm application process',
    'trademark search india',
    'brand name registration',
    'company logo registration',
    'trademark objection reply',
    'trademark renewal india',
    'trademark assignment',
    'madrid protocol registration'
  ],
  openGraph: {
    title: 'Trademark Registration in India | IPR Karo',
    description: 'Fast, affordable, and expert-assisted trademark registration services in India. Protect your brand identity today.',
    url: 'https://www.iprkaro.com/our-services/trademark-registration',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/trademark-registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Registration Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/our-services/trademark-registration',
  },
};

const tocSections = [
  { id: 'why-register-trademark', title: 'Why Register?' },
  { id: 'types-of-trademarks', title: 'What Can Be Protected?' },
  { id: 'registration-process-detailed', title: '5-Step Process' },
  { id: 'documents-checklist', title: 'Documents' },
  { id: 'trademark-classes', title: 'Classification' },
  { id: 'objection-handling-mastery', title: 'Handling Objections' },
  { id: 'opposition-proceedings', title: 'Opposition Proceedings' },
  { id: 'renewal-restoration', title: 'Renewal & Restoration' },
  { id: 'assignment-licensing', title: 'Assignment & Licensing' },
  { id: 'international-registration', title: 'Global Protection' },
  { id: 'enforcement-infringement', title: 'Enforcement' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Can I register a trademark myself?",
    answer: "Technically, yes. However, trademark law is complex. A simple error in class selection or user date details can lead to rejection or abandonment of your application. Professional filing ensures your application is error-free, vetted for conflicts, and legally sound, saving you time and money in the long run. Self-filing rejection rates are significantly higher due to procedural errors."
  },
  {
    question: "How long is a trademark valid in India?",
    answer: "A registered trademark is valid for 10 years from the date of application (not the date of grant). It can be renewed indefinitely every 10 years by paying the renewal fee via Form TM-R. If not renewed, the mark can be removed from the register, though a restoration window exists for one year post-expiry."
  },
  {
    question: "What is the difference between ™ and ® symbols?",
    answer: "The ™ symbol can be used immediately after filing your application to indicate that you claim rights to the mark. The ® symbol can ONLY be used once your trademark is officially registered and you have received the registration certificate. Using ® before registration is a punishable offence under the Trade Marks Act, 1999."
  },
  {
    question: "What if my trademark gets objected to?",
    answer: "Objections are common (raised in ~60-70% of cases). It means the examiner needs clarification regarding distinctiveness (Section 9) or similarity (Section 11). We draft a legal reply (Examination Response) arguing against the objection within the stipulated 30-day period. If the reply is satisfactory, the mark is accepted. If not, a hearing is scheduled."
  },
  {
    question: "Does an Indian trademark protect my brand globally?",
    answer: "No. Trademark rights are territorial. An Indian registration protects you only within India. For global protection, you must file under the Madrid Protocol (managed by WIPO) or file separate applications in each country. IPR Karo assists with international filings for verified exporters and global brands."
  },
  {
    question: "What happens if someone opposes my trademark?",
    answer: "An opposition is a third-party challenge filed during the 4-month publication period. It initiates a quasi-judicial proceeding involving counter-statements, evidence rounds, and hearings. We have a specialized litigation team to handle such oppositions (Form TM-O) and defend your rights aggressively."
  },
  {
    question: "How much does trademark registration cost?",
    answer: "The government fee for individuals/startups/MSMEs is ₹4,500 per class, and for other entities (Private Limited Companies not being Startups/MSMEs), it is ₹9,000 per class. Our professional fee is separate and covers the search, drafting, and filing process. Additional costs apply for objection replies and hearings."
  },
  {
    question: "Can I register a sound or a smell as a trademark?",
    answer: "Yes! While words and logos are most common, Indian law recognizes 'non-conventional trademarks' like sound marks (e.g., the Nokia tune), shape marks (e.g., the Coca-Cola bottle), and even smell marks, provided they are distinctive and capable of graphical representation upon the register."
  },
  {
    question: "What is the 'User Date' and why is it important?",
    answer: "The 'User Date' is the date from which you have been continuously using the mark. India follows the 'First to Use' principle. If you can prove prior use with valid evidence (invoices, ads), you have a stronger claim than someone who filed earlier but used it later. We can claim usage all the way back to your first invoice."
  },
  {
    question: "Can I sell my trademark?",
    answer: "Yes, a trademark is an intangible asset that can be sold, assigned, or franchised. This transfer of ownership is called 'Trademark Assignment' and can be done with or without the goodwill of the business."
  }
];

export default function TrademarkRegistrationPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/our-services" },
    { label: "Trademark Registration", href: "/our-services/trademark-registration" },
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
    "headline": "Online Trademark Registration Services in India",
    "description": "Comprehensive guide to registering your trademark in India. From search to certification, objection handling, and renewal, we handle the entire legal lifecycle.",
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
    }
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration Services",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "Professional trademark registration services in India.",
        "brand": {
          "@type": "Brand",
          "name": "IPR Karo"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Sharma" },
            "datePublished": "2024-01-15",
            "reviewBody": "Fastest service! IPR Karo helped me get my MSME certificate and saved 50% on government fees. The filing was done within 24 hours as promised.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Mehta" },
            "datePublished": "2024-02-10",
            "reviewBody": "I was worried about a Section 9 objection on my logo. Their team drafted a very professional reply and the objection was waived without a hearing. Highly recommended!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      })}} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" 
             style={{
               background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
             }}>
          
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight mt-20 md:mt-10 text-white">
               Secure Your Brand Identity with <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Expert Trademark Registration</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Don't let copycats steal your hard work. File your trademark application today with India's most trusted IP legal team. 100% Online process with same-day filing capability.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Registration Now
               </button>
             </Link>
          </div>
        </div>

        <div className="container mx-auto px-3 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-4 md:gap-8 items-start">
            
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-32">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
               {/* TOC (Mobile) */}
               <div className="lg:hidden mb-4 sticky top-25 z-10">
                <TableOfContents sections={tocSections} orientation="horizontal" />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-xl md:rounded-2xl shadow-sm space-y-8 md:space-y-16">
                
                <section id="why-register-trademark" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Trademark Registration?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Your brand name, logo, and slogan are the most visible assets of your business. They distinguish you from competitors and carry the trust of your customers. However, in India's competitive market, simply using a name does not guarantee ownership. Without a registered trademark, you are operating on borrowed time.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    <strong>Trademark Registration</strong> gives you the exclusive legal right to use your brand across India. It empowers you to sue infringers for damages and stop them from using similar names. It essentially turns your "intangible" reputation into a "tangible" asset that can be licensed, franchised, or sold for profit.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Moreover, online platforms like Amazon Brand Registry, Flipkart, and Instagram require a valid trademark certificate to protect your listings from hijackers and counterfeiters. In the digital age, a trademark is your primary defense against identity theft. A registered trademark is notice to the public of the registrant's ownership claim on the mark.
                  </p>
                   <div className="bg-blue-50 border-l-4 border-[rgb(110,94,147)] p-4 md:p-8 my-6 md:my-8 rounded-r-lg">
                    <p className="text-base md:text-xl text-blue-900 italic leading-relaxed">
                      "A trademark is the single most valuable asset a company can own. It is the bridge between your product and the customer's trust."
                    </p>
                  </div>
                </section>

                <section id="types-of-trademarks" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">What Can Be Protected Under Trademark Law?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The Trade Marks Act, 1999, allows for the registration of various types of marks, provided they are capable of being represented graphically and distinguishing goods/services.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Word Marks</h3>
                        <p className="text-gray-700 text-sm">The most common form. It protects the name itself (e.g., "Google" or "Coca-Cola") regardless of font or style.</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Device Marks (Logos)</h3>
                        <p className="text-gray-700 text-sm">Protects the visual representation, logo, or symbol associated with the brand (e.g., the Nike Swoosh).</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Slogans & Taglines</h3>
                        <p className="text-gray-700 text-sm">Protects distinctive catchphrases used in advertising (e.g., "Just Do It" or "I'm Lovin' It").</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Shape Marks</h3>
                        <p className="text-gray-700 text-sm">Protects the distinctive 3D shape of a product or its packaging (e.g., the shape of a Toblerone bar).</p>
                     </div>
                     <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-2 text-[rgb(110,94,147)]">Sound Marks</h3>
                        <p className="text-gray-700 text-sm">Protects a specific sound associated with a brand (e.g., the MGM Lion roar or the Netflix 'Ta-Dum').</p>
                     </div>
                  </div>
                </section>

                <section id="registration-process-detailed" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Detailed 5-Step Registration Ecosystem</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Registering a trademark is a legal procedure governed by the Trade Marks Act, 1999. It is not an instant process but a journey that we navigate for you with precision.
                  </p>

                  <div className="space-y-4 md:space-y-8 mt-6 md:mt-8">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">1</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">1</span>
                             <FontAwesomeIcon icon={faSearch} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Comprehensive Brand Search
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                            We use advanced algorithms to find phonetic (sound-alike) and visual look-alikes. This "Clearance Search" prevents objection risks later. We check the Vienna code for logos to ensure no visual conflicts exist. A thorough search reduces the probability of rejection by 80%.
                          </p>
                       </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">2</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">2</span>
                             <FontAwesomeIcon icon={faFileContract} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Application Drafting & Filing (Form TM-A)
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             We identify the correct "Class" and draft the application (Form TM-A). We carefully structure your "User Affidavit" to claim prior usage rights. Submitting correct user dates is crucial; an incorrect date can lead to "abandonment" later. Once filed, you can start using the ™ symbol.
                          </p>
                       </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">3</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">3</span>
                             <FontAwesomeIcon icon={faFileSignature} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Examination & Reply
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The Registrar examines the mark. If they issue an Examination Report with objections (common for new brands), our attorneys draft a robust legal reply. We cite relevant precedents (e.g., *Cadila Healthcare Ltd. v. Cadila Pharmaceuticals Ltd.*) to overcome Section 9 or 11 objections.
                          </p>
                       </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">4</div>
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">4</span>
                             <FontAwesomeIcon icon={faGlobe} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Journal Publication & Opposition
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             Once accepted, the mark is published in the Trade Marks Journal. This opens a 4-month window for third parties to oppose the mark (Section 21). If opposed, we enter 'Opposition Proceedings' involving counter-statements and evidence. If unopposed, it moves to registration.
                          </p>
                       </div>
                    </div>

                    {/* Step 5 */}
                     <div className="flex flex-col md:flex-row gap-6 relative">
                       <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                          <div className="w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold z-10 text-xl">5</div>
                       </div>
                       <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-all">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                             <span className="md:hidden bg-[rgb(110,94,147)] text-white w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs">5</span>
                             <FontAwesomeIcon icon={faCertificate} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                             Registration Certificate
                          </h3>
                          <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-3">
                             The Registration Certificate is issued digitally by the Registry. You can now use the ® symbol. This certificate is valid for 10 years and acts as prima facie evidence of your ownership in any court of law.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Required Documents For Different Entities</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                      The documentation varies slightly depending on whether you are applying as an individual, a startup, or a large company.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-8">
                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                           <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Individuals & Sole Proprietors</h3>
                           <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">PAN Card and Aadhaar Card of the applicant.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">Logo/Brand Image (JPEG format).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">Power of Attorney (Form 48), signed.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">User Affidavit (if claiming prior use).</span>
                               </li>
                           </ul>
                       </div>

                       <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                           <h3 className="font-bold text-lg mb-4 text-[rgb(110,94,147)]">Companies, LLPs & Startups</h3>
                           <ul className="space-y-3">
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">Certificate of Incorporation / Partnership Deed.</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">MSME / Udyam Registration (for 50% Fee Rebate).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">DPIIT Recognition Certificate (for Startups).</span>
                               </li>
                               <li className="flex items-start">
                                    <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                                    <span className="text-sm text-gray-700">Board Resolution authorizing the signatory.</span>
                               </li>
                           </ul>
                       </div>
                   </div>
                </section>

                <section id="trademark-classes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Decoding Trademark Classes (Nice Classification)</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                      Trademarks are categorized into 45 distinct "Classes" under the Nice Classification system. Filing in the correct class is critical; a Class 25 registration (Clothing) will not protect your brand if you start selling Software (Class 9).
                   </p>
                   
                   <div className="overflow-x-auto mb-6">
                     <table className="w-full text-left border-collapse rounded-lg overflow-hidden text-sm">
                        <thead className="bg-[rgb(110,94,147)] text-white">
                           <tr>
                              <th className="p-3">Class</th>
                              <th className="p-3">Category</th>
                              <th className="p-3">Common Examples</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr className="bg-white">
                              <td className="p-3 font-bold">Class 9</td>
                              <td className="p-3">Electronics & Software</td>
                              <td className="p-3 text-gray-600">Mobile apps, computers, software, sunglasses.</td>
                           </tr>
                            <tr className="bg-gray-50">
                              <td className="p-3 font-bold">Class 25</td>
                              <td className="p-3">Clothing</td>
                              <td className="p-3 text-gray-600">Shirts, shoes, headgear, fashion accessories.</td>
                           </tr>
                           <tr className="bg-white">
                              <td className="p-3 font-bold">Class 35</td>
                              <td className="p-3">Business Services</td>
                              <td className="p-3 text-gray-600">Retail stores, e-commerce, advertising, consulting.</td>
                           </tr>
                           <tr className="bg-gray-50">
                              <td className="p-3 font-bold">Class 41</td>
                              <td className="p-3">Education & Ent.</td>
                              <td className="p-3 text-gray-600">Schools, training institutes, event management, blogs.</td>
                           </tr>
                           <tr className="bg-white">
                              <td className="p-3 font-bold">Class 43</td>
                              <td className="p-3">Hospitality</td>
                              <td className="p-3 text-gray-600">Restaurants, cafes, cloud kitchens, hotels.</td>
                           </tr>
                        </tbody>
                     </table>
                   </div>

                   <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 rounded-r-lg mb-6 md:mb-8">
                      <p className="text-gray-800 italic text-sm md:text-base">
                         <strong>Expert Insight:</strong> Most businesses need "Multi-Class Filing". For example, a Coffee Brand might need Class 30 (Coffee beans), Class 35 (Selling coffee online), and Class 43 (Coffee shop). We conduct a holistic "Class Analysis" to plug all protection gaps.
                      </p>
                   </div>
                </section>

                <section id="objection-handling-mastery" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Mastery in Handling Objections</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                      Receiving an examination report with objections is not a dead end. It is a standard part of the process where the Registrar asks for clarification. IPR Karo specializes in overcoming the two most common legal hurdles under the Trade Marks Act, 1999:
                   </p>
                   <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)] hover:shadow-md transition-shadow">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <FontAwesomeIcon icon={faShieldAlt} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Section 9 (Absolute Grounds)
                         </h3>
                         <p className="text-gray-700 mb-2 md:mb-4 text-sm md:text-base">
                            Objected because the mark is "descriptive," "generic," or "non-distinctive" (e.g., trying to register "Sweet Ice Cream" or "Best Shoes").
                         </p>
                         <p className="text-xs md:text-sm font-bold text-gray-600">Our Strategy:</p>
                         <p className="text-xs md:text-sm text-gray-600">We draft a response proving "Acquired Distinctiveness". We submit user affidavits and evidence (invoices, media coverage) showing that due to long usage, this generic word has become a "source identifier" for your specific brand in the consumer's mind.</p>
                      </div>
                      <div className="bg-gray-50 p-4 md:p-6 rounded-xl border-l-4 border-[rgb(110,94,147)] hover:shadow-md transition-shadow">
                         <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 flex items-center">
                            <FontAwesomeIcon icon={faBalanceScale} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Section 11 (Relative Grounds)
                         </h3>
                         <p className="text-gray-700 mb-2 md:mb-4 text-sm md:text-base">
                            Objected because the mark is "identical" or "confusingly similar" to an already registered trademark or a pending application.
                         </p>
                         <p className="text-xs md:text-sm font-bold text-gray-600">Our Strategy:</p>
                         <p className="text-xs md:text-sm text-gray-600">We perform a "Side-by-Side Comparison". We argue visual, phonetic, and conceptual differences. We also differentiate the nature of goods, trade channels, and customer base to prove there is no scope for confusion.</p>
                      </div>
                   </div>
                </section>

                {/* NEW SECTIONS FOR CONTENT EXPANSION */}
                
                <section id="opposition-proceedings" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Understanding Opposition Proceedings (Section 21)</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Even after the Registrar accepts your mark, it must survive the "Public Opposition" phase. For 4 months after publication in the Journal, <strong>any person</strong> can oppose your registration by filing "Form TM-O".
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Common grounds for opposition include:
                   </p>
                   <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                      <li><strong>Bad Faith:</strong> The applicant has no bona fide intention to use the mark.</li>
                      <li><strong>Passing Off:</strong> The mark is used to deceive customers into thinking it's related to another famous brand.</li>
                      <li><strong>Well-Known Mark:</strong> Infringement upon a mark declared "Well-Known" by the Registry.</li>
                   </ul>
                   <p className="text-base md:text-lg leading-relaxed text-gray-700">
                      Opposition is a quasi-judicial process. It involves filing a Counter-Statement (Form TM-O), submitting Evidence (Rule 45, 46, 47), and finally, a Hearing before the Registrar. Our litigation team has a 95% success rate in defending trademarks against frivolous oppositions.
                   </p>
                </section>

                <section id="renewal-restoration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Lifecycle Management: Renewal & Restoration</h2>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <div className="text-[rgb(110,94,147)] mb-3">
                            <FontAwesomeIcon icon={faSync} className="text-2xl w-8 h-8" />
                         </div>
                         <h3 className="font-bold text-lg mb-2">Trademark Renewal (Form TM-R)</h3>
                         <p className="text-sm text-gray-600 mb-2">
                           A trademark is valid for 10 years. You can file for renewal anytime within 1 year before expiry. The government fee is ₹9,000 per class (e-filing).
                         </p>
                         <p className="text-xs text-red-500 font-semibold">Deadline: Before 10th anniversary.</p>
                      </div>
                      <div className="p-4 border border-gray-100 rounded-lg">
                         <div className="text-[rgb(110,94,147)] mb-3">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="text-2xl w-8 h-8" />
                         </div>
                         <h3 className="font-bold text-lg mb-2">Restoration (Grace Period)</h3>
                         <p className="text-sm text-gray-600 mb-2">
                           Missed the deadline? You can "restore" the mark within 1 year <em>after</em> expiry by paying a surcharge. After this window, the mark is permanently dead.
                         </p>
                         <p className="text-xs text-red-500 font-semibold">Deadline: 1 year post-expiry.</p>
                      </div>
                   </div>
                </section>

                <section id="assignment-licensing" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Monetizing Your Brand: Assignment & Licensing</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      A registered trademark is intellectual property that can generate revenue beyond just sales.
                   </p>
                   <div className="space-y-6">
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faHandshake} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Trademark Assignment (Selling the Brand)
                         </h3>
                         <p className="text-gray-700 leading-relaxed">
                            Assignment is the permanent transfer of ownership (like selling a house). A "Deed of Assignment" is executed, and Form TM-P is filed with the Registry. You can assign a trademark <strong>with goodwill</strong> (transferring the brand value and customers) or <strong>without goodwill</strong> (transferring just the name for a new business line).
                         </p>
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                            <FontAwesomeIcon icon={faFileContract} className="mr-3 text-[rgb(110,94,147)] w-6 h-6" />
                            Trademark Licensing (Franchising)
                         </h3>
                         <p className="text-gray-700 leading-relaxed">
                            Licensing allows you to "rent" your brand. You (Licensor) allow another party (Licensee) to use your mark in exchange for Royalties. You retain ownership. A "Registered User Agreement" is filed (Form TM-U). This is the legal backbone of all franchise models (e.g., Domino's, McDonald's).
                         </p>
                      </div>
                   </div>
                </section>

                <section id="international-registration" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Going Global: The Madrid Protocol</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Trademark rights are territorial. Your Indian registration does NOT protect you in the USA or Dubai. To protect your brand globally, you have two options:
                   </p>
                   <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                      <li className="pl-2">
                         <strong>Direct Filing:</strong> Hiring lawyers in every single country to file separate applications. This is expensive and time-consuming.
                      </li>
                      <li className="pl-2">
                         <strong>Madrid Protocol (Recommended):</strong> A unified system managed by WIPO (World Intellectual Property Organization). It allows you to file <strong>one application</strong>, in <strong>one language</strong>, paying <strong>one set of fees</strong> to protect your mark in up to 130 countries (including USA, EU, China, Australia).
                      </li>
                   </ol>
                   <div className="mt-4 p-4 bg-purple-50 rounded-lg text-sm text-purple-900">
                      <strong>Prerequisite:</strong> You must have a registered trademark or a pending application in India to use the Madrid Protocol.
                   </div>
                </section>

                <section id="enforcement-infringement" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Enforcement: Fighting Infringement</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Registration is just the sword; you must wield it. If someone uses a mark similar to yours, you have statutory remedies.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                         <h3 className="font-bold text-red-800 mb-2">Civil Remedies</h3>
                         <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li><strong>Injunction:</strong> Court order stopping the infringer immediately.</li>
                            <li><strong>Damages:</strong> Monetary compensation for loss of business.</li>
                            <li><strong>Account of Profits:</strong> Claiming the profits the infringer made using your brand.</li>
                            <li><strong>Destruction:</strong> Seizure and destruction of infringing goods.</li>
                         </ul>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                         <h3 className="font-bold text-red-800 mb-2">Criminal Remedies</h3>
                         <p className="text-sm text-gray-700 mb-2">
                            Trademark infringement is a cognizable offence in India.
                         </p>
                         <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                            <li>Imprisonment from 6 months to 3 years.</li>
                            <li>Fine from ₹50,000 to ₹2 Lakhs.</li>
                            <li>Police can raid and seize goods without a warrant.</li>
                         </ul>
                      </div>
                   </div>
                </section>

                {/* FAQ SECTION (Already populated with schema but rendered here) */}
                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4 md:space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 md:pb-8 last:border-0">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-start">
                          <span className="text-[rgb(110,94,147)] mr-2 md:mr-3 mt-1 text-sm md:text-base">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-6 md:pl-8 text-sm md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="client-success-stories" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Client Success Stories</h2>
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "Fastest service! IPR Karo helped me get my MSME certificate and saved 50% on government fees. The filing was done within 24 hours as promised."
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Priya Sharma</p>
                          <p className="text-xs md:text-sm text-gray-500">Fashion Designer</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "I was worried about a Section 9 objection on my logo. Their team drafted a very professional reply and the objection was waived without a hearing. Highly recommended!"
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Rahul Mehta</p>
                          <p className="text-xs md:text-sm text-gray-500">Tech Startup Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="why-choose-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Why Trust IPR Karo?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faRocket} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Same-Day Filing</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Our tech-enabled workflow allows us to file your TM-A application within 24 hours of receiving documents.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faGavel} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Legal Expertise</h3>
                      <p className="text-gray-400 text-xs md:text-sm">We don't just file forms; we craft legal strategies. Our team comprises senior IP attorneys and former examiners.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Transparent Pricing</h3>
                      <p className="text-gray-400 text-xs md:text-sm">No hidden fees. We separate professional fees from government fees so you know exactly what you are paying for.</p>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Start Your Application Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't leave your brand unprotected. The sooner you file, the sooner you own your mark. Get professional assistance from India's leading IP experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          Register Now
                        </button>
                      </Link>
                      <a href="tel:+919289707648">
                         <button className="bg-transparent border-2 border-white/30 hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all text-base md:text-lg w-full sm:w-auto backdrop-blur-sm flex items-center justify-center">
                          <FontAwesomeIcon icon={faPhone} className="mr-2 w-5 h-5" />
                          Call: +91-9289707648
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

             {/* Sidebar */}
             <div className="hidden lg:block space-y-8 sticky top-32">
                
                {/* Sidebar CTA */}
                <div className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] p-6 rounded-xl shadow-lg border border-gray-800 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Trademark Enquiry</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Check if your brand name is available. Get a free search report today.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Get Free Search
                    </button>
                  </Link>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a href="tel:+919289707648" className="text-sm font-semibold hover:text-[rgb(110,94,147)] transition-colors flex items-center justify-center">
                      <span className="mr-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                      </span> +91-9289707648
                    </a>
                  </div>
                </div>

                {/* Related Features */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore More</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/comprehensive-ip-protection-features/trademark-risk-reduction" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                        <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                          <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                        </span> Risk Reduction
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/patent-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Patent Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/copyright-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Copyright Protection
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/expert-trademark-guidance" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Expert Guidance
                      </Link>
                    </li>
                    <li>
                      <Link href="/comprehensive-ip-protection-features/ai-powered-trademark-solutions" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> AI Solutions
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
