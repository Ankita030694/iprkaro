'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function RegisterTrademarkOnlineClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'why-register-online', title: 'Why Register Trademark Online?' },
      { id: 'dsc-deep-dive', title: 'Digital Signature Certificate (DSC)' },
      { id: 'pre-filing-checklist', title: 'Pre-Filing Checklist' },
      { id: 'step-by-step-guide', title: 'Step-by-Step Registration Guide' },
      { id: 'trademark-statuses', title: 'Understanding Trademark Statuses' },
      { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'trademark-classes', title: 'Choosing the Right Class' },
      { id: 'objection-handling', title: 'Handling Objections' },
      { id: 'timeline-costs', title: 'Timeline and Costs' },
      { id: 'post-registration', title: 'Post-Registration Compliance' },
      { id: 'faq', title: 'Frequently Asked Questions' }
    ];
    setTocSections(sections);
    if (sections.length > 0) {
      setActiveSection(sections[0].id);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
      for (const section of tocSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Register a Trademark Online in India: A Complete Guide",
    "description": "Learn how to register a trademark online in India with our step-by-step guide. Avoid common mistakes and secure your brand identity.",
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
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
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
        "name": "Trademark Registration",
        "item": "https://www.iprkaro.com/trademark-registration"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Register Trademark Online",
        "item": "https://www.iprkaro.com/register-trademark-online"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Online Trademark Registration Assistance",
    "image": "https://www.iprkaro.com/logo.png",
    "description": "Professional assistance for registering your trademark online in India. We handle search, filing, and objections.",
    "brand": {
      "@type": "Brand",
      "name": "IPR Karo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I register a trademark online in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can register a trademark online by creating an account on the IP India portal, conducting a search, filling Form TM-A, uploading documents, and paying the fee."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of registering a trademark online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The government fee for online filing is typically lower than physical filing. It varies based on the applicant type (Individual/Startup vs. Company)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I register a trademark myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file it yourself, but hiring a professional is advised to avoid errors in classification and to handle legal objections effectively."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the online registration process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process generally takes 6 to 18 months, depending on whether there are any objections or oppositions."
        }
      },
      {
        "@type": "Question",
        "name": "What documents do I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need identity proof, address proof, a clear image of the logo/mark, and a user affidavit if claiming prior use. Startups need a recognition certificate."
        }
      }
    ]
  };

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Register Trademark Online Guide"
          sections={tocSections}
        />
      )}
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Breadcrumb */}
          <section className="mb-6">
            <div className="flex items-center gap-2 text-sm text-white/80 font-nunito">
              <Link href="/" className="hover:text-[#FFB703] transition-colors">
                <i className="fas fa-home" aria-hidden="true"></i>
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <Link href="/trademark-registration" className="hover:text-[#FFB703] transition-colors">
                Trademark Registration
              </Link>
              <i className="fas fa-chevron-right text-xs text-white/50" aria-hidden="true"></i>
              <span className="text-[#FFB703] font-medium">Register Online</span>
            </div>
          </section>

          {/* Hero Section */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full relative"
                style={{
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: '#FFB703', opacity: 0.4 }}
                />
              </div>
              <h1 className="text-white font-nunito text-3xl md:text-4xl lg:text-5xl font-bold">
                How to Register a Trademark Online: The Ultimate Step-by-Step Guide
              </h1>
            </div>
            
            <div 
              className="p-6 lg:p-8 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-lg leading-relaxed mb-4">
                Ready to secure your brand identity? Registering a trademark online is the most efficient way to protect your business name, logo, or slogan from unauthorized use. With the digitization of the Intellectual Property India (IP India) services, the process has become faster, more transparent, and accessible to everyone. This guide provides a detailed walkthrough of how to <strong>register a trademark online</strong>, ensuring you navigate the legal landscape with confidence and avoid common pitfalls.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#FFB703]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-white/80 text-sm">Rated 4.9/5 by Entrepreneurs</span>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Introduction</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    A trademark is a unique symbol, word, or design that represents your company or product. It distinguishes your goods or services from those of your competitors. In India, the Controller General of Patents, Designs, and Trademarks (CGPDTM) oversees the registration process. The advent of the internet has revolutionized how businesses interact with government services, and trademark registration is no exception.
                  </p>
                  <p>
                    Gone are the days of lengthy paperwork, physical queues at the trademark registry offices in Mumbai, Delhi, Kolkata, Chennai, or Ahmedabad, and the uncertainty of manual filing. The online trademark registration system allows you to file applications from the comfort of your office or home. This digital transformation has democratized access to intellectual property protection, making it accessible to startups, SMEs, and large corporations alike.
                  </p>
                  <p>
                    However, ease of access does not mean the legal requirements are any less stringent. A successful registration requires careful planning, accurate classification, and precise documentation. The online portal is a powerful tool, but it requires a skilled hand to navigate. From creating a user account to uploading documents in the correct format and responding to examination reports, every step must be executed with precision to avoid objections and delays. This comprehensive guide will walk you through every nuance of the online registration process, empowering you to secure your brand's future.
                  </p>
                </div>
              </section>

              {/* Why Register Online */}
              <section id="why-register-online" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Why Register Trademark Online?</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Choosing to <strong>register a trademark online</strong> offers several distinct benefits over the traditional offline method. It is not just about convenience; it is about efficiency, cost-effectiveness, and transparency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Instant Acknowledgement</h3>
                      <p>One of the biggest advantages is the immediate generation of the filing receipt. You receive an application number immediately upon filing, allowing you to start using the "TM" symbol right away. In the physical process, this could take days.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Reduced Fees</h3>
                      <p>The government actively incentivizes digital filing. The official fee for online filing is significantly lower (approx. 10% less) than physical filing. For individuals and startups, this saving is substantial.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Real-Time Tracking</h3>
                      <p>The online portal provides a transparent status tracking system. You can check the status of your application 24/7, view examination reports the moment they are issued, and track opposition proceedings without waiting for physical mail.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Error Reduction</h3>
                      <p>Online forms have built-in validation checks. They prevent you from leaving mandatory fields blank or entering invalid data formats, thereby minimizing the risk of clerical errors that could otherwise delay your application by months.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* DSC Deep Dive */}
              <section id="dsc-deep-dive" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Digital Signature Certificate (DSC): The Key to Online Filing</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Before you can even access the trademark filing forms, you need a Digital Signature Certificate (DSC). This is often a stumbling block for first-time applicants. A DSC is the digital equivalent of a physical signature, ensuring the authenticity and integrity of the documents you submit.
                  </p>
                  <h3 className="text-xl font-bold text-white mt-4">Why is it Mandatory?</h3>
                  <p>
                    The IP India portal requires a <strong>Class 3 DSC</strong> for all e-filing activities. This is the highest level of security for a digital signature. It validates the identity of the user and encrypts the data being transmitted, making the online process legally binding and secure.
                  </p>
                  <h3 className="text-xl font-bold text-white mt-4">How to Obtain a DSC?</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Certifying Authorities:</strong> You must purchase a DSC from a licensed Certifying Authority (CA) such as eMudhra, Sify, or nCode.</li>
                    <li><strong>Documents Needed:</strong> You will need to submit identity proof (PAN, Aadhaar) and address proof. Video verification is often required.</li>
                    <li><strong>USB Token:</strong> The DSC is typically issued on a FIPS-compliant USB token (looks like a pen drive). You must plug this into your computer to sign documents.</li>
                    <li><strong>System Configuration:</strong> You will need to install specific drivers and a signing utility on your computer to allow the browser to communicate with the USB token.</li>
                  </ul>
                  <p className="mt-4 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
                    <strong>Pro Tip:</strong> Ensure your DSC is valid and not expired. DSCs usually have a validity of 1 to 3 years. If you are an attorney or agent, you need a DSC in your own name. If you are a business owner filing directly, the DSC must be in the name of the authorized signatory (Director, Partner, or Proprietor).
                  </p>
                </div>
              </section>

              {/* Pre-Filing Checklist */}
              <section id="pre-filing-checklist" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Pre-Filing Checklist</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Before you log in to the portal, ensure you have the following ready. This checklist is crucial for a smooth filing experience:
                  </p>
                  <ul className="space-y-4 mt-4">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-square text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Unique Brand Name/Logo:</strong> Ensure your mark is distinctive and not descriptive.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-square text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Digital Signature Certificate (DSC):</strong> A Class 3 DSC is mandatory for signing the online application.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-square text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Trademark Search Report:</strong> Conduct a thorough search to ensure no conflicting marks exist.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-square text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Applicant Details:</strong> Full name, address, and legal status (Individual, Company, LLP, etc.).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-square text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Class Selection:</strong> Identify the correct class(es) of goods/services under the NICE classification.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Step-by-Step Guide */}
              <section id="step-by-step-guide" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Step-by-Step Registration Guide</h2>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 1: Comprehensive Public Search</h3>
                      <p className="text-white/80">
                        Before you even think about logging in, visit the IP India Public Search portal. This is the most critical step. Do not just search for the exact name. Search for:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-white/80">
                        <li><strong>Phonetic Similarities:</strong> "Kwik" vs "Quick".</li>
                        <li><strong>Visual Similarities:</strong> Logos that look alike.</li>
                        <li><strong>Similar Meanings:</strong> "Surya" vs "Sun".</li>
                      </ul>
                      <p className="text-white/80 mt-2">
                        Enter your proposed trademark and the relevant class. Analyze the results carefully. If you find identical or deceptively similar marks in the same or related classes, you should strongly consider rebranding. Proceeding with a similar mark is a recipe for rejection and legal battles.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 2: User Registration & Account Creation</h3>
                      <p className="text-white/80">
                        Go to the IP India e-filing portal. You cannot file as a guest. You must register as a new user.
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-white/80">
                        <li><strong>Select User Type:</strong> Choose 'Proprietor' if you are filing for your own business, or 'Agent/Attorney' if you are a professional.</li>
                        <li><strong>Enter Details:</strong> Fill in the full legal name, address, email, and mobile number.</li>
                        <li><strong>Map DSC:</strong> This is where your Digital Signature Certificate comes in. You must plug in your token and 'map' it to your user account. This links your digital identity to your login credentials.</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 3: Filing Form TM-A</h3>
                      <p className="text-white/80">
                        Once logged in, navigate to 'New Application'. Select 'File TM-A'. This is the primary application form.
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-white/80">
                        <li><strong>Applicant Details:</strong> Select the category (Individual, Startup, Small Enterprise, or Others). Note that Startups and SMEs get a 50% fee concession but must upload a valid certificate (DIPP or Udyam).</li>
                        <li><strong>Trademark Details:</strong> Upload your logo (JPEG format, specific dimensions). If it is a wordmark, type it in.</li>
                        <li><strong>Goods/Services Description:</strong> Be precise. Do not just write "Electronics". Write "Electronic circuit boards, mobile phones, and accessories" as per the NICE classification.</li>
                        <li><strong>User Date:</strong> If you have been using the mark, enter the date of first use. You MUST upload a 'User Affidavit' as proof. If not, select 'Proposed to be used'.</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 4: Document Upload & Payment</h3>
                      <p className="text-white/80">
                        After filling the form, you must upload the supporting documents. Ensure they are in PDF format and within the size limits.
                      </p>
                      <p className="text-white/80 mt-2">
                        Review the application draft carefully. Once satisfied, proceed to payment. The portal accepts net banking, credit cards, and debit cards. Upon successful payment, the system generates an acknowledgement slip containing your <strong>Application Number</strong>. Save this! It is your reference for all future tracking.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 5: Examination & Response</h3>
                      <p className="text-white/80">
                        Your job isn't done yet. The Registrar will examine your application, typically within 1-3 months. They check for formalities and substantive grounds for refusal (Section 9 and 11 of the Act).
                      </p>
                      <p className="text-white/80 mt-2">
                        If they find issues, they will issue an <strong>Examination Report</strong> with objections. You have 30 days to file a comprehensive legal reply. Failure to do so will lead to abandonment.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-transparent">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 6: Publication & Registration</h3>
                      <p className="text-white/80">
                        If your reply is accepted (or if there were no objections), the mark is published in the Trademark Journal. This is a public notice inviting oppositions. If no third party opposes your mark within 4 months, the Registrar will issue the <strong>Registration Certificate</strong>. This certificate is valid for 10 years.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trademark Statuses */}
              <section id="trademark-statuses" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Understanding Trademark Statuses</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    When you track your application online, you will see various status updates. Understanding these is crucial to knowing what action to take next:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Send to Vienna Codification</h4>
                      <p className="text-sm text-white/80">Applicable for logos. The registry assigns a Vienna Code to the design elements for indexing.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Formalities Chk Pass/Fail</h4>
                      <p className="text-sm text-white/80">Checks if basic documents are correct. If 'Fail', you must rectify the clerical errors immediately.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Marked for Exam</h4>
                      <p className="text-sm text-white/80">The application has been assigned to an examiner for a detailed legal review.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Objected</h4>
                      <p className="text-sm text-white/80">The examiner has raised objections. You must file a reply within 30 days.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Exam Report Issued</h4>
                      <p className="text-sm text-white/80">The report is generated and available for download. Check it immediately.</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded border border-white/10">
                      <h4 className="text-[#FFB703] font-bold mb-2">Opposed</h4>
                      <p className="text-sm text-white/80">A third party has filed an opposition against your mark. Legal proceedings will follow.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="common-mistakes" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Common Mistakes to Avoid</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Even with an online system, errors can happen. Avoid these common pitfalls to ensure your application doesn't get stuck:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">Wrong Class Selection</strong>
                      <p>Filing in the wrong class gives you zero protection for your actual product. Always double-check the NICE classification.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">Descriptive Marks</strong>
                      <p>Trying to register words like "Best Quality" or "Super Fast" usually leads to rejection. Choose distinctive names.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">Ignoring Similar Marks</strong>
                      <p>Filing a mark that is "confusingly similar" to an existing one is the #1 reason for objections. Don't skip the search.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">Incorrect User Date</strong>
                      <p>Claiming prior use without evidence (invoices, ads) can backfire. If you can't prove it, file as "Proposed to be used".</p>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Documents Required */}
              <section id="documents-required" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Documents Required for Online Registration</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                  <p>
                    The documentation required varies slightly depending on the type of applicant (Individual, Company, LLP, etc.). Having these ready in the correct digital format is essential for a smooth filing process.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Identity Proof</h4>
                    <p className="text-sm text-white/80">For Individuals/Sole Proprietors: PAN Card or Aadhaar Card. For Companies: Certificate of Incorporation.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Address Proof</h4>
                    <p className="text-sm text-white/80">Recent utility bill, bank statement, or GST registration certificate showing the principal place of business.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Business Proof</h4>
                    <p className="text-sm text-white/80">GST Certificate, Udyam Registration (for MSME concession), or Start-up India Certificate (for Startup concession).</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Logo/Brand Image</h4>
                    <p className="text-sm text-white/80">High-resolution JPEG of the logo. If it's a wordmark, just the text is needed. Dimensions should be 8x8 cm.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Power of Attorney (TM-48)</h4>
                    <p className="text-sm text-white/80">Required if you are filing through an attorney or agent. It must be signed and stamped on stamp paper.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">User Affidavit</h4>
                    <p className="text-sm text-white/80">Mandatory if claiming a prior user date. It must be notarized and detail the history of usage with evidence.</p>
                  </div>
                </div>
              </section>

              {/* Trademark Classes */}
              <section id="trademark-classes" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Choosing the Right Class</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Trademarks are territorial and class-specific. You must register your mark under the class that covers your goods or services.
                  </p>
                  <p>
                    <strong>Examples:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Class 9:</strong> Software, Electronics, Mobile Apps.</li>
                    <li><strong>Class 25:</strong> Clothing and Apparel.</li>
                    <li><strong>Class 35:</strong> Business Management, Advertising, E-commerce.</li>
                    <li><strong>Class 41:</strong> Education and Entertainment.</li>
                    <li><strong>Class 42:</strong> Technology Services, SaaS.</li>
                  </ul>
                  <p>
                    If your business spans multiple categories (e.g., you sell clothes AND have a clothing store), you may need to file in multiple classes (Class 25 and Class 35).
                  </p>
                </div>
              </section>

              {/* Objection Handling */}
              <section id="objection-handling" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Handling Objections</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    If the status of your application changes to "Objected", do not panic. It simply means the examiner needs clarification. You must file a reply within 30 days of the examination report.
                  </p>
                  <p>
                    A strong reply should cite relevant case laws and provide evidence of distinctiveness. If the reply is accepted, the mark moves to publication. If not, a hearing is scheduled. Professional legal assistance is highly recommended at this stage to draft a robust response.
                  </p>
                </div>
              </section>

              {/* Timeline and Costs */}
              <section id="timeline-costs" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Timeline and Costs</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    <strong>Timeline:</strong> In a straightforward case with no objections, the process takes about 6 to 8 months. If there are objections or oppositions, it can take 18 months or longer.
                  </p>
                  <p>
                    <strong>Costs:</strong> The government fee varies. For individuals, startups, and MSMEs, the fee is significantly lower than for large companies. Remember, this is just the government fee; professional fees for attorneys will be extra but are worth the investment for a hassle-free process.
                  </p>
                </div>
              </section>

              {/* Post Registration */}
              <section id="post-registration" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Post-Registration Compliance</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Once registered, your trademark is valid for 10 years. To keep it active:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Renew on Time:</strong> File for renewal every 10 years.</li>
                    <li><strong>Use It:</strong> Ensure you actively use the mark in commerce. Non-use for 5 years can lead to cancellation.</li>
                    <li><strong>Monitor:</strong> Keep an eye out for infringers and take legal action if someone copies your brand.</li>
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "How do I register a trademark online in India?", a: "You can register a trademark online by creating an account on the IP India portal, conducting a search, filling Form TM-A, uploading documents, and paying the fee." },
                    { q: "What is the cost of registering a trademark online?", a: "The government fee for online filing is typically lower than physical filing. It varies based on the applicant type (Individual/Startup vs. Company)." },
                    { q: "Can I register a trademark myself?", a: "Yes, you can file it yourself, but hiring a professional is advised to avoid errors in classification and to handle legal objections effectively." },
                    { q: "How long does the online registration process take?", a: "The process generally takes 6 to 18 months, depending on whether there are any objections or oppositions." },
                    { q: "What documents do I need?", a: "You need identity proof, address proof, a clear image of the logo/mark, and a user affidavit if claiming prior use. Startups need a recognition certificate." },
                    { q: "Is the fee refundable if my trademark is rejected?", a: "No, government fees paid for trademark registration are non-refundable, regardless of the outcome of the application." },
                    { q: "Can I edit my application after submission?", a: "Minor clerical errors can be corrected by filing a request on Form TM-M with a fee, but substantial changes to the trademark itself are usually not allowed." }
                  ].map((faq, i) => (
                    <div key={i} className="p-5 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h3 className="text-[#FFB703] font-bold mb-2 text-lg">{faq.q}</h3>
                      <p className="text-white/90 text-base">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="mb-8">
                <div className="relative overflow-hidden p-8 rounded-xl text-center" style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                  border: '2px solid rgba(255, 183, 3, 0.3)',
                  boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
                }}>
                  <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-4">Start Your Online Registration Today</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                    Avoid the hassle of paperwork and legal complexities. Let our experts handle your online trademark registration while you focus on growing your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform text-lg shadow-lg">
                      Register Now
                    </Link>
                    <Link href="/services" className="px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg">
                      Our Packages
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
