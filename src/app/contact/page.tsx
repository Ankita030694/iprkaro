'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import OurHeadOffice from '@/components/OurHeadOffice';
import { CitiesAndTerritories } from '@/components';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactFaqs = [
    {
      question: "How can I contact IPR Karo for support?",
      answer: "You can reach us via email at info@iprkaro.com, through our contact form on this page, or by calling our support team. We provide 24/7 online support for all trademark, copyright, and patent registration queries."
    },
    {
      question: "Do you have physical offices I can visit?",
      answer: "Yes, we have offices in major cities across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata. However, our services are 100% available online, so you can complete your entire trademark registration from anywhere in India."
    },
    {
      question: "What are your response times for queries?",
      answer: "We typically respond to all queries within 2-4 hours during business hours. For urgent matters, our AI-powered chat support is available 24/7 to provide instant answers and guidance on trademark searches and registration processes."
    },
    {
      question: "Can I schedule a consultation with an IP expert?",
      answer: "Yes! You can schedule a free consultation with our IP attorneys through our contact form or by emailing us. Our experts will review your trademark needs, discuss registration strategy, and provide personalized legal guidance."
    },
    {
      question: "How do I track my trademark application status?",
      answer: "Once you register with IPR Karo, you'll receive regular updates via email and SMS. You can also log into your dashboard to track your application status in real-time, view documents, and communicate directly with your assigned legal expert."
    }
  ];

  // Schema markup for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const interestOptions = [
    'Trademark Registration',
    'Copyright Protection',
    'Patent Services'
  ];

  return (
    <div
    className="min-h-screen"
    style={{
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
      backgroundSize: '100% 80%',
      backgroundPosition: '10% 20%',
      backgroundRepeat: 'no-repeat',
      marginTop: '-100px',
      paddingTop: '100px'
    }}
  >
      {/* Main Content Container with Responsive Scaling */}
      <div
        className="w-full pt-28 sm:pt-32 md:pt-36 lg:pt-36"
        style={{
          transform: 'scale(0.9)',
          transformOrigin: 'top center',
        }}
      >
        {/* Large screen scaling */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1024px) {
              .origin-top {
                transform: scale(0.8) !important;
              }
            }
          `
        }} />

        <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-start">
            
            {/* Left Section - Content */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10 mt-4 sm:mt-6 md:mt-8 lg:mt-8">
              {/* IPR Logo */}
              <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-27 md:h-27 relative">
                  <Image
                    src="/logo/iprlogo.svg"
                    alt="IPR Karo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
          
              </div>

              {/* Content Section */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Section Label */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFB703]"></div>
                  <span className="text-[rgba(255,255,255,0.8)] font-nunito text-xs sm:text-sm font-normal tracking-wider uppercase">
                    CONNECT WITH US
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-nunito text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal leading-tight text-white">
                  Your Brand's Trademark Registration Journey Starts Here: <span className="font-bold text-[#FFB703]">Connect With Expert Help</span>
                </h1>

                {/* Description */}
                <p className="text-[rgba(255,255,255,0.85)] font-nunito text-base sm:text-lg md:text-xl font-normal max-w-2xl">
                  IPR Karo simplifies trademark registration in India using AI-powered search, risk reports, and expert legal support.<br />
                  Start by searching your trademark availability, get instant AI conflict analysis, and file online for fast, reliable protection.
                </p>

                {/* Email Contact */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <a
                    href="mailto:info@iprkaro.com"
                    className="text-white font-nunito text-base sm:text-lg md:text-xl font-normal underline decoration-1 underline-offset-2 hover:text-[#FFB703] transition-colors"
                  >
                    info@iprkaro.com
                  </a>
                  <button
                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-md bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
                    aria-label="Send Email"
                  >
                    <i className="fas fa-paper-plane text-[#0C002B] text-lg sm:text-xl" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full flex justify-center lg:justify-start">
              {/* Glassmorphism Container */}
              <div
                className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-7 w-full"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
                  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
                  backdropFilter: 'blur(31.7px)',
                  WebkitBackdropFilter: 'blur(31.7px)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5 md:space-y-4">
                  {/* Basic Input Fields */}
                  <div className="space-y-2 sm:space-y-2.5">
                    {/* Name Field */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="block text-white font-nunito text-base sm:text-lg font-normal">
                        Name
                      </label>
                      <div 
                        className="h-10 sm:h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm sm:text-base"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="block text-white font-nunito text-base sm:text-lg font-normal">
                        Email
                      </label>
                      <div 
                        className="h-10 sm:h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm sm:text-base"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="block text-white font-nunito text-base sm:text-lg font-normal">
                        Phone No.
                      </label>
                      <div 
                        className="h-10 sm:h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm sm:text-base"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interest Section */}
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="text-white font-nunito text-base sm:text-lg font-normal">
                      What are you Interested in? <span className="text-red-500">*</span>
                    </div>
                    
                    {/* Radio Options */}
                    <div className="space-y-1">
                      {interestOptions.map((option, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-white/5 p-1.5 sm:p-2 rounded-lg transition-colors" 
                          onClick={() => handleRadioChange(option)}
                        >
                          <div className="relative flex-shrink-0">
                            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15" cy="15" r="14.5" stroke="white" strokeWidth="1" />
                              {formData.interest === option && (
                                <circle cx="15" cy="15" r="6" fill="white" />
                              )}
                            </svg>
                          </div>
                          <span className="text-[rgba(255,255,255,0.8)] font-nunito text-xs sm:text-sm font-normal">
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="block text-white font-nunito text-base sm:text-lg font-normal">
                      Write a message
                    </label>
                    <div 
                      className="rounded-lg"
                      style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={2}
                        className="w-full p-2.5 sm:p-3 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 resize-none font-nunito text-sm sm:text-base"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-2 sm:py-2.5 px-6 sm:px-8 rounded-lg bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
                  >
                    <span className="text-[#0C002B] font-nunito text-base sm:text-lg font-medium">
                      Submit Form
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurHeadOffice />
      <div className="bg-[#0C002B] min-h-screen flex items-center">
        <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-20">
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-6">
              <div
                className="text-white text-center font-nunito font-semibold"
                style={{
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  lineHeight: 'clamp(28px, 5vw, 40px)',
                }}
              >
                Our Locations
              </div>
              <div
                className="text-[rgba(255,255,255,0.8)] text-center font-nunito font-normal"
                style={{
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  lineHeight: 'clamp(18px, 3vw, 26px)',
                  maxWidth: 600,
                }}
              >
                Trusted Trademark Registration and <span className="whitespace-nowrap">AI-Powered</span> Search Across India’s Leading Cities
              </div>
              {/* Location Images */}
              <div className="flex items-center justify-center w-full gap-2 sm:gap-2.5 md:gap-10 flex-wrap sm:flex-nowrap">
                {[1, 2, 3, 4, 5, 6].map((cityNumber) => (
                  <div
                    key={cityNumber}
                    className="flex-shrink-0 p-1 sm:p-1.5 hover:border-white transition-all duration-300"
                  >
                    <Image
                      src={`/locations/city${cityNumber}.svg`}
                      alt={`City ${cityNumber} Location`}
                      width={100}
                      height={100}
                      className="w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] lg:w-[155px] lg:h-[155px] grayscale brightness-70 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              {/* Nationwide Support & Service and City Details */}
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-4a">
                {/* Nationwide Support & Service Box */}
                <div
                  className="relative bg-gradient-to-br from-[#1345C3] via-[#069A81] to-[#FFB703] p-1 rounded-2xl shadow-lg w-full max-w-xl md:max-w-lg"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(12,0,43,0.25), 0 1.5px 8px 0 rgba(255,183,3,0.10)',
                  }}
                >
                  <div className="bg-[#0C002B] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 items-start text-left relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-headset text-[#FFB703] text-xl sm:text-2xl" aria-hidden="true"></i>
                      <span className="font-nunito font-bold text-white text-xl sm:text-2xl md:text-3xl tracking-tight">
                        Nationwide Support &amp; Service
                      </span>
                    </div>
                    <ul className="space-y-4 mt-2 w-full max-w-xl">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-globe-asia text-[#069A81] text-lg" aria-hidden="true"></i>
                        </span>
                        <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                          Register trademark online from any location in India
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-search text-[#1345C3] text-lg" aria-hidden="true"></i>
                        </span>
                        <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                          Get AI-powered trademark search and risk reports tailored for major cities
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-balance-scale text-[#FFB703] text-lg" aria-hidden="true"></i>
                        </span>
                        <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                          Legal guidance, monitoring, and IP protection available for startups, SMEs, and enterprises
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Decorative Gradient Glow */}
                  <div
                    className="absolute -inset-1 rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 60% 40%, rgba(255,183,3,0.18) 0%, rgba(19,69,195,0.10) 60%, transparent 100%)',
                      zIndex: 0,
                      filter: 'blur(8px)',
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-[57.6px] relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
          <div className="absolute bottom-0 right-0 w-[69.12px] h-[69.12px] rounded-full blur-[2.16rem]" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
        </div>

        <div className="mx-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left Section - Questions */}
            <div className="space-y-[28.8px] flex flex-col justify-start">
              <div className="space-y-[18px]">
                <h2 className="text-white text-left font-nunito text-[23.4px] md:text-[36px] font-medium leading-[28.8px] md:leading-[39.6px] w-full">
                  Have Question?
                  <br />
                  <span style={{ color: '#FFB703' }}>
                    We've Got Answers.
                  </span>
                </h2>

                <p className="text-white font-nunito text-[10.8px] md:text-[12.6px] lg:text-[13.5px] xl:text-[14.4px] font-medium">
                  Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
                </p>
              </div>

              {/* AI Input */}
              <form onSubmit={(e) => { e.preventDefault(); console.log('AI Question submitted'); }} className="relative">
                <div className="relative bg-white/50 backdrop-blur-sm border border-purple-400/30 rounded-[10.8px] p-[14.4px] max-w-lg">
                  <input
                    type="text"
                    placeholder="Smart AI, Ask me Anything...."
                    className="bg-transparent text-white placeholder-white outline-none text-[14.4px]"
                  />
                  <button
                    type="submit"
                    className="absolute right-[14.4px] top-1/2 transform -translate-y-1/2 transition-colors"
                    style={{ color: '#FFB703' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} className="w-[18px] h-[18px]" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Section - FAQ Items */}
            <div
              className="space-y-[14.4px] p-[21.6px]"
              style={{
                borderRadius: '14.4px',
                background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',
                boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',
                backdropFilter: 'blur(87.876px)'
              }}
            >
              {contactFaqs.map((faq, index) => (
                <div key={index} className="relative">
                  <div
                    className="p-[18px] cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                    style={{
                      borderRadius: '10.8px',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      ...(openFaq === index ? { boxShadow: `0 0 0 1.44px #FFB70380` } : {})
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center mb-[10.8px]">
                      <h3 className="text-white font-nunito text-[13.5px] md:text-[16.2px] lg:text-[19.8px] font-semibold pr-[14.4px] leading-snug">
                        {faq.question}
                      </h3>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-[18px] h-[18px] transition-all duration-500 ease-in-out flex-shrink-0 ${
                          openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        style={{ color: '#000000' }}
                      />
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openFaq === index ? 'max-h-[345.6px] opacity-100 mt-0' : 'max-h-0 opacity-0 -mt-[14.4px]'
                      }`}
                    >
                      <div className="mt-[14.4px] pt-[14.4px] border-t border-black/20 transform transition-all duration-500 ease-in-out">
                        <p className="text-white font-nunito text-[10.8px] md:text-[11.7px] lg:text-[12.6px] xl:text-[13.5px] font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CitiesAndTerritories />
    </div>
  );
}
