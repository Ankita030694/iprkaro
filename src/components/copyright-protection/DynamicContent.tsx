'use client';

import React from 'react';

interface DynamicContentProps {
  stateName: string;
}

export default function DynamicContent({ stateName }: DynamicContentProps) {
  const documentsRequired = [
    "Applicant's identity proof (PAN/Aadhaar/Passport)",
    "Address proof of the applicant",
    "Work sample (manuscript, music file, software code, design)",
    "NOC from publisher/author (if applicable)",
    "Incorporation certificate (for companies)",
    "Power of Attorney (if applicable)",
    "Declaration of authorship",
    "Nature of applicant's interest",
    "Publication details (if published)",
    "Brief description of the work"
  ];

  const processSteps = [
    {
      step: "Work identification and classification",
      description: "Identifying the type of creative work and appropriate category"
    },
    {
      step: "Application preparation (Form XIV)",
      description: "Drafting copyright application with all required details"
    },
    {
      step: "Submission to Copyright Office",
      description: "Filing application with supporting documents and fees"
    },
    {
      step: "Diary number issuance",
      description: "Acknowledgment received with tracking number"
    },
    {
      step: "Examination and registration",
      description: "Copyright Office reviews and issues certificate"
    }
  ];

  const getStateSpecificContent = (stateName: string) => {
    const stateContent: { [key: string]: string } = {
      'Jharkhand': `Jharkhand's creative economy is growing rapidly with increasing digital content creators, artists, and software developers. Copyright protection in Jharkhand ensures your original works—whether literary, artistic, musical, or digital—receive legal recognition and safeguard against unauthorized use.`,
      'Delhi': `As India's capital and cultural hub, Delhi hosts countless creators, filmmakers, musicians, and digital artists. Copyright protection in Delhi is essential for safeguarding creative works in this vibrant, competitive market where content theft is a significant concern.`,
      'Maharashtra': `Mumbai, the entertainment capital of India, makes Maharashtra a hotspot for creative industries. Copyright protection in Maharashtra is crucial for filmmakers, musicians, authors, and digital creators to protect their intellectual property in this dynamic ecosystem.`,
      'Karnataka': `Bangalore's thriving tech and creative industry makes copyright protection in Karnataka essential for software developers, content creators, and digital artists. Protect your code, designs, and creative works in this innovation hub.`,
      'Tamil Nadu': `Tamil Nadu's rich cultural heritage and growing film industry make copyright protection vital for artists, musicians, and content creators. Secure your creative works in this culturally vibrant state.`,
      'Gujarat': `Gujarat's expanding digital economy and creative sector require robust copyright protection. From software to artistic works, ensure your creativity is legally protected in this business-friendly state.`,
      'West Bengal': `Kolkata's literary and artistic heritage makes copyright protection in West Bengal crucial for authors, artists, and cultural creators. Protect your intellectual property in this culturally rich region.`,
      'Rajasthan': `Rajasthan's growing digital content creation and traditional arts sector needs copyright protection to safeguard original works from unauthorized use and infringement.`,
      'Uttar Pradesh': `With a booming creative economy, copyright protection in Uttar Pradesh helps creators, developers, and artists secure their original works across multiple industries.`,
      'Punjab': `Punjab's vibrant music and creative industry requires strong copyright protection for musicians, filmmakers, and digital creators to prevent unauthorized use of their works.`
    };

    return stateContent[stateName] || `Complete guide to copyright protection in ${stateName}. Protect your creative works—literary, artistic, musical, and digital content—with our expert legal guidance. Our comprehensive copyright services ensure your original creations receive the legal protection they deserve across all creative sectors in ${stateName}.`;
  };

  return (
    <div className="space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12">
      {/* Overview Section */}
      <section id="overview" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-5">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              An Overview of copyright protection in {stateName}
            </h2>
          </div>

          <div 
            className="group relative p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-lg lg:rounded-xl xl:rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.01]"
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Decorative gradient overlay on hover */}
            <div 
              className="absolute inset-0 rounded-lg lg:rounded-xl xl:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.05) 0%, rgba(19, 69, 195, 0.05) 100%)'
              }}
            />
            <p className="relative text-white/95 font-nunito text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg leading-relaxed">
              {getStateSpecificContent(stateName)}
            </p>
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section id="criteria" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4 xl:space-y-5">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Criteria for Copyright protection in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5">
            {/* Original Work Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)',
                border: '1px solid rgba(255, 183, 3, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-lightbulb text-[#0C002B] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Original Work
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Work must be original and creative
              </p>
            </div>

            {/* Fixed Form Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-file-alt text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Fixed Form
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Must be expressed in tangible form
              </p>
            </div>

            {/* Individual/Entity Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-user text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Author/Creator
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Individual or entity can register
              </p>
            </div>

            {/* Proof of Creation Card */}
            <div 
              className="group relative p-3 lg:p-4 xl:p-5 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="flex items-center gap-2 lg:gap-3 mb-2">
                <div 
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-check-circle text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Proof Required
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Evidence of creation and ownership
              </p>
            </div>
          </div>

          {/* Fast Registration CTA */}
          <div 
            className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-xl lg:rounded-2xl group hover:scale-[1.02] transition-all duration-500"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 183, 3, 0.2)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#FFB703] blur-3xl animate-float" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
            
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 lg:gap-4">
              <div className="flex items-start gap-3 lg:gap-4">
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(255, 183, 3, 0.15)',
                    border: '1px solid rgba(255, 183, 3, 0.3)'
                  }}
                >
                  <i className="fas fa-copyright text-[#FFB703] text-lg lg:text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1.5">
                    Complete Copyright Protection Fast
                  </h3>
                  <p className="text-white/95 font-nunito text-xs lg:text-sm xl:text-base">
                    Register Copyright with IPRKaro - Just <span className="font-bold text-[#FFB703]">₹1,999/-</span>
                  </p>
                </div>
              </div>
              <button 
                className="group/btn relative px-5 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-lg font-nunito font-bold text-xs lg:text-sm xl:text-base transition-all duration-300 hover:scale-105 overflow-hidden whitespace-nowrap"
                style={{ 
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  color: '#0C002B',
                  boxShadow: '0 8px 25px rgba(255, 183, 3, 0.4)'
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Apply Now
                  <i className="fas fa-arrow-right group-hover/btn:translate-x-1 transition-transform text-[10px]" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Documents required for copyright protection in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
            {documentsRequired.map((document, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-2 p-3 lg:p-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                  style={{
                    background: '#FFB703',
                    boxShadow: '0 0 10px rgba(255, 183, 3, 0.5)'
                  }}
                />
                <span className="text-white/95 font-nunito text-xs md:text-sm lg:text-base">
                  {document}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Process for copyright protection in {stateName}
            </h2>
          </div>

          <div className="relative space-y-3 lg:space-y-4">
            {/* Connecting line */}
            <div 
              className="absolute left-4 lg:left-5 top-0 bottom-0 w-0.5"
              style={{
                background: 'rgba(255, 183, 3, 0.3)',
                opacity: 0.5
              }}
            />
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex gap-3 lg:gap-4">
                {/* Step Number Badge */}
                <div 
                  className="relative z-10 flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-nunito font-bold text-sm lg:text-base"
                  style={{ 
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  {index + 1}
                </div>
                
                {/* Step Content */}
                <div 
                  className="flex-1 p-3 lg:p-4 rounded-lg lg:rounded-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h4 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold mb-1.5">
                    {step.step}
                  </h4>
                  <p className="text-white/90 font-nunito text-xs lg:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validity Section */}
      <section id="validity" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              Validity of Copyright Protection
            </h2>
          </div>

          <div 
            className="relative p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Icon Badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full mb-3"
              style={{
                background: 'rgba(255, 183, 3, 0.15)',
                border: '1px solid rgba(255, 183, 3, 0.3)'
              }}
            >
              <i className="fas fa-infinity text-[#FFB703] text-xs" aria-hidden="true"></i>
              <span className="text-white font-nunito text-xs font-semibold">Lifetime + 60 Years</span>
            </div>
            
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
              Copyright protection in India lasts for the lifetime of the author plus 60 years after their death. For works like films, sound recordings, and government publications, the validity is 60 years from the date of publication.
            </p>
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
              Unlike trademarks, copyrights do not require renewal. Once registered, your creative work remains protected for the entire duration automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="scroll-mt-20">
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
            <div 
              className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rounded-full relative"
              style={{
                background: '#FFB703',
                boxShadow: '0 0 20px rgba(255, 183, 3, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: '#FFB703', opacity: 0.4 }}
              />
            </div>
            <h2 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
              IPRKaro Support
            </h2>
          </div>

          <div 
            className="relative overflow-hidden p-4 lg:p-5 xl:p-6 rounded-lg lg:rounded-xl backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 183, 3, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
            
            <div className="relative">
              {/* Support Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <i className="fas fa-check-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">End-to-End Support</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Complete guidance throughout</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fas fa-users text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Expert Team</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Experienced legal counsel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fas fa-bolt text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Quick Process</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Fast registration service</p>
                  </div>
                </div>
              </div>
              
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                At IPRKaro, we will provide you with end-to-end support to achieve your copyright protection in {stateName} with minimum resources. Complete support from our legal team will be given till the end of the copyright registration process in {stateName}.
              </p>
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                Our copyright counsel will support you from start to end until you get your copyright registration. If you are eager to get copyright protection in {stateName}, then our IPRKaro team will help you get your copyright registration done quickly. We also extend our help in other intellectual property matters if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

