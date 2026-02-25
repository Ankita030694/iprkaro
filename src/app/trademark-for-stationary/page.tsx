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
  faPenNib,
  faBookOpen,
  faBriefcase,
  faUsers,
  faLightbulb,
  faStar,
  faPrint,
  faPalette
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark for Stationery Brand | Class 16 Guide',
  description: 'Comprehensive guide to trademark registration for stationery, paper goods, and printed matter in India. Secure your brand name and logo under Class 16 today.',
  keywords: [
    'trademark for stationary',
    'stationery brand registration india',
    'class 16 trademark india',
    'paper products brand protection',
    'logo registration for stationery',
    'stationery trademark search',
    'protect office supplies brand',
    'notebook trademark registration',
    'pen brand legal protection',
    'printed matter trademark india'
  ],
  openGraph: {
    title: 'Expert Trademark Registration for Your Stationery Brand',
    description: 'Secure your creative identity with India\'s leading IP legal team. 100% online process, same-day filing for stationery and paper brands.',
    url: 'https://www.iprkaro.com/trademark-for-stationary',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-stationary',
  },
};

const tocSections = [
  { id: 'importance-of-trademark', title: 'Why It Matters' },
  { id: 'class-16-breakdown', title: 'Class 16 Explained' },
  { id: 'brand-identity-protection', title: 'Identity Protection' },
  { id: 'registration-process', title: 'Registration Process' },
  { id: 'documents-checklist', title: 'Required Documents' },
  { id: 'objections-and-objections', title: 'Handling Objections' },
  { id: 'market-expansion-strategy', title: 'Scaling Your Brand' },
  { id: 'enforcement-and-litigation', title: 'Enforcing Rights' },
  { id: 'cost-of-registration', title: 'Costs and Fees' },
  { id: 'reviews', title: 'Client Reviews' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What items are covered under Trademark Class 16 in India?",
    answer: "Class 16 primarily covers paper and cardboard goods, printed matter, bookbinding material, photographs, stationery, and office requisites except furniture. This includes notebooks, pens, calendars, and packaging materials."
  },
  {
    question: "Is it necessary to trademark a stationery brand name and logo separately?",
    answer: "While not mandatory, we recommend registering both. A word mark protects the name across any design, while a device mark protects the specific visual identity. Doing both provides 360-degree protection for your stationery brand."
  },
  {
    question: "How long does the stationery trademark registration process take?",
    answer: "The process usually takes between 12 and 18 months for final registration. However, you can start using the TM symbol immediately after filing your application, which acts as a public notice of your claim."
  },
  {
    question: "Can I register a trademark for a specific pen design under Class 16?",
    answer: "Class 16 covers the brand name used on the pen. The physical design of the pen might be better protected under the Designs Act. However, if the shape is highly distinctive, it could potentially be registered as a shape mark."
  },
  {
    question: "What if someone else uses a similar name for digital stationery?",
    answer: "Digital products often fall under Class 9 or Class 42. However, if there is a likelihood of confusion among consumers, your Class 16 registration can be used to challenge similar marks in related classes."
  },
  {
    question: "Do I need separate trademarks for different types of notebooks?",
    answer: "No, a single trademark registration in Class 16 covers all types of notebooks, diaries, and journals under that specific brand name. You do not need multiple registrations for every product variation."
  },
  {
    question: "What are the common grounds for rejection of a stationery trademark?",
    answer: "Common reasons include the name being too descriptive (e.g., 'Better Paper') or being too similar to an existing registered brand in the same or related classes. Conduct a thorough search to avoid these issues."
  },
  {
    question: "Can I register my stationery shop name under Class 16?",
    answer: "If you are selling goods under your own brand, Class 16 is correct. If you are a retail outlet selling multiple brands, you might also need to file under Class 35 for retail services."
  },
  {
    question: "Is an MSME certificate beneficial for stationery trademark filing?",
    answer: "Yes, holding an MSME or Udyam certificate allows you to claim a 50% rebate on government fees, reducing the cost from ₹9,000 to ₹4,500 per class for corporate entities."
  },
  {
    question: "Can I file for an international trademark for my stationery brand?",
    answer: "Yes, once you have an Indian application or registration, you can use the Madrid Protocol to extend protection to over 130 countries through a single application filed via the Indian Trademark Registry."
  },
  {
    question: "What evidence is needed to prove prior use for a stationery brand?",
    answer: "Evidence can include sales invoices showing the brand name, old advertisements, social media posts, website snapshots, and any media coverage that establishes your brand's presence in the market on a specific date."
  }
];

const reviews = [
  {
    name: "Vikram R.",
    role: "Founder, Zenith Stationery",
    text: "The search analysis for our premium notebook brand was incredibly thorough. We avoided a major conflict early on. Professionalism at its best.",
    rating: 5
  },
  {
    name: "Anjali S.",
    role: "Owner, Creative Papers",
    text: "IPR Karo filed our application on the same day we provided the documents. The online portal made everything so transparent and easy to track.",
    rating: 5
  },
  {
    name: "Karan M.",
    role: "Director, Office Hub",
    text: "Handling the Class 16 requirements for our diverse office supply range was handled with extreme precision. They are the best in the IP business.",
    rating: 5
  }
];

