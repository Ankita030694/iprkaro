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
  faLightbulb, 
  faRocket, 
  faMoneyBillWave, 
  faCertificate, 
  faFileSignature,
  faPhone,
  faChevronRight,
  faCalendarAlt,
  faHandshake,
  faCogs,
  faHourglassHalf,
  faMicroscope,
  faMusic,
  faBook,
  faPalette,
  faFilm,
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Copyright Registration in India | IPR Karo',
  description: 'Secure your creative work with Online Copyright Registration in India. Protect Books, Music, Software (Source Code), Movies & Art. Affordable fees & Expert Legal Process.',
  keywords: [
    'copyright registration india',
    'copyright filing fees',
    'copyright software india',
    'copyright music india',
    'artistic work copyright',
    'literary work protection',
    'copyright process 2025',
    'copyright vs trademark',
    'copyright lawyers india',
    'online copyright filing'
  ],
  openGraph: {
    title: 'Copyright Registration in India | IPR Karo',
    description: 'Own your content legally. Comprehensive copyright filing for Authors, Artists, Musicians, and Developers. 60-Year Protection.',
    url: 'https://www.iprkaro.com/our-services/copyright-registration',
    type: 'article',
    images: [
      {
        url: 'https://www.iprkaro.com/assets/copyright-registration-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Copyright Registration Services India',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/our-services/copyright-registration',
  },
};

const tocSections = [
  { id: 'why-copyright', title: 'Why Copyright?' },
  { id: 'eligible-works', title: 'Eligible Works' },
  { id: 'owner-rights', title: 'Your Legal Rights' },
  { id: 'software-copyright', title: 'Software Protection' },
  { id: 'copyright-fees', title: 'Fees & Costs (2025)' },
  { id: 'registration-process', title: 'Filing Process' },
  { id: 'documents-checklist', title: 'Docs Checklist' },
  { id: 'societies-royalty', title: 'Societies & Royalties' },
  { id: 'term-of-protection', title: 'Protection Term' },
  { id: 'infringement-remedies', title: 'Infringement & Remedies' },
  { id: 'copyright-vs-others', title: 'Copyright vs TM vs Patent' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "Is copyright registration mandatory in India?",
    answer: "No, copyright protection is technically automatic from the moment of creation. However, relying on this is risky. Without a formal **Registration Certificate**, you cannot sue for infringement in Indian courts. The certificate acts as *prima facie* evidence of ownership, shifting the burden of proof to the copycat. For commercial works (books, music, software), registration is essential."
  },
  {
    question: "How is Copyright different from Patent and Trademark?",
    answer: "**Copyright** protects the expression of an idea (literary, artistic, musical). **Trademark** protects your brand identity (name, logo, slogan). **Patent** protects a novel invention or technical process. For example, in a software product: The *Code* is Copyrighted, the *Brand Name* is Trademarked, and the *functional Algorithm* (if novel) might be Patented."
  },
  {
    question: "How much does it cost to register a copyright?",
    answer: "The government fee is very reasonable. For Literary, Dramatic, Musical, and Artistic works, it is **₹500 per work**. For Software code, it is **₹2,000 per work**. For Sound Recordings, it is **₹2,000**, and for Cinematograph Films, it is **₹5,000**. Legal/Professional fees are extra."
  },
  {
    question: "Can I copyright an idea or a concept?",
    answer: "No. Copyright law only protects the **expression** of an idea, not the idea itself. If you write a book about a 'Boy Wizard', you own the copyright to your specific story, but you don't own the idea of 'Boy Wizards'. Anyone else can write their own story about a wizard as long as they don't copy your text."
  },
  {
    question: "How long is the validity of copyright?",
    answer: "For Literary, Dramatic, Musical, and Artistic works, it lasts for the **Lifetime of the Author + 60 Years**. This ensures your grandchildren can benefit from royalties. For Films, Sound Recordings, and Government works, the protection lasts for **60 Years** from the date of publication."
  },
  {
    question: "What is the procedure for Software Copyright?",
    answer: "Software is registered as a 'Literary Work'. You must submit: (1) Form XIV, (2) Source Code (First & Last 10 pages), (3) Object Code, and (4) A brief description of the software's function. If the software is developed by an employee, the employer holds the copyright."
  },
  {
    question: "What if my work is rejected?",
    answer: "Rejections usually happen due to 'Discrepancies' (e.g., mismatched title, missing NOC). We receive a Discrepancy Letter, to which we must reply within 30 days. If the Registrar is still not satisfied, a 'Hearing' is scheduled where our attorney will argue your case."
  },
  {
    question: "Is my Indian copyright valid in the USA?",
    answer: "Yes! India is a signatory to the **Berne Convention** and the **Universal Copyright Convention (UCC)**. This means your work registered in India is automatically protected in over 175 member countries, including the USA, UK, Canada, and Australia."
  },
  {
    question: "Can I sell my copyright?",
    answer: "Yes, copyright is a transferable asset. you can **Assign** (sell ownership completely) or **License** (rent it out for specific time/territory) your rights. For example, a book author can license 'Movie Rights' to a producer while keeping 'Publishing Rights'."
  },
  {
    question: "What is IPRS and why do I need it?",
    answer: "IPRS (Indian Performing Right Society) collects royalties for composers/lyricists when their music is used in public (radio, malls, weddings). Registering your copyright first makes it much easier to register with IPRS and start earning royalties."
  }
];

export default function CopyrightPage() {
  const breadcrumbItems = [
    { label: "Services", href: "/our-services" },
    { label: "Copyright Protection", href: "/our-services/copyright-registration" },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Copyright Registration",
    "provider": {
      "@type": "Organization",
      "name": "IPR Karo"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional copyright filing and prosecution services in India for literary, artistic, musical, and software works."
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Copyright Registration in India (2025) | Fees, Process & Online Filing",
        "description": "Secure your creative work with Online Copyright Registration in India. Protect Books, Music, Software (Source Code), Movies & Art.",
        "author": { "@type": "Organization", "name": "IPR Karo" },
        "publisher": { "@type": "Organization", "name": "IPR Karo", "logo": { "@type": "ImageObject", "url": "https://www.iprkaro.com/logo.png" } }
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Copyright Registration Services",
        "image": "https://www.iprkaro.com/assets/copyright-registration-og.jpg",
        "description": "Professional copyright registration services in India.",
        "brand": { "@type": "Brand", "name": "IPR Karo" },
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "850" },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rohan Das" },
            "datePublished": "2024-03-05",
            "reviewBody": "As a software developer, I was worried about my code being stolen. IPR Karo handled the 'Source Code' submission perfectly with the 10-page rule. Smooth process!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya Singh" },
            "datePublished": "2024-02-20",
            "reviewBody": "Registered my novel's copyright through them. The team explained the 'Literary Work' rights clearly. Got my diary number the same day.",
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
               Protect Your <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>Creative Legacy</span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-300 px-2 leading-relaxed">
               Online Copyright Registration for Authors, Artists, Musicians & Developers. Secure legal ownership, prevent theft, and monetize your original work for 60+ years.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.3)] text-base md:text-lg">
                 Register Copyright Now
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
                
                <section id="why-copyright" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Register Your Copyright in India?</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    In the digital age, content theft is rampant. While the <strong>Copyright Act, 1957</strong> grants you automatic protection the moment you create an original work, enforcing that right without a registration certificate is an uphill battle. 
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    A <strong>Copyright Registration Certificate</strong> serves as <em>prima facie</em> evidence of ownership in a court of law. It shifts the burden of proof onto the infringer. Without it, you must first prove that you are the original creator, which can be legally complex and expensive. Registration is the legal bedrock upon which you can build licensing deals, sell your distribution rights, and claim royalties from aggregators (like Spotify, Netflix, or publishers).
                  </p>
                   <div className="bg-blue-50 border-l-4 border-[rgb(110,94,147)] p-4 md:p-8 my-6 md:my-8 rounded-r-lg">
                    <p className="text-base md:text-xl text-blue-900 italic leading-relaxed">
                      "A registered copyright is an intangible asset that can be valued, sold, or franchised. It turns your 'art' into 'property'."
                    </p>
                  </div>
                </section>

                <section id="eligible-works" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Comprehensive List of Eligible Works</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    The Copyright Act is broad and covers almost every form of creative expression. It is not limited to just books or music. Below is a detailed breakdown of what we can protect for you:
                  </p>
                  
                  <div className="space-y-6">
                      {/* Literary Works */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-4">
                              <div className="bg-purple-100 p-3 rounded-full mr-4">
                                  <FontAwesomeIcon icon={faBook} className="text-[rgb(110,94,147)] w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">1. Literary Works</h3>
                          </div>
                          <p className="text-gray-700 mb-3">
                              This is the most common category. It includes any work that is written or expressed in words, numbers, or other symbols. 
                          </p>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                              <li>Books, Novels, and E-books</li>
                              <li>Research Papers & Thesis</li>
                              <li>Website Content & Blogs</li>
                              <li>Movie Scripts & Screenplays</li>
                              <li>Instruction Manuals</li>
                              <li>Questionnaires & databases</li>
                          </ul>
                      </div>

                      {/* Musical Works */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-4">
                              <div className="bg-pink-100 p-3 rounded-full mr-4">
                                  <FontAwesomeIcon icon={faMusic} className="text-pink-600 w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">2. Musical Works</h3>
                          </div>
                          <p className="text-gray-700 mb-3">
                              "Musical Work" refers to the melody and harmony (the composition itself), separate from the lyrics or the recording.
                          </p>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                              <li>Musical Notations & Scores</li>
                              <li>Original Compositions</li>
                              <li>Graphic notation of music</li>
                              <li>(Note: Lyrics are protected separately as 'Literary Works')</li>
                          </ul>
                      </div>

                      {/* Artistic Works */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-4">
                              <div className="bg-orange-100 p-3 rounded-full mr-4">
                                  <FontAwesomeIcon icon={faPalette} className="text-orange-600 w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">3. Artistic Works</h3>
                          </div>
                          <p className="text-gray-700 mb-3">
                              Visual creations fall under this category. It does not need to be "fine art" to be protected; it just needs to be original.
                          </p>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                              <li>Paintings, Drawings, Sketches</li>
                              <li>Logos & Brand Mascots</li>
                              <li>Photographs (Creative/Candid)</li>
                              <li>Architectural Blueprints/Plans</li>
                              <li>Maps, Charts, and Diagrams</li>
                              <li>Sculptures & Engravings</li>
                          </ul>
                      </div>

                      {/* Cinematograph Films */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-4">
                              <div className="bg-blue-100 p-3 rounded-full mr-4">
                                  <FontAwesomeIcon icon={faFilm} className="text-blue-600 w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">4. Cinematograph Films</h3>
                          </div>
                          <p className="text-gray-700 mb-3">
                              Any work of visual recording. The producer of the film is typically considered the author/owner.
                          </p>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                              <li>Feature Films & Short Movies</li>
                              <li>Documentaries</li>
                              <li>YouTube Videos/Vlogs</li>
                              <li>Instagram Reels (if original)</li>
                              <li>Animation Films</li>
                          </ul>
                      </div>
                      
                      {/* Sound Recordings */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-4">
                              <div className="bg-green-100 p-3 rounded-full mr-4">
                                  <FontAwesomeIcon icon={faMicroscope} className="text-green-600 w-6 h-6" />
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">5. Sound Recordings</h3>
                          </div>
                          <p className="text-gray-700 mb-3">
                              The specific recorded version of a song, speech, or podcast. This is separate from the underlying music or script.
                          </p>
                          <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600 list-disc list-inside">
                              <li>Songs (Master Recording)</li>
                              <li>Podcasts & Audiobooks</li>
                              <li>Recorded Speeches</li>
                          </ul>
                      </div>
                  </div>
                </section>

                <section id="owner-rights" className="scroll-mt-24 md:scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Rights of the Copyright Owner</h2>
                    <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                        Owning a copyright is not a single right; it is a bundle of rights. Under <strong>Section 14</strong> of the Copyright Act, you get:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-[rgb(110,94,147)] mb-3">1. Economic Rights</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-2">These rights allow you to monetize your work:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                                <li><strong>Right of Reproduction:</strong> To make copies (print, digital download, CD).</li>
                                <li><strong>Right of Distribution:</strong> To sell or rent copies to the public.</li>
                                <li><strong>Right of Adaptation:</strong> To convert a book into a movie or a game.</li>
                                <li><strong>Right of Public Performance:</strong> To perform the work in public (concert, play).</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-lg text-[rgb(110,94,147)] mb-3">2. Moral Rights (Section 57)</h3>
                            <p className="text-gray-700 text-sm leading-relaxed mb-2">These rights protect the author's reputation, even if they sell the copyright!</p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                                <li><strong>Right of Paternity:</strong> The right to claim authorship (to be named).</li>
                                <li><strong>Right of Integrity:</strong> The right to prevent distortion, mutilation, or modification of the work that harms your reputation.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="software-copyright" className="scroll-mt-24 md:scroll-mt-32">
                    <div className="bg-[rgb(110,94,147)]/5 border border-[rgb(110,94,147)]/20 p-6 md:p-8 rounded-2xl">
                        <div className="flex items-start mb-4">
                             <FontAwesomeIcon icon={faLaptopCode} className="text-[rgb(110,94,147)] w-8 h-8 mr-4 mt-1" />
                             <h2 className="text-xl md:text-3xl font-bold text-gray-900">Software Protection: A Special Case</h2>
                        </div>
                        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                            In India, Computer Software is protected as a "Literary Work". This is crucial for Tech Startups and SaaS companies. Patents for software are hard to get (due to Section 3(k)), making **Copyright the primary protection** for code in India.
                        </p>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">What qualifies as "Software"?</h3>
                        <p className="text-gray-700 mb-4">
                            It includes Source Code (human-readable), Object Code (machine-readable), and even the user manuals.
                        </p>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">Do I need to reveal my entire code?</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>No.</strong> To protect your trade secrets, you are only required to submit the <strong>First 10 pages and Last 10 pages</strong> of your source code. You can redact sensitive algorithms in the middle. This is enough to establish your unique codebase without exposing your entire IP.
                        </p>
                    </div>
                </section>

                <section id="copyright-fees" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Copyright Registration Costs (2025)</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      The official government fees for copyright filing are quite affordable, making it accessible for individual creators.
                   </p>
                   
                   <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                      <table className="w-full text-left border-collapse text-sm md:text-base">
                        <thead className="bg-[#0C002B] text-white">
                           <tr>
                              <th className="p-4 border-b border-gray-700">Category of Work</th>
                              <th className="p-4 border-b border-gray-700">Govt Fee (Per Work)</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                           <tr className="bg-white hover:bg-gray-50 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">Literary, Dramatic, Musical, or Artistic Works</td>
                              <td className="p-4 text-green-600 font-bold">₹500</td>
                           </tr>
                           <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">Artistic Work used for Goods (Logos/Labels)</td>
                              <td className="p-4 text-green-600 font-bold">₹2,000</td>
                           </tr>
                           <tr className="bg-white hover:bg-gray-50 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">Software / Computer Programs</td>
                              <td className="p-4 text-green-600 font-bold">₹2,000</td>
                           </tr>
                           <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">Sound Recordings</td>
                              <td className="p-4 text-green-600 font-bold">₹2,000</td>
                           </tr>
                            <tr className="bg-white hover:bg-gray-50 transition-colors">
                              <td className="p-4 font-semibold text-gray-900">Cinematograph Films</td>
                              <td className="p-4 text-green-600 font-bold">₹5,000</td>
                           </tr>
                        </tbody>
                      </table>
                   </div>
                   <p className="text-sm text-gray-500 italic">* Fees are subject to change. Professional filing fees are separate.</p>
                </section>

                <section id="registration-process" className="scroll-mt-24 md:scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Registration Process</h2>
                  <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-8 md:space-y-12 my-8">
                     {/* Step 1 */}
                     <div className="relative">
                        <div className="absolute -left-[54px] md:-left-[60px] top-0 bg-[rgb(110,94,147)] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md">1</div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Filing Application (Form XIV)</h3>
                        <p className="text-gray-700 text-sm md:text-base">We file the application online with the Copyright Office, submitting the details of the author/owner and the nature of the work along with fees.</p>
                     </div>
                     {/* Step 2 */}
                     <div className="relative">
                        <div className="absolute -left-[54px] md:-left-[60px] top-0 bg-[rgb(110,94,147)] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md">2</div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Diary Number & Mandatory Wait</h3>
                        <p className="text-gray-700 text-sm md:text-base">A "Diary Number" is generated immediately. The law mandates a 30-day waiting period to allow anyone to file objections (if any).</p>
                     </div>
                     {/* Step 3 */}
                     <div className="relative">
                        <div className="absolute -left-[54px] md:-left-[60px] top-0 bg-[rgb(110,94,147)] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md">3</div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Scrutiny & Examination</h3>
                        <p className="text-gray-700 text-sm md:text-base">If no objections are received, the Examiner reviews the work. If there are discrepancies, a "Discrepancy Letter" is issued, which we must reply to.</p>
                     </div>
                      {/* Step 4 */}
                     <div className="relative">
                        <div className="absolute -left-[54px] md:-left-[60px] top-0 bg-[rgb(110,94,147)] text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md">4</div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Registration (ROC)</h3>
                        <p className="text-gray-700 text-sm md:text-base">Once approved, the Registrar enters the details in the Register of Copyrights (ROC) and issues the Certificate/Extract. You are now the legal owner!</p>
                     </div>
                  </div>
                </section>

                <section id="societies-royalty" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Copyright Societies & Royalties</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      As an individual artist or musician, it is impossible to track every time your song is played on the radio or in a restaurant. This is where **Copyright Societies** come in. They are collective administration bodies registered under Section 33 of the Act.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 border border-gray-200 rounded-xl">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">IPRS (Indian Performing Right Society)</h3>
                          <p className="text-gray-600 text-sm">Collects royalties for Composers, Lyricists, and Publishers when their music is performed publicly (concerts, radio, TV, restaurants).</p>
                      </div>
                      <div className="p-6 border border-gray-200 rounded-xl">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">ISRA (Indian Singers Rights Association)</h3>
                          <p className="text-gray-600 text-sm">Collects royalties specifically for Singers/Performers. If you cover a song or perform your own, ISRA ensures you get paid your fair share.</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-500 mt-4 italic">Note: Registering your work with the Copyright Office is a often a prerequisite or strong aid for registering with these societies.</p>
                </section>

                <section id="documents-checklist" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Documents Required for Filing</h2>
                   <p className="text-gray-700 mb-6">Missing a single document can lead to an objection or discrepancy. Here is the complete checklist:</p>
                   <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                      <ul className="space-y-4">
                           <li className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 mr-4 text-green-500 text-lg w-5 h-5" />
                                <div>
                                    <strong className="block text-gray-900">Name, Address & Nationality of Applicant</strong>
                                    <span className="text-sm text-gray-600">ID proofs like PAN Card and Aadhaar/Voter ID are mandatory.</span>
                                </div>
                           </li>
                           <li className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 mr-4 text-green-500 text-lg w-5 h-5" />
                                <div>
                                    <strong className="block text-gray-900">Complete Description of Work</strong>
                                    <span className="text-sm text-gray-600">Class of work, title, and language.</span>
                                </div>
                           </li>
                           <li className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 mr-4 text-green-500 text-lg w-5 h-5" />
                                <div>
                                    <strong className="block text-gray-900">No Objection Certificate (NOC)</strong>
                                    <span className="text-sm text-gray-600">Required from the author/artist if the applicant (e.g., a Production House) is different from the creator.</span>
                                </div>
                           </li>
                           <li className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 mr-4 text-green-500 text-lg w-5 h-5" />
                                <div>
                                    <strong className="block text-gray-900">Copies of the Work</strong>
                                    <span className="text-sm text-gray-600">2 Copies of work (if unpublished) or 1 Copy (if published). For code, 10+10 pages.</span>
                                </div>
                           </li>
                           <li className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                <FontAwesomeIcon icon={faCheck} className="mt-1 mr-4 text-green-500 text-lg w-5 h-5" />
                                <div>
                                    <strong className="block text-gray-900">Power of Attorney (Form XLVIII)</strong>
                                    <span className="text-sm text-gray-600">If you are hiring IPR Karo to file on your behalf.</span>
                                </div>
                           </li>
                      </ul>
                   </div>
                </section>

                <section id="term-of-protection" className="scroll-mt-24 md:scroll-mt-32">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How Long Does It Last?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                             <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-2">Lifetime + 60 Years</h3>
                             <p className="text-gray-700">For <strong>Literary, Dramatic, Musical, and Artistic Works</strong>. The 60-year count begins from the year following the author's death. This ensures your heirs benefit from your work.</p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                             <h3 className="font-bold text-xl text-[rgb(110,94,147)] mb-2">60 Years Flat</h3>
                             <p className="text-gray-700">For <strong>Cinematograph Films, Sound Recordings, Photographs,</strong> and works where the owner is a Government/Company. Calculated from the year of publication.</p>
                        </div>
                    </div>
                </section>

                <section id="infringement-remedies" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Infringement & Legal Remedies</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                      What happens if someone steals your work? The Copyright Act provides powerful tools to stop piracy and recover losses. Infringement happens when someone uses your work without permission (e.g., selling pirated books, using your music in a movie, copying your code).
                   </p>
                   
                   <div className="space-y-6">
                      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                          <h3 className="font-bold text-lg text-red-900 mb-2">1. Civil Remedies</h3>
                          <p className="text-gray-700 text-sm mb-2">You can file a suit in court for:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                              <li><strong>Interlocutory Injunction:</strong> An immediate court order stopping the infringer from further selling/distributing.</li>
                              <li><strong>Damages:</strong> Monetary compensation for the loss you suffered.</li>
                              <li><strong>Account of Profits:</strong> Claiming the profit the infringer made from your work.</li>
                              <li><strong>Anton Piller Order:</strong> Right to search the infringer's premises and seize evidence.</li>
                          </ul>
                      </div>
                      
                      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                          <h3 className="font-bold text-lg text-red-900 mb-2">2. Criminal Remedies</h3>
                          <p className="text-gray-700 text-sm mb-2">Copyright infringement is a cognizable offence. Police can arrest without warrant.</p>
                          <ul className="list-disc list-inside text-sm text-gray-600">
                              <li><strong>Imprisonment:</strong> Minimum 6 months, extending up to 3 years.</li>
                              <li><strong>Fine:</strong> Minimum ₹50,000, extending up to ₹2,00,000.</li>
                              <li><strong>Seizure:</strong> Seizure of infringing copies and the equipment used to make them.</li>
                          </ul>
                      </div>
                   </div>
                </section>

                <section id="copyright-vs-others" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Copyright vs Trademark vs Patent</h2>
                   <p className="text-gray-700 mb-6">Confused? Here is the simple difference:</p>
                   <div className="overflow-x-auto rounded-xl border border-gray-200">
                      <table className="w-full text-left border-collapse text-sm">
                         <thead className="bg-[#0C002B] text-white">
                            <tr>
                               <th className="p-3">Feature</th>
                               <th className="p-3">Copyright</th>
                               <th className="p-3">Trademark</th>
                               <th className="p-3">Patent</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                            <tr className="bg-white">
                               <td className="p-3 font-bold">Protects</td>
                               <td className="p-3">Original Creative Works (Books, Music, Code)</td>
                               <td className="p-3">Brand Identity (Logos, Names, Slogans)</td>
                               <td className="p-3">Inventions (New Products/Process)</td>
                            </tr>
                            <tr className="bg-gray-50">
                               <td className="p-3 font-bold">Requirement</td>
                               <td className="p-3">Originality</td>
                               <td className="p-3">Distinctiveness</td>
                               <td className="p-3">Novelty & Utility</td>
                            </tr>
                             <tr className="bg-white">
                               <td className="p-3 font-bold">Term</td>
                               <td className="p-3">60 Years + Lifetime</td>
                               <td className="p-3">10 Years (Renewable Forever)</td>
                               <td className="p-3">20 Years (Non-Renewable)</td>
                            </tr>
                            <tr className="bg-gray-50">
                               <td className="p-3 font-bold">Registration</td>
                               <td className="p-3">Voluntary (but recommended)</td>
                               <td className="p-3">Mandatory for ® symbol protection</td>
                               <td className="p-3">Mandatory</td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                </section>

                <section id="review-section" className="scroll-mt-24 md:scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Client Success Stories</h2>
                   <div className="grid grid-cols-1 gap-6 md:gap-8">
                     <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                       <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                         "As a software developer, I was worried about my code being stolen. IPR Karo handled the 'Source Code' submission perfectly with the 10-page rule. Smooth process!"
                       </p>
                       <div className="flex items-center pl-2 md:pl-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">R</div>
                         <div>
                           <p className="font-bold text-gray-900 text-base md:text-lg">Rohan Das</p>
                           <p className="text-xs md:text-sm text-gray-500">SaaS Founder, Bangalore</p>
                         </div>
                       </div>
                     </div>

                     <div className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-100 relative">
                       <div className="text-4xl md:text-5xl text-[rgb(110,94,147)] absolute top-4 left-4 md:top-6 md:left-6 opacity-20 serif">"</div>
                       <p className="text-gray-800 italic mb-4 md:mb-6 relative z-10 text-base md:text-lg leading-relaxed pt-4 md:pt-6 pl-2 md:pl-4">
                         "Registered my novel's copyright through them. The team explained the 'Literary Work' rights clearly. Got my diary number the same day."
                       </p>
                       <div className="flex items-center pl-2 md:pl-4">
                         <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 md:mr-4 text-base md:text-xl">A</div>
                         <div>
                           <p className="font-bold text-gray-900 text-base md:text-lg">Ananya Singh</p>
                           <p className="text-xs md:text-sm text-gray-500">Author</p>
                         </div>
                       </div>
                     </div>
                   </div>
                </section>

                {/* FAQ SECTION */}
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

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden mt-8 md:mt-12">
                   <div className="relative z-10">
                    <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Own Your Work?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
                      Don't let others profit from your hard work. File your Copyright Application today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact-us">
                        <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(110,94,147,0.4)] text-base md:text-lg w-full sm:w-auto">
                          File Copyright
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
                  <h3 className="text-xl font-bold mb-3">IP Protection Check</h3>
                  <p className="text-sm opacity-90 mb-6 leading-relaxed">
                    Not sure if you need Copyright, Patent, or Trademark? Our experts can guide you.
                  </p>
                  <Link href="/contact-us" className="block w-full">
                    <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md text-sm">
                      Get Free Advice
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
                      <Link href="/our-services/trademark-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                        <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                          <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                        </span> Trademark Registration
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/patent-registration" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Patent Filing
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services/trademark-registration#objection-handling-mastery" className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center group">
                         <span className="mr-2 text-gray-400 group-hover:text-[rgb(110,94,147)]">
                           <FontAwesomeIcon icon={faChevronRight} className="w-2 h-2" />
                         </span> Objection Reply
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
