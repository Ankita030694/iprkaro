import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGavel, faFingerprint, faLightbulb, faChartLine, faShieldAlt, 
  faSearch, faFileContract, faUserTie, faRocket, faGlobe, 
  faCheckCircle, faTimesCircle, faBalanceScale, faFileSignature
} from '@fortawesome/free-solid-svg-icons';

// --- Shared Components (Inline for portability) ---

const GlassCard = ({ children, className = "", hoverEffect = true }: { children: React.ReactNode, className?: string, hoverEffect?: boolean }) => (
  <div 
    className={`relative overflow-hidden p-6 sm:p-8 rounded-[18px] border border-[rgba(255,183,3,0.2)] bg-[linear-gradient(135deg,rgba(255,183,3,0.08)_0%,rgba(12,0,43,0.4)_100%)] shadow-[0_6px_24px_rgba(0,0,0,0.3),inset_0_0_18px_rgba(255,255,255,0.05)] ${hoverEffect ? 'transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_9px_36px_rgba(0,0,0,0.4),inset_0_0_24px_rgba(255,255,255,0.05)]' : ''} ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <h2 
      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
      style={{ color: '#FFF', fontFamily: 'Nunito', lineHeight: '1.2' }}
    >
      {title}
    </h2>
    {subtitle && (
      <p className="text-base sm:text-lg text-white/70 max-w-4xl mx-auto font-nunito leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Content Data ---
// This strategy allows us to separate data from view for easier reading/editing of the long text.

const SERVICE_TABS = [
  { id: 'trademark', label: 'Trademark', icon: faGavel },
  { id: 'copyright', label: 'Copyright', icon: faFingerprint },
  { id: 'patent', label: 'Patent', icon: faLightbulb },
  { id: 'design', label: 'Design', icon: faChartLine },
];

export default function ServicesContentExpanded() {
  const [activeTab, setActiveTab] = useState('trademark');

  return (
    <div className="w-full px-6 sm:px-12 lg:px-24 py-20 text-white font-['Nunito'] relative overflow-hidden">
      
       {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[5%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-[#FFB703]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">

        {/* 1. Introduction: The IP Ecosystem */}
        <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-[#FFB703] uppercase tracking-wider text-sm mb-2">Comprehensive Solutions</h2>
            <p className="text-4xl md:text-5xl font-bold leading-tight">
                From Abstract Idea to <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] to-yellow-200"> Legally Protected Asset</span>
            </p>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Intellectual Property is not a single filing; it is a lifecycle. At IPR Karo, we don't just register your documents; we build a legal fortress around your business. Whether you are naming a brand, writing code, inventing a machine, or designing a product, we have a specialized legal workflow to secure your ownership.
            </p>
        </section>

        {/* 2. Interactive Deep Dive Tabs */}
        <section>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {SERVICE_TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 ${
                            activeTab === tab.id 
                            ? 'bg-[#FFB703] text-black shadow-[0_0_20px_rgba(255,183,3,0.4)]' 
                            : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                        }`}
                    >
                        <FontAwesomeIcon icon={tab.icon} />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="min-h-[600px]">
                {/* TRADEMARK CONTENT */}
                {activeTab === 'trademark' && (
                    <div className="space-y-12 animate-fade-in-up">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-white">Your Brand Identity, <span className="text-[#FFB703]">Secured Forever.</span></h3>
                                <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                                    <p>
                                        A trademark is the single most valuable asset of a modern consumer business. It is the visual and phonetic symbol of your reputation. However, the path to the ® symbol is fraught with legal pitfalls.
                                    </p>
                                    <p>
                                        In India, the Registry is strict. A simple phonetic similarity (e.g., "Apple" vs "Appel") can lead to rejection. That is why our service begins *before* the filing.  
                                    </p>
                                    <p>
                                        We specialize in overcoming <strong>Section 9 (Absolute Grounds)</strong> and <strong>Section 11 (Relative Grounds)</strong> objections. We don't just fill forms; we craft legal arguments that prove your brand's distinctiveness.
                                    </p>
                                </div>
                            </div>
                            <GlassCard className="bg-purple-900/30">
                                <h4 className="text-xl font-bold text-[#FFB703] mb-6">The Trademark Lifecycle</h4>
                                <ul className="space-y-4">
                                    {[
                                        { step: "1. AI Search", desc: "Similarity analysis using Phonetic & Vienna codes." },
                                        { step: "2. Classification", desc: "Selecting the right Class (1-45) to avoid limitation." },
                                        { step: "3. Filing (TM-A)", desc: "Priority filing to secure the 'Date of Application'." },
                                        { step: "4. Examination", desc: "Responding to Registry objections within 30 days." },
                                        { step: "5. Opposition Defense", desc: "Fighting third-party oppositions (Form TM-O)." },
                                        { step: "6. Registration", desc: "Issuance of Certificate (Valid for 10 years)." },
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-full bg-[#FFB703]/20 flex items-center justify-center text-[#FFB703] font-bold text-sm flex-shrink-0">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <strong className="text-white block">{item.step}</strong>
                                                <span className="text-white/60 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>
                        
                        <div className="grid sm:grid-cols-3 gap-6">
                            <GlassCard hoverEffect={false}>
                                <h4 className="font-bold text-lg mb-2">Objection Handling</h4>
                                <p className="text-sm text-white/70">Received an Examination Report? Our attorneys draft precise legal replies citing relevant case law to overcome objections.</p>
                            </GlassCard>
                            <GlassCard hoverEffect={false}>
                                <h4 className="font-bold text-lg mb-2">Renewal & Restoration</h4>
                                <p className="text-sm text-white/70">Missed a deadline? We handle Form TM-R fillings to renew valid marks or restore removed marks to the registry.</p>
                            </GlassCard>
                            <GlassCard hoverEffect={false}>
                                <h4 className="font-bold text-lg mb-2">Watch Services</h4>
                                <p className="text-sm text-white/70">We monitor the journal every week to ensure no one files a brand similar to yours, filing oppositions if needed.</p>
                            </GlassCard>
                        </div>
                    </div>
                )}

                {/* COPYRIGHT CONTENT */}
                {activeTab === 'copyright' && (
                    <div className="space-y-12 animate-fade-in-up">
                         <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="order-2 md:order-1">
                                <div className="grid grid-cols-2 gap-4">
                                     {[ "Software Code", "Literary Work", "Logos & Art", "Music/Audio", "Video Content", "Architectural Plans" ].map((item, idx) => (
                                         <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                             <FontAwesomeIcon icon={faCheckCircle} className="text-[#FFB703]" />
                                             <span className="font-bold text-sm">{item}</span>
                                         </div>
                                     ))}
                                </div>
                             </div>
                             <div className="space-y-6 order-1 md:order-2">
                                <h3 className="text-3xl font-bold text-white">Protecting the <span className="text-[#FFB703]">Expression of Ideas.</span></h3>
                                <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                                    <p>
                                        While Trademarks protect your Brand Name, Copyright protects your Content. In the digital age, source code, website copy, UI designs, and marketing videos are easily stolen. Copyright registration provides the legal proof of ownership needed to issue "Takedown Notices" and claim damages.
                                    </p>
                                    <p>
                                        <strong>For Software Companies:</strong> We register both the Source Code (Literary Work) and the GUI (Artistic Work) to ensure comprehensive protection against cloning.
                                    </p>
                                    <p>
                                        <strong>Lifetime Protection:</strong> Unlinke trademarks, copyright lasts for the lifetime of the author + 60 years. It is a long-term asset for your family or company.
                                    </p>
                                </div>
                             </div>
                        </div>
                    </div>
                )}

                 {/* PATENT CONTENT */}
                 {activeTab === 'patent' && (
                    <div className="space-y-12 animate-fade-in-up">
                         <div className="space-y-8 text-center max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold text-white">For the Inventors & <span className="text-[#FFB703]">Deep-Tech Pioneers.</span></h3>
                            <p className="text-lg text-white/80">
                                A patent is a monopoly granted by the state. It is the strongest form of IP protection but also the most complex. The criteria—Novelty, Inventive Step, and Industrial Application—are rigorous.
                            </p>
                         </div>
                         
                         <div className="grid md:grid-cols-3 gap-8">
                             <GlassCard className="relative overflow-hidden group">
                                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                     <FontAwesomeIcon icon={faLightbulb} size="6x" />
                                 </div>
                                 <h4 className="text-xl font-bold text-[#FFB703] mb-4">Provisional Application</h4>
                                 <p className="text-white/80 text-sm mb-4">
                                     <strong>The "Priority Date" Strategy.</strong> Have an idea but the product isn't fully ready? File a Provisional Patent immediately. This secures your priority date ahead of potential competitors. You then get 12 months to refine your invention and file the complete specification.
                                 </p>
                             </GlassCard>

                             <GlassCard className="relative overflow-hidden group">
                                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                     <FontAwesomeIcon icon={faFileContract} size="6x" />
                                 </div>
                                 <h4 className="text-xl font-bold text-[#FFB703] mb-4">Complete Specification</h4>
                                 <p className="text-white/80 text-sm mb-4">
                                     <strong>The Technical Defense.</strong> This document must describe the invention in such detail that "a person skilled in the art" can replicate it. Our patent agents (engineers + lawyers) draft claims that are broad enough to prevent workarounds but specific enough to be granted.
                                 </p>
                             </GlassCard>

                             <GlassCard className="relative overflow-hidden group">
                                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                     <FontAwesomeIcon icon={faGlobe} size="6x" />
                                 </div>
                                 <h4 className="text-xl font-bold text-[#FFB703] mb-4">PCT / International</h4>
                                 <p className="text-white/80 text-sm mb-4">
                                     <strong>Global Coverage.</strong> The Patent Cooperation Treaty (PCT) allows you to file one application to seek protection in 150+ countries. We manage the International Search Authority (ISA) process and national phase entries.
                                 </p>
                             </GlassCard>
                         </div>
                    </div>
                )}

                {/* DESIGN CONTENT */}
                {activeTab === 'design' && (
                    <div className="space-y-12 animate-fade-in-up text-center max-w-4xl mx-auto">
                        <GlassCard>
                            <FontAwesomeIcon icon={faChartLine} className="text-5xl text-[#FFB703] mb-6" />
                            <h3 className="text-3xl font-bold text-white mb-6">Industrial Design Registration</h3>
                            <p className="text-lg text-white/80 leading-relaxed mb-8">
                                Sometimes, the innovation isn't in how it <em>works</em>, but in how it <em>looks</em>. The shape of a Coke bottle, the contour of an iPhone, the pattern on a Sabyasachi saree—these are Industrial Designs.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 text-left">
                                <div>
                                    <h4 className="font-bold text-[#FFB703] mb-2">What is protected?</h4>
                                    <p className="text-sm text-white/70">Shape, configuration, pattern, ornament, or composition of lines or colors applied to any article.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#FFB703] mb-2">Duration</h4>
                                    <p className="text-sm text-white/70">Initially 10 years, extendable by another 5 years. Total 15 years of exclusivity.</p>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                )}
            </div>
        </section>

        {/* 3. Comparison Table */}
        <section>
            <SectionTitle title="Which IP is Right for You?" subtitle="A quick guide to navigating the different forms of protection." />
            <div className="overflow-x-auto">
                <table className="w-full text-left bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="p-6 text-[#FFB703] font-bold text-lg">Feature</th>
                            <th className="p-6 font-bold text-white">Trademark</th>
                            <th className="p-6 font-bold text-white">Copyright</th>
                            <th className="p-6 font-bold text-white">Patent</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80">
                        <tr>
                            <td className="p-6 font-bold text-white/90">Protects</td>
                            <td className="p-6">Brand Names, Logos, Slogans</td>
                            <td className="p-6">Creative Work, Software, Art</td>
                            <td className="p-6">Inventions, Machines, Formulas</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-bold text-white/90">Criteria</td>
                            <td className="p-6">Must be Distinctive & Unique</td>
                            <td className="p-6">Must be Original Creative Work</td>
                            <td className="p-6">Novelty + Utility + Non-Obvious</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-bold text-white/90">Duration</td>
                            <td className="p-6">10 Years (Renewable Forever)</td>
                            <td className="p-6">Lifetime + 60 Years</td>
                            <td className="p-6">20 Years (Non-Renewable)</td>
                        </tr>
                        <tr>
                            <td className="p-6 font-bold text-white/90">Time to Reg</td>
                            <td className="p-6">8 - 18 Months</td>
                            <td className="p-6">3 - 8 Months</td>
                            <td className="p-6">3 - 5 Years (Expedited: 1 Yr)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* 4. Startup Benefits (The "SIPP" Scheme) */}
        <section className="bg-gradient-to-br from-[#0c002b] to-indigo-950 p-8 sm:p-12 rounded-[30px] border border-[#FFB703]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB703]/5 rounded-full blur-[100px]" />
             <div className="relative z-10 grid md:grid-cols-12 gap-12 items-center">
                 <div className="md:col-span-7 space-y-6">
                     <div className="inline-block px-4 py-1 rounded-full bg-[#FFB703] text-black text-sm font-bold">
                         STARTUP INDIA BENEFITS
                     </div>
                     <h2 className="text-3xl sm:text-4xl font-bold text-white">Are you a DPIIT Recognized Startup?</h2>
                     <p className="text-lg text-white/80 leading-relaxed">
                         The Government of India's SIPP (Start-ups Intellectual Property Protection) scheme is a game-changer. As a recognized startup or MSME, you are eligible for massive subsidies and fast-track processing.
                     </p>
                     <ul className="space-y-4">
                         {[
                             "50% rebate on Trademark Government Fees",
                             "80% rebate on Patent Government Fees",
                             "Fast-track Patent Examination (Form 18A)",
                             "Access to Facilitators for reduced legal costs"
                         ].map((item, idx) => (
                             <li key={idx} className="flex items-center gap-3">
                                 <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                                 <span className="text-white font-bold">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
                 <div className="md:col-span-5 text-center">
                     <GlassCard className="bg-white/5 border-white/20">
                         <div className="text-6xl font-bold text-[#FFB703] mb-2">80%</div>
                         <div className="text-xl text-white font-bold uppercase tracking-wider mb-6">Fee Rebate</div>
                         <p className="text-sm text-white/60">
                             Don't pay full price. Let IPR Karo optimize your application under the Startup India scheme.
                         </p>
                     </GlassCard>
                 </div>
             </div>
        </section>

        {/* 5. Enforcement & Litigation */}
        <section>
            <SectionTitle title="Beyond Registration: Enforcement" subtitle="A certificate is paper. Enforcement is power." />
            <div className="grid md:grid-cols-3 gap-6">
                 {[
                     { 
                         title: "Cease & Desist Notices", 
                         desc: "The first shot across the bow. We draft stern legal notices to infringers demanding immediate stoppage of misuse." 
                     },
                     { 
                         title: "Takedown Notices", 
                         desc: "For digital infringement. We work with Amazon, Instagram, and Google to de-index and ban infringing listings within 48 hours." 
                     },
                     { 
                         title: "Litigation Support", 
                         desc: "When notices fail, we prepare the groundwork for civil suits, damages claims, and injunctions in the High Courts." 
                     }
                 ].map((item, idx) => (
                     <div key={idx} className="group p-8 rounded-2xl bg-[#11052C] border border-white/5 hover:border-[#FFB703] transition-colors">
                         <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                             <FontAwesomeIcon icon={faBalanceScale} className="text-[#FFB703]" />
                         </div>
                         <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                         <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                     </div>
                 ))}
            </div>
        </section>

        {/* Call to Action Wrapper */}
        <section className="text-center py-12">
            <p className="text-white/60 text-sm italic mb-6">
                Ready to secure your assets? Choose a plan below or consult our AI.
            </p>
            <FontAwesomeIcon icon={faChevronDown} className="text-[#FFB703] text-2xl animate-bounce" />
        </section>

      </div>
    </div>
  );
}

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
