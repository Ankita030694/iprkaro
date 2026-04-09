import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBalanceScale, faRobot, faHandHoldingHeart, faGlobe, 
  faShieldAlt, faLightbulb, faChartLine, faGavel, 
  faFingerprint, faVrCardboard, faBolt, faChevronDown 
} from '@fortawesome/free-solid-svg-icons';

// Reusable Glass Card Component - Light Mode
const GlassCard = ({ children, className = "", hoverEffect = true }: { children: React.ReactNode, className?: string, hoverEffect?: boolean }) => (
  <div 
    className={`relative overflow-hidden p-6 sm:p-8 rounded-[18px] border border-gray-100 bg-slate-50/50 backdrop-blur-sm shadow-sm ${hoverEffect ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-[#FFB703]/30' : ''} ${className}`}
  >
    {children}
  </div>
);

// Section Title Component - Light Mode
const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 
      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
      style={{ color: '#0C002B', fontFamily: 'Aileron', lineHeight: '1.2' }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="text-sm sm:text-base text-gray-500 max-w-3xl mx-auto font-sans leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default function AboutContentExpanded() {
  const [activeMyth, setActiveMyth] = useState<number | null>(null);

  const toggleMyth = (index: number) => {
    setActiveMyth(activeMyth === index ? null : index);
  };

  return (
    <div className="w-full px-6 sm:px-12 lg:px-24 py-16 text-[#0C002B] font-sans relative bg-white">
        
      {/* Decorative Background Elements - Light Mode */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-[#FFB703]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Section 1: Genesis - Feature Row */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-[#FFB703]/10 border border-[#FFB703]/30 text-[#FFB703] text-sm font-bold">
                    EST. 2019
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0C002B] leading-tight">
                    The Genesis of IPR Karo: <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-yellow-600">
                        A Vision for a Protected Future
                    </span>
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                    <p>
                        In the rapidly evolving landscape of Indian commerce, a quiet revolution has been brewing—one that is not just about economic growth, but about the ownership of ideas. The story of IPR Karo is inextricably linked to this new chapter in India’s business history.
                    </p>
                    <p>
                        The founders of IPR Karo recognized a gaping void in the legal ecosystem. Startups, small business owners, and solo creators—the very backbone of the "Make in India" initiative—were consistently sidelined by the traditional IP registration process. The conventional route was marred by opacity, exorbitant legal fees, and terrifying jargon.
                    </p>
                    <p>
                        We set out to build a platform that would dismantle the barriers of cost and complexity, replacing them with transparency, speed, and accessibility.
                    </p>
                </div>
            </div>
            <div className="relative h-full min-h-[400px]">
                 <GlassCard className="h-full flex flex-col justify-center items-center text-center p-10 relative overflow-visible border-none bg-gradient-to-br from-slate-50 to-white shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFB703]/5 to-transparent opacity-50 rounded-[18px]"></div>
                    <div className="relative z-10">
                         <div className="text-[120px] font-bold text-[#0C002B]/5 font-sans leading-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none">
                            VISION
                        </div>
                        <h3 className="text-2xl font-bold text-[#FFB703] mb-4">Our Mission</h3>
                        <p className="text-[#0C002B] text-xl font-light italic leading-relaxed">
                            "To serve as the bridge between raw creativity and legal security, putting the power of a top-tier IP law firm into the hands of every aspiring entrepreneur in India."
                        </p>
                    </div>
                 </GlassCard>
            </div>
        </section>

        {/* Section 2: Core Philosophy - 3 Card Grid */}
        <section>
            <SectionTitle 
                title="Our Core Philosophy" 
                subtitle="At the heart of IPR Karo lies a philosophy that defies the traditional stiffness of the legal sector. We execute on three pillars."
            />
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        icon: faBalanceScale,
                        title: "Democratization",
                        desc: "We believe that legal protection should be a fundamental right for every business, not a privilege reserved for conglomerates. We are educating a generation of entrepreneurs about the value of their intellectual assets."
                    },
                    {
                        icon: faRobot,
                        title: "Precision through Tech",
                        desc: "Human error is the nemesis of efficient legal work. We integrated advanced AI to handle the drudgery—searching, classification, tracking—so our experts can focus on strategy."
                    },
                    {
                        icon: faHandHoldingHeart,
                        title: "Client-Centric Care",
                        desc: "We operate as a glass house, not a black box. Radical transparency means you know exactly where your application stands. We don't just process cases; we nurture businesses."
                    }
                ].map((item, idx) => (
                    <GlassCard key={idx} className="group hover:bg-white">
                        <div className="w-14 h-14 rounded-full bg-[#FFB703]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFB703]/20 transition-all duration-300">
                             <FontAwesomeIcon icon={item.icon} className="text-[#FFB703] text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0C002B] mb-3">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </section>

        {/* Section 3: Why IP Matters - Bento Style */}
        <section>
             <SectionTitle 
                title="Why Intellectual Property Matters" 
                subtitle="We live in a knowledge economy. IP is the currency of the 21st century."
            />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <GlassCard className="md:col-span-8 flex flex-col justify-center bg-white border-[#FFB703]/10">
                    <h3 className="text-2xl font-bold text-[#FFB703] mb-4">The Valuation Multiplier</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        For a startup seeking investment, a registered trademark or a pending patent is not just a certificate; it is a valuation multiplier. Investors look for defensibility. They want a moat. IP protection provides that moat, signaling that the business is serious, professional, and built to last.
                    </p>
                </GlassCard>
                <GlassCard className="md:col-span-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-100 to-white">
                    <FontAwesomeIcon icon={faShieldAlt} className="text-[#0C002B]/10 text-6xl mb-4" />
                    <div className="text-4xl font-bold text-[#0C002B] mb-2">$5T</div>
                    <div className="text-sm text-[#FFB703] font-bold uppercase tracking-wider">Target Economy</div>
                    <p className="text-gray-400 text-xs mt-2">IP is central to India's growth</p>
                </GlassCard>
                <GlassCard className="md:col-span-5 flex flex-col justify-center bg-white">
                     <h3 className="text-xl font-bold text-[#FFB703] mb-3">The Trust Factor</h3>
                     <p className="text-gray-600 leading-relaxed">
                        In a marketplace crowded with copycats, the ® symbol is a beacon of trust. It tells the consumer the product is genuine and allows swift action against infringers.
                     </p>
                </GlassCard>
                 <GlassCard className="md:col-span-7 flex flex-col justify-center bg-slate-50 border-gray-100">
                     <h3 className="text-xl font-bold text-[#0C002B] mb-3">Commercial Liberation</h3>
                     <p className="text-gray-600 leading-relaxed">
                        We see IPR not as a legal shackle, but as a commercial liberator—freeing businesses to expand, license, and franchise without fear. Without IP protection, you are building a castle on sand. With it, you are building a fortress.
                     </p>
                </GlassCard>
            </div>
        </section>

        {/* Section 4: Technology Deep Dive - Process Flow */}
        <section>
            <div className="bg-slate-50 rounded-[30px] p-8 sm:p-12 border border-gray-100 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFB703]/5 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-[#0C002B] mb-8">The Technology Behind the Trust: <span className="text-[#FFB703]">Our AI Engine</span></h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <div className="text-[#FFB703]/10 text-8xl font-bold absolute -top-10 -left-6 z-0 select-none">01</div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-3">Semantic Similarity</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Traditional searches are literal. Ours are intelligent. Our AI uses NLP to identify phonetically similar ("Nike" vs "Nyke"), visually similar, and conceptually related marks, catching risks human paralegals might miss.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-[#FFB703]/10 text-8xl font-bold absolute -top-10 -left-6 z-0 select-none">02</div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-3">Predictive Analytics</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We don't just report data; we interpret it. Analyzing historical data on objections, we provide a "Registration Probability Score," helping clients make informed decisions before spending money on filing.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="text-[#FFB703]/10 text-8xl font-bold absolute -top-10 -left-6 z-0 select-none">03</div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-[#0C002B] mb-3">Automated Watchdogs</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Protection doesn't end at registration. Our systems scan new filings weekly, acting as a 24/7 watchdog to detect potential conflicts and allow for timely opposition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5: Comprehensive Services - Grid */}
        <section>
            <SectionTitle 
                title="A Full-Spectrum IP Legal Suite" 
                subtitle="From trademarks to patents, our ecosystem covers every lifecycle stage of an idea."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Trademark", desc: "Registration, Objection Handling, and Litigation Support.", icon: faGavel },
                    { title: "Copyright", desc: "Protection for software code, creative writing, art, and media.", icon: faFingerprint },
                    { title: "Design", desc: "Protecting the unique visual aesthetics of industrial products.", icon: faLightbulb },
                    { title: "Patent", desc: "Drafting and persecution for inventions and deep-tech innovations.", icon: faChartLine },
                ].map((service, idx) => (
                    <GlassCard key={idx} className="text-center group hover:bg-white border-gray-100">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#FFB703] to-orange-500 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-all duration-300">
                             <FontAwesomeIcon icon={service.icon} className="text-white text-3xl" />
                        </div>
                        <h3 className="text-lg font-bold text-[#0C002B] mb-2">{service.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </section>

         {/* Section 6: Landscape & Pledge - Text Columns */}
         <section className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0C002B] border-l-4 border-[#FFB703] pl-4">Navigating the Indian IP Landscape</h3>
                <div className="text-gray-600 space-y-4 leading-relaxed text-lg font-medium">
                    <p>India is witnessing an IP renaissance. With the "National IPR Policy" and "Digital India", the ecosystem is modernizing, yet complex. The courts are becoming more aggressive in protecting well-known marks.</p>
                    <p>IPR Karo serves as a knowledge hub, digesting changing laws into actionable advice. Whether it's expedited startup processing or e-commerce brand registry, we bridge the gap between compliance and growth.</p>
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0C002B] border-l-4 border-[#1345C3] pl-4">Our Pledge to Entrepreneurs</h3>
                <div className="text-gray-600 space-y-4 leading-relaxed text-lg font-medium">
                    <p>We envision an India where no idea is lost to theft, and no business fails due to lack of protection. To the student coder, the home baker, and the heavy manufacturer: We are here to protect your legacy.</p>
                    <p>IPR Karo is more than a website; it is a movement for the respect of intellectual labor. Join 5,000+ businesses who trust us with their most valuable assets.</p>
                </div>
            </div>
         </section>

         {/* Section 7: Case Studies - Styled Cards */}
         <section>
            <SectionTitle title="Real Stories, Real Protection" subtitle="Anonymized case studies of how we saved brands." />
            <div className="grid md:grid-cols-3 gap-6">
                 {[
                    {
                        title: "The Beverage Startup",
                        problem: "Phonetically identical mark found.",
                        solution: "Devised 'Honest Concurrent Use' strategy.",
                        result: "Registered in 8 months; saved from rebranding."
                    },
                    {
                        title: "The SaaS Scale-Up",
                        problem: "Needed global protection on a budget.",
                        solution: "Madrid Protocol filing in US, UK, Singapore.",
                        result: "Secured 3 markets for 1/4th the traditional cost."
                    },
                    {
                        title: "The Jaipur Weavers",
                        problem: "Cheap counterfeits flooding online.",
                        solution: "Copyright & Design Registration + Takedowns.",
                        result: "Listings removed in 24hrs; catalog expanded."
                    }
                 ].map((study, idx) => (
                    <GlassCard key={idx} className="flex flex-col bg-white border-gray-100 shadow-lg">
                        <div className="text-[#FFB703] text-sm font-bold uppercase tracking-wider mb-2">Case Study {idx + 1}</div>
                        <h3 className="text-xl font-bold text-[#0C002B] mb-4">{study.title}</h3>
                        <div className="space-y-3 flex-1">
                            <div><span className="text-gray-400 text-xs uppercase font-bold">Challenge:</span><p className="text-gray-600 text-sm leading-relaxed">{study.problem}</p></div>
                            <div><span className="text-gray-400 text-xs uppercase font-bold">Strategy:</span><p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p></div>
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                             <div className="text-green-600 text-sm font-bold flex items-center gap-2">
                                <FontAwesomeIcon icon={faBolt} className="animate-pulse" /> {study.result}
                             </div>
                        </div>
                    </GlassCard>
                 ))}
            </div>
         </section>

         {/* Section 8: Global Reach */}
         <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[30px] p-8 sm:p-16 text-center border border-blue-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
             <FontAwesomeIcon icon={faGlobe} className="text-5xl text-[#FFB703] mb-6 relative z-10" />
             <h2 className="text-3xl font-bold text-[#0C002B] mb-6 relative z-10">From Local to Global: The Madrid Protocol</h2>
             <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8 relative z-10 font-medium">
                 Don't limit your market. Through the Madrid Protocol, we help Indian businesses seek protection in up to 130 countries with a single application. We act as your central command for global IP, coordinating cross-border strategies and Paris Convention priority claims to win in foreign markets.
             </p>
             <button className="px-8 py-3 rounded-full bg-[#FFB703] text-[#0C002B] font-bold hover:bg-[#FFB703]/90 transition-all shadow-md relative z-10">
                 Explore International Filing
             </button>
         </section>

         {/* Section 9: Myths vs Facts - Interactive Accordion */}
         <section>
            <SectionTitle title="Busting IP Myths" subtitle="Common misconceptions that put businesses at risk." />
            <div className="space-y-4 max-w-4xl mx-auto">
                {[
                    { myth: "I registered my company name, so I own the trademark.", fact: "False. Company registration (MCA) and Trademark registration are separate. You can still be sued for infringement." },
                    { myth: "I can change the spelling slightly to avoid trouble.", fact: "False. The 'Phonetic Similarity' rule applies. 'Nike' and 'Nyke' are legally the same." },
                    { myth: "IP is only for big tech companies.", fact: "Small businesses are more vulnerable. A lawsuit can bankrupt a startup; a trademark is often your only defensive asset." },
                    { myth: "I'll register when I become famous.", fact: "Too late. India is 'First to File'. Squatters can hold your brand hostage if you wait." },
                    { myth: "The process takes too long to be worth it.", fact: "Protection starts from the Date of Application. You can use the ™ symbol immediately to deter copycats." }
                ].map((item, idx) => (
                    <div key={idx} className="group relative">
                        <div 
                            className={`p-6 rounded-xl border transition-all duration-300 ${activeMyth === idx ? 'bg-white border-[#FFB703]/50 shadow-md scale-[1.01]' : 'bg-slate-50 border-gray-100 hover:bg-white hover:border-gray-200'}`}
                            onClick={() => toggleMyth(idx)}
                        >
                            <div className="flex justify-between items-center cursor-pointer">
                                <h3 className={`text-lg font-bold flex items-center gap-3 transition-colors ${activeMyth === idx ? 'text-[#FFB703]' : 'text-[#0C002B]'}`}>
                                    <span className="text-red-500 font-bold text-xs uppercase px-2 py-1 rounded bg-red-50">Myth</span>
                                    {item.myth}
                                </h3>
                                <FontAwesomeIcon icon={faChevronDown} className={`text-gray-400 transition-transform duration-300 ${activeMyth === idx ? 'rotate-180' : ''}`} />
                            </div>
                            <div 
                                className={`overflow-hidden transition-all duration-500 ${activeMyth === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="flex items-start gap-3 pl-4 border-l-2 border-green-500 bg-green-50/30 py-3 rounded-r-lg">
                                     <span className="text-green-600 font-bold text-xs uppercase mt-1">Fact</span>
                                     <p className="text-gray-700 font-medium leading-relaxed">{item.fact}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </section>

         {/* Section 10: Future Trends */}
         <section>
             <SectionTitle title="The Future of IP" subtitle="How we are preparing clients for the next decade." />
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { title: "AI & Authorship", desc: "Navigating copyright for AI-generated code and art.", icon: faRobot },
                    { title: "Metaverse Assets", desc: "Protecting virtual goods and digital trademarks.", icon: faVrCardboard },
                    { title: "GI Tags", desc: "Hyper-localized IP for community heritage and artisanal goods.", icon: faGlobe },
                    { title: "Auto-Takedowns", desc: "API-driven real-time removal of infringing content.", icon: faBolt },
                 ].map((trend, idx) => (
                     <div key={idx} className="p-8 rounded-[24px] bg-white border border-gray-100 shadow-sm hover:border-[#FFB703]/30 hover:shadow-md transition-all text-center group">
                         <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                             <FontAwesomeIcon icon={trend.icon} className="text-[#FFB703] text-2xl" />
                         </div>
                         <h3 className="text-[#0C002B] font-bold mb-2">{trend.title}</h3>
                         <p className="text-gray-500 text-sm leading-relaxed">{trend.desc}</p>
                     </div>
                 ))}
             </div>
         </section>

         {/* Conclusion */}
         <section className="pb-12 px-2">
            <div className="p-10 sm:p-16 rounded-[32px] bg-gradient-to-r from-[#FFB703] to-[#FF9500] shadow-xl text-center transform hover:scale-[1.01] transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
                <div className="relative z-10">
                    <p className="text-[#0C002B] text-2xl sm:text-3xl font-extrabold italic font-sans max-w-4xl mx-auto leading-tight">
                    "Intellectual Property is not just a shield; it is a sword. It separates the leaders from the followers. At IPR Karo, we arm you for the battle of the marketplace."
                    </p>
                    <div className="mt-8 flex justify-center gap-3">
                         <span className="w-3 h-3 rounded-full bg-[#0C002B]/20 group-hover:scale-125 transition-all duration-300"></span>
                         <span className="w-3 h-3 rounded-full bg-[#0C002B]/40 group-hover:scale-125 transition-all duration-300 delay-75"></span>
                         <span className="w-3 h-3 rounded-full bg-[#0C002B]/20 group-hover:scale-125 transition-all duration-300 delay-150"></span>
                    </div>
                </div>
            </div>
         </section>

      </div>
    </div>
  );
}
