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
  faSignal,
  faMobileAlt,
  faStar,
  faServer,
  faBroadcastTower,
  faPhone,
  faSatellite,
  faNetworkWired,
  faShieldAlt,
  faGlobe,
  faSatelliteDish,
  faMicrochip,
  faBroadcastTower as faTower,
  faCloud,
  faUserShield,
  faGavel,
  faRocket,
  faUniversalAccess,
  faBuilding,
  faAward
} from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Trademark for Telecom Services | Class 38 Registration',
  description: 'Exhaustive guide to trademark registration for telecommunications. Secure 5G, Satellite, ISP, and Streaming identities. Expert Class 38 legal filing in India.',
  keywords: [
    'trademark for telecommunication services',
    'class 38 trademark registration india',
    'telecom brand protection',
    'isp brand registration',
    '5g network trademark',
    'broadcasting trademark india',
    'satellite communication trademark',
    'trademark for streaming services',
    'voip trademark registration',
    'iot connectivity trademark'
  ],
  openGraph: {
    title: 'Telecommunication Brand Security | Expert Class 38 Registration',
    description: 'Protect your network frequency. Secure your ISP, Mobile Network, or Streaming brand with India\'s elite IP legal team.',
    url: 'https://www.iprkaro.com/trademark-for-telecommunication-services',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.iprkaro.com/trademark-for-telecommunication-services',
  },
};

const tocSections = [
  { id: 'importance-of-telecom-trademark', title: 'The Network Mandate' },
  { id: 'class-38-explained', title: 'Class 38 & Multi-Class' },
  { id: 'isp-licensing-compliance', title: 'ISP & DOT Compliance' },
  { id: '5g-6g-ecosystem-ip', title: '5G/6G Brand Ecosystems' },
  { id: 'satellite-broadband-legal', title: 'Satellite & LEO IP' },
  { id: 'iot-m2m-connectivity', title: 'IoT & M2M Branding' },
  { id: 'vno-branding-strategy', title: 'VNO White-Labeling' },
  { id: 'ott-broadcasting-convergence', title: 'OTT & Streaming' },
  { id: 'safe-harbor-isp-liability', title: 'Safe-Harbor Liability' },
  { id: 'tower-infrastructure-branding', title: 'Infrastructure & Towers' },
  { id: 'spectrum-leasing-ip', title: 'Spectrum Assets' },
  { id: 'registration-process', title: 'Registration Flow' },
  { id: 'documents-required', title: 'Document Checklist' },
  { id: 'handling-telecom-objections', title: 'Technical Objections' },
  { id: 'case-studies-telecom', title: 'Disputes in Telecom' },
  { id: 'international-telecom-trademark', title: 'Madrid Protocol' },
  { id: 'reviews-section', title: 'Industry Reviews' },
  { id: 'faqs', title: 'FAQs' },
];

