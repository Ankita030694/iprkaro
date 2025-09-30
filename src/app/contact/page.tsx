'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

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
    'Trademark Registration & Protection',
    'Trademark Health Check & Risk Report',
    'AI-Powered Brand Search',
    'Intellectual Property Consultation',
    'Monitoring & Enforcement Solutions',
    'Something Else'
  ];

  return (
    <div 
    className="min-h-screen" 
    style={{
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(92, 75, 130), #ffffff)',
      backgroundSize: '120% 80%',
      backgroundPosition: '10% 20%',
      backgroundRepeat: 'no-repeat'
    }}
  >
      {/* Main Content Container */}
      <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-24 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            
            {/* Left Section - Content */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20 pt-16 sm:pt-0">
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
                <h1 className="font-nunito text-2xl sm:text-3xl md:text-4xl lg:text-[2.625rem] font-normal leading-tight text-white">
                  Your Brand's Trademark Registration Journey Starts Here — <span className="font-bold text-[#FFB703]">Connect With Expert Help</span>
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
            <div className="w-full">
              {/* Glassmorphism Container */}
              <div 
                className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
                  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
                  backdropFilter: 'blur(31.7px)',
                  WebkitBackdropFilter: 'blur(31.7px)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Basic Input Fields */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Name Field */}
                    <div className="space-y-1.5 sm:space-y-2">
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
                    <div className="space-y-1.5 sm:space-y-2">
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
                    <div className="space-y-1.5 sm:space-y-2">
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
                  <div className="space-y-3 sm:space-y-4">
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
                  <div className="space-y-1.5 sm:space-y-2">
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
                        rows={3}
                        className="w-full p-3 sm:p-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 resize-none font-nunito text-sm sm:text-base"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
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
      {/* <OfficeContact /> */}
      <div className="bg-[#0C002B]">
        <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12">
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
              <div className="flex items-center justify-start sm:justify-center w-full gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0">
                {[1, 2, 3, 4, 5, 6].map((cityNumber) => (
                  <div
                    key={cityNumber}
                    className="flex-shrink-0 p-2 sm:p-4 hover:border-white transition-all duration-300"
                  >
                    <Image
                      src={`/locations/city${cityNumber}.svg`}
                      alt={`City ${cityNumber} Location`}
                      width={120}
                      height={240}
                      className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] grayscale brightness-70 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
              {/* Nationwide Support & Service and City Details */}
              <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-12">
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
                {/* City Details Box */}
                <div
                  className="relative bg-gradient-to-br from-[#FFB703] via-[#1345C3] to-[#069A81] p-1 rounded-2xl shadow-lg w-full max-w-xl md:max-w-lg"
                  style={{
                    boxShadow: '0 8px 32px 0 rgba(12,0,43,0.18), 0 1.5px 8px 0 rgba(6,154,129,0.10)',
                  }}
                >
                  <div className="bg-[#0C002B] rounded-2xl p-6 sm:p-8 flex flex-col gap-4 items-start text-left relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-city text-[#FFB703] text-xl sm:text-2xl" aria-hidden="true"></i>
                      <span className="font-nunito font-bold text-white text-lg sm:text-xl md:text-2xl tracking-tight">
                        City-Specific Trademark Services
                      </span>
                    </div>
                    <ul className="space-y-4 mt-2 w-full max-w-xl">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">New Delhi:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            Trademark registration online, AI trademark risk analysis, fast approvals
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">Mumbai:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            How to register trademark, expert legal review, AI search report
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">Kolkata:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            AI-powered trademark search India, register trademark with risk reports
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">Jaipur:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            Instant online trademark filing, advanced similarity check, legal compliance
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">Bangalore:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            Brand monitoring, AI trademark conflict detection, startup support
                          </span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 mt-1">
                          <i className="fas fa-location-dot text-[#FFB703] text-base" aria-hidden="true"></i>
                        </span>
                        <span>
                          <span className="font-semibold text-[#FFB703]">Chennai:</span>{" "}
                          <span className="text-white font-nunito text-base sm:text-lg font-normal leading-relaxed">
                            Trademark registration with AI search report, regional expertise, end-to-end filing
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Decorative Gradient Glow */}
                  <div
                    className="absolute -inset-1 rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(ellipse at 60% 40%, rgba(6,154,129,0.13) 0%, rgba(255,183,3,0.10) 60%, transparent 100%)',
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
    </div>
  );
}