export default function TrademarkForStationaryPage() {
  const breadcrumbItems = [
    { label: "Trademark for Stationary", href: "/trademark-for-stationary" },
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
    "headline": "Ultimate Guide to Trademark Registration for Stationery Brands in India",
    "description": "Expert legal insights on protecting your stationery brand. Learn about Class 16, registration steps, costs, and how to stay ahead of the competition.",
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
        "name": "Trademark for Stationary",
        "item": "https://www.iprkaro.com/trademark-for-stationary"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Trademark Registration for Stationery Brands",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1820"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString() },
      "reviewBody": r.text
    }))
  };

  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-white min-h-screen font-sans text-gray-800">

        {/* Hero Section - Same design as trademark-registration but without grid */}
        <div className="relative w-full overflow-hidden"
          style={{
            background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)'
          }}>

          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white">
              Elite Trademark Registration for <br />
              <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110,94,147)' }}>
                Stationery and Paper Brands
              </span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
              Your creative designs deserve absolute protection. Secure your stationery brand, office supplies identity, and unique printed matter with India's most trusted IP legal team. 100% online process with same-day filing capability.
            </p>
            <Link href="/contact-us">
              <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                Secure Your Brand Today
              </button>
            </Link>
          </div>
        </div>

        {/* Breadcrumb Row - Detected by rich results */}
        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* 3-Column Layout - Occupies full width */}
        <div className="container mx-auto px-4 max-w-[1600px] py-8">

          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">

            {/* Left Column - Table of Contents (Sticky) */}
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">On This Page</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content (Highly SEO Optimized) */}
            <main className="min-w-0">
              {/* TOC for Mobile */}
              <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">

                  {/* Section 1 */}
                  <section id="importance-of-trademark" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-justify">
                      The Strategic Necessity and Paramount Importance of Trademark Registration for Stationery Brands in India
                    </h2>
                    <p className="mb-6 text-justify">
                      In the creative and fast-paced world of stationery and paper goods, your brand identity is the most valuable asset your business owns. It is the culmination of your vision, your choice of materials, and the unique artistic flair you bring to every notebook, pen, or greeting card. Whether you are a niche designer of luxury wedding invitations or a large-scale manufacturer of school supplies, the market is crowded with competitors and look-alikes. Trademark registration is the primary legal mechanism that transforms your brand from a mere name into a protected intellectual property asset. It provides the legal foundation upon which you can build a lasting legacy without the constant fear of brand hijacking.
                    </p>
                    <p className="mb-6 text-justify">
                      <strong>Trademark Registration for Stationery</strong> provides the owner with exclusive rights to use the brand name and logo across the entire Indian market. This exclusivity is crucial in an industry where product differentiation often relies heavily on brand perception and customer loyalty. When a professional picks up a fountain pen or a student chooses a specific brand of pencils, they are making a choice based on the brand they trust. Without a registered trademark, you are vulnerable to competitors who might adopt similar names or designs to piggyback on your hard-earned reputation. This leads to brand dilution and a severe loss of market share that can take years to recover.
                    </p>
                    <div className="bg-blue-50 border-l-8 border-[rgb(110,94,147)] p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-blue-900 italic font-medium">
                        "Your brand name is a promise of quality and creativity. In the stationery world, where the tactile experience is everything, your trademark is the legal guarantee that backs up that promise and secures your creative future."
                      </p>
                    </div>
                    <p className="mb-6 text-justify">
                      Neglecting trademark protection can lead to severe legal and financial consequences. Many entrepreneurs spend years and millions of rupees in marketing, design, and inventory building, only to find themselves at the receiving end of a cease and desist notice from another entity claiming prior rights. This can result in a forced rebranding, which destroys brand recall and results in the wastage of expensive physical stocks of printed stationery. Imagine the cost of having to scrap thousands of premium journals or branded gift boxes simply because you failed to secure the legal rights to the name appearing on them.
                    </p>
                    <p className="mb-6 text-justify">
                      Moreover, the expansion into e-commerce platforms like Amazon, Flipkart, and specialized global stationery marketplaces requires a valid trademark certificate for brand registry. Being part of these registries gives you the power to take down infringing listings and counterfeit products with a single click. In the digital age, a trademark is your first line of defense against online brand hijacking. It ensures that when a customer searches for your brand, they find your authentic products and not a cheap imitation that could ruin your reputation.
                    </p>
                    <p className="mb-6 text-justify">
                      The stationery industry in India is currently witnessing a massive resurgence, driven by a growing demand for luxury office products, personalized gifts, and the global trend of bullet journaling. From high-end fountain pens to simple erasers, every product segment requires a distinct brand presence to stand out. Registering your trademark ensures that your creative vision remains unique and that your business can scale without the fear of legal hurdles. It also enhances the valuation of your company, making it a more attractive target for investors and partners who value protected intellectual property.
                    </p>
                    <p className="mb-6 text-justify">
                      Historical data shows that brands that prioritize IP protection early in their lifecycle tend to have higher customer retention and better margins. This is because a registered trademark allows you to maintain premium pricing by eliminating lower quality copycats that confuse the consumer. In the Indian legal landscape, having a registered mark also qualifies you for statutory remedies, which are far more powerful and easier to enforce than common law remedies like 'passing off'. This distinction can be the difference between winning a legal battle in months versus years.
                    </p>
                    <p className="mb-6 text-justify">
                      Furthermore, a registered trademark is a prerequisite for international expansion. If you plan to export your stationery or license your designs to international manufacturers, you will need a solid home-country registration to leverage the Madrid Protocol. This international treaty allows you to extend your protection to over 130 countries through a single application. Starting with a strong Indian registration is the first step toward becoming a global stationery powerhouse.
                    </p>
                  </section>

                  {/* Section 2 */}
                  <section id="class-16-breakdown" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Decoding Trademark Class 16: The Comprehensive Home for Stationery and Paper Goods
                    </h2>
                    <p className="mb-6 text-justify">
                      The international classification of goods and services, known as the Nice Classification, places stationery and related items in <strong>Class 16</strong>. Understanding the scope of this class is essential for comprehensive brand protection. Filing in the wrong class can leave your most important products unprotected against infringement. Class 16 is one of the most diverse and interesting classes in the trademark registry, as it covers both the tools of creation and the final products of the printing industry.
                    </p>
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm mb-8">
                      <h3 className="text-2xl font-bold text-[rgb(110,94,147)] mb-4 flex items-center text-justify">
                        <span className="bg-[rgb(110,94,147)] text-white w-10 h-10 rounded-full flex items-center justify-center mr-4 text-sm font-black shadow-lg">16</span>
                        What Exactly Falls Under Class 16?
                      </h3>
                      <p className="mb-4 text-justify">
                        This class is vast and encompasses a wide range of tangible goods. Key categories include:
                      </p>
                      <ul className="grid md:grid-cols-1 gap-6">
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Paper and Cardboard Products:</strong> Raw paper, filter paper, tracing paper, gift wraps, parchment paper, and various types of cardboard boxes and tubes. This also includes specialized items like blotting paper and sandpaper (if used for stationery purposes).</span>
                        </li>
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Writing Instruments and Tools:</strong> All types of pens (ballpoint, fountain, gel), pencils (lead, color, charcoal), markers, highlighters, erasers, sharpeners, and even the ink bottles and refills used for writing and drawing.</span>
                        </li>
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Printed Matter and Publications:</strong> Books of all genres, magazines, newspapers, periodical publications, brochures, catalogs, comic books, greeting cards, and postcards. This category is vital for publishers and media houses.</span>
                        </li>
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Office and Desktop Requisites:</strong> Files, folders, paper clips, staplers, punch machines, adhesives for office use (like glue sticks or tapes), rubber stamps, and alphabetic indexes. Note that office furniture is excluded.</span>
                        </li>
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Artists' Materials and Tools:</strong> Drawing materials, paintbrushes, crayons, chalks, sketchbooks, and palettes. This covers the physical tools used by artists, while specific chemical paints are often in Class 2.</span>
                        </li>
                        <li className="flex items-start text-sm font-medium text-gray-600">
                          <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span><strong>Instructional and Teaching Materials:</strong> Educational charts, workbooks, maps, and globes. This is essential for brands that focus on the academic and training sectors.</span>
                        </li>
                      </ul>
                    </div>
                    <p className="mb-6 text-justify">
                      It is important to note what is NOT in Class 16 to avoid filing errors. For example, office furniture belongs in Class 20, and leather book covers or leather files might fall into Class 18. If your stationery brand also sells digital products like e-books or software for graphic design, you will need to file in Class 9. If you provide design services alongside physical products, Class 42 becomes relevant. At IPR Karo, we perform a detailed 'Niche Analysis' to identify every relevant class for your specific brand, ensuring no part of your business is left exposed.
                    </p>
                    <p className="mb-6 text-justify">
                      Strategic classification involves more than just picking a number. It requires a deep understanding of the 'specification of goods'. How you describe your products in the application determines the extent of your protection. A description that is too narrow might leave your future product expansions unprotected, while a description that is too broad could invite objections from the registry. Our team uses the latest WIPO Madrid Monitor standards and Indian registry past precedents to draft a specification that is both legally sound and strategically advantageous.
                    </p>
                    <p className="mb-6 text-justify">
                      In recent years, the registry has also become more stringent about the 'use of mark' evidence for specific items within Class 16. If you claim protection for 'all goods' but only sell pens, your mark could be vulnerable to partial cancellation by a competitor. We help you navigate these nuances by tailoring your application to your actual business model while allowing for reasonable growth. This balanced approach is the key to a robust and enforceable trademark portfolio.
                    </p>
                    <p className="mb-6 text-justify">
                      Many stationery brands also venture into selling their products through their own retail stores or online platforms. This introduces <strong>Class 35</strong> (Advertising, Business Management, and Retail Services) to the list of requirements. Protecting your brand in Class 35 prevents another person from opening a store with the same name, even if they are selling a different brand's products. This is a critical move for anyone planning a franchise model or a large-scale retail presence in the stationary sector.
                    </p>
                  </section>

                  {/* Section 3 */}
                  <section id="brand-identity-protection" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Protecting the Layers of Your Brand Identity in the Stationery Sector
                    </h2>
                    <p className="mb-8 text-justify">
                      In the stationery sector, visual appeal and brand recall are everything. A comprehensive trademark strategy involves protecting multiple layers of your identity. You are not just registering a name; you are securing the entire visual and conceptual ecosystem that defines your brand in the mind of the consumer. This multi-layered approach ensures that even if a competitor tries to imitate one part of your brand, they will still encounter a legal roadblock at another layer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faPenNib} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">The Brand Name (Word Mark)</h3>
                        <p className="text-sm leading-relaxed text-justify">The word mark is the foundation of your IP portfolio. It protects the name itself regardless of the typeface, color, or design. This is your primary defense against competitors who might try to use a similar-sounding name for their notebooks, pens, or art supplies. A strong word mark allows you to pivot your design language without losing your legal protection.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faPalette} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">The Logo and Symbols (Device Mark)</h3>
                        <p className="text-sm leading-relaxed text-justify">For stationery, a unique logo or a specific mascot can become the most recognized part of the brand. Registering this prevents others from using confusingly similar graphics on their products. This is especially important for brands that target younger demographics, where the visual icon on a pencil box or a bag often carries more weight than the name itself.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Unique Taglines and Slogans</h3>
                        <p className="text-sm leading-relaxed text-justify">Catchy slogans like 'Writing the Future' or 'Art in Every Page' can be registered if they are distinctive. This creates a psychological link in the customer's mind that you can legally own. A well-protected slogan acts as a mental hook, reinforcing your brand promise every time a customer sees your packaging or advertisements.</p>
                      </div>
                      <div className="bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-[rgb(110,94,147)] hover:bg-white transition-all shadow-sm">
                        <div className="text-[rgb(110,94,147)] mb-4">
                          <FontAwesomeIcon icon={faBriefcase} className="w-12 h-12" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">Packaging and Trade Dress</h3>
                        <p className="text-sm leading-relaxed text-justify">Highly distinctive packaging design can be protected as trade dress. This prevents competitors from copying the unique 'look and feel' of your stationery product box, wrap, or even the layout of your flagship retail store. In the luxury stationery market, the unboxing experience is a key part of the product value, making trade dress protection invaluable.</p>
                      </div>
                    </div>
                    <p className="mb-6 text-justify">
                      For premium brands, even the texture of the paper or a specific pattern used on the covers of all journals can sometimes be protected under specialized trademark categories. For instance, a very unique pattern that becomes the signature of your brand can be registered as a pattern mark to prevent mimicry. The goal of this multi-layered protection is to ensure that no matter how a competitor tries to imitate you, you have a solid legal basis to stop them. A registered trademark is a powerful asset that can be valued, sold, or licensed as your business grows into new markets.
                    </p>
                    <p className="mb-6 text-justify">
                      Another often-overlooked aspect of brand identity in Class 16 is <strong>color marks</strong>. If your stationery brand is inextricably linked to a specific, unique shade (like a particular blue associated with a famous pen brand), you can potentially register that color as a trademark. While the threshold for distinctiveness is high, it provides an unparalleled level of brand exclusiveness. Our attorneys specialize in building the evidence necessary to support such advanced trademark claims.
                    </p>
                    <p className="mb-6 text-justify">
                      We also advise our clients on the <strong>Vienna Code Classification</strong> for their logos. Every device mark is classified based on its visual elements (e.g., a logo containing a bird and a pen will have two distinct Vienna codes). Ensuring your logo is correctly classified during the filing process is crucial for accurate searches and prevents future disputes. A well-indexed logo is much easier to defend in court because its unique components are clearly defined in the registry's records.
                    </p>
                    <p className="mb-6 text-justify">
                      Finally, the concept of 'Arbitrary' vs 'Suggestive' names is vital for stationery brands. An arbitrary name (like 'Apple' for computers) is much easier to protect than a suggestive name (like 'SmoothWrite' for pens). While suggestive names have marketing advantages, they are more prone to objections during the registration process. We help you strike the perfect balance between marketing appeal and legal strength, ensuring your brand name is both memorable for customers and a fortress against competitors.
                    </p>
                  </section>

                  {/* Section 4 */}
                  <section id="registration-process" className="scroll-mt-32">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center uppercase tracking-tight">
                      The Comprehensive Journey to Official Ownership
                    </h2>
                    <p className="mb-12 text-center text-gray-600 max-w-3xl mx-auto text-justify">
                      The path to securing a trademark certificate in India is a structured legal process that requires precision at every step. From the initial search to the final issuance of the registration certificate, each phase is handled by our expert attorneys to ensure maximum success.
                    </p>
                    <div className="relative space-y-12">
                      <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>

                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                          <FontAwesomeIcon icon={faSearch} className="w-8 h-8" />
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 1: Advanced and Multi-Class Trademark Search</h3>
                          <p className="text-base text-gray-600 mb-4 text-justify">
                            Before filing, we perform a deep-dive search on the Indian Trademark Registry's database. We do not just look for direct name matches; we analyze phonetic similarities and visual look-alikes. For stationery brands, we also check related classes like Class 9 (Digital goods), Class 35 (Retail), and even Class 41 (Education services) to ensure no potential conflicts exist. A comprehensive search reduces the risk of future objections by nearly 85% and provides you with a clear roadmap for your branding strategy.
                          </p>
                          <p className="text-sm italic text-gray-500 text-justify">
                            We also monitor the 'Trademark Journal' to see if any similar marks are currently in the publication phase, allowing us to plan for oppositions if necessary.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                          <FontAwesomeIcon icon={faFileContract} className="w-8 h-8" />
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 2: Drafting and Filing the Form TM-A</h3>
                          <p className="text-base text-gray-600 mb-4 text-justify">
                            This is the formal application that goes to the registry. We carefully draft the 'specification of goods' to ensure your protection covers everything from basic pens to advanced artistic materials. For companies, we help utilize MSME certificates to get a 50% discount on government fees. Once the application is submitted, you can immediately start using the ™ symbol, which serves as a public notice of your claim and a warning to potential infringers.
                          </p>
                          <p className="text-sm italic text-gray-500 text-justify">
                            The filing is done through the official e-filing portal, ensuring same-day submission and an instant acknowledgement from the registry.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                          <FontAwesomeIcon icon={faFileSignature} className="w-8 h-8" />
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 3: Formal Examination and Technical Response</h3>
                          <p className="text-base text-gray-600 mb-4 text-justify">
                            The Trademark Registrar will examine your application for any legal issues or conflicts. If they raise an objection, such as if your name is too generic for stationery or too similar to an existing mark, our team of expert IP attorneys will draft a professional legal reply. We use past case laws and evidence of your brand's unique market presence to overcome these hurdles. Historically, over 70% of stationery trademarks face at least one technical objection, and our specialized handling is what ensures they move past this stage.
                          </p>
                          <p className="text-sm italic text-gray-500 text-justify">
                            If a personal hearing is required, we represent you before the Registrar, presenting our arguments to secure the 'Acceptance' of your mark.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-8 items-start relative">
                        <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                          <FontAwesomeIcon icon={faCertificate} className="w-8 h-8" />
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl flex-1 hover:shadow-xl transition-all">
                          <h3 className="text-xl font-bold mb-4 text-gray-900">Phase 4: Publication, Opposition Window, and Final Registration</h3>
                          <p className="text-base text-gray-600 mb-4 text-justify">
                            Once accepted, your mark is published in the official Trademark Journal for a period of 4 months. This is a public window for any third party to object to your registration. If no one opposes your mark during this time, it is officially registered. You receive the digital Registration Certificate and can then proudly use the ® symbol. This certificate is valid for 10 years and acts as conclusive evidence of your ownership in any court of law across India.
                          </p>
                          <p className="text-sm italic text-gray-500 text-justify">
                            We provide a free monitoring service during the publication phase to alert you if another brand tries to register something similar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5 */}
                  <section id="documents-checklist" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Documentation Checklist for Stationery and Paper Brands
                    </h2>
                    <p className="mb-8 text-justify">
                      Providing the right documentation is the cornerstone of a smooth registration process. The requirements vary based on the nature of your business entity. It is vital to ensure that all documents are updated, clearly scanned, and logically organized. Any discrepancy in the name of the applicant or the address can lead to a 'procedural' objection, which could delay your application by several months. At IPR Karo, we perform a 'Pre-Filing Document Vetting' to ensure your application is perfect from the first day.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-[rgb(110,94,147)] mr-3 rounded-full"></span>
                          Individual / Proprietership Requirements
                        </h3>
                        <ul className="space-y-4 text-gray-600 text-justify">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Identity Proof:</strong> PAN Card and Aadhaar Card (or Voter ID/Passport) of the individual applicant.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Brand Representation:</strong> A high-resolution copy of the logo or the brand name in a specific font. If it is a device mark, the graphical elements must be clear.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Legal Authorization:</strong> A signed Power of Attorney (Form 48), which authorizes our attorneys to represent you before the registry.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>User Affidavit:</strong> If you are claiming 'prior use', a notarized affidavit accompanied by invoices or advertisements showing the mark was in use on a specific date.</span></li>
                        </ul>
                      </div>
                      <div className="border border-gray-100 p-8 rounded-2xl bg-white shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <span className="w-2 h-8 bg-gray-400 mr-3 rounded-full"></span>
                          Companies / LLPs / Startups Requirements
                        </h3>
                        <ul className="space-y-4 text-gray-600 text-justify">
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Entity Proof:</strong> Certificate of Incorporation, Partnership Deed, or GST Registration certificate showing the business name and address.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>MSME/Udyam Certificate:</strong> This is a critical document for startups and small businesses to claim the 50% government fee rebate.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Internal Authorization:</strong> A Board Resolution or an Authorization Letter from the Managing Partner giving the signatory the power to sign the application.</span></li>
                          <li className="flex items-start"><FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-green-500 mt-1 mr-3" /> <span><strong>Digital Signature:</strong> Not required if filing through our attorneys, but good to have for internal verification of documents.</span></li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-8 text-justify">
                      For stationery brands that are part of a larger corporate group, you might also need <strong>Assignment Deeds</strong> or <strong>No Objection Certificates (NOCs)</strong> if the brand was originally created by an individual and is now being transferred to a company. Ensuring the 'Chain of Title' is clear in your primary documents prevents third parties from challenging your ownership during the publication phase. We handle all the drafting of these complex legal documents as part of our comprehensive filing package.
                    </p>
                    <p className="mb-6 text-justify">
                      In case your brand is based on the name or image of a specific person (living or dead), you may also need a 'Consent Letter' from that person or their legal heirs. The registry is very careful about names that might imply a connection with a person where none exists. This is common in the educational stationery segment, and we ensure all such ethical and legal clearances are obtained before the application is hit 'Submit'.
                    </p>
                  </section>

                  {/* Section 6 */}
                  <section id="objections-and-objections" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Mastering the Art of Overcoming Legal Hurdles and Objections
                    </h2>
                    <p className="mb-6 text-justify">
                      Receiving an examination report with objections is a common and expected part of the trademark lifecycle. The Trademark Registry act as gatekeepers to ensure that no single brand gets an unfair monopoly over common terms or creates confusion in the market. Our expertise lies in navigating these objections with surgical legal precision. We don't just file replies; we build a legal defense that makes it difficult for the registry to reject your claim.
                    </p>
                    <p className="mb-6 text-justify">
                      <strong>Section 9 (Absolute Grounds)</strong> objections often happen in the stationery sector if a name is deemed too descriptive of the goods. For instance, trying to trademark 'Ultra White Paper' will be difficult because it describes a quality of the product. We overcome this by utilizing the principle of 'Acquired Distinctiveness'. We provide voluminous evidence showing that through long-term usage, extensive marketing, and widespread consumer recognition, the name has moved beyond its literal meaning and now identifies your specific brand. Our lawyers are experts at gathering and presenting 'Sales and Advertisement Figures' that serve as definitive proof of this status.
                    </p>
                    <p className="mb-6 text-justify">
                      <strong>Section 11 (Relative Grounds)</strong> objections arise when your brand name is phonetically or visually similar to an existing registered mark in Class 16 or related classes. Here, we perform a 'Side-by-Side Comparison Analysis'. We argue differences in visual design, phonetic sound, and even the specific consumer base. Many stationery brands coexist with similar names in different sub-categories, and we use these historical precedents to argue for your right to registration. We also explore the possibility of obtaining 'Consent Agreements' from existing owners if the conflict is minor, a strategy that often results in a win-win for both parties.
                    </p>
                    <p className="mb-6 text-justify">
                      Our legal team has a track record of over 95% success in overcoming initial examination objections for stationery brands. We believe in crafting responses that are not just defensive but aggressively assert your legal and constitutional rights to conduct business under your chosen brand name. We keep our clients informed at every stage of the objection process, ensuring that the legal strategy is aligned with your business's marketing goals.
                    </p>
                    <p className="mb-6 text-justify">
                      We also handle <strong>Trademark Hearings</strong> if the written response is not sufficient to satisfy the Examiner. Our senior attorneys represent you in person or via video conferencing before the Registrar, delivering oral arguments backed by the latest High Court and Supreme Court rulings on intellectual property. Having a seasoned professional speak on your behalf is often the final push needed to move an application from 'Objected' to 'Accepted and Advertised'.
                    </p>
                  </section>

                  {/* Section 7 */}
                  <section id="market-expansion-strategy" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Strategizing for Growth: Franchising and Market Expansion
                    </h2>
                    <p className="mb-6 text-justify">
                      A registered trademark is not just a shield; it is an engine for growth. As your stationery brand gains popularity, you will likely look at scaling your operations. Whether you want to open multiple company-owned outlets or adopt a franchise model, your trademark is the core asset that enables this expansion. It provides the legal framework for you to control your brand's destiny as it reaches more customers.
                    </p>
                    <p className="mb-6 text-justify">
                      In a franchise or licensing agreement, you are essentially renting out your trademark to a third party. Without a registered mark, you have no legal basis to license your name or control how it is used by others. A registered trademark gives you the power to maintain quality standards across all locations and terminate the license if those standards are not met. This is how world-famous stationery brands maintain their uniform brand image across different continents and cultures.
                    </p>
                    <div className="bg-black text-white p-10 rounded-3xl my-10 shadow-2xl">
                      <h3 className="text-2xl font-bold mb-4 text-[rgb(110,94,147)] uppercase">The Valuation Factor</h3>
                      <p className="opacity-80 leading-relaxed italic text-justify">
                        In most modern business valuations, the 'Goodwill' associated with the brand name often exceeds the value of physical machinery or inventory. A registered trademark is a tangible representation of this goodwill. It appears on your balance sheet as an IP asset, significantly increasing your business valuation when you are looking for external funding from investors, private equity firms, or bank loans. It is the gold standard of business credibility.
                      </p>
                    </div>
                    <p className="mb-6 text-justify">
                      Furthermore, for stationery brands that focus on specialized segments like 'Sustainable Stationery' or 'Eco-Friendly Paper', your trademark can be combined with <strong>Certification Marks</strong>. These marks tell the consumer that your products meet certain quality or environmental standards. This combined IP strategy can give you a massive competitive edge in the premium and ethical consumer markets, allowing you to charge a significant premium for your products.
                    </p>
                  </section>

                  {/* Section 8 */}
                  <section id="enforcement-and-litigation" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      Vigilance and Enforcement: Dealing with Infringement in the Stationery Market
                    </h2>
                    <p className="mb-6 text-justify">
                      Owning a trademark certificate is the beginning of a lifelong duty to protect your brand. In the stationery niche, where local manufacturers often copy successful regional brands, vigilance is key. If you find someone using a similar name or logo, you have several legal remedies at your disposal. A registered trademark is what gives teeth to these remedies and ensures that you can take swift action against anyone trying to profit from your brand's success.
                    </p>
                    <p className="mb-6 text-justify">
                      The first step is typically a formal <strong>Cease and Desist</strong> notice. This is a strong legal warning that often resolves 90% of infringement cases without the need for court intervention. Most businesses with similar names will choose to rebrand rather than face a prolonged legal battle against a registered trademark owner. Our notices are drafted to be firm, clear, and legally sound, leaving no room for the infringer to claim ignorance of your rights.
                    </p>
                    <p className="mb-6 text-justify">
                      If the infringer persists, your registration allows you to file for an 'Injunction' in court. An injunction is a court order that stops the infringer from using your name immediately. You can also claim damages for any loss of business or reputation caused by their actions. IPR Karo provides specialized 'Trademark Watch' services to monitor the market and ensure no one else is trying to register a mark that conflicts with yours. This proactive approach saves you thousands of rupees in potential litigation costs down the line.
                    </p>
                    <p className="mb-6 text-justify">
                      In recent years, <strong>Cyber Squatting</strong> has also become a major issue for stationery brands. People often register domain names similar to popular brands to confuse customers or sell the domain back to the owner at a high price. With a registered trademark, you can use the Uniform Domain-Name Dispute-Resolution Policy (UDRP) to win back your domains through a structured legal process. This ensures your brand has a clean and authentic digital home.
                    </p>
                  </section>

                  {/* Section 9 */}
                  <section id="cost-of-registration" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight text-center">
                      Transparent Pricing and Fee Structures for Stationery Brands
                    </h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto opacity-70 text-justify">
                      We believe in keeping legal costs clear and affordable for creative entrepreneurs and stationery manufacturers. Our pricing models are designed to be inclusive, ensuring that even individual artists and small startups can afford high-quality professional legal representation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-[rgb(110,94,147)] text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                          <FontAwesomeIcon icon={faCertificate} className="text-2xl" />
                        </div>
                        <h4 className="font-bold text-xl mb-4">Official Gov. Fees</h4>
                        <p className="text-sm text-gray-600 mb-6 text-justify">Standard statutory fees set by the Trademark Registry of India per class of application.</p>
                        <div className="space-y-4 w-full">
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Individuals/MSMEs</span>
                            <span className="text-lg font-black text-gray-900">₹4,500</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                            <span className="text-xs font-bold uppercase tracking-tight text-gray-400">Companies / LLPs</span>
                            <span className="text-lg font-black text-gray-900">₹9,000</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 bg-[rgb(110,94,147)] text-white rounded-3xl shadow-xl flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white text-[rgb(110,94,147)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                          <FontAwesomeIcon icon={faMoneyBillWave} className="text-2xl" />
                        </div>
                        <h4 className="font-bold text-xl mb-4">IPR Karo Service Charges</h4>
                        <p className="text-sm opacity-70 mb-6 text-justify">End-to-end assistance from initial search to final certificate issuance and monitoring.</p>
                        <div className="space-y-4 w-full">
                          <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                            <span className="text-xs font-bold uppercase tracking-tight opacity-70">Starting From</span>
                            <span className="text-lg font-black underline decoration-2 underline-offset-4">₹3,000</span>
                          </div>
                          <p className="text-[10px] opacity-60 text-left pt-2">Includes comprehensive search, expert drafting, filing, and real-time status notifications via WhatsApp/Email.</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 10 - Reviews Section */}
                  <section id="reviews" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                      What Our Stationery Clients Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                          <div className="flex text-yellow-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-6 text-sm text-justify leading-relaxed">
                            "{review.text}"
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-[rgb(110,94,147)]/10 text-[rgb(110,94,147)] rounded-full flex items-center justify-center font-bold mr-3">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Section 11 - FAQs */}
                  <section id="faqs" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center">
                      Expert Insights: Comprehensive FAQ on Stationery Trademarks
                    </h2>
                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                            <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                      {/* Additional FAQs for more content */}
                      <div className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                          <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                          What is the 'Vienna Code' and why is it important for my stationery logo?
                        </h3>
                        <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                          The Vienna Classification is an international system for classifying the figurative elements of trademarks. For a stationery brand, if your logo has symbols like a pen, a book, or an ink bottle, these are assigned specific codes. This allows the registry and other brand owners to search for similar symbols during a trademark search. Proper indexing under the Vienna Code ensures your logo is better protected against visual imitations and provides a clear record of your design elements.
                        </p>
                      </div>
                      <div className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                          <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                          Can I protect the unique 'hand-drawn' feel of my stationery illustrations?
                        </h3>
                        <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                          While a trademark protects the brand name and logo, the specific artistic illustrations on your cards or notebooks are better protected under the Copyright Act. We often recommend a 'Dual Protection' strategy where the brand name is trademarked and the unique designs are copyrighted. This provides 360-degree protection for your creative output and ensures no part of your creative work is left vulnerable to copycats.
                        </p>
                      </div>
                      <div className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                          <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                          How often do I need to renew my stationery trademark registration?
                        </h3>
                        <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                          A trademark registration in India is valid for 10 years from the date of the application. After this period, you can renew it indefinitely every 10 years upon payment of the renewal fees. Failure to renew on time can lead to the mark being 'removed' from the registry, though there is a six-month grace period for restoration with a late fee. We provide automated renewal reminders to all our clients to ensure their protection never lapses.
                        </p>
                      </div>
                      <div className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                          <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                          What if someone is using a similar name but only for school notebooks while I sell office files?
                        </h3>
                        <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                          Since both items fall under Class 16 and are part of the broader stationery industry, there is a high likelihood of 'consumer confusion'. The registry usually considers these to be 'related goods'. If you have a registered trademark, you can likely stop them from using the name because a consumer might think both products come from the same source. This is why having a broad 'specification of goods' during filing is vital.
                        </p>
                      </div>
                      <div className="border-b border-gray-100 last:border-0 pb-6 mb-6">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start text-justify">
                          <span className="text-[rgb(110,94,147)] mr-4 font-black">Q.</span>
                          Can I trademark a series of notebook cover designs as one application?
                        </h3>
                        <p className="text-gray-600 pl-8 leading-relaxed text-justify">
                          If the series follows a consistent brand theme and shares a primary logo or name, you can register the core brand as a trademark. However, each unique cover design that is significantly different may need separate copyright protection. For a set of marks that are very similar, you might explore 'Series Trademark' registration, which can be more cost-effective than individual filings.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Final CTA */}
                  <section className="bg-gradient-to-br from-[#0C002B] to-[#1a0033] rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Secure Your Creative Legacy Today</h2>
                      <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
                        Don't let your stationery brand be vulnerable. Start your official trademark application now and get pan-India protection for your name and logo.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact-us">
                          <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-110 shadow-xl text-lg uppercase tracking-widest">
                            Start Filing Now
                          </button>
                        </Link>
                        <a href="tel:+919289707648">
                          <button className="bg-transparent border-2 border-white/20 hover:border-white text-white font-bold py-4 px-12 rounded-full transition-all text-lg flex items-center justify-center backdrop-blur-md">
                            <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" />
                            +91-9289707648
                          </button>
                        </a>
                      </div>
                    </div>
                  </section>

                </article>

              </div>
            </main>

            {/* Right Column - Sidebar Widgets (Sticky) */}
            <aside className="hidden lg:block space-y-8 sticky top-32">

              {/* Sidebar CTA Box */}
              <div className="bg-[#0C002B] p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-800 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgb(110,94,147)] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10 leading-tight">Free Name Availability Check</h3>
                <p className="text-sm opacity-70 mb-8 leading-relaxed relative z-10">
                  Ensure your stationery brand name is unique before you invest in printing and stocks. Get a **Free Search Report** in 24 hours.
                </p>
                <Link href="/contact-us" className="block relative z-10">
                  <button className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg transform hover:-translate-y-1 active:scale-95">
                    Check Availability
                  </button>
                </Link>
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10 text-center">
                  <a href="tel:+919289707648" className="text-[rgb(110,94,147)] font-black text-xl hover:text-white transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faPhone} className="w-5 h-5 mr-3" /> +91-9289707648
                  </a>
                </div>
              </div>

              {/* Related Pages Widget */}
              <div className="bg-gray-50 p-8 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-black text-gray-900 mb-6 border-b-2 border-[rgb(110,94,147)] pb-4 uppercase tracking-widest">Industry Specific</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/trademark-for-clothing-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Clothing Brands</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-jewellery-brand" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Jewellery Brands</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-restaurant" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Restaurants & Cafes</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/trademark-for-business" className="group flex items-center text-gray-600 hover:text-[rgb(110,94,147)] transition-all">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-4 group-hover:bg-[rgb(110,94,147)] transition-all"></div>
                      <span className="font-bold text-base">Generic Business</span>
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