const faqs = [
  {
    question: "What is the primary trademark class for telecommunication services?",
    answer: "Class 38 is the primary category. It encompasses mobile networks, ISPs, fiber optics, satellite communication, broadcasting, and any service that enables data transmission between two or more parties. It is essential to distinguish this from the hardware (Class 9) or the content being transmitted (Class 41)."
  },
  {
    question: "Do I need a trademark for a Private 5G Network?",
    answer: "Yes. While a private network might be internal, the brand name used to identify the connectivity service (especially in industrial IoT settings) is a valuable corporate asset. It prevents internal 'imitation' or brand dilution in group companies and is critical for future technology licensing."
  },
  {
    question: "How does the DOT license interact with a trademark?",
    answer: "A DOT (Department of Telecommunications) license gives you the regulatory 'right to operate'. A trademark gives you the commercial 'right to the name'. Having a DOT license does NOT grant you trademark rights; you must secure your brand through the Trademark Registry to prevent national-level infringement."
  },
  {
    question: "Can I trademark a specific notification sound for my messaging app?",
    answer: "Yes, Sound Marks are registrable in India. You must provide a graphical representation (musical notation or spectrogram) and an audio file to prove the sound uniquely identifies your brand as the source of the communication."
  },
  {
    question: "What is a 'Descriptive' objection in telecom?",
    answer: "The Registry often objects to names like 'Fiber Connect' or 'Speed Net' because they describe the service. We overcome this by proving 'Acquired Distinctiveness' through evidence of extensive usage, subscriber base, and brand recognition."
  },
  {
    question: "How do I protect my brand globally?",
    answer: "Through the Madrid Protocol. Once you file in India, you can extend your protection to 130+ countries through a single application, ensuring your satellite or VOIP brand is safe in every global market where your signal reaches."
  },
  {
    question: "Do VNOs (Virtual Network Operators) need trademarks?",
    answer: "Crucially, yes. Since VNOs do not own the physical spectrum or towers, their 'Brand' is their only true asset. Protecting it is the only way to build enterprise value for future mergers or acquisitions."
  },
  {
    question: "What is 'Likelihood of Confusion' in a telecom search?",
    answer: "It occurs when a new brand is phonetically or visually similar to an existing one (e.g., 'Airtel' vs 'AirTalk'). Because telecom services are high-frequency and essential, the Registry is extremely strict about preventing consumer confusion."
  },
  {
    question: "Can a broadband SSID be trademarked?",
    answer: "If the SSID is used to brand a commercial Wi-Fi service (like 'Google Fiber' or 'Boingo'), yes. It prevents malicious actors from launching fake hotspots under your brand name to phish user data."
  },
  {
    question: "How do I protect my subsea cable network brand?",
    answer: "Subsea brands require Class 38 protection. Since these cables bridge international waters, the brand name of the consortium or the operator must be registered in all terrestrial landing points (countries) to ensure legal standing for maintenance and repair contracts."
  },
  {
    question: "Can I trademark '5G' or '6G'?",
    answer: "No, these are industry standards. However, you can trademark names like 'Aura-6G' or 'Zenith-5G' where a unique, arbitrary prefix is used in conjunction with the technology identifier."
  },
  {
    question: "Does a trademark protect my network encryption algorithm?",
    answer: "No. Encryption algorithms are technical inventions and are protected via Patents. The *name* you give to that encryption solution (e.g., 'SafeCloud-Shield') is what the trademark protects."
  },
  {
    question: "What happens if I forget to renew my telecom trademark?",
    answer: "Your mark will expire after 10 years. In the telecom sector, an expired mark is a massive risk, as competitors or squatters can immediately file for the same name, potentially causing a shutdown of your marketing."
  },
  {
    question: "Can I register a logo without a word mark?",
    answer: "Yes, this is a Device Mark. In telecom, where app icons and signal indicators are highly visible, registering the logo ensures that no one copies the 'look and feel' of your interface."
  },
  {
    question: "How do I handle a 'Cease and Desist' from another ISP?",
    answer: "First, verify their trademark seniority. If their filing date is after your proven start date (Prior User), you have a strong defense. If they are senior, a rebranding or coexistence agreement may be necessary."
  },
  {
    question: "What is an 'Associated Mark' in telecom?",
    answer: "If you have 'ConnectFiber' and 'ConnectMobile', the Registry may require them to be registered as 'Associated Marks' because they share a common house brand and class, preventing you from selling one without the other."
  },
  {
    question: "Is Class 38 enough for a streaming platform?",
    answer: "Nearly. You need Class 38 for the transmission (streaming) and Class 41 for the entertainment (content). Most successful platforms file in both to ensure complete IP control."
  },
  {
    question: "Can I trademark the 'color' of my fiber network?",
    answer: "Color Marks are possible but difficult. You must prove that consumers exclusively associate a specific shade (like T-Mobile's Magenta) with your service through decades of consistent use."
  },
  {
    question: "What documents are needed for VNO trademark filing?",
    answer: "Standard company documents (COI, Board Res), plus evidence of your VNO license from the DOT if you are claiming 'Prior Use' from the date of licensing."
  },
  {
    question: "How long does the registration process take?",
    answer: "With IPR Karo, the initial filing is done in 24 hours. The full certificate usually takes 6-12 months, depending on whether there are any Registry objections or third-party oppositions."
  },
  {
    question: "Can I trademark a drone-based connectivity brand?",
    answer: "Yes. Drone-delivered internet is a Class 38 service. If you also manufacture the drones, you must additionally file in Class 12 for the aerial vehicles."
  },
  {
    question: "What is the penalty for using a trademarked telecom name?",
    answer: "Penalties include permanent injunctions, destruction of infringing marketing materials, and significant monetary damages for lost revenue and brand dilution."
  },
  {
    question: "Does MSME registration help in trademark fees?",
    answer: "Yes. MSME and Startup registered entities get a 50% discount on government fees, reducing the fee from ₹9,000 to ₹4,500 per class."
  },
  {
    question: "Can I trademark a satellite constellation name?",
    answer: "Yes. Names of constellations (like 'Starlink') are high-value trademarks. We recommend filing these as soon as the project is announced to prevent squatting by bad-faith actors."
  },
  {
    question: "What is the ' Madrid Protocol' cost?",
    answer: "It varies based on the number of countries and classes. It includes a basic fee, a fee for each country, and a fee for each class beyond the first. We provide a customized quote for global expansion."
  }
];

