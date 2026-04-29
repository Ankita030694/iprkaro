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
  title: 'Steps to File a Trademark Application Online in India',
  description: 'Learn the complete step-by-step process to file a trademark application online in India. From trademark search to final registration, get expert guidance.',
  keywords: [
    'trademark application online india',
    'file trademark online',
    'trademark registration process steps',
    'how to apply for trademark',
    'tm filing india',
    'online trademark registration steps',
    'trademark application form tm-a',
    'trademark search process',
    'trademark registration fee'
  ],
  openGraph: {
    title: 'Steps to File a Trademark Application Online in India (2024 Guide)',
    description: 'Learn the complete step-by-step process to file a trademark application online in India.',
    url: 'https://www.iprkaro.com/steps-to-file-trademark-application-online-india',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/trademark-registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Trademark Application Process',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/steps-to-file-trademark-application-online-india',
  },
};

const tocSections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'importance-of-registration', title: 'Why Register?' },
  { id: 'pre-filing-steps', title: 'Pre-Filing Steps' },
  { id: 'step-by-step-guide', title: 'Step-by-Step Guide' },
  { id: 'documents-required', title: 'Documents Required' },
  { id: 'application-fees', title: 'Application Fees' },
  { id: 'common-mistakes', title: 'Common Mistakes' },
  { id: 'post-filing-process', title: 'Post-Filing Process' },
  { id: 'why-hire-professional', title: 'Why Hire Professional?' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'conclusion', title: 'Conclusion' },
];

const faqs = [
  {
    question: "Can I file a trademark application myself online?",
    answer: "Yes, you can file directly through the IP India website. However, the process involves selecting the correct class and drafting a precise description. Errors can lead to objections or rejection, so professional assistance is recommended."
  },
  {
    question: "What is the official website for filing trademarks in India?",
    answer: "The official website is ipindia.gov.in (managed by the Controller General of Patents, Designs and Trade Marks). Applications are filed specifically through the unified e-filing portal."
  },
  {
    question: "How long does the online application process take?",
    answer: "Filling and submitting the online application (Form TM-A) takes less than an hour if you have all documents ready. However, the complete registration process takes 6-12 months."
  },
  {
    question: "Do I need a digital signature (DSC) to file online?",
    answer: "Yes, a Class 3 Digital Signature Certificate (DSC) is mandatory for filing trademark applications online on the IP India portal."
  },
  {
    question: "What happens after I submit the online application?",
    answer: "You will receive an immediate acknowledgement receipt with a Trademark Application Number. You can start using the ™ symbol next to your brand name from this moment."
  },
  {
    question: "Can I edit my application after submission?",
    answer: "Minor clerical errors can be corrected by filing form TM-M (with a fee). However, substantial changes to the trademark or goods/services description are generally not allowed."
  },
  {
    question: "What is the difference between Form TM-A and TM-M?",
    answer: "Form TM-A is the initial application for registration of a trademark. Form TM-M is a miscellaneous form used for amendments, corrections, or requesting certified copies."
  },
  {
    question: "Is the government fee refundable if my application is rejected?",
    answer: "No, the government filing fee is non-refundable, regardless of whether your trademark is accepted, objected to, or rejected."
  },
  {
    question: "Can I file a trademark for multiple classes in one application?",
    answer: "Yes, you can file a multi-class application (Series mark or single application for multiple classes) using Form TM-A. However, the fee is calculated per class."
  },
  {
    question: "What should I do if my online payment fails but money is deducted?",
    answer: "The IP India portal has a payment verification system. You should check the 'Payment History' section. If the status is pending/failed, it usually updates within 24-48 hours. Do not re-file immediately to avoid double payment."
  }
];

export default function TrademarkApplicationStepsPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/our-services" },
    { label: "Steps to File Trademark", href: "/steps-to-file-trademark-application-online-india" },
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
    "headline": "Steps to File a Trademark Application Online in India (2024 Guide)",
    "description": "Comprehensive guide on how to file a trademark application online in India (Form TM-A). Steps, documents, fees, and tips for successful registration.",
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
        "name": "Online Trademark Application Filing",
        "image": "https://www.iprkaro.com/assets/trademark-registration-og.jpg",
        "description": "Expert assistance for filing trademark applications online in India.",
        "brand": {
          "@type": "Brand",
          "name": "IPR Karo"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "850"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Suresh Patel" },
            "datePublished": "2024-05-12",
            "reviewBody": "The step-by-step guidance provided by IPR Karo made the filing process so simple. I got my application number within 2 hours!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera Redding" },
            "datePublished": "2024-04-20",
            "reviewBody": "I was confused about the trademark classes. Their team helped me select the right ones and filed my application flawlessly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Verma" },
            "datePublished": "2024-03-15",
            "reviewBody": "Excellent service for online filing. They handled the digital signature and document upload very professionally.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sneha Gupta" },
            "datePublished": "2024-02-28",
            "reviewBody": "Highly recommended for startups. They guided me through the MSME discount process and saved me money on government fees.",
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
               Steps to File a <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Trademark Application Online</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               A comprehensive guide to navigating procedure of filing trademark application online in India. Secure your brand identity with our expert-assisted process.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Start Filing Now
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
                
                <section id="introduction" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Introduction to Online Trademark Filing</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Filing a trademark application is the first and most critical step in protecting your brand identity in India. With the digitization of the Indian Intellectual Property Office (IPO), the process has become more streamlined and efficient. The online filing system allows applicants to submit their applications (Form TM-A) electronically, providing immediate acknowledgement and priority dates.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    While the online portal is accessible to everyone, navigating the legal requirements, selecting the correct classes, and drafting a distinct description requires precision. A single error can lead to objections or even abandonment of the application. This guide outlines the essential steps to successfully file your trademark application online.
                  </p>
                </section>

                <section id="importance-of-registration" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Trademark Registration is Essential?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    A trademark is more than just a logo; it's the most valuable intangible asset of your business. While common law provides some protection to unregistered marks, formal registration grants you statutory rights that are far stronger.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Exclusive Rights:</strong> You get the sole right to use the mark for your goods/services across India. <br/><br/>
                    <strong>Legal Protection:</strong> It deters others from copying your brand. In case of infringement, you can sue for damages.<br/><br/>
                    <strong>Asset Creation:</strong> A registered trademark is an intellectual property asset that can be sold, franchised, or commercially contracted.<br/><br/>
                    <strong>Trust & Goodwill:</strong> The <strong>®</strong> symbol builds instant credibility and trust among customers.
                  </p>
                </section>

                <section id="pre-filing-steps" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pre-Filing Steps: Before You Login</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                    The success of your trademark application depends largely on the preparation done before the actual filing. Rushing into the application without adequate groundwork can lead to errors, objections, and even rejection. Here are the detailed pre-filing steps you must undertake:
                  </p>
                  
                  <div className="space-y-6 mb-8">
                     <div>
                        <h3 className="text-ld md:text-xl font-bold text-gray-900 mb-2">1. Comprehensive Trademark Search</h3>
                        <p className="text-gray-700 leading-relaxed">
                           A simple Google search is not enough. You must conduct a thorough search on the IP India public database to check for existing trademarks that are identical or phonetically similar to yours. This step is crucial because the registry will reject your application if it conflicts with an existing mark under Section 11 of the Trade Marks Act. Look for:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                           <li><strong>Identical Marks:</strong> Exact matches in the same class.</li>
                           <li><strong>Phonetic Similarities:</strong> Names that sound similar (e.g., "Kwik" and "Quick").</li>
                           <li><strong>Logo Similarities:</strong> Visual resemblance in design elements.</li>
                        </ul>
                     </div>

                     <div>
                        <h3 className="text-ld md:text-xl font-bold text-gray-900 mb-2">2. Accurate Class Selection</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Trademarks are categorized into 45 classes (Nice Classification). Classes 1-34 cover goods, and classes 35-45 cover services. Selecting the wrong class limits your protection. For example, if you sell coffee beans, you need Class 30, but if you run a coffee shop, you need Class 43. Consult the detailed class list or use a class finder tool to ensure you cover all relevant categories.
                        </p>
                     </div>

                     <div>
                        <h3 className="text-ld md:text-xl font-bold text-gray-900 mb-2">3. Digital Signature Certificate (DSC)</h3>
                        <p className="text-gray-700 leading-relaxed">
                           The online filing system is completely paperless and requires a Class 3 Digital Signature Certificate (DSC) for authentication. You cannot sign the application physically. If you don't have a DSC, you must obtain one from a Certifying Authority (CA) like eMudhra or  Pantasign before starting the registration process.
                        </p>
                     </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                       <FontAwesomeIcon icon={faSearch} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                       <h3 className="font-bold text-lg mb-2">Search First</h3>
                       <p className="text-sm text-gray-600">Save time and money by ensuring your mark is available.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                       <FontAwesomeIcon icon={faFileContract} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                       <h3 className="font-bold text-lg mb-2">Select Class</h3>
                       <p className="text-sm text-gray-600">Choose the right category to ensure valid protection.</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                       <FontAwesomeIcon icon={faCertificate} className="text-[rgb(110,94,147)] text-3xl mb-4" />
                       <h3 className="font-bold text-lg mb-2">Get DSC</h3>
                       <p className="text-sm text-gray-600">Mandatory for signing the online application form.</p>
                    </div>
                  </div>
                </section>

                <section id="step-by-step-guide" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Step-by-Step Guide to Online Filing</h2>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Create an Account on IP India Portal</h3>
                        <p className="text-gray-700 mb-2">
                           Visit the official e-filing portal (ipindiaonline.gov.in). If you are a new user, click on 'New User Registration'. You will need to select your user type (Proprietor/Agent/Attorney) and fill in your details.
                        </p>
                        <p className="text-gray-700">
                           <strong>Crucial Step:</strong> You must map your Digital Signature Certificate (DSC) to your user account during registration. This ensures that any document filed from this account is legally signed by you. Once registered, you will receive a User ID and Password.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fill Form TM-A (New Application)</h3>
                        <p className="text-gray-700 mb-2">
                           Log in to your account and navigate to 'New Application'. Select 'File TM-A'. This is the standard form for registering a trademark. You will need to input detailed information:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-2">
                           <li><strong>Applicant Details:</strong> Name, address, and legal status (Individual, Partnership, Body Corporate).</li>
                           <li><strong>Agent Details:</strong> If you are hiring an attorney, their details go here.</li>
                           <li><strong>Trademark Details:</strong> Choose whether it's a word mark, device mark (logo), or others. Upload the image if applicable.</li>
                           <li><strong>Goods/Services Description:</strong> Clearly describe the goods or services for which you are seeking protection. Be specific but broad enough to cover future expansions.</li>
                        </ul>
                     </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Supporting Documents</h3>
                        <p className="text-gray-700 mb-2">
                           After filling the form, you must upload the necessary documents in the specified format (usually PDF). Common documents include:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                           <li><strong>Proof of Usage:</strong> If you claimed a 'User Date' (prior use), you must upload a User Affidavit along with evidence like invoices or bills showing the mark was used since that date.</li>
                           <li><strong>Power of Attorney (Form 48):</strong> If an agent is filing on your behalf, this authorizes them to act for you.</li>
                           <li><strong>MSME/Start-up Certificate:</strong> Required to claim the 50% fee concession.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Fee Calculation and Payment</h3>
                        <p className="text-gray-700 mb-2">
                           The system will automatically calculate the fee based on your applicant category and the number of classes. verify the amount.
                        </p>
                        <p className="text-gray-700">
                           Proceed to the payment gateway. You can pay via Net Banking, Debit Card, or Credit Card. Ensure you have a stable internet connection, as interruption here can lead to failed transactions. <strong>Note:</strong> Even after payment confirmation, do not refresh the page until redirected back to the portal.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Generate Acknowledgement Receipt</h3>
                        <p className="text-gray-700">
                           Once the payment is successful, the system generates a definitive Filing Receipt (CBR - Cash Book Receipt). This receipt contains:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
                           <li><strong>Trademark Application Number:</strong> This is your temporary ID.</li>
                           <li><strong>Date and Time of Filing:</strong> Crucial for priority.</li>
                           <li><strong>Details of the Mark and Class.</strong></li>
                        </ul>
                        <p className="text-gray-700 mt-2">
                           Save this receipt safely. You can immediately start using the <strong>™</strong> symbol next to your brand name.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="documents-required" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Required for Online Application</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Having the correct documents in the right format is essential for a smooth filing process. Incorrect formats or missing documents are the most common reasons for delays. Here is the comprehensive list:
                   </p>
                   
                   <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Identity & Address Proof</h3>
                      <ul className="space-y-3 mb-6">
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>For Individuals:</strong> PAN Card, Aadhar Card, or Passport.</span>
                         </li>
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>For Companies/LLPs:</strong> Certificate of Incorporation, PAN of the Company/LLP.</span>
                         </li>
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>For Partnerships:</strong> Partnership Deed and ID proofs of partners.</span>
                         </li>
                      </ul>

                      <h3 className="text-lg font-bold text-gray-900 mb-4">Trademark Representation</h3>
                      <ul className="space-y-3 mb-6">
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>Logo/Mark Image:</strong> A clear, high-resolution JPEG image of the logo or wordmark. It should not be pixelated.</span>
                         </li>
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>Brand Name:</strong> Exact spelling of the brand name if it's a word mark.</span>
                         </li>
                      </ul>

                      <h3 className="text-lg font-bold text-gray-900 mb-4">Legal Documents</h3>
                      <ul className="space-y-3">
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>Power of Attorney (Form 48):</strong> Required if you are filing through an agent or attorney. This must be printed on stamp paper (usually ₹100), signed by the applicant, and uploaded.</span>
                         </li>
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>User Affidavit:</strong> If you are claiming 'Prior Use' (i.e., you have been using the brand before filing), a notarized affidavit asserting the usage details along with evidence (old invoices, newspaper ads, online presence) is mandatory.</span>
                         </li>
                         <li className="flex items-start">
                             <FontAwesomeIcon icon={faCheck} className="mt-1 mr-3 text-green-500 text-sm w-4 h-4" />
                             <span className="text-gray-700"><strong>MSME/Start-up Certificate:</strong> If you want to avail the 50% discount on government fees, you must provide a valid Udyam Registration Certificate (for MSMEs) or DPIIT Recognition Certificate (for Startups).</span>
                         </li>
                      </ul>
                   </div>
                </section>

                 <section id="application-fees" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Application Fees (Government)</h2>
                   <div className="overflow-x-auto">
                     <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                       <thead className="bg-[#6E5E93] text-white">
                         <tr>
                           <th className="py-3 px-6 text-left">Applicant Category</th>
                           <th className="py-3 px-6 text-left">E-Filing Fee</th>
                           <th className="py-3 px-6 text-left">Physical Filing Fee</th>
                         </tr>
                       </thead>
                       <tbody className="text-gray-700">
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                           <td className="py-3 px-6">Individual / Sole Proprietor</td>
                           <td className="py-3 px-6">₹4,500</td>
                           <td className="py-3 px-6">₹5,000</td>
                         </tr>
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                           <td className="py-3 px-6">Startups (DPIIT Recognized)</td>
                           <td className="py-3 px-6">₹4,500</td>
                           <td className="py-3 px-6">₹5,000</td>
                         </tr>
                         <tr className="border-b border-gray-100 hover:bg-gray-50">
                           <td className="py-3 px-6">MSMEs (Udyam Registered)</td>
                           <td className="py-3 px-6">₹4,500</td>
                           <td className="py-3 px-6">₹5,000</td>
                         </tr>
                         <tr className="hover:bg-gray-50">
                           <td className="py-3 px-6">Others (Pvt Ltd, Ltd, Partnership)</td>
                           <td className="py-3 px-6">₹9,000</td>
                           <td className="py-3 px-6">₹10,000</td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                   <p className="text-sm text-gray-500 mt-2">*Fees are per class per mark.</p>
                </section>

                <section id="common-mistakes" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Common Mistakes to Avoid While Filing Online</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      Even with an online system, errors are frequent. Here are the top mistakes that lead to trademark rejection:
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                         <h3 className="font-bold text-lg text-red-800 mb-2">1. Using Generic Terms</h3>
                         <p className="text-gray-700 text-sm">Avoid names that describe the quality or kind of goods (e.g., "Best Shoes" for a shoe brand). These are often rejected under Section 9.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                         <h3 className="font-bold text-lg text-red-800 mb-2">2. Incorrect Applicant Type</h3>
                         <p className="text-gray-700 text-sm">Filing as an 'Individual' when the brand is owned by a 'Pvt Ltd Company' is a critical error that cannot be easily rectified.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                         <h3 className="font-bold text-lg text-red-800 mb-2">3. Wrong Class</h3>
                         <p className="text-gray-700 text-sm">Filing under the wrong class leaves your actual product unprotected. Always cross-check the Nice Classification.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                         <h3 className="font-bold text-lg text-red-800 mb-2">4. Improper User Date</h3>
                         <p className="text-gray-700 text-sm">Claiming a prior user date without sufficient evidence (invoices/bills from that year) will lead to an objection.</p>
                      </div>
                   </div>
                </section>

                <section id="post-filing-process" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Post-Filing Process: What Comes Next?</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Successfully filing your application is a major milestone, but it's not the end of the road. The trademark registration process in India is a multi-stage journey that can take anywhere from 6 to 18 months. Here is a detailed breakdown of what happens after you hit 'Submit':
                   </p>
                   
                   <div className="space-y-6">
                      <div className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[rgb(110,94,147)] flex items-center justify-center font-bold">1</div>
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">Formalities Check (Pass/Fail)</h3>
                            <p className="text-gray-700 text-sm mt-1">
                               The Trademark Registry first checks if your application meets all basic requirements (correct form, fee payment, documents). If everything is in order, the status changes to "Formalities Chk Pass". If not, a "Formalities Chk Fail" notice is issued, and you must rectify the errors.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[rgb(110,94,147)] flex items-center justify-center font-bold">2</div>
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">Examination</h3>
                            <p className="text-gray-700 text-sm mt-1">
                               An Examiner reviews your mark to ensure it is distinct and does not conflict with existing marks (Section 9 and 11). This is where most applications face hurdles. The examiner will issue an <strong>Examination Report</strong> within 1-3 months.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[rgb(110,94,147)] flex items-center justify-center font-bold">3</div>
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">Response to Examination Report</h3>
                            <p className="text-gray-700 text-sm mt-1">
                               If the report contains objections, you have 30 days to file a written reply (Form TM-O). If your reply convinces the examiner, the mark moves to the next stage. If not, a 'Show Cause Hearing' involves appearing before the registrar to argue your case.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-[rgb(110,94,147)] flex items-center justify-center font-bold">4</div>
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">Publication in Trademark Journal</h3>
                            <p className="text-gray-700 text-sm mt-1">
                               Once accepted, your trademark is published in the Trademark Journal. This is a public advertisement allowing third parties to oppose your mark if they believe it damages their rights. The opposition window stays open for 4 months.
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-4">
                         <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold">5</div>
                         </div>
                         <div>
                            <h3 className="font-bold text-lg text-gray-900">Registration & Certification</h3>
                            <p className="text-gray-700 text-sm mt-1">
                               If there are no oppositions (or if you win the opposition proceedings), the Registrar issues the Registration Certificate. Your trademark is now valid for 10 years from the date of filing.
                            </p>
                         </div>
                      </div>
                   </div>
                </section>

                <section id="why-hire-professional" className="scroll-mt-24 md:scroll-mt-32 bg-purple-50 p-6 md:p-8 rounded-xl border border-purple-100">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Hire a Professional vs DIY?</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      While DIY filing saves professional fees initially, it often leads to higher costs later due to:
                   </p>
                   <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li><strong>Wrong Class Selection:</strong> Choosing the wrong class means your brand is not protected for your actual products. You cannot change the class later; you must re-file.</li>
                      <li><strong>Vague Descriptions:</strong> Improper description of goods can lead to immediate objections.</li>
                      <li><strong>Deadline Misses:</strong> Professionals track deadlines for objections and renewals efficiently.</li>
                   </ul>
                   <p className="mt-4 font-bold text-[rgb(110,94,147)]">
                      IPR Karo ensures error-free filing, handles all legal drafting, and responds to objections, giving you peace of mind.
                   </p>
                </section>

                <section id="faqs" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Common Questions About Application Steps</h2>
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

                <section id="conclusion" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Conclusion</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      Filing a trademark application online is a structured legal process that grants you ownership of your brand. By following these steps diligently-conducting a search, preparing documents, and filing correctly-you set a strong foundation for your business's intellectual property.
                   </p>
                   <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                      However, the legal nuances can be tricky. Expert assistance not only saves time but also significantly increases the chances of successful registration. Start your trademark journey today to secure your brand for tomorrow.
                   </p>
                </section>

                <section id="client-success-stories" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Client Success Stories</h2>
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "The step-by-step guidance provided by IPR Karo made the filing process so simple. I got my application number within 2 hours!"
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Suresh Patel</p>
                          <p className="text-xs md:text-sm text-gray-500">Retail Business Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "I was confused about the trademark classes. Their team helped me select the right ones and filed my application flawlessly."
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Meera Redding</p>
                          <p className="text-xs md:text-sm text-gray-500">App Developer</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "Excellent service for online filing. They handled the digital signature and document upload very professionally."
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Amit Verma</p>
                          <p className="text-xs md:text-sm text-gray-500">Consultant</p>
                        </div>
                      </div>
                    </div>
                  
                    <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                      <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                        "Highly recommended for startups. They guided me through the MSME discount process and saved me money on government fees."
                      </p>
                      <div className="flex items-center pl-2 md:pl-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-base md:text-lg">Sneha Gupta</p>
                          <p className="text-xs md:text-sm text-gray-500">D2C Brand Founder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="why-choose-iprkaro" className="scroll-mt-24 md:scroll-mt-32 bg-black text-white p-6 md:p-8 rounded-xl md:rounded-2xl">
                  <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">Why Choose IPR Karo for Filing?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faRocket} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Fastest Filing</h3>
                      <p className="text-gray-400 text-xs md:text-sm">We process your application and file it with the registry within 24 hours.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faGavel} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Error-Free Forms</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Our experts double-check every detail to minimize objection risks.</p>
                    </div>
                    <div className="p-2 md:p-4">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-[rgb(110,94,147)]">
                         <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-[#FFD700]">Best Pricing</h3>
                      <p className="text-gray-400 text-xs md:text-sm">Startups get special rates and guidance on claiming government rebates.</p>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Ready to File Your Trademark?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Let our experts handle the paperwork while you focus on building your brand. Quick, secure, and hassle-free online filing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          Get Started
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
                    Need help filing? Get a free consultation today.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Get Expert Help
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
                      <Link href="/what-is-trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Renewal Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Trademark Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/trademark-class-finder" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Class Finder
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
