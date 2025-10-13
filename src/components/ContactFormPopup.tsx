'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormPopup({ isOpen, onClose }: ContactFormPopupProps) {
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
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
    onClose();
  };

  const interestOptions = [
    'Trademark Registration',
    'Copyright Protection',
    'Patent Services'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          aria-label="Close form"
        >
          <FontAwesomeIcon icon={faTimes} className="text-white w-5 h-5" />
        </button>

        {/* Glassmorphism Container */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), linear-gradient(145deg, rgba(12, 0, 43, 0.40) 6.6%, rgba(255, 183, 3, 0.40) 120.24%), rgba(0, 0, 0, 0.50)`,
            boxShadow: '0 0 20px 0 rgba(255, 255, 255, 0.31) inset',
            backdropFilter: 'blur(31.7px)',
            WebkitBackdropFilter: 'blur(31.7px)'
          }}
        >
          {/* Form Title */}
          <h2 className="text-white font-nunito text-xl font-semibold mb-4 text-center">
            Get Started with <span className="text-[#FFB703]">IPR Karo</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Basic Input Fields */}
            <div className="space-y-2">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-white font-nunito text-sm font-normal">
                  Name
                </label>
                <div 
                  className="h-9 rounded-lg"
                  style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-full px-3 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-white font-nunito text-sm font-normal">
                  Email
                </label>
                <div 
                  className="h-9 rounded-lg"
                  style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-full px-3 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-1">
                <label className="block text-white font-nunito text-sm font-normal">
                  Phone No.
                </label>
                <div 
                  className="h-9 rounded-lg"
                  style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full h-full px-3 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 font-nunito text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Interest Section */}
            <div className="space-y-1.5">
              <div className="text-white font-nunito text-sm font-normal">
                What are you Interested in? <span className="text-red-500">*</span>
              </div>
              
              {/* Radio Options */}
              <div className="space-y-0.5">
                {interestOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 cursor-pointer hover:bg-white/5 p-1.5 rounded-lg transition-colors" 
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
                    <span className="text-[rgba(255,255,255,0.8)] font-nunito text-xs font-normal">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <label className="block text-white font-nunito text-sm font-normal">
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
                  className="w-full p-2 rounded-lg bg-transparent text-white placeholder-[rgba(255,255,255,0.6)] border-0 outline-0 resize-none font-nunito text-sm"
                  placeholder="Tell us about your needs..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center py-2.5 px-6 rounded-lg bg-[#FFB703] hover:bg-[#e6a602] transition-colors cursor-pointer"
            >
              <span className="text-[#0C002B] font-nunito text-base font-medium">
                Submit Form
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