const reviews = [
  {
    name: "Amit Bhargav",
    role: "CTO, OrbitLink Satellites",
    text: "Securing our orbital communication brand in Class 38 was a complex task given our global reach. IPR Karo's strategy on Madrid Protocol was flawlessly executed, protecting our constellation data in 15+ countries simultaneously.",
    rating: 5
  },
  {
    name: "Sarah Fernandes",
    role: "Founder, 5G Stream Networks",
    text: "Defending our name shouldn't be harder than building the network. They helped us register our 5G sub-brands and handled the DOT compliance queries with extreme technical depth. Their understanding of network slicing IP is top-tier.",
    rating: 5
  },
  {
    name: "Kabir Singh",
    role: "CEO, RuralConnect ISP",
    text: "In the local ISP market, brand impersonation is frequent. IPR Karo gave us the legal teeth to stop three different competitors from using our logo and SSID within a month. Their enforcement strategy is aggressive and effective.",
    rating: 5
  },
  {
    name: "Sunita Reddy",
    role: "Founder, SecureTalk VOIP",
    text: "Our VOIP brand faced a difficult phonetic objection. The legal team's reply cited strong precedents in telecom law that secured our mark. They understand the nuances of Class 38 better than any other firm in India.",
    rating: 5
  },
  {
    name: "Arjun Malhotra",
    role: "Director, Infrastructure Towers Ltd",
    text: "Professional and fast. They managed our multi-class filings for tower hardware (Class 9) and infrastructure services (Class 38) with clinical precision. Essential for any B2B telecom infrastructure company.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "Legal Head, LEO StarCom",
    text: "As a global satellite broadband provider, our brand protection had to be as fast as our LEO constellation. Their Madrid Protocol strategy saved us months of paperwork and secured our name in 130 countries seamlessly.",
    rating: 5
  },
  {
    name: "Rajesh Varma",
    role: "Founder, Quantum Fiber",
    text: "Tripling our network footprint meant we needed a bulletproof IP strategy. IPR Karo helped us navigate the intersection of DOT licenses and Trademark law, ensuring our national expansion was legally secured.",
    rating: 5
  },
  {
    name: "Vikram Mehta",
    role: "CTO, Industrial IoT Solutions",
    text: "Trademarking our M2M connectivity protocols was a novel concept for us, but IPR Karo understood the technical nuances and provided a protection strategy that covers every virtualized endpoint in our stack.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "CEO, VNO Mobile",
    text: "As a VNO, our brand is our only asset. IPR Karo helped us build a brand fortress that allowed us to secure our second round of funding with ease. Investors were impressed by the depth of our IP portfolio.",
    rating: 5
  },
  {
    name: "David Goldberg",
    role: "MD, StreamLogic CDN",
    text: "Protecting our Content Delivery Network brand was vital for our B2B reputation. Their team secured our Class 42 and Class 38 marks, ensuring our 'Uptime' reputation is legally enforceable.",
    rating: 5
  },
  {
    name: "Sanjay Gupta",
    role: "Head of IP, MegaTel Carriers",
    text: "Handling the IP portfolio for a Tier-1 carrier is a nightmare without the right partners. IPR Karo's automated monitoring for telecom brand infringements has saved us millions in lost subscriber revenue.",
    rating: 5
  },
  {
    name: "Meera Nair",
    role: "Founder, FiberCity FTTH",
    text: "For a regional ISP, the cost of rebranding is a death sentence. They secured our name across all DOT circles, giving us the peace of mind to lay miles of fiber without fear of litigation.",
    rating: 5
  },
  {
    name: "Tom Harrison",
    role: "Legal Advisor, Global Subsea Cables",
    text: "Branding subsea landing stations requires international coordination. Their team's expertise in global trademark law and the Madrid system is indispensable for large-scale maritime telecom projects.",
    rating: 5
  },
  {
    name: "Anjali Rao",
    role: "CTO, AeroMesh Drones",
    text: "Securing the brand for our drone-delivered internet was a multi-class challenge. They handled Class 9, 12, and 38 with ease, providing a 360-degree protection shield for our innovation.",
    rating: 5
  },
  {
    name: "Robert Chen",
    role: "Director, SmartProtocol IoT",
    text: "In the world of IIoT, protocol confusion is a huge risk. Our trademarked transmission standards now serve as a stamp of reliability for our manufacturing partners. Excellent technical legal work.",
    rating: 5
  }
];

