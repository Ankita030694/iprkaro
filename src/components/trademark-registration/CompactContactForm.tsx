'use client';

import React, { useState } from 'react';

export default function CompactContactForm() {
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
    'Trademark Registration',
    'Copyright Protection',
    'Patent Services'
  ];

  return (
    <div
      className="rounded lg:rounded-md xl:rounded-lg p-1 md:p-1.5 lg:p-2 xl:p-2.5 2xl:p-3"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
        backdropFilter: 'blur(31.7px)',
        WebkitBackdropFilter: 'blur(31.7px)'
      }}
    >
      <div className="text-center mb-1 lg:mb-1.5 xl:mb-2">
        <h3 className="text-white font-nunito text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold mb-0.5 lg:mb-0.5 xl:mb-1">
          Get Free Consultation
        </h3>
        <p className="text-white font-nunito text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm opacity-80">
          Speak with our trademark experts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-1 lg:space-y-1.5 xl:space-y-1.5">
        {/* Name Field */}
        <div className="space-y-0.5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-1.5 lg:px-1.5 xl:px-1.5 2xl:px-2 py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-1 rounded-sm lg:rounded xl:rounded-md bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-xs"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-0.5">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-1.5 lg:px-1.5 xl:px-1.5 2xl:px-2 py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-1 rounded-sm lg:rounded xl:rounded-md bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-xs"
            placeholder="Email Address"
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-0.5">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-1.5 lg:px-1.5 xl:px-1.5 2xl:px-2 py-0.5 lg:py-0.5 xl:py-0.5 2xl:py-1 rounded-sm lg:rounded xl:rounded-md bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-[10px] lg:text-[10px] xl:text-[10px] 2xl:text-xs"
            placeholder="Phone Number"
          />
        </div>

        {/* Interest Radio Buttons */}
        <div className="space-y-1 lg:space-y-1.5 xl:space-y-2">
          <label className="block text-white font-nunito text-[10px] lg:text-xs xl:text-sm 2xl:text-base font-medium">
            Interested In *
          </label>
          <div className="space-y-0.5 lg:space-y-1 xl:space-y-1.5">
            {interestOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-1 lg:gap-1.5 xl:gap-2 cursor-pointer hover:bg-white/5 p-1 lg:p-1.5 xl:p-2 2xl:p-2.5 rounded lg:rounded-md xl:rounded-lg transition-colors"
                onClick={() => handleRadioChange(option)}
              >
                <div className="relative flex-shrink-0">
                  <svg className="w-2 h-2 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 2xl:w-3.5 2xl:h-3.5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="14.5" stroke="white" strokeWidth="1" />
                    {formData.interest === option && (
                      <circle cx="15" cy="15" r="4" fill="white" />
                    )}
                  </svg>
                </div>
                <span className="text-white font-nunito text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                  {option}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-1 lg:py-1.5 xl:py-2 2xl:py-3 px-1.5 lg:px-2 xl:px-3 2xl:px-3.5 rounded lg:rounded-md xl:rounded-lg font-nunito font-semibold text-[10px] lg:text-xs xl:text-sm 2xl:text-base transition-all duration-300 hover:scale-105"
          style={{
            background: '#FFB703',
            color: '#0C002B'
          }}
        >
          Get Consultation
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-1.5 lg:mt-2 xl:mt-3 pt-1.5 lg:pt-2 xl:pt-2.5 border-t border-white/20">
        <div className="text-center">
          <p className="text-white font-nunito text-[10px] lg:text-xs xl:text-sm 2xl:text-base opacity-80 mb-0.5 lg:mb-1 xl:mb-1.5">
            Or call us directly
          </p>
          <a
            href="tel:+91-XXXX-XXXXXX"
            className="text-[#FFB703] font-nunito text-[10px] lg:text-xs xl:text-sm 2xl:text-base font-medium hover:underline"
          >
            +91-XXXX-XXXXXX
          </a>
        </div>
      </div>
    </div>
  );
}
