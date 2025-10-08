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
      className="rounded-xl p-4 md:p-6"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
        boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
        backdropFilter: 'blur(31.7px)',
        WebkitBackdropFilter: 'blur(31.7px)'
      }}
    >
      <div className="text-center mb-4">
        <h3 className="text-white font-nunito text-lg md:text-xl font-semibold mb-2">
          Get Free Consultation
        </h3>
        <p className="text-white font-nunito text-sm opacity-80">
          Speak with our trademark experts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div className="space-y-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-sm"
            placeholder="Your Name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-sm"
            placeholder="Email Address"
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-1">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border-0 outline-0 font-nunito text-sm"
            placeholder="Phone Number"
          />
        </div>

        {/* Interest Radio Buttons */}
        <div className="space-y-2">
          <label className="block text-white font-nunito text-sm font-medium">
            Interested In *
          </label>
          <div className="space-y-1">
            {interestOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-2 rounded transition-colors"
                onClick={() => handleRadioChange(option)}
              >
                <div className="relative flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15" cy="15" r="14.5" stroke="white" strokeWidth="1" />
                    {formData.interest === option && (
                      <circle cx="15" cy="15" r="6" fill="white" />
                    )}
                  </svg>
                </div>
                <span className="text-white font-nunito text-xs">
                  {option}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg font-nunito font-semibold text-sm transition-all duration-300 hover:scale-105"
          style={{
            background: '#FFB703',
            color: '#0C002B'
          }}
        >
          Get Consultation
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="text-center">
          <p className="text-white font-nunito text-xs opacity-80 mb-2">
            Or call us directly
          </p>
          <a
            href="tel:+91-XXXX-XXXXXX"
            className="text-[#FFB703] font-nunito text-sm font-medium hover:underline"
          >
            +91-XXXX-XXXXXX
          </a>
        </div>
      </div>
    </div>
  );
}
