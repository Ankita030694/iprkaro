'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

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
      {/* Navbar Overlay */}
      <Navbar />
      
      {/* Main Content Container */}
      <div className="w-full py-16 px-24 pt-32">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Section - Content */}
            <div className="space-y-12 mt-20">
              {/* IPR Logo */}
              <div className="flex items-center gap-4">
                <div className="w-27 h-27 relative">
                  <Image
                    src="/logo/iprlogo.svg"
                    alt="IPR Karo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
          
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                {/* Section Label */}
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#FFB703]"></div>
                  <span className="text-[rgba(255,255,255,0.8)] font-nunito text-sm font-normal tracking-wider uppercase">
                    CONNECT WITH US
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-nunito text-3xl md:text-4xl lg:text-[42px] font-normal leading-tight text-white">
                  Your Brand's Journey Starts Here, Let's{' '}
                  <span className="font-bold text-[#FFB703]">Connect Now</span>
                </h1>

                {/* Email Contact */}
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:info@iprkaro.com"
                    className="text-white font-nunito text-lg md:text-xl font-normal underline decoration-1 underline-offset-2 hover:text-[#FFB703] transition-colors"
                  >
                    info@iprkaro.com
                  </a>
                  <button className="flex items-center justify-center w-10 h-10 rounded-md bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4266 25.1023L29.1043 7.4246C28.6669 6.9874 28.0718 6.7439 27.4496 6.7474L14.8564 6.8233M29.7057 21.6725L29.7815 9.0793C29.7845 8.4574 29.5405 7.8627 29.1032 7.4257"
                        stroke="#0C002B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full">
              {/* Glassmorphism Container */}
              <div 
                className="rounded-2xl p-6 md:p-8 w-full"
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
                  boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
                  backdropFilter: 'blur(31.7px)',
                  WebkitBackdropFilter: 'blur(31.7px)'
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Input Fields */}
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="block text-white font-nunito text-lg font-normal">
                        Name
                      </label>
                      <div 
                        className="h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full h-full px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-base"
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="block text-white font-nunito text-lg font-normal">
                        Email
                      </label>
                      <div 
                        className="h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full h-full px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-base"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label className="block text-white font-nunito text-lg font-normal">
                        Phone No.
                      </label>
                      <div 
                        className="h-12 rounded-lg"
                        style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full h-full px-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-base"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interest Section */}
                  <div className="space-y-4">
                    <div className="text-white font-nunito text-lg font-normal">
                      What are you Interested in? <span className="text-red-500">*</span>
                    </div>
                    
                    {/* Radio Options */}
                    <div className="space-y-1">
                      {interestOptions.map((option, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-colors" 
                          onClick={() => handleRadioChange(option)}
                        >
                          <div className="relative flex-shrink-0">
                            <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15" cy="15" r="14.5" stroke="white" strokeWidth="1" />
                              {formData.interest === option && (
                                <circle cx="15" cy="15" r="6" fill="white" />
                              )}
                            </svg>
                          </div>
                          <span className="text-[rgba(255,255,255,0.8)] font-nunito text-sm font-normal">
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="block text-white font-nunito text-lg font-normal">
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
                        rows={4}
                        className="w-full p-4 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 resize-none font-nunito text-base"
                        placeholder="Tell us about your needs..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-3 px-8 rounded-lg bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
                  >
                    <span className="text-[#0C002B] font-nunito text-lg font-medium">
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
        <div className="w-full py-16 px-12">
          <div className="w-full mx-auto">
            <div className="flex flex-col justify-center items-center space-y-8">
              <div
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Nunito, sans-serif',
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: '45px',
                }}
              >
                Our Locations
              </div>
              
              {/* Location Images */}
              <div className="flex items-center justify-center w-full w-full gap-3 overflow-x-auto">
                {[1, 2, 3, 4, 5, 6].map((cityNumber) => (
                    <div key={cityNumber} className="flex-shrink-0 p-4 hover:border-white transition-all duration-300">
                      <Image
                        src={`/locations/city${cityNumber}.svg`}
                        alt={`City ${cityNumber} Location`}
                        width={120}
                        height={240}
                        className="w-[200px] h-[200px] grayscale brightness-70 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-300 object-cover rounded-lg"
                      />
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
