'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getUTMParameters } from '@/lib/utils';

interface ContactFormProps {
  isPopup?: boolean;
  onSuccess?: () => void;
  onClose?: () => void;
}

export default function ContactForm({ isPopup = false, onSuccess, onClose }: ContactFormProps) {
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
          pageUrl: window.location.href,
          utm: getUTMParameters()
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
      <div
        className={`rounded-xl sm:rounded-[20px] w-full ${isPopup ? 'p-3 sm:p-5' : 'p-6 sm:p-8 md:p-10'}`}
        style={isPopup ? {
          borderRadius: '20px',
          background: 'linear-gradient(0deg, #FFF 0%, #8FD4FF 100%)',
          boxShadow: '0 4px 23.1px 0 rgba(0, 0, 0, 0.15)'
        } : {
          background: '#ffffff',
          boxShadow: '0 8px 30px -6px rgba(0,0,0,0.12)',
          border: '1px solid #e5e7eb'
        }}
      >
        {isPopup && (
          <h2 className="text-[#0C002B] text-lg sm:text-2xl font-nunito font-bold mb-3 text-center">
            Get <span className="text-[#0C002B]">Free Expert</span> Advice
          </h2>
        )}
        <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-5 ${isPopup ? 'md:space-y-3' : 'md:space-y-6'}`}>
          {/* Basic Input Fields */}
          <div className="space-y-3 sm:space-y-4">
            {/* Name Field */}
            <div className="space-y-1">
              <label className={`block font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
                Name
              </label>
              <div
                className={`rounded-lg overflow-hidden border ${isPopup ? 'h-9 sm:h-11 border-black/10 bg-white' : 'h-11 sm:h-12 border-gray-200'}`}
                style={!isPopup ? { background: '#f9fafb' } : undefined}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base text-[#0C002B] ${isPopup ? 'placeholder-black/50' : 'placeholder-gray-400'}`}
                  placeholder="Enter your name"
                />
              </div>
              {errors.name && <p className={`text-xs mt-1 font-nunito ${isPopup ? 'text-red-600' : 'text-red-500'}`}>{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-1">
              <label className={`block font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
                Email
              </label>
              <div
                className={`rounded-lg overflow-hidden border ${isPopup ? 'h-9 sm:h-11 border-black/10 bg-white' : 'h-11 sm:h-12 border-gray-200'}`}
                style={!isPopup ? { background: '#f9fafb' } : undefined}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base text-[#0C002B] ${isPopup ? 'placeholder-black/50' : 'placeholder-gray-400'}`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && <p className={`text-xs mt-1 font-nunito ${isPopup ? 'text-red-600' : 'text-red-500'}`}>{errors.email}</p>}
            </div>

            {/* Phone Field */}
            <div className="space-y-1">
              <label className={`block font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
                Phone No.
              </label>
              <div
                className={`rounded-lg overflow-hidden border ${isPopup ? 'h-9 sm:h-11 border-black/10 bg-white' : 'h-11 sm:h-12 border-gray-200'}`}
                style={!isPopup ? { background: '#f9fafb' } : undefined}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base text-[#0C002B] ${isPopup ? 'placeholder-black/50' : 'placeholder-gray-400'}`}
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && <p className={`text-xs mt-1 font-nunito ${isPopup ? 'text-red-600' : 'text-red-500'}`}>{errors.phone}</p>}
            </div>

            {/* State Field */}
            <div className="space-y-1">
              <label className={`block font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
                State
              </label>
              <div
                className={`rounded-lg overflow-hidden border ${isPopup ? 'h-9 sm:h-11 border-black/10 bg-white' : 'h-11 sm:h-12 border-gray-200'}`}
                style={!isPopup ? { background: '#f9fafb' } : undefined}
              >
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full h-full px-3 sm:px-4 bg-transparent border-0 outline-0 font-nunito text-sm sm:text-base appearance-none cursor-pointer text-[#0C002B]`}
                >
                  <option value="" className="bg-white text-[#0C002B]">Select State</option>

                  {/* States */}
                  <option value="Andhra Pradesh" className="bg-white text-[#0C002B]">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh" className="bg-white text-[#0C002B]">Arunachal Pradesh</option>
                  <option value="Assam" className="bg-white text-[#0C002B]">Assam</option>
                  <option value="Bihar" className="bg-white text-[#0C002B]">Bihar</option>
                  <option value="Chhattisgarh" className="bg-white text-[#0C002B]">Chhattisgarh</option>
                  <option value="Goa" className="bg-white text-[#0C002B]">Goa</option>
                  <option value="Gujarat" className="bg-white text-[#0C002B]">Gujarat</option>
                  <option value="Haryana" className="bg-white text-[#0C002B]">Haryana</option>
                  <option value="Himachal Pradesh" className="bg-white text-[#0C002B]">Himachal Pradesh</option>
                  <option value="Jharkhand" className="bg-white text-[#0C002B]">Jharkhand</option>
                  <option value="Karnataka" className="bg-white text-[#0C002B]">Karnataka</option>
                  <option value="Kerala" className="bg-white text-[#0C002B]">Kerala</option>
                  <option value="Madhya Pradesh" className="bg-white text-[#0C002B]">Madhya Pradesh</option>
                  <option value="Maharashtra" className="bg-white text-[#0C002B]">Maharashtra</option>
                  <option value="Manipur" className="bg-white text-[#0C002B]">Manipur</option>
                  <option value="Meghalaya" className="bg-white text-[#0C002B]">Meghalaya</option>
                  <option value="Mizoram" className="bg-white text-[#0C002B]">Mizoram</option>
                  <option value="Nagaland" className="bg-white text-[#0C002B]">Nagaland</option>
                  <option value="Odisha" className="bg-white text-[#0C002B]">Odisha</option>
                  <option value="Punjab" className="bg-white text-[#0C002B]">Punjab</option>
                  <option value="Rajasthan" className="bg-white text-[#0C002B]">Rajasthan</option>
                  <option value="Sikkim" className="bg-white text-[#0C002B]">Sikkim</option>
                  <option value="Tamil Nadu" className="bg-white text-[#0C002B]">Tamil Nadu</option>
                  <option value="Telangana" className="bg-white text-[#0C002B]">Telangana</option>
                  <option value="Tripura" className="bg-white text-[#0C002B]">Tripura</option>
                  <option value="Uttar Pradesh" className="bg-white text-[#0C002B]">Uttar Pradesh</option>
                  <option value="Uttarakhand" className="bg-white text-[#0C002B]">Uttarakhand</option>
                  <option value="West Bengal" className="bg-white text-[#0C002B]">West Bengal</option>

                  {/* Union Territories */}
                  <option value="Andaman and Nicobar Islands" className="bg-white text-[#0C002B]">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh" className="bg-white text-[#0C002B]">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu" className="bg-white text-[#0C002B]">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi" className="bg-white text-[#0C002B]">Delhi</option>
                  <option value="Jammu and Kashmir" className="bg-white text-[#0C002B]">Jammu and Kashmir</option>
                  <option value="Ladakh" className="bg-white text-[#0C002B]">Ladakh</option>
                  <option value="Lakshadweep" className="bg-white text-[#0C002B]">Lakshadweep</option>
                  <option value="Puducherry" className="bg-white text-[#0C002B]">Puducherry</option>
                </select>
              </div>
            </div>
          </div>

          {/* Interest Section */}
          <div className="space-y-2">
            <div className={`font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
              What are you Interested in? <span className="text-red-500">*</span>
            </div>

            {/* Radio Options */}
            <div className="space-y-1.5">
              {interestOptions.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 sm:gap-3 cursor-pointer p-1.5 sm:p-2 rounded-lg transition-colors ${isPopup ? 'hover:bg-black/5' : 'hover:bg-gray-100'}`}
                  onClick={() => handleRadioChange(option)}
                >
                  <div className="relative flex-shrink-0">
                    <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="15" cy="15" r="14.5" stroke="#0C002B" strokeWidth="1" />
                      {formData.interest === option && (
                        <circle cx="15" cy="15" r="6" fill="#0C002B" />
                      )}
                    </svg>
                  </div>
                  <span className={`font-nunito text-sm font-medium text-[#0C002B]`}>
                    {option}
                  </span>
                </div>
              ))}
            </div>
            {errors.interest && <p className={`text-xs mt-1 font-nunito ${isPopup ? 'text-red-600' : 'text-red-500'}`}>{errors.interest}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-1">
            <label className={`block font-nunito font-semibold ${isPopup ? 'text-[#0C002B] text-sm sm:text-base' : 'text-[#0C002B] text-sm sm:text-base'}`}>
              Write a message
            </label>
            <div
              className={`rounded-lg overflow-hidden border ${isPopup ? 'border-black/10 bg-white' : 'border-gray-200'}`}
              style={!isPopup ? { background: '#f9fafb' } : undefined}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={2}
                className={`w-full p-2.5 sm:p-3 bg-transparent border-0 outline-0 resize-none font-nunito text-sm sm:text-base text-[#0C002B] ${isPopup ? 'placeholder-black/50' : 'placeholder-gray-400'}`}
                placeholder="Tell us about your needs..."
              />
            </div>
          </div>

          {/* DPDP Disclaimer */}
          <div className="space-y-1 mt-4">
            <p className={`text-center font-nunito text-xs leading-relaxed ${isPopup ? 'text-[#0C002B]' : 'text-gray-600'}`}>
              By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our <Link href="/privacy-policy" onClick={onClose} className={`hover:underline font-semibold text-red-500`}>Privacy Policy</Link> for more details.
            </p>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`p-3 rounded-lg ${submitStatus.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
                }`}
            >
              <p className={`text-sm font-nunito font-medium ${submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                {submitStatus.message}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center py-2 sm:py-3.5 px-6 sm:px-8 rounded-lg transition-colors cursor-pointer ${
              isPopup
                ? isSubmitting ? 'bg-[#0C002B]/50 cursor-not-allowed' : 'bg-[#0C002B] hover:bg-[#150047]'
                : isSubmitting ? 'bg-[#1952C7]/50 cursor-not-allowed' : 'bg-[#1952C7] hover:bg-[#123e9a]'
            }`}
          >
            <span className={`font-nunito font-bold text-white ${isPopup ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}>
              {isSubmitting ? 'Submitting...' : 'Submit Form'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
