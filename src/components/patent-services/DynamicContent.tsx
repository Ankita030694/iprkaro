'use client';

import React from 'react';

interface DynamicContentProps {
  stateName: string;
}

export default function DynamicContent({ stateName }: DynamicContentProps) {
  const documentsRequired = [
    "Complete patent specification with claims",
    "Detailed description of the invention",
    "Drawings or diagrams (if applicable)",
    "Abstract of the invention",
    "Inventor's declaration and proof of ownership",
    "Priority document (if claiming priority)",
    "Power of Attorney (Form-26)",
    "Proof of right to apply",
    "Applicant's identity and address proof",
    "Search report (if available)"
  ];

  const processSteps = [
    {
      step: "Prior art search and patentability assessment",
      description: "Comprehensive search to assess novelty and inventiveness"
    },
    {
      step: "Patent specification drafting",
      description: "Preparing detailed technical and legal documentation"
    },
    {
      step: "Patent application filing",
      description: "Submission to Indian Patent Office with required forms"
    },
    {
      step: "Publication and examination request",
      description: "Application published and examination initiated"
    },
    {
      step: "Examination and grant",
      description: "Patent office examines claims and grants patent"
    }
  ];

  const getStateSpecificContent = (stateName: string) => {
    const stateContent: { [key: string]: string } = {
      'Jharkhand': `Jharkhand's growing industrial and technology sector makes patent protection essential for innovators and manufacturers. Patent services in Jharkhand help protect your inventions and technological innovations, providing exclusive rights to commercialize your discoveries.`,
      'Delhi': `As India's capital and a major hub for research and innovation, Delhi requires robust patent protection for inventors, startups, and research institutions. Patent services in Delhi ensure your inventions receive comprehensive legal protection.`,
      'Maharashtra': `Mumbai's thriving innovation ecosystem makes patent services in Maharashtra crucial for tech startups, pharmaceutical companies, and industrial manufacturers to protect their groundbreaking inventions.`,
      'Karnataka': `Bangalore's reputation as India's innovation capital makes patent services in Karnataka essential for tech companies, biotech firms, and individual inventors to protect their technological breakthroughs.`,
      'Tamil Nadu': `Tamil Nadu's strong manufacturing and automotive industry requires robust patent services to protect industrial innovations and technical inventions across multiple sectors.`,
      'Gujarat': `Gujarat's pharmaceutical and chemical industry leadership makes patent services vital for protecting process innovations and product inventions in this industrial powerhouse.`,
      'West Bengal': `West Bengal's growing technology and pharmaceutical sectors need strong patent protection to safeguard industrial innovations and research breakthroughs.`,
      'Rajasthan': `Rajasthan's emerging technology and manufacturing sector requires patent services to protect industrial innovations and technical inventions.`,
      'Uttar Pradesh': `With expanding industrial corridors, patent services in Uttar Pradesh help protect innovations across manufacturing, pharmaceuticals, and technology sectors.`,
      'Punjab': `Punjab's agricultural and industrial innovations require patent protection to safeguard technical inventions and process innovations.`
    };

    return stateContent[stateName] || `Complete guide to patent services in ${stateName}. Protect your inventions and technological innovations with our expert legal guidance. Our comprehensive patent services ensure your innovations receive the legal protection they deserve across all technical sectors in ${stateName}.`;
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
              An Overview of patent services in {stateName}
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
              Criteria for Patent registration in {stateName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 xl:gap-5">
            {/* Novelty Card */}
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
                  <i className="fas fa-star text-[#0C002B] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Novelty
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Invention must be new and not disclosed publicly
              </p>
            </div>

            {/* Inventive Step Card */}
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
                  <i className="fas fa-lightbulb text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Inventive Step
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Must be non-obvious to experts
              </p>
            </div>

            {/* Industrial Application Card */}
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
                  <i className="fas fa-industry text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Industrial Use
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Must be capable of industrial application
              </p>
            </div>

            {/* Technical Specification Card */}
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
                  <i className="fas fa-file-code text-[#FFB703] text-sm lg:text-base" aria-hidden="true"></i>
                </div>
                <span className="text-white font-nunito text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  Specification
                </span>
              </div>
              <p className="text-white/90 font-nunito text-xs lg:text-sm xl:text-base leading-relaxed">
                Detailed technical documentation required
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
                  <i className="fas fa-flask text-[#FFB703] text-lg lg:text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-1.5">
                    Complete Patent Filing Fast
                  </h3>
                  <p className="text-white/95 font-nunito text-xs lg:text-sm xl:text-base">
                    File Patent with IPRKaro - Starting at <span className="font-bold text-[#FFB703]">₹9,999/-</span>
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
              Documents required for patent services in {stateName}
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
              Process for patent registration in {stateName}
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
              Validity of Patent Protection
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
              <i className="fas fa-calendar text-[#FFB703] text-xs" aria-hidden="true"></i>
              <span className="text-white font-nunito text-xs font-semibold">20 Years Validity</span>
            </div>
            
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
              A patent in India is valid for 20 years from the date of filing of the patent application. The patent holder must pay maintenance fees annually to keep the patent active.
            </p>
            <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
              During this period, the patent holder has exclusive rights to manufacture, use, sell, or license the patented invention. After expiration, the invention enters the public domain.
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
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Patent attorneys</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fas fa-bolt text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                  <div>
                    <h4 className="text-white font-nunito font-semibold text-xs lg:text-sm mb-0.5">Quick Process</h4>
                    <p className="text-white/80 font-nunito text-[10px] lg:text-xs">Fast filing service</p>
                  </div>
                </div>
              </div>
              
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed mb-3">
                At IPRKaro, we will provide you with end-to-end support to achieve your patent protection in {stateName} with minimum resources. Complete support from our patent attorneys will be given till the end of the patent filing process in {stateName}.
              </p>
              <p className="text-white/95 font-nunito text-sm md:text-base lg:text-lg leading-relaxed">
                Our patent counsel will support you from start to end until you get your patent filed. If you are eager to get patent protection in {stateName}, then our IPRKaro team will help you get your patent filed quickly. We also extend our help in other intellectual property matters including trademark and copyright protection if needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