export default function TrademarkTelecommunicationServicesPage() {
  const breadcrumbItems = [
    { label: "Our Services", href: "/our-services" },
    { label: "Trademark for Telecommunications", href: "/trademark-for-telecommunication-services" },
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
        "headline": "Full-Spectrum Guide to Telecommunication Trademarks in India",
        "author": { "@type": "Organization", "name": "IPR Karo" }
      })}} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Trademark Registration for Telecommunication Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "3250"
        },
        "review": reviews.map(review => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": review.name },
          "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString() },
          "reviewBody": review.text
        }))
      })}} />

      <div className="bg-white min-h-screen font-sans text-gray-800">
        <div className="relative w-full overflow-hidden" 
             style={{ background: 'linear-gradient(to bottom, #0C002B 0%, #160049 45%, #6E5E93 80%, #E8E8E8 100%)' }}>
          <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10 text-center">
             <h1 className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight mt-20 md:mt-10 text-white tracking-tight">
               Secure Your Signal: <br />
               <span className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#8A7AB5] to-[#D1C4E9]" style={{ WebkitTextFillColor: 'rgb(110, 94, 147)' }}>
                 Exhaustive Brand Protection for Telecom
               </span>
             </h1>
             <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-300 font-medium leading-relaxed px-2">
               In the age of 5G, Satellite, and Fiber, your brand name is your most valuable frequency. Protect your mobile network, ISP, or streaming service with India's most technical IP legal team.
             </p>
             <Link href="/contact-us">
               <button className="bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(110,94,147,0.4)] text-base md:text-xl uppercase tracking-wider">
                 Connect to Brand Security
               </button>
             </Link>
          </div>
        </div>

        <div className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container mx-auto px-4 max-w-[1400px]">
             <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start">
            <aside className="hidden lg:block sticky top-32">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-gray-900 font-bold text-lg mb-6 border-l-4 border-[rgb(110,94,147)] pl-3">Technical Guide</h4>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            <main className="min-w-0">
               <div className="lg:hidden mb-6 sticky top-24 z-20">
                <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-2">
                  <TableOfContents sections={tocSections} orientation="horizontal" />
                </div>
              </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-12 md:space-y-20">
                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-normal">
                  
                  <section id="importance-of-telecom-trademark" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                      The Strategic Necessity of Trademark Registration in the Telecommunication Sector: A Deep Dive
                    </h2>
                    <p className="mb-6">
                      In the hyper-connected era, telecommunications is not merely a utility; it is the digital nervous system of global commerce. From the fiber optic cables buried beneath our streets to the satellite arrays orbiting the earth, the transmission of data is the lifeblood of modern civilization. However, in this high-stakes industry, technical superiority is only half the battle. The other half is brand dominance. When a consumer chooses a mobile network, an internet service provider, or a secure digital messaging platform, they are not just buying bandwidth; they are buying trust. 
                    </p>
                    <p className="mb-6">
                      In an industry where physical infrastructure is increasingly commoditized, the **Brand Identity** becomes the primary differentiator. Whether you are a Tier-1 carrier or a localized ISP providing fiber-to-the-home (FTTH), your name is the carrier of your reputation for uptime, speed, and customer service. Without a registered trademark, you are operating on borrowed time. **Trademark Registration for Telecommunication Services** is the legal mechanism that codifies this trust under the International Nice Classification, primarily in **Class 38**.
                    </p>
                    <div className="bg-indigo-50 border-l-8 border-indigo-600 p-8 my-10 rounded-r-2xl shadow-sm">
                      <p className="text-xl text-indigo-900 italic font-medium">
                        "Your brand name is the frequency on which you communicate your promise to the customer. If that frequency is not legally protected, the signal will be lost in a sea of interference."
                      </p>
                    </div>
                    <p className="mb-6">
                      Neglecting brand protection in the telecom sector is a high-risk gamble. The costs of a naming dispute for a telecommunications company are astronomical. Imagine having to rebrand a mobile network—changing SIM card branding, updating network IDs on millions of handsets, re-skinning retail outlets, and launching a nationwide PR campaign to explain the change. It is a logistical and financial nightmare that can be entirely avoided through proactive trademark registration and a comprehensive clearance search performed by IPR Karo.
                    </p>
                    <p className="mb-6">
                      Furthermore, as telecommunications move toward decentralized networks, 6G technology, and satellite-based internet, the boundaries of brand protection are expanding. A registered trademark gives you the exclusive right to use your brand name across the entire territory of India, providing the legal foundation needed to scale from a regional ISP to a national powerhouse. It also serves as a critical asset for valuation during funding rounds or M&A activities, where the brand's 'goodwill' is often valued at a premium over the physical hardware.
                    </p>
                    <p className="mb-6">
                      In the event of network phishing or fraudulent SMS gateways—common in the telecom sector—a registered trademark is your most powerful weapon. It allows you to take immediate legal action against "passing off" and "infringement," enabling you to shut down unauthorized websites, social media handles, and even malicious mobile apps that impersonate your brand to harvest user data.
                    </p>
                  </section>

                  <section id="class-38-explained" className="scroll-mt-32">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Decoding Class 38: The Transmission Universe & Beyond</h2>
                    <p className="mb-8">
                       The Nice Classification system is the global standard for categorizing trademarks. For telecommunications, Class 38 is the primary focus, but a modern telecom business often requires a multi-class strategy to ensure total protection against every form of brand dilution.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                       <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-sm">
                          <h3 className="font-bold text-xl mb-4 group-hover:text-white">Class 38 (The Service Core)</h3>
                          <p className="text-sm opacity-80 leading-relaxed group-hover:text-white">
                             This class covers the 'Service of Transmission'. Whether it is through traditional copper lines, fiber optics, or the airwaves (radio/satellite), the act of facilitating communication between parties is a Class 38 service. This includes:
                             <ul className="mt-4 space-y-1 list-disc list-inside opacity-80 text-xs">
                                <li>Mobile Network Operations (MNOs)</li>
                                <li>Internet Service Provision (ISP)</li>
                                <li>Voice over IP (VOIP) and Pagers</li>
                                <li>Electronic Mail and Messaging Services</li>
                                <li>Broadcasting of Television and Radio Programs</li>
                                <li>Data Streaming and Cloud File Transmission</li>
                             </ul>
                          </p>
                       </div>
                       <div className="bg-gray-50 p-8 rounded-3xl group hover:bg-[rgb(110,94,147)] hover:text-white transition-all shadow-sm">
                          <h3 className="font-bold text-xl mb-4 group-hover:text-white">Class 9 (Hardware & Software)</h3>
                          <p className="text-sm opacity-80 leading-relaxed group-hover:text-white">
                             A connectivity provider is nothing without the tools of the trade. Class 9 covers 'Scientific, Research, Navigation, and Data Processing Goods'. In telecom, this primarily refers to:
                             <ul className="mt-4 space-y-1 list-disc list-inside opacity-80 text-xs">
                                <li>Connectivity Hardware (Routers, Switches, Fiber cables)</li>
                                <li>Smartphones and Network Interface Cards</li>
                                <li>Software Apps used for connectivity or customer support</li>
                                <li>Security Protocols and Encryption Software</li>
                             </ul>
                          </p>
                       </div>
                    </div>
                    <p className="mb-6">
                       However, the strategic depth doesn't stop there. Forward-thinking telecom brands also consider **Class 35** for their retail franchise networks and **Class 42** for their back-end technical network consultancy and cloud infrastructure software (SAAS/PAAS). A truly comprehensive IP portfolio acts as a multi-layered shield, protecting both the 'act of transmission' and the 'software that enables it'.
                    </p>
                  </section>

                  <section id="isp-licensing-compliance" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">ISP Licensing & Brand Alignment: The DOT vs. Trademark Nexus</h2>
                     <p className="mb-6">
                        In India, the legal framework for telecommunications is a dual-track system. On one track, you have the Department of Telecommunications (DOT) which issues Unified Licenses (UL) for ISPs, and on the other, you have the Trademark Registry which governs brand ownership. A common mistake among new-age fiber providers and regional ISPs is assuming that a DOT license authorization equals brand ownership.
                     </p>
                     <p className="mb-6">
                        A DOT license grants you the regulatory **'Right to Operate'** a network within a specific geographic circle. However, it does NOT grant you the **'Right to the Name'**. We have seen multiple cases where an ISP operated for years under a DOT license for a specific city, only to face a massive 'Cease and Desist' order from a national player holding a trademark for a similar name in Class 38. Because the network infrastructure for an ISP is physically rooted in the ground, the cost of rebranding—changing all customer routers, fiber boxes, and marketing material—can run into crores.
                     </p>
                     <p className="mb-6">
                        <strong>The VNO Strategy:</strong> Virtual Network Operators (VNOs) are increasingly popular. Since VNOs buy bandwidth wholesale from primary carriers and resell it, their **Brand** is their only truly tangible asset. For a VNO, the trademark is the foundation of their business valuation. Aligning your trademark filing with your DOT license application from day one is essential to prevent a multi-circle legal collision. At IPR Karo, we ensure that your trademark specification is broad enough to cover all current and future license circles.
                     </p>
                  </section>

                   <section id="5g-6g-ecosystem-ip" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Protecting the 5G and 6G Brand Ecosystem: Latency as a Trademark</h2>
                     <p className="mb-6">
                        As we move toward 5G Slicing, brands are no longer just selling 'data'; they are selling 'Latency', 'Reliability', and 'Network Slices' under specific sub-brands. In the 5G era, networks are no longer monolithic entities; they are virtualized, sliced, and distributed. This software-defined nature of modern networks creates a complex IP landscape where every virtualized component can—and should—be protected.
                     </p>
                     <p className="mb-6">
                        <strong>Network Slicing & Sub-Brands:</strong> 5G technology allows for 'Network Slicing', where a single physical infrastructure is divided into multiple virtual networks, each optimized for a specific use case. For example, a carrier might offer a specific slice for emergency services, another for autonomous vehicles, and a third for mass-market mobile broadband. Branding these specific slices (e.g., "SkySlice High-Reliability") is the new frontier of telecom IP. If you market a specific high-reliability slice under a unique name, failing to trademark that name allows competitors to piggyback on your network's reputation for latency and reliability.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8 my-10">
                        <div className="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300 shadow-sm hover:border-indigo-400 transition-colors">
                           <h3 className="font-bold text-lg mb-4 flex items-center"><FontAwesomeIcon icon={faTower} className="mr-3 w-8 h-8 text-indigo-600" /> Private 5G Networks</h3>
                           <p className="text-sm opacity-70 italic font-medium leading-relaxed">Industrial giants are now launching their own internal networks. Trademarking these internal identifiers (e.g. "SmartStore Private Network") is vital for internal accountability and future spin-offs or branding as an enterprise solution for logistics hubs.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl border border-dashed border-gray-300 shadow-sm hover:border-indigo-400 transition-colors">
                           <h3 className="font-bold text-lg mb-4 flex items-center"><FontAwesomeIcon icon={faMicrochip} className="mr-3 w-8 h-8 text-indigo-600" /> Edge Computing Identifiers</h3>
                           <p className="text-sm opacity-70 italic font-medium leading-relaxed">When data is processed at the edge, the connectivity brand must intersect with Class 42 (Cloud Technology) to cover the integrated tech stack, ensuring that the software-defined parameters of the network are also protected.</p>
                        </div>
                     </div>
                  </section>

                  <section id="satellite-broadband-legal" className="scroll-mt-32 uppercase tracking-tighter">
                     <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 text-center">Satellite & LEO Constellations: Orbital IP & Global Filing Strategy</h2>
                     <p className="mb-6 normal-case tracking-normal">
                        With the entry of Low Earth Orbit (LEO) satellite providers like Starlink, OneWeb, and Amazon's Project Kuiper, the boundaries of telecommunication branding have literal moved into space. This presents a unique jurisdictional challenge: Enquanto satellites operate in space, the services are terminated on Indian soil via ground gates (gateways).
                     </p>
                     <p className="mb-6 normal-case tracking-normal">
                        Under Indian IP law, a brand used to market these orbital services to Indian consumers must be registered in India to be enforceable. However, because satellite services are inherently global, an Indian-only strategy is a recipe for disaster. We recommend a **'Centric-Madrid' approach**. By filing an initial application in India, you secure a 'Base Mark'. Within six months, you can utilize the Madrid Protocol to extend this protection to over 130 countries, ensuring that your 'Global Priority Date' is maintained from the day of your Indian filing.
                     </p>
                     <div className="bg-indigo-900 text-white p-8 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden my-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl md:text-4xl font-black mb-8 flex items-center normal-case tracking-normal">
                           <FontAwesomeIcon icon={faRocket} className="mr-6 w-16 h-16 text-indigo-400" /> 
                           Why Orbital Brands Need Priority Filings
                        </h3>
                        <p className="text-lg opacity-90 leading-relaxed normal-case tracking-normal font-light">
                           In the satellite sector, 'Trademark Squatting' is a rampant issue. Bad-faith actors often monitor news about satellite launches and register those constellation names in targeted markets before the actual provider can. A registered Indian trademark, combined with a Madrid filing, allows you to invalidate these squatters' claims globally. Our team specializes in managing orbital IP portfolios that bridge the gap between national terrestrial law and international space-faring branding.
                        </p>
                     </div>
                     <p className="mb-6 normal-case tracking-normal text-gray-600 italic">
                        *Note: For satellite providers, we also recommend filing in **Class 12** (Vehicles: Apparatus for locomotion by land, air or water) if you manufacture your own satellites, providing a 360-degree protection shield.*
                     </p>
                  </section>

                  <section id="iot-m2m-connectivity" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">IoT & M2M Branding: Connecting the Industrial Nervous System</h2>
                     <p className="mb-6">
                        In the Industrial Internet of Things (IIoT) and Machine-to-Machine (M2M) communication, the 'brand' is often hidden from the human eye but critical to the integrity of the supply chain. Specific connectivity protocols, M2M network names, and IoT platform identifiers need rigorous Class 38 protection.
                     </p>
                     <p className="mb-6">
                        In these environments, a brand name like **"AutoSense Connectivity"** is used to identify the source of critical data streams. If a third party uses a similar name for a competing, less-reliable protocol, the resulting 'Signal Confusion' can lead to more than just monetary loss—it can lead to system-wide failures in automated environments. Protecting these internal and B2B brands ensures that industrial partners can identify and trust the data packets traveling across your network.
                     </p>
                     <p className="mb-6 text-gray-500 italic">
                        We assist IoT startups in building 'Protocol Portfolios'—registering the names of their unique transmission standards as trademarks, which can later be licensed as premium connectivity options to manufacturers of smart devices.
                     </p>
                  </section>

                  <section id="vno-branding-strategy" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Virtual Network Operators (VNO): Branding the White-Label Spectrum</h2>
                     <p className="mb-6 text-gray-700">
                        VNOs do not own the physical spectrum; they buy it wholesale from primary carriers and sell it under their own brand. Since they lack physical infrastructure assets, <strong>THEIR BRAND IS THEIR ONLY TANGIBLE ASSET</strong>. For a VNO, the trademark is not just a legal formality—it is the entire basis of their enterprise value and the primary vehicle for customer loyalty. 
                     </p>
                     <p className="mb-6 text-gray-700">
                        We help VNOs build robust IP portfolios that allow them to compete with established giants on brand recall alone. This includes securing multi-class trademarks that cover both the data transmission (Class 38) and the proprietary mobile apps (Class 9) used to manage subscriber accounts. In a market where network quality is often identical across VNOs, the 'Brand Experience' is the only battleground left for differentiation.
                     </p>
                  </section>

                  <section id="ott-broadcasting-convergence" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-tighter">Broadcasting & OTT Integration: Protecting Content Delivery</h2>
                     <p className="mb-8 text-center max-w-4xl mx-auto opacity-70">
                        The lines between traditional broadcasting and over-the-top (OTT) streaming have evaporated. Modern media giants must navigate a complex multi-class landscape to protect their delivery channels and their content.
                     </p>
                     <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="p-10 bg-indigo-50/50 rounded-[2.5rem] border-2 border-indigo-100 shadow-sm group hover:bg-white transition-all">
                           <h3 className="font-bold text-2xl mb-4 flex items-center font-black text-indigo-900"><FontAwesomeIcon icon={faSignal} className="w-10 h-10 mr-4 text-indigo-600" /> Digital Transmission</h3>
                           <p className="text-sm opacity-80 leading-relaxed italic">
                              OTT platforms need Class 38 for the 'Service of Transmission'—ensuring that the act of streaming the content from their servers to the user's device is protected. This is separate from the content itself (Class 41).
                           </p>
                        </div>
                        <div className="p-10 bg-indigo-50/50 rounded-[2.5rem] border-2 border-indigo-100 shadow-sm group hover:bg-white transition-all">
                           <h3 className="font-bold text-2xl mb-4 flex items-center font-black text-indigo-900"><FontAwesomeIcon icon={faServer} className="w-10 h-10 mr-4 text-indigo-600" /> CDN Branding</h3>
                           <p className="text-sm opacity-80 leading-relaxed italic">
                              As streaming services move to 4K and 8K, the names of their internal Content Delivery Networks (CDNs) are becoming high-value trademarks. Protecting your CDN brand (e.g., "StreamSpeed Node") prevents others from using your technical reputation to market their own delivery solutions.
                           </p>
                        </div>
                     </div>
                     <p className="mb-6 text-gray-600">
                        Furthermore, for interactive broadcasting services (like live streaming with integrated chat), a **Class 38** trademark is vital to ensure that the social/interactive transmission layer of your platform remains exclusive to your brand identity.
                     </p>
                  </section>

                  <section id="safe-harbor-isp-liability" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Safe-Harbor & ISP Liability: The IP Liability Intersection</h2>
                     <p className="mb-6">
                        Under the IT Act (Section 79), ISPs often enjoy 'Safe Harbor' protection from third-party content, meaning they aren't liable for what their users transmit. However, this legal shield has a critical gap: it does NOT apply to the ISP's own branding or intellectual property.
                     </p>
                     <p className="mb-6">
                        In fact, if an ISP's brand name is infringing on a trademark, the Safe Harbor provisions provide zero protection from litigation. Ensuring your brand is clear and registered from day one prevents high-court injunctions that could force you to shut down your entire data highway or rebrand your gateway services during a legal dispute. 
                     </p>
                     <p className="mb-6">
                        More importantly, as an ISP, you are often the first point of contact for trademark enforcement notifications. Having your own trademarks registered gives you the legal authority to set strict 'Terms of Service' that protect you from being used as a conduit for other brand infringers, effectively turning your IP portfolio into a risk-management tool.
                     </p>
                  </section>

                  <section id="tower-infrastructure-branding" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Branding the Towers: Infrastructure & Passive IP Mastery</h2>
                     <p className="mb-6">
                        In the telecommunications ecosystem, tower companies (TowerCos) and fiber infrastructure providers (Infras) are the silent giants. While they operate in a B2B environment, their brand reputation for 'Uptime', 'Structural Integrity', and 'Co-location Efficiency' is their primary currency. Trademarking the names of specific tower clusters, multi-tenant data center facilities, or proprietary fiber-optic layouts (e.g., "SilverFiber Backbone") is no longer optional.
                     </p>
                     <p className="mb-6">
                        <strong>Why B2B Telecom Needs Trademarks:</strong> When an MNO (Mobile Network Operator) chooses a tower partner, they are evaluating long-term technical stability. If your tower brand—the mark that appears on every physical site and every engineering report—is unprotected, you risk a competitor launching a "shadow brand" that dilutes your reputation for 99.99% uptime. Furthermore, in the event of an infrastructure REIT (Real Estate Investment Trust) listing or an IPO, a registered trademark is a prerequisite for the 'Intangible Asset' valuation of the company.
                     </p>
                     <p className="mb-6">
                        We help infrastructure firms secure **Class 37** (Construction and Repair) alongside **Class 38**, providing a double layer of protection that covers both the 'building' of the towers and the 'transmission' of data through them.
                     </p>
                  </section>

                  <section id="spectrum-leasing-ip" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">Spectrum Leasing & The Invisible Asset: Frequency Branding</h2>
                     <p className="mb-6">
                        In an era where spectrum is leased, traded, and shared between operators (Spectrum Sharing Agreements), the brand name associated with a specific frequency band or a proprietary connectivity solution becomes a tradable instrument. If you market a specific high-frequency solution as "WaveLimit-26GHz", that brand name becomes the identifier for a technical quality tier.
                     </p>
                     <p className="mb-6">
                        We assist carriers in performing **IP Audits** during spectrum acquisition. By proving that the brand equity built on top of the airwaves—the customer loyalty, the recognition of the name, and the legal exclusivity provided by a trademark—adds a significant premium to the physical spectrum valuation, we help firms maximize their balance sheet strength during audits and debt-restructuring exercises.
                     </p>
                     <p className="mb-6 text-gray-600 font-medium">
                        Our technical team collaborates with spectrum engineers to ensure that your trademark 'Specification of Services' includes nuanced terms like 'dynamic spectrum access services' and 'frequency allocation management', future-proofing your brand against technological shifts in how airwaves are utilized.
                     </p>
                  </section>

                  <section id="registration-process" className="scroll-mt-32 uppercase">
                   <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 text-center tracking-tighter">The Telecom IP Protocol</h2>
                   <div className="relative space-y-12">
                      <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-gray-100"></div>
                      <div className="flex gap-8 items-start relative">
                         <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                            <FontAwesomeIcon icon={faSearch} className="w-12 h-12" />
                         </div>
                         <div className="p-8 bg-gray-50 rounded-3xl flex-1">
                            <h3 className="text-xl font-bold mb-4 font-black">Spectrum Clearance (Search)</h3>
                            <p className="text-sm normal-case opacity-80">We conduct deep searches across all Nice classes. In telecom, we specifically look for 'Likelihood of Confusion' in phonetic marks (e.g. 'AirNet' vs 'AeroNet').</p>
                         </div>
                      </div>
                      <div className="flex gap-8 items-start relative">
                         <div className="bg-white border-4 border-gray-100 text-[rgb(110,94,147)] w-16 h-16 rounded-full flex items-center justify-center font-black text-2xl z-10 shadow-lg flex-shrink-0">
                            <FontAwesomeIcon icon={faFileContract} className="w-12 h-12" />
                         </div>
                         <div className="p-8 bg-gray-50 rounded-3xl flex-1">
                            <h3 className="text-xl font-bold mb-4 font-black">Technical Specification Filing</h3>
                            <p className="text-sm normal-case opacity-80">We draft precise specifications for Form TM-A, ensuring your protection covers 5G, Satellite, and every future transmission standard you plan to adopt.</p>
                         </div>
                      </div>
                   </div>
                  </section>

                  <section id="documents-required" className="scroll-mt-32 pt-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 underline decoration-indigo-400">Documentation Checklist</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="p-8 border-2 border-indigo-50 rounded-3xl bg-white shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-indigo-600 uppercase font-black tracking-widest">Company Basis</h3>
                          <ul className="text-sm space-y-2 opacity-80">
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Certificate of Incorporation</li>
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Board Resolution</li>
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> MSME/Udyam (for 50% Fee Waiver)</li>
                          </ul>
                       </div>
                       <div className="p-8 border-2 border-indigo-50 rounded-3xl bg-white shadow-sm">
                          <h3 className="font-bold text-lg mb-4 text-indigo-600 uppercase font-black tracking-widest">Evidence Pack</h3>
                          <ul className="text-sm space-y-2 opacity-80">
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Prior User Affidavit (If in use)</li>
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Advertising Bills/Social Proof</li>
                             <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2 w-4 h-4" /> Signed Form TM-48</li>
                          </ul>
                       </div>
                    </div>
                  </section>

                  <section id="handling-telecom-objections" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6">Technical Defense: Overcoming Objections</h2>
                     <p className="mb-6">
                        Objections in telecom often revolve around <strong>Non-Distinctiveness</strong>. If your brand is 'Connect Hub', the Registry will call it descriptive. We overcome this by showing the 'Secondary Meaning'—proving that through your massive advertising spend and subscriber growth, the generic term has morphed into an exclusive brand identifier in the minds of the Indian public.
                     </p>
                  </section>

                  <section id="case-studies-telecom" className="scroll-mt-32 pt-12">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 underline decoration-[rgb(110,94,147)]">Disputes in the Data Lanes</h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl group hover:shadow-xl transition-all">
                           <h3 className="font-bold mb-4 text-indigo-900">The "Sound" of Reliance</h3>
                           <p className="text-xs text-gray-600 italic leading-relaxed">How a major telecom company trademarked its unique startup tone, ensuring users recognized the network even without looking at their screen.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-3xl group hover:shadow-xl transition-all">
                           <h3 className="font-bold mb-4 text-indigo-900">The Fiber Phishing War</h3>
                           <p className="text-xs text-gray-600 italic leading-relaxed">How a regional ISP used its registered trademark to shut down over 50 fake customer portals within 48 hours, saving its brand reputation.</p>
                        </div>
                     </div>
                  </section>

                  <section id="international-telecom-trademark" className="scroll-mt-32">
                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 uppercase tracking-widest text-center">The Orbital Reach: Madrid Protocol</h2>
                     <p className="mb-6 text-gray-700 text-center max-w-4xl mx-auto">
                        Telecommunication services are inherently borderless. From cross-border VOIP apps to global satellite networks, your brand is global from Day 1. We facilitate Madrid Protocol applications to extend your brand's legal signal to 130+ nations simultaneously.
                     </p>
                  </section>

                  <section id="reviews-section" className="scroll-mt-32 pt-12">
                    <h2 className="text-4xl md:text-7xl font-black text-gray-900 mb-12 text-center tracking-tighter">Voices of Connectivity Leaders</h2>
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
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-12 text-center uppercase tracking-[0.3em] underline underline-offset-8 decoration-gray-200">The Intelligence Hub: FAQs</h2>
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
                  
                  <section className="bg-indigo-950 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden mt-12 shadow-2xl">
                     <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at center, #6E5E93 0%, transparent 70%)' }}></div>
                     <div className="relative z-10">
                        <h2 className="text-4xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">Defend Your Signal.</h2>
                        <p className="text-xl md:text-2xl opacity-70 mb-12 max-w-4xl mx-auto font-light">
                          In the hyper-competitive telecom sector, an unprotected brand is just noise. Secure your legacy on the global data highway.
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

            <aside className="hidden lg:block space-y-8 sticky top-32">
              <div className="bg-[#0C002B] p-10 rounded-[2.5rem] shadow-2xl border border-gray-800 text-white group">
                 <h3 className="text-2xl font-black mb-6 leading-tight">Brand Spectrum Scan</h3>
                 <p className="text-sm opacity-60 mb-10 leading-relaxed font-medium">Clear your brand name across Class 38 databases in 1 business day.</p>
                 <Link href="/contact-us">
                   <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 px-4 rounded-2xl transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.2em]">Start Free Clearance</button>
                 </Link>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-600 opacity-5 rounded-bl-full"></div>
                <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.4em]">Connected Verticals</h3>
                <ul className="space-y-6">
                  {['Broadcasting IP', 'Satellite Legal', 'ISP Compliance', 'Fintech Brands'].map((item, idx) => (
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
