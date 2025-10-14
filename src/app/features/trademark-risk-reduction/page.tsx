import React from 'react';
import Link from 'next/link';

export default function TrademarkRiskReduction() {
  return (
    <div className="min-h-screen pb-16 px-2 lg:px-4 pt-32" style={{
      background: '#0C002B',
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Trademark Risk Reduction & Protection Services in India
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto px-4 leading-relaxed">
            Reduce trademark registration risks in India with comprehensive risk assessment, advanced search methodologies,
            and expert legal analysis. Maximize approval chances and minimize conflicts with our proven risk reduction strategies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-white/10">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Comprehensive Risk Assessment</h2>
              <p className="text-gray-300 leading-relaxed">
                Our advanced trademark risk reduction service identifies potential conflicts, similarities, and
                opposition risks before you file your application. We use comprehensive search methodologies
                combined with expert legal analysis to minimize the likelihood of objections and maximize your
                chances of successful registration.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Risk Categories We Analyze</h2>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/20 rounded-lg border border-red-400/30">
                  <h3 className="text-white font-semibold mb-2">🔴 High Risk Conflicts</h3>
                  <p className="text-gray-300 text-sm">
                    Identical or nearly identical trademarks that could lead to certain opposition or rejection.
                  </p>
                </div>
                <div className="p-4 bg-orange-500/20 rounded-lg border border-orange-400/30">
                  <h3 className="text-white font-semibold mb-2">🟠 Medium Risk Similarities</h3>
                  <p className="text-gray-300 text-sm">
                    Phonetically or visually similar marks that may cause confusion but could be overcome with arguments.
                  </p>
                </div>
                <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                  <h3 className="text-white font-semibold mb-2">🟡 Low Risk Concerns</h3>
                  <p className="text-gray-300 text-sm">
                    Minor similarities or weak marks that pose minimal risk to your application.
                  </p>
                </div>
                <div className="p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <h3 className="text-white font-semibold mb-2">🟢 Clear for Registration</h3>
                  <p className="text-gray-300 text-sm">
                    No significant conflicts found - your mark appears safe for registration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Advanced Search Methodologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-400 mr-2">🔍</span>
                    <span className="text-gray-300">Comprehensive Database Search</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">🔍</span>
                    <span className="text-gray-300">Phonetic Similarity Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-2">🔍</span>
                    <span className="text-gray-300">Visual Similarity Detection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-2">🔍</span>
                    <span className="text-gray-300">Common Law Search</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-red-400 mr-2">🔍</span>
                    <span className="text-gray-300">Domain Name Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-indigo-400 mr-2">🔍</span>
                    <span className="text-gray-300">Social Media Screening</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-pink-400 mr-2">🔍</span>
                    <span className="text-gray-300">International Database Check</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-400 mr-2">🔍</span>
                    <span className="text-gray-300">Industry-Specific Research</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tools & Results */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Risk Reduction Tools</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg border border-blue-400/30">
                  <h3 className="text-white font-semibold mb-2">📊 Risk Scoring Algorithm</h3>
                  <p className="text-gray-300 text-sm">
                    Proprietary algorithm calculates precise risk scores for each potential conflict found.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg border border-green-400/30">
                  <h3 className="text-white font-semibold mb-2">⚖️ Legal Analysis</h3>
                  <p className="text-gray-300 text-sm">
                    Expert attorneys review all findings and provide actionable recommendations.
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg border border-purple-400/30">
                  <h3 className="text-white font-semibold mb-2">🛡️ Mitigation Strategies</h3>
                  <p className="text-gray-300 text-sm">
                    Detailed strategies to overcome identified risks and strengthen your application.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Reduce Your Risk Today</h2>
              <p className="text-white/90 mb-6">
                Get comprehensive risk assessment and expert guidance to maximize your trademark registration success.
              </p>
              <Link href="/contact" className="cursor-pointer"> 
              <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Get Risk Assessment
              </button>
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">Success Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/10 rounded">
                  <div className="text-3xl font-bold text-green-400 mb-1">94%</div>
                  <div className="text-white text-sm">First-time Approval Rate</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded">
                  <div className="text-3xl font-bold text-blue-400 mb-1">87%</div>
                  <div className="text-white text-sm">Risk Issues Resolved</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded">
                  <div className="text-3xl font-bold text-purple-400 mb-1">2.3</div>
                  <div className="text-white text-sm">Avg. Conflicts per Search</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">₹15K</div>
                  <div className="text-white text-sm">Avg. Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div style={{ backgroundColor: '#0C002B', paddingTop: '1px' }}>
        {/* Risk Mitigation Process */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Our Risk Mitigation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Comprehensive Search</h3>
              <p className="text-gray-300 text-sm">
                Multi-database search covering registered and common law trademarks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Risk Analysis</h3>
              <p className="text-gray-300 text-sm">
                AI-powered analysis identifies potential conflicts and opposition risks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Expert Review</h3>
              <p className="text-gray-300 text-sm">
                Qualified attorneys review findings and provide legal recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Clearance Report</h3>
              <p className="text-gray-300 text-sm">
                Detailed report with risk assessment and registration recommendations
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 md:mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-white/10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">What is trademark risk reduction?</h3>
                <i className="fas fa-chevron-down text-[#FFB400] group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300">
                  Trademark risk reduction involves comprehensive risk assessment, advanced search methodologies, and expert legal analysis
                  to identify potential conflicts, similarities, and opposition risks before filing your trademark application.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">Why do I need trademark risk assessment?</h3>
                <i className="fas fa-chevron-down text-[#FFB400] group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300">
                  Trademark risk assessment helps identify potential conflicts early, calculate precise risk scores, and develop mitigation strategies.
                  This maximizes your approval chances and reduces the likelihood of expensive opposition proceedings.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">What search methodologies do you use?</h3>
                <i className="fas fa-chevron-down text-[#FFB400] group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300">
                  We use comprehensive database search, phonetic similarity analysis, visual similarity detection, common law search,
                  domain name analysis, social media screening, international database check, and industry-specific research.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">How accurate is your risk assessment?</h3>
                <i className="fas fa-chevron-down text-[#FFB400] group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300">
                  Our proprietary algorithm combined with expert legal review provides 94% first-time approval rate and resolves 87% of identified risk issues.
                  We provide detailed risk scoring for each potential conflict found.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-white font-semibold">What happens if risks are identified?</h3>
                <i className="fas fa-chevron-down text-[#FFB400] group-open:rotate-180 transition-transform"></i>
              </summary>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300">
                  If risks are identified, our experts provide detailed mitigation strategies, alternative trademark suggestions,
                  and legal arguments to strengthen your application. We help you navigate potential conflicts effectively.
                </p>
              </div>
            </details>
          </div>
        </div>

        {/* Schema Markup for FAQs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is trademark risk reduction?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Trademark risk reduction involves comprehensive risk assessment, advanced search methodologies, and expert legal analysis to identify potential conflicts, similarities, and opposition risks before filing your trademark application."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why do I need trademark risk assessment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Trademark risk assessment helps identify potential conflicts early, calculate precise risk scores, and develop mitigation strategies. This maximizes your approval chances and reduces the likelihood of expensive opposition proceedings."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What search methodologies do you use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use comprehensive database search, phonetic similarity analysis, visual similarity detection, common law search, domain name analysis, social media screening, international database check, and industry-specific research."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How accurate is your risk assessment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our proprietary algorithm combined with expert legal review provides 94% first-time approval rate and resolves 87% of identified risk issues. We provide detailed risk scoring for each potential conflict found."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if risks are identified?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If risks are identified, our experts provide detailed mitigation strategies, alternative trademark suggestions, and legal arguments to strengthen your application. We help you navigate potential conflicts effectively."
                  }
                }
              ]
            })
          }}
        >
        </script>
      </div>
      </div>
      </div>
  );
}
