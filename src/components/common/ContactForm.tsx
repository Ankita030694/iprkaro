'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ContactFormProps {
  isPopup?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({ isPopup = false, onSuccess }: ContactFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const interestOptions = [
    'Trademark Registration',
    'Copyright Protection',
    'Patent Services'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Name restriction: Alphabets and spaces only
    if (name === 'name') {
      if (value === '' || /^[A-Za-z\s]+$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    // Phone restriction: Numbers only, max 10 digits
    if (name === 'phone') {
      if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name validation: alphabets only
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain alphabets';
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation: 10 digits only
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    // Interest validation
    if (!formData.interest) {
      newErrors.interest = 'Please select an option';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Helper to get cookie by name
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    try {
      // Capture Facebook cookies
      const fbp = getCookie('_fbp');
      const fbc = getCookie('_fbc');

      // Add the lead to Firestore
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp(),
        status: 'new',
        meta: {
          fbp: fbp || null,
          fbc: fbc || null,
          userAgent: navigator.userAgent,
          pageUrl: window.location.href
        }
      });

      if (onSuccess) {
        onSuccess();
      }

      // Redirect to thank you page
      router.push('/thank-you');

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us at info@iprkaro.com'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`w-full ${isPopup ? 'max-w-md mx-auto' : ''}`}
    >
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
        {isPopup && (
            <h2 className="text-white text-xl sm:text-2xl font-nunito font-bold mb-4 text-center">
                Get <span className="text-[#FFB703]">Free Expert</span> Advice
            </h2>
        )}
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
              {errors.name && <p className="text-red-400 text-xs mt-1 font-nunito">{errors.name}</p>}
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
              {errors.email && <p className="text-red-400 text-xs mt-1 font-nunito">{errors.email}</p>}
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
              {errors.phone && <p className="text-red-400 text-xs mt-1 font-nunito">{errors.phone}</p>}
            </div>

            {/* State Field */}
            <div className="space-y-1 sm:space-y-1.5">
              <label className="block text-white font-nunito text-base sm:text-lg font-normal">
                State
              </label>
              <div 
                className="h-10 sm:h-12 rounded-lg"
                style={{ background: 'rgba(255, 255, 255, 0.15)' }}
              >
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full h-full px-3 sm:px-4 rounded-lg bg-transparent text-white border-0 outline-0 font-nunito text-sm sm:text-base appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0C002B] text-white">Select State</option>
                  
                  {/* States */}
                  <option value="Andhra Pradesh" className="bg-[#0C002B] text-white">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh" className="bg-[#0C002B] text-white">Arunachal Pradesh</option>
                  <option value="Assam" className="bg-[#0C002B] text-white">Assam</option>
                  <option value="Bihar" className="bg-[#0C002B] text-white">Bihar</option>
                  <option value="Chhattisgarh" className="bg-[#0C002B] text-white">Chhattisgarh</option>
                  <option value="Goa" className="bg-[#0C002B] text-white">Goa</option>
                  <option value="Gujarat" className="bg-[#0C002B] text-white">Gujarat</option>
                  <option value="Haryana" className="bg-[#0C002B] text-white">Haryana</option>
                  <option value="Himachal Pradesh" className="bg-[#0C002B] text-white">Himachal Pradesh</option>
                  <option value="Jharkhand" className="bg-[#0C002B] text-white">Jharkhand</option>
                  <option value="Karnataka" className="bg-[#0C002B] text-white">Karnataka</option>
                  <option value="Kerala" className="bg-[#0C002B] text-white">Kerala</option>
                  <option value="Madhya Pradesh" className="bg-[#0C002B] text-white">Madhya Pradesh</option>
                  <option value="Maharashtra" className="bg-[#0C002B] text-white">Maharashtra</option>
                  <option value="Manipur" className="bg-[#0C002B] text-white">Manipur</option>
                  <option value="Meghalaya" className="bg-[#0C002B] text-white">Meghalaya</option>
                  <option value="Mizoram" className="bg-[#0C002B] text-white">Mizoram</option>
                  <option value="Nagaland" className="bg-[#0C002B] text-white">Nagaland</option>
                  <option value="Odisha" className="bg-[#0C002B] text-white">Odisha</option>
                  <option value="Punjab" className="bg-[#0C002B] text-white">Punjab</option>
                  <option value="Rajasthan" className="bg-[#0C002B] text-white">Rajasthan</option>
                  <option value="Sikkim" className="bg-[#0C002B] text-white">Sikkim</option>
                  <option value="Tamil Nadu" className="bg-[#0C002B] text-white">Tamil Nadu</option>
                  <option value="Telangana" className="bg-[#0C002B] text-white">Telangana</option>
                  <option value="Tripura" className="bg-[#0C002B] text-white">Tripura</option>
                  <option value="Uttar Pradesh" className="bg-[#0C002B] text-white">Uttar Pradesh</option>
                  <option value="Uttarakhand" className="bg-[#0C002B] text-white">Uttarakhand</option>
                  <option value="West Bengal" className="bg-[#0C002B] text-white">West Bengal</option>
                  
                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands" className="bg-[#0C002B] text-white">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh" className="bg-[#0C002B] text-white">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu" className="bg-[#0C002B] text-white">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi" className="bg-[#0C002B] text-white">Delhi</option>
                  <option value="Jammu and Kashmir" className="bg-[#0C002B] text-white">Jammu and Kashmir</option>
                  <option value="Ladakh" className="bg-[#0C002B] text-white">Ladakh</option>
                  <option value="Lakshadweep" className="bg-[#0C002B] text-white">Lakshadweep</option>
                  <option value="Puducherry" className="bg-[#0C002B] text-white">Puducherry</option>
                </select>
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
            {errors.interest && <p className="text-red-400 text-xs mt-1 font-nunito">{errors.interest}</p>}
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

          {/* Status Message */}
          {submitStatus && (
            <div 
              className={`p-3 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border border-green-500/30' 
                  : 'bg-red-500/20 border border-red-500/30'
              }`}
            >
              <p className={`text-sm font-nunito ${
                submitStatus.type === 'success' ? 'text-green-200' : 'text-red-200'
              }`}>
                {submitStatus.message}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center py-2 sm:py-2.5 px-6 sm:px-8 rounded-lg transition-colors cursor-pointer ${
              isSubmitting 
                ? 'bg-[#FFB703]/50 cursor-not-allowed' 
                : 'bg-[#FFB703] hover:bg-[#e6a602]'
            }`}
          >
            <span className="text-[#0C002B] font-nunito text-base sm:text-lg font-medium">
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
