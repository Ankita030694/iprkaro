'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

interface TOCSection {
  id: string;
  title: string;
}

export default function OnlineTrademarkRegistrationClient() {
  const [activeSection, setActiveSection] = useState('');
  const [tocSections, setTocSections] = useState<TOCSection[]>([]);

  useEffect(() => {
    const sections: TOCSection[] = [
      { id: 'introduction', title: 'Introduction' },
      { id: 'what-is-online-trademark', title: 'What is Online Trademark Registration?' },
      { id: 'trademark-vs-copyright-patent', title: 'Trademark vs Copyright vs Patent' },
      { id: 'importance-of-trademark', title: 'Importance of Trademark Registration' },
      { id: 'choosing-strong-trademark', title: 'How to Choose a Strong Trademark' },
      { id: 'benefits-online-filing', title: 'Benefits of Online Filing' },
      { id: 'prerequisites', title: 'Prerequisites for Registration' },
      { id: 'step-by-step-process', title: 'Step-by-Step Registration Process' },
      { id: 'trademark-hearing', title: 'The Trademark Hearing Process' },
      { id: 'documents-required', title: 'Documents Required' },
      { id: 'trademark-classes', title: 'Understanding Trademark Classes' },
      { id: 'objection-opposition', title: 'Objection and Opposition' },
      { id: 'refusal-grounds', title: 'Grounds for Refusal' },
      { id: 'renewal-maintenance', title: 'Renewal and Maintenance' },
      { id: 'assignment-transmission', title: 'Assignment and Transmission' },
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
    "headline": "Online Trademark Registration in India: The Ultimate Guide",
    "description": "A comprehensive guide to online trademark registration in India, covering the process, documents, benefits, and more.",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I file a trademark application online myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can file a trademark application online yourself through the official IP India portal. However, hiring a professional is recommended to avoid errors and handle objections effectively."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are needed for online trademark registration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The key documents include identity proof, address proof, a clear image of the trademark/logo, and a signed Power of Attorney if you are using an agent."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the online trademark registration process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The process typically takes 12 to 18 months, provided there are no objections or oppositions. If there are legal hurdles, it may take longer."
        }
      },
      {
        "@type": "Question",
        "name": "Is a digital signature required for online filing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, a Class 3 Digital Signature Certificate (DSC) is mandatory for filing trademark applications online in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the validity of a registered trademark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {tocSections.length > 0 && (
        <BlogTableOfContents 
          activeSection={activeSection} 
          blogTitle="Online Trademark Registration Guide"
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
              <span className="text-[#FFB703] font-medium">Online Registration</span>
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
                Online Trademark Registration: A Comprehensive Guide for 2025
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
                In the digital age, protecting your brand identity is more crucial than ever. Online trademark registration has revolutionized the way businesses secure their intellectual property. It offers a streamlined, efficient, and transparent method to obtain legal rights over your brand name, logo, or slogan. This guide delves deep into the nuances of filing a trademark application online in India, ensuring you have all the knowledge needed to navigate this essential business process.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#FFB703]">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-white/80 text-sm">4.8/5 based on 500+ reviews</span>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12">
              
              {/* Introduction */}
              <section id="introduction" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Introduction to Brand Protection</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Building a brand takes immense effort, creativity, and resources. From the moment you conceive a business idea to the day you launch your first product, every step contributes to your brand's reputation. However, in a competitive marketplace, this reputation is vulnerable to infringement and misuse. This is where trademark registration comes into play. It serves as a legal shield, protecting your brand's unique identity from being exploited by others.
                  </p>
                  <p>
                    Traditionally, trademark filing was a cumbersome process involving physical paperwork and frequent visits to the trademark office. Today, with the advent of the <strong>online trademark registration</strong> system, the process has become significantly faster and more user-friendly. The Controller General of Patents, Designs, and Trademarks (CGPDTM) in India has established a robust online portal that facilitates e-filing, real-time status tracking, and digital communication.
                  </p>
                  <p>
                    Whether you are a startup founder, a small business owner, or part of a large corporation, understanding the online registration process is vital. It not only saves time but also ensures that your application is accurate and compliant with the latest regulations. In this extensive guide, we will walk you through every aspect of registering your trademark online, from the initial search to the final certification.
                  </p>
                </div>
              </section>

              {/* What is Online Trademark Registration */}
              <section id="what-is-online-trademark" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">What is Online Trademark Registration?</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Online trademark registration refers to the process of filing a trademark application through the internet using the official government portal. In India, this is managed by the Intellectual Property India (IP India) website. This digital approach allows applicants or their authorized agents to submit forms, upload documents, and pay fees electronically.
                  </p>
                  <p>
                    A trademark itself is a recognizable sign, design, or expression which identifies products or services of a particular source from those of others. It can be a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li><strong>Wordmark:</strong> A distinct word or name (e.g., Google).</li>
                    <li><strong>Device Mark:</strong> A logo or symbol (e.g., the Apple logo).</li>
                    <li><strong>Slogan:</strong> A catchy phrase (e.g., "Just Do It").</li>
                    <li><strong>Shape of Goods:</strong> The unique shape of a product (e.g., the Coca-Cola bottle).</li>
                    <li><strong>Sound Mark:</strong> A distinctive sound associated with a brand (e.g., the MGM lion roar).</li>
                  </ul>
                  <p>
                    The transition to an online system has democratized access to intellectual property rights. It has eliminated geographical barriers, allowing a business owner in a remote town to file for protection with the same ease as a corporation in a metropolitan city. The system is designed to be transparent, providing applicants with an immediate application number and the ability to track the progress of their application at every stage.
                  </p>
                </div>
              </section>

              {/* Trademark vs Copyright vs Patent */}
              <section id="trademark-vs-copyright-patent" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Trademark vs Copyright vs Patent</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Intellectual Property (IP) is a broad category, and it is common for business owners to confuse trademarks with copyrights and patents. While all three protect intellectual assets, they serve different purposes and cover different types of creations. Understanding the distinction is crucial for ensuring you apply for the right type of protection.
                  </p>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse border border-white/10">
                      <thead>
                        <tr className="bg-white/10">
                          <th className="p-4 border border-white/10 text-[#FFB703]">Feature</th>
                          <th className="p-4 border border-white/10 text-[#FFB703]">Trademark</th>
                          <th className="p-4 border border-white/10 text-[#FFB703]">Copyright</th>
                          <th className="p-4 border border-white/10 text-[#FFB703]">Patent</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-4 border border-white/10 font-bold">What it protects</td>
                          <td className="p-4 border border-white/10">Brand names, logos, slogans, and identifiers.</td>
                          <td className="p-4 border border-white/10">Original artistic, literary, and musical works.</td>
                          <td className="p-4 border border-white/10">New inventions, processes, and scientific discoveries.</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-white/10 font-bold">Primary Purpose</td>
                          <td className="p-4 border border-white/10">To distinguish goods/services in the market.</td>
                          <td className="p-4 border border-white/10">To protect the expression of an idea.</td>
                          <td className="p-4 border border-white/10">To protect the functional aspect of an invention.</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-white/10 font-bold">Validity</td>
                          <td className="p-4 border border-white/10">10 years (renewable indefinitely).</td>
                          <td className="p-4 border border-white/10">Lifetime of author + 60 years.</td>
                          <td className="p-4 border border-white/10">20 years (usually non-renewable).</td>
                        </tr>
                        <tr>
                          <td className="p-4 border border-white/10 font-bold">Example</td>
                          <td className="p-4 border border-white/10">Nike Swoosh, brand name "Apple".</td>
                          <td className="p-4 border border-white/10">Harry Potter books, software code, songs.</td>
                          <td className="p-4 border border-white/10">The technology inside an iPhone, a new drug formula.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>
                    For example, if you invent a new type of coffee machine, you would patent the mechanism. You would trademark the brand name of the machine. And you would copyright the user manual or the marketing jingle.
                  </p>
                </div>
              </section>

              {/* Importance */}
              <section id="importance-of-trademark" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Importance of Trademark Registration</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Why should you prioritize trademark registration? Many entrepreneurs overlook this step in the early stages, only to face legal battles later. Here is why securing your trademark is non-negotiable:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Exclusive Rights</h3>
                      <p>Registration grants you the sole right to use the mark for the goods and services it covers. You can legally stop others from using a similar mark that could confuse customers.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Asset Creation</h3>
                      <p>A registered trademark is an intangible asset. It adds to the valuation of your company and can be sold, franchised, or licensed to generate revenue.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Trust and Goodwill</h3>
                      <p>A registered symbol (®) communicates professionalism and reliability. It assures customers of the quality and origin of the product, fostering brand loyalty.</p>
                    </div>
                    <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-[#FFB703] font-bold text-lg mb-2">Legal Protection</h3>
                      <p>In case of infringement, a registered trademark owner has the right to sue for damages. Unregistered marks have limited protection under common law (passing off).</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Choose a Strong Trademark */}
              <section id="choosing-strong-trademark" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">How to Choose a Strong Trademark</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Not all trademarks are created equal. The strength of a trademark determines how easy it is to register and protect. Trademarks are generally categorized into five levels of distinctiveness:
                  </p>
                  <ul className="space-y-4 mt-4">
                    <li className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">1. Fanciful (Strongest)</strong>
                      <p>Invented words with no dictionary meaning. These are the easiest to protect. Example: <em>Kodak</em>, <em>Xerox</em>, <em>Exxon</em>.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">2. Arbitrary (Strong)</strong>
                      <p>Common words used in an unrelated context. Example: <em>Apple</em> for computers (apples have nothing to do with computers).</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-[#FFB703]">
                      <strong className="text-[#FFB703] block mb-1">3. Suggestive (Moderate)</strong>
                      <p>Words that suggest a quality of the product but require some imagination. Example: <em>Netflix</em> (suggests internet flicks/movies), <em>Airbus</em>.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">4. Descriptive (Weak)</strong>
                      <p>Words that directly describe the product or its qualities. These are hard to register unless they have acquired secondary meaning. Example: <em>Best Buy</em>, <em>Cold Cream</em>.</p>
                    </li>
                    <li className="bg-white/5 p-4 rounded border-l-4 border-red-500">
                      <strong className="text-red-500 block mb-1">5. Generic (Cannot be Registered)</strong>
                      <p>Common names for the product itself. You cannot trademark <em>Computer</em> for selling computers or <em>Bread</em> for selling bakery items.</p>
                    </li>
                  </ul>
                  <p className="mt-4">
                    <strong>Tip:</strong> Always aim for Fanciful or Arbitrary marks. Avoid Descriptive marks as they often face objections under Section 9 of the Trade Marks Act.
                  </p>
                </div>
              </section>

              {/* Benefits of Online Filing */}
              <section id="benefits-online-filing" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Benefits of Online Filing</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Opting for <strong>online trademark registration</strong> over the traditional physical filing method offers several distinct advantages:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Cost-Effectiveness:</strong> The government fee for online filing is typically lower than that for physical filing. This incentive encourages digitization and reduces the administrative burden on the trademark office.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Convenience and Speed:</strong> You can file an application from anywhere, at any time. The system generates an application number immediately upon submission, allowing you to start using the "TM" symbol instantly.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Accuracy:</strong> The online form has built-in validation checks that prevent common errors, such as missing fields or incorrect data formats, reducing the likelihood of initial objections.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-[#FFB703] mt-1"></i>
                      <div>
                        <strong>Transparency:</strong> The online status tracking facility allows you to monitor your application's progress in real-time. You can view examination reports, hearing notices, and other official communications instantly.
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Prerequisites */}
              <section id="prerequisites" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Prerequisites for Registration</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Before you dive into the filing process, there are critical preparatory steps you must take to ensure a smooth application journey.
                  </p>
                  
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">1. Conduct a Comprehensive Trademark Search</h3>
                  <p>
                    This is arguably the most important step. A trademark search helps you identify if there are any existing trademarks that are identical or deceptively similar to yours. You can perform a public search on the IP India website. Look for phonetic similarities, visual resemblances, and similar meanings. A thorough search minimizes the risk of your application being rejected or opposed later.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-6 mb-2">2. Determine the Correct Class</h3>
                  <p>
                    Trademarks are categorized into 45 classes under the NICE classification system. Classes 1 to 34 are for goods, and classes 35 to 45 are for services. For instance, if you sell clothing, you would file under Class 25. If you provide software services, Class 42 is appropriate. Filing in the wrong class provides no protection for your actual business activities.
                  </p>

                  <h3 className="text-xl font-bold text-white mt-6 mb-2">3. Digital Signature Certificate (DSC)</h3>
                  <p>
                    For online filing, a Class 3 Digital Signature Certificate (DSC) is mandatory. This electronic signature ensures the authenticity of the documents submitted. If you don't have one, you must obtain it from a Certifying Authority before starting the application.
                  </p>
                </div>
              </section>

              {/* Step by Step Process */}
              <section id="step-by-step-process" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Step-by-Step Registration Process</h2>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 1: Account Creation</h3>
                      <p className="text-white/80">
                        Visit the official IP India e-filing portal. Create a new account by selecting the appropriate applicant type (Individual, Proprietor, Agent, etc.). You will need to register your Digital Signature Certificate (DSC) during this process.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 2: Filling the Application (Form TM-A)</h3>
                      <p className="text-white/80">
                        Once logged in, select 'New Application' and choose Form TM-A. Fill in all required details carefully. This includes the applicant's name, address, the trademark itself (upload the logo if applicable), the class of goods/services, and the user date (date of first use). If you are claiming prior use, you must upload a user affidavit.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 3: Document Upload</h3>
                      <p className="text-white/80">
                        Upload the necessary supporting documents. Ensure that the image of the trademark is clear and meets the specified resolution and format requirements. If you are a startup or MSME, upload the relevant registration certificates to avail of fee concessions.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 4: Fee Payment</h3>
                      <p className="text-white/80">
                        After verifying all details, proceed to the payment gateway. The portal supports various payment methods. Upon successful payment, the system will generate a permanent Application Number. You can now use the "TM" symbol next to your brand name.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 5: Examination</h3>
                      <p className="text-white/80">
                        The Trademark Registry will examine your application. They check for formalities and substantive grounds for refusal. If they find any issues, they will issue an Examination Report with objections. You must reply to this report within 30 days.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-[#FFB703]">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 6: Publication</h3>
                      <p className="text-white/80">
                        If the examiner is satisfied with your reply (or if there were no objections), your mark will be published in the Trademark Journal. This serves as a public notice, inviting any third party to oppose the registration if they believe it infringes on their rights.
                      </p>
                    </div>

                    <div className="relative pl-8 border-l-2 border-transparent">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#FFB703]"></div>
                      <h3 className="text-xl font-bold text-white mb-2">Step 7: Registration</h3>
                      <p className="text-white/80">
                        The opposition period lasts for 4 months. If no opposition is filed, or if the opposition is decided in your favor, the Registrar will issue the Registration Certificate. You are now the proud owner of a registered trademark and can use the "®" symbol.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Trademark Hearing Process */}
              <section id="trademark-hearing" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">The Trademark Hearing Process</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    If the Trademark Registrar is not satisfied with your written reply to the examination report, they may schedule a show-cause hearing. This is a critical stage where you or your attorney must appear (physically or via video conference) to present your case.
                  </p>
                  <p>
                    During the hearing, you must provide evidence and legal arguments to prove why your trademark should be registered. This might include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Evidence of prior use (invoices, marketing material).</li>
                    <li>Proof of distinctiveness.</li>
                    <li>Legal precedents supporting your case.</li>
                  </ul>
                  <p>
                    If the hearing officer is convinced, the mark will be accepted and published. If not, the application will be refused. It is highly advisable to have a skilled trademark attorney represent you during hearings to maximize your chances of success.
                  </p>
                </div>
              </section>

              {/* Documents Required */}
              <section id="documents-required" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Documents Required</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed mb-4">
                  <p>
                    Having the right documents ready can significantly speed up the filing process. Here is a checklist of what you will need:
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Identity Proof</h4>
                    <p className="text-sm text-white/80">PAN Card, Aadhaar Card, Passport, or Voter ID of the applicant or authorized signatory.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Address Proof</h4>
                    <p className="text-sm text-white/80">Recent utility bill, rent agreement, or property tax receipt showing the principal place of business.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Trademark Image</h4>
                    <p className="text-sm text-white/80">A high-resolution JPEG image of the logo or brand mark. For wordmarks, just the text is needed.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">User Affidavit</h4>
                    <p className="text-sm text-white/80">If claiming prior use (using the mark before the application date), a notarized affidavit with evidence of use is required.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Power of Attorney</h4>
                    <p className="text-sm text-white/80">Form TM-48, signed by the applicant, authorizing a trademark attorney or agent to file on their behalf.</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10">
                    <h4 className="text-[#FFB703] font-bold mb-2">Entity Proof</h4>
                    <p className="text-sm text-white/80">Certificate of Incorporation (for companies), Partnership Deed (for firms), or MSME/Startup Certificate (for fee concession).</p>
                  </div>
                </div>
              </section>

              {/* Trademark Classes */}
              <section id="trademark-classes" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Understanding Trademark Classes</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    The NICE Classification is an international system used to classify goods and services for the purposes of the registration of marks. It consists of 45 classes. Selecting the right class is critical because your trademark protection is limited to the class(es) you apply under.
                  </p>
                  <p>
                    <strong>Common Classes:</strong>
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="bg-white/5 p-3 rounded"><strong>Class 5:</strong> Pharmaceuticals and medical preparations.</li>
                    <li className="bg-white/5 p-3 rounded"><strong>Class 9:</strong> Electronics, software, and mobile apps.</li>
                    <li className="bg-white/5 p-3 rounded"><strong>Class 25:</strong> Clothing, footwear, and headgear.</li>
                    <li className="bg-white/5 p-3 rounded"><strong>Class 30:</strong> Coffee, tea, spices, and bakery items.</li>
                    <li className="bg-white/5 p-3 rounded"><strong>Class 35:</strong> Advertising, business management, and retail services.</li>
                    <li className="bg-white/5 p-3 rounded"><strong>Class 41:</strong> Education, training, and entertainment services.</li>
                  </ul>
                  <p>
                    You can file a multi-class application if your business operates in more than one category, though separate fees apply for each class.
                  </p>
                </div>
              </section>

              {/* Objection and Opposition */}
              <section id="objection-opposition" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Objection and Opposition</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    It is not uncommon for a trademark application to face hurdles. These generally come in two forms:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 rounded border border-white/10 bg-white/5">
                      <h3 className="text-[#FFB703] font-bold text-lg">Trademark Objection</h3>
                      <p className="mt-2">
                        This is raised by the Trademark Office (Registrar) during the examination phase. Reasons can include the mark being descriptive, lacking distinctiveness, or being similar to an existing mark. You must file a formal legal reply addressing the examiner's concerns. Failure to do so will lead to the abandonment of the application.
                      </p>
                    </div>
                    <div className="p-4 rounded border border-white/10 bg-white/5">
                      <h3 className="text-[#FFB703] font-bold text-lg">Trademark Opposition</h3>
                      <p className="mt-2">
                        This occurs after the mark is published in the journal. Any third party (usually a competitor or another brand owner) can oppose the registration if they believe it damages their rights. Opposition proceedings are quasi-judicial and involve filing counter-statements, submitting evidence, and attending hearings.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Grounds for Refusal */}
              <section id="refusal-grounds" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Grounds for Refusal</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    The Trade Marks Act, 1999, specifies two main categories of grounds for refusal of registration:
                  </p>
                  <h3 className="text-xl font-bold text-white mt-4">Absolute Grounds (Section 9)</h3>
                  <p>
                    These relate to the inherent characteristics of the mark itself. A mark may be refused if it:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Is devoid of any distinctive character.</li>
                    <li>Consists exclusively of marks or indications which serve in trade to designate the kind, quality, quantity, intended purpose, values, geographical origin, or the time of production of the goods.</li>
                    <li>Consists exclusively of marks or indications which have become customary in the current language or in the bona fide and established practices of the trade.</li>
                    <li>Is of such nature as to deceive the public or cause confusion.</li>
                    <li>Contains or comprises any matter likely to hurt the religious susceptibilities of any class or section of the citizens of India.</li>
                  </ul>

                  <h3 className="text-xl font-bold text-white mt-4">Relative Grounds (Section 11)</h3>
                  <p>
                    These relate to the conflict with earlier trademarks. A mark may be refused if it:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-white/80">
                    <li>Is identical with an earlier trade mark and is to be registered for goods or services similar to those for which the earlier trade mark is registered.</li>
                    <li>Is similar to an earlier trade mark and is to be registered for goods or services identical with or similar to those for which the earlier trade mark is registered.</li>
                  </ul>
                </div>
              </section>

              {/* Renewal and Maintenance */}
              <section id="renewal-maintenance" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Renewal and Maintenance</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    Trademark rights are not perpetual unless maintained. A registered trademark in India is valid for 10 years from the date of the application. It can be renewed indefinitely for subsequent periods of 10 years.
                  </p>
                  <p>
                    <strong>Renewal Process:</strong> You can file a renewal request (Form TM-R) within six months before the expiry date. Even if you miss the deadline, there is a grace period of six months after expiry, during which you can renew by paying a surcharge. If not renewed, the mark is removed from the register and becomes available for others to use.
                  </p>
                  <p>
                    <strong>Maintenance:</strong> Apart from renewal, you must actively use your trademark. If a registered trademark is not used for a continuous period of five years, it becomes vulnerable to cancellation on the grounds of non-use. Therefore, keeping your brand active in the market is essential for long-term protection.
                  </p>
                </div>
              </section>

              {/* Assignment and Transmission */}
              <section id="assignment-transmission" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Assignment and Transmission</h2>
                <div className="text-white/90 font-nunito text-base leading-relaxed space-y-4">
                  <p>
                    A trademark is a property that can be transferred. <strong>Assignment</strong> refers to the transfer of rights, title, and interest in the trademark to another person or entity. This can be done with or without the goodwill of the business.
                  </p>
                  <p>
                    <strong>Transmission</strong> refers to the transfer of a trademark by operation of law, such as in the case of inheritance or succession.
                  </p>
                  <p>
                    Both assignment and transmission must be recorded with the Registrar of Trademarks to be legally valid against third parties. This allows businesses to monetize their brand assets or restructure their IP holdings efficiently.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="mb-12 scroll-mt-32">
                <h2 className="text-white font-nunito text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "Can I file a trademark application online myself?", a: "Yes, you can file a trademark application online yourself through the official IP India portal. However, hiring a professional is recommended to avoid errors and handle objections effectively." },
                    { q: "What documents are needed for online trademark registration?", a: "The key documents include identity proof, address proof, a clear image of the trademark/logo, and a signed Power of Attorney if you are using an agent." },
                    { q: "How long does the online trademark registration process take?", a: "The process typically takes 12 to 18 months, provided there are no objections or oppositions. If there are legal hurdles, it may take longer." },
                    { q: "Is a digital signature required for online filing?", a: "Yes, a Class 3 Digital Signature Certificate (DSC) is mandatory for filing trademark applications online in India." },
                    { q: "What is the validity of a registered trademark?", a: "A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely every 10 years." },
                    { q: "Can I register a trademark globally?", a: "Trademark rights are territorial. However, you can use the Madrid Protocol to file a single international application to register your mark in multiple member countries." },
                    { q: "What happens if my trademark is rejected?", a: "If your trademark is refused after a hearing, you can appeal to the High Court. It is best to consult with a legal expert to evaluate the grounds for appeal." },
                    { q: "Can I sell my registered trademark?", a: "Yes, a registered trademark is an asset that can be sold, assigned, or licensed to another party for a fee." },
                    { q: "What is the difference between TM and ®?", a: "The 'TM' symbol is used when the application is pending. The '®' symbol can only be used after the trademark is officially registered and the certificate is issued." },
                    { q: "Does a company registration automatically protect the brand name?", a: "No, company registration (with ROC) and trademark registration are different. Company registration only prevents others from registering a company with the same name, but it doesn't stop them from using it as a brand name. Only a trademark gives you exclusive rights to the brand name." }
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
                  <h3 className="text-white font-nunito text-2xl lg:text-3xl font-bold mb-4">Secure Your Brand Today</h3>
                  <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                    Don't leave your brand's future to chance. Our experts can guide you through the entire online trademark registration process, ensuring your intellectual property is safe and secure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#0C002B] bg-gradient-to-r from-[#FFB703] to-[#FFA000] hover:scale-105 transition-transform text-lg shadow-lg">
                      Get Expert Assistance
                    </Link>
                    <Link href="/services" className="px-8 py-4 rounded-lg font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors text-lg">
                      Explore Services
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
