'use client';

import React, { useState } from 'react';

export default function BlogSidebarForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div 
      className="rounded-2xl p-6 backdrop-blur-xl border border-white/10 shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.1) 0%, rgba(12, 0, 43, 0.8) 100%)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FFA000] mb-3 shadow-lg">
          <i className="fas fa-envelope text-[#0C002B] text-xl" aria-hidden="true"></i>
        </div>
        <h3 className="text-white font-nunito font-bold text-lg mb-2">
          Get in Touch
        </h3>
        <p className="text-white/70 font-nunito text-xs">
          Have questions? Our experts are here to help
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-white/80 font-nunito text-xs mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-nunito text-sm focus:outline-none focus:border-[#FFB703] focus:bg-white/15 transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white/80 font-nunito text-xs mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-nunito text-sm focus:outline-none focus:border-[#FFB703] focus:bg-white/15 transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-white/80 font-nunito text-xs mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-nunito text-sm focus:outline-none focus:border-[#FFB703] focus:bg-white/15 transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white/80 font-nunito text-xs mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 font-nunito text-sm focus:outline-none focus:border-[#FFB703] focus:bg-white/15 transition-all resize-none"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #FFB703 0%, #FFA000 100%)',
            color: '#0C002B',
            boxShadow: '0 8px 20px rgba(255, 183, 3, 0.4)'
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Send Message
            <i className="fas fa-paper-plane text-xs" aria-hidden="true"></i>
          </span>
        </button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-[#FFB703] font-bold text-lg font-nunito">24/7</div>
            <div className="text-white/60 text-[10px] font-nunito">Support</div>
          </div>
          <div>
            <div className="text-[#FFB703] font-bold text-lg font-nunito">100%</div>
            <div className="text-white/60 text-[10px] font-nunito">Secure</div>
          </div>
          <div>
            <div className="text-[#FFB703] font-bold text-lg font-nunito">Fast</div>
            <div className="text-white/60 text-[10px] font-nunito">Response</div>
          </div>
        </div>
      </div>
    </div>
  );
}

