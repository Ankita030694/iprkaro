'use client';

import React, { useState } from 'react';

export default function BlogSidebarForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Alphabets only';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = '10 digits only';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    if (name === 'phone') {
      if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
        setFormData({ ...formData, [name]: value });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div 
      className="rounded-2xl p-6 border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)]"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)'
      }}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#B3A1FF] to-[#8E79FF] mb-3 shadow-lg">
          <i className="fas fa-envelope text-white text-xl" aria-hidden="true"></i>
        </div>
        <h3 className="text-[#0C002B] font-nunito font-bold text-lg mb-2">
          Get in Touch
        </h3>
        <p className="text-[#0C002B]/60 font-nunito text-xs">
          Have questions? Our experts are here to help
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-[#0C002B]/80 font-nunito text-xs mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-[#0C002B] placeholder-[#0C002B]/30 font-nunito text-sm focus:outline-none focus:border-[#B3A1FF] focus:bg-white transition-all"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-nunito">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-[#0C002B]/80 font-nunito text-xs mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-[#0C002B] placeholder-[#0C002B]/30 font-nunito text-sm focus:outline-none focus:border-[#B3A1FF] focus:bg-white transition-all"
            placeholder="your@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-nunito">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#0C002B]/80 font-nunito text-xs mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-[#0C002B] placeholder-[#0C002B]/30 font-nunito text-sm focus:outline-none focus:border-[#B3A1FF] focus:bg-white transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-nunito">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-[#0C002B]/80 font-nunito text-xs mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-[#0C002B] placeholder-[#0C002B]/30 font-nunito text-sm focus:outline-none focus:border-[#B3A1FF] focus:bg-white transition-all resize-none"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:shadow-xl hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #B3A1FF 0%, #8E79FF 100%)',
            color: '#ffffff',
            boxShadow: '0 8px 20px rgba(179, 161, 255, 0.3)'
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Send Message
            <i className="fas fa-paper-plane text-xs" aria-hidden="true"></i>
          </span>
        </button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <div className="text-[#B3A1FF] font-bold text-lg font-nunito">24/7</div>
            <div className="text-[#0C002B]/40 text-[10px] font-nunito">Support</div>
          </div>
          <div>
            <div className="text-[#B3A1FF] font-bold text-lg font-nunito">100%</div>
            <div className="text-[#0C002B]/40 text-[10px] font-nunito">Secure</div>
          </div>
          <div>
            <div className="text-[#B3A1FF] font-bold text-lg font-nunito">Fast</div>
            <div className="text-[#0C002B]/40 text-[10px] font-nunito">Response</div>
          </div>
        </div>
      </div>
    </div>
  );
}

