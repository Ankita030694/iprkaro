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
      className="rounded-lg lg:rounded-xl p-4 lg:p-5 xl:p-6 relative overflow-hidden"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 183, 3, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-[#FFB703] opacity-5 blur-3xl" />
      
      <div className="relative text-center mb-4">
        <div 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full mb-2"
          style={{
            background: 'linear-gradient(135deg, #FFB703, #FFA000)',
            boxShadow: '0 4px 15px rgba(255, 183, 3, 0.4)'
          }}
        >
          <i className="fas fa-comment-dots text-[#0C002B] text-base" aria-hidden="true"></i>
        </div>
        <h3 className="text-white font-nunito text-base md:text-lg font-bold mb-1.5">
          Get Free Consultation
        </h3>
        <p className="text-white/90 font-nunito text-xs">
          Speak with our trademark experts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative space-y-2.5">
        {/* Name Field */}
        <div className="space-y-0.5">
          <label className="text-white/80 font-nunito text-[10px] font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg text-white placeholder-white/50 border-0 outline-0 font-nunito text-xs transition-all duration-300 focus:scale-[1.02]"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-0.5">
          <label className="text-white/80 font-nunito text-[10px] font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg text-white placeholder-white/50 border-0 outline-0 font-nunito text-xs transition-all duration-300 focus:scale-[1.02]"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-0.5">
          <label className="text-white/80 font-nunito text-[10px] font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-lg text-white placeholder-white/50 border-0 outline-0 font-nunito text-xs transition-all duration-300 focus:scale-[1.02]"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        {/* Interest Radio Buttons */}
        <div className="space-y-1.5">
          <label className="block text-white/80 font-nunito text-[10px] font-medium">
            Interested In *
          </label>
          <div className="space-y-1.5">
            {interestOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center gap-2 cursor-pointer p-2 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                style={
                  formData.interest === option
                    ? {
                        background: 'rgba(255, 183, 3, 0.15)',
                        border: '1px solid rgba(255, 183, 3, 0.3)'
                      }
                    : {
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }
                }
                onClick={() => handleRadioChange(option)}
              >
                <div className="relative flex-shrink-0">
                  <div 
                    className="w-4 h-4 rounded-full flex items-center justify-center transition-all"
                    style={
                      formData.interest === option
                        ? {
                            background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                            boxShadow: '0 0 10px rgba(255, 183, 3, 0.5)'
                          }
                        : {
                            background: 'rgba(255, 255, 255, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.3)'
                          }
                    }
                  >
                    {formData.interest === option && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0C002B]" />
                    )}
                  </div>
                </div>
                <span className={`font-nunito text-xs ${formData.interest === option ? 'text-white font-semibold' : 'text-white/90'}`}>
                  {option}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2.5 px-3 rounded-lg font-nunito font-bold text-xs transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #FFB703, #FFA000)',
            color: '#0C002B',
            boxShadow: '0 6px 20px rgba(255, 183, 3, 0.4)'
          }}
        >
          <span className="relative z-10 flex items-center justify-center gap-1.5">
            Get Free Consultation
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-[10px]" aria-hidden="true"></i>
          </span>
        </button>
      </form>

      {/* Contact Info */}
      <div className="relative mt-4 pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="text-center">
          <p className="text-white/80 font-nunito text-[10px] mb-1.5">
            Or call us directly
          </p>
          <a
            href="tel:+91-XXXX-XXXXXX"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-nunito text-xs font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 183, 3, 0.15)',
              border: '1px solid rgba(255, 183, 3, 0.3)',
              color: '#FFB703'
            }}
          >
            <i className="fas fa-phone text-[10px]" aria-hidden="true"></i>
            +91-XXXX-XXXXXX
          </a>
        </div>
      </div>
    </div>
  );
}
