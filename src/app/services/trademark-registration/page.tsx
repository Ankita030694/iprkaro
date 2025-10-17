'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';

export default function TrademarkRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId);
  };

  // Function to generate state-specific slug URL
  const generateStateSlug = (stateName: string) => {
    const slug = stateName.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/&/g, 'and') // Replace & with 'and'
      .trim();
    return `trademark-registration-in-${slug}`;
  };

  // List of all states and union territories
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
    'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand'
  ];

  const unionTerritories = [
    'Andaman and Nicobar Islands', 'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
    'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  const trademarkFaqs = [
    {
      question: "What is a trademark, and why should I register it?",
      answer: "A trademark is a unique symbol, word, name, or logo that identifies your goods or services. Registering it gives you exclusive legal rights to use it, prevents misuse by others, and enhances your brand's credibility."
    },
    {
      question: "How long does it take to register a trademark in India?",
      answer: "The average time is 12 to 18 months, depending on objections or oppositions. With IPRKaro's AI-powered search reports, you can reduce risks of delay by identifying conflicts early."
    },
    {
      question: "What documents are required for trademark registration?",
      answer: "Applicant's ID & Address Proof, Brand Logo / Wordmark (optional for wordmark filing), Incorporation Certificate (for companies), Power of Attorney (Form TM-48)"
    },
    {
      question: "Can I register a trademark online in India?",
      answer: "Yes. With IPRKaro, the entire process (from search to filing and objection handling) is managed 100% online with expert support."
    },
    {
      question: "How long is a trademark valid in India?",
      answer: "A registered trademark is valid for 10 years and can be renewed indefinitely every 10 years."
    }
  ];

  // Schema markup for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": trademarkFaqs.map((faq, index) => ({
      "@type": "Question",
      "name": `Q${index + 1}. ${faq.question}`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const features = [
    { text: "Cost Effective", icon: 0 },
    { text: "Fast Process", icon: 1 },
    { text: "Risk Reduction", icon: 2 },
    { text: "AI Driven", icon: 3 },
    { text: "Expert Guidance", icon: 4 },
    { text: "24/7 Accessibility", icon: 5 }
  ];

  const trademarkRequirements = [
    {
      text: "Govt. Registration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M1 26.5H26M9.33333 8.44444H10.7222M9.33333 14H10.7222M9.33333 19.5556H10.7222M16.2778 8.44444H17.6667M16.2778 14H17.6667M16.2778 19.5556H17.6667M3.77778 26.5V4.27778C3.77778 3.54107 4.07044 2.83453 4.59137 2.31359C5.1123 1.79266 5.81884 1.5 6.55556 1.5H20.4444C21.1812 1.5 21.8877 1.79266 22.4086 2.31359C22.9296 2.83453 23.2222 3.54107 23.2222 4.27778V26.5" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Personal Information",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M1 26.5H26M9.33333 8.44444H10.7222M9.33333 14H10.7222M9.33333 19.5556H10.7222M16.2778 8.44444H17.6667M16.2778 14H17.6667M16.2778 19.5556H17.6667M3.77778 26.5V4.27778C3.77778 3.54107 4.07044 2.83453 4.59137 2.31359C5.1123 1.79266 5.81884 1.5 6.55556 1.5H20.4444C21.1812 1.5 21.8877 1.79266 22.4086 2.31359C22.9296 2.83453 23.2222 3.54107 23.2222 4.27778V26.5" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Trademark Name & Class",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
          <path d="M10.375 18.375V14.875M10.375 14.875V9.625H13.9463C14.8388 9.625 16.625 9.625 16.625 12.25C16.625 14.875 14.8388 14.875 13.9463 14.875M10.375 14.875H13.9463M13.9463 14.875L16.625 18.375" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.5 26.5C20.4037 26.5 26 20.9037 26 14C26 7.09625 20.4037 1.5 13.5 1.5C6.59625 1.5 1 7.09625 1 14C1 20.9037 6.59625 26.5 13.5 26.5Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      text: "Authorization Letter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="28" viewBox="0 0 23 28" fill="none">
          <path d="M16.5405 1.5H5.72973C3.11757 1.5 1 3.61757 1 6.22973V21.7703C1 24.3824 3.11757 26.5 5.72973 26.5H16.5405C19.1527 26.5 21.2703 24.3824 21.2703 21.7703V6.22973C21.2703 3.61757 19.1527 1.5 16.5405 1.5Z" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.40625 6.91211H15.8657M6.40625 12.3175H15.8657M6.40625 17.7229H11.136" stroke="#FFB703" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const mobileCardIcons = [
    // Lightning icon for "Expert Legal Guidance"
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none" key="lightning">
      <path d="M1.14933 11.2623L5.77496 6.29174C6.13652 5.90275 11 0.517143 11 1.03506L6.8147 10.5098C6.8147 10.8196 7.08042 11.0714 7.40893 11.0714H9.65895C10.1699 11.0714 10.4422 11.6413 10.1045 12.0043L5.47883 16.9748C5.11727 17.3633 1.59484 21.4729 1.59484 20.9549L4.43909 12.7563C4.43909 12.4464 4.17271 12.1946 3.84486 12.1946H1.59484C1.0839 12.1946 0.811567 11.6253 1.14933 11.2623Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // User check icon for "Fast Processing"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" key="usercheck">
      <path d="M7.36364 10.0909C8.56917 10.0909 9.72532 9.61201 10.5778 8.75958C11.4302 7.90714 11.9091 6.75098 11.9091 5.54545C11.9091 4.33993 11.4302 3.18377 10.5778 2.33133C9.72532 1.47889 8.56917 1 7.36364 1C6.15811 1 5.00195 1.47889 4.14951 2.33133C3.29708 3.18377 2.81818 4.33993 2.81818 5.54545C2.81818 6.75098 3.29708 7.90714 4.14951 8.75958C5.00195 9.61201 6.15811 10.0909 7.36364 10.0909ZM7.36364 10.0909C9.19364 10.0909 10.7927 10.7818 11.93 11.93C12.6043 12.6136 13.1087 13.4459 13.4027 14.36M7.36364 10.0909C3.72727 10.0909 1 12.8182 1 16.4545V21H10.0909M11 17.2036L14.8091 20.0909L21 11.9091" stroke="#FFD700" strokeWidth="1.5"/>
    </svg>,
    // Shield icon for "Comprehensive Search"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none" key="shield">
      <path d="M17.8421 20.6537C17.5276 20.7959 17.189 20.8773 16.8442 20.8937C15.7168 20.9505 14.1379 21 12.0526 21C9.96737 21 8.38842 20.95 7.26105 20.8932C6.9163 20.877 6.57771 20.7957 6.26316 20.6537M20.2105 17.7784C19.8078 18.037 19.3443 18.1854 18.8663 18.2089C17.3989 18.2889 15.1637 18.3679 12.0526 18.3679C8.94158 18.3679 6.70632 18.2889 5.23895 18.2089C4.76094 18.1854 4.29746 18.037 3.89474 17.7784M1.20947 13.2158C1.33895 14.5289 2.39789 15.4726 3.71632 15.5447C5.41158 15.6379 8.13789 15.7368 12.0526 15.7368C15.9674 15.7368 18.6937 15.6379 20.3895 15.5447C21.7074 15.4726 22.7663 14.5289 22.8958 13.2158C23.0074 12.0847 23.1053 10.4879 23.1053 8.36842C23.1053 6.24895 23.0074 4.65211 22.8958 3.52105C22.7663 2.20737 21.7074 1.26421 20.3889 1.19211C18.6937 1.09895 15.9674 1 12.0526 1C8.13789 1 5.41158 1.09895 3.71579 1.19211C2.39789 1.26421 1.33895 2.20789 1.20947 3.52105C1.09789 4.65263 1 6.24895 1 8.36842C1 10.4879 1.09789 12.0847 1.20947 13.2158Z" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1583 6.00752C14.1583 6.00752 13.3162 5.36279 12.053 5.36279C11.0004 5.36279 9.94778 6.00752 9.94778 6.86647C9.94778 9.01489 14.1583 7.72595 14.1583 9.87437C14.1583 10.7333 13.1057 11.3781 12.053 11.3781M12.053 11.3781C10.7899 11.3781 9.94778 10.7333 9.94778 10.7333M12.053 11.3781V12.5812M12.053 5.36331V4.16016M18.8951 8.37068H18.3688M5.73725 8.37068H5.21094" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Star icon for "End-to-End Support"
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" key="star">
      <path d="M11.1055 19C14.8765 19 16.7625 19 17.9335 17.828C19.1055 16.657 19.1055 14.771 19.1055 11M11.1055 19C7.33447 19 5.44847 19 4.27747 17.828C3.10647 16.656 3.10547 14.771 3.10547 11M11.1055 19V21M3.10547 11C3.10547 7.229 3.10547 5.343 4.27747 4.172C5.44947 3.001 7.33447 3 11.1055 3M3.10547 11H1.10547M11.1055 3C14.8765 3 16.7625 3 17.9335 4.172C19.1045 5.344 19.1055 7.229 19.1055 11M11.1055 3V1M19.1055 11H21.1055M7.10547 1V3M15.1055 1V3M7.10547 19V21M15.1055 19V21M21.1055 15H19.1055M3.10547 7H1.10547M3.10547 15H1.10547M21.1055 7H19.1055" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5864 6.86291C10.6255 6.75647 10.6963 6.6646 10.7893 6.5997C10.8823 6.5348 10.993 6.5 11.1064 6.5C11.2198 6.5 11.3304 6.5348 11.4234 6.5997C11.5164 6.6646 11.5873 6.75647 11.6264 6.86291L12.4264 9.02591C12.5384 9.32891 12.7784 9.56891 13.0814 9.68091L15.2444 10.4809C15.3508 10.52 15.4427 10.5909 15.5076 10.6839C15.5725 10.7768 15.6073 10.8875 15.6073 11.0009C15.6073 11.1143 15.5725 11.225 15.5076 11.318C15.4427 11.411 15.3508 11.4818 15.2444 11.5209L13.0814 12.3209C12.9311 12.3759 12.7947 12.463 12.6816 12.5761C12.5684 12.6892 12.4814 12.8257 12.4264 12.9759L11.6264 15.1389C11.5873 15.2453 11.5164 15.3372 11.4234 15.4021C11.3304 15.467 11.2198 15.5018 11.1064 15.5018C10.993 15.5018 10.8823 15.467 10.7893 15.4021C10.6963 15.3372 10.6255 15.2453 10.5864 15.1389L9.78638 12.9759C9.7314 12.8257 9.64431 12.6892 9.53118 12.5761C9.41806 12.463 9.28162 12.3759 9.13138 12.3209L6.96838 11.5209C6.86194 11.4818 6.77007 11.411 6.70517 11.318C6.64027 11.225 6.60547 11.1143 6.60547 11.0009C6.60547 10.8875 6.64027 10.7768 6.70517 10.6839C6.77007 10.5909 6.86194 10.52 6.96838 10.4809L9.13138 9.68091C9.28128 9.62534 9.41742 9.53805 9.53047 9.425C9.64352 9.31195 9.73081 9.17582 9.78638 9.02591L10.5864 6.86291Z" stroke="#FFD700" strokeWidth="1.5"/>
    </svg>,
    // Shield with check icon for "Affordable Pricing"
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none" key="shieldcheck">
      <path d="M1 10L10 7L19 10M10 1V20.5" stroke="#FFD700" strokeWidth="1.5"/>
      <path d="M1.193 13C2.05 17.298 5.576 19.513 7.899 20.527C8.62 20.842 8.981 21 10 21C11.02 21 11.38 20.842 12.101 20.527C12.68 20.275 13.332 19.947 14 19.533M17 16.904C18.163 15.428 19 13.496 19 10.991V9.417C19 6.219 19 4.62 18.622 4.082C18.245 3.545 16.742 3.03 13.735 2.001L13.162 1.805C11.595 1.268 10.812 1 10 1C9.188 1 8.405 1.268 6.838 1.805L6.265 2C3.258 3.03 1.755 3.545 1.378 4.082C1 4.62 1 6.22 1 9.417V10" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    // Clock icon for "Government Certified"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" key="clock">
    <circle cx="12" cy="12" r="9" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 7V12L15 15" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  ];

  const plans = [
    {
      id: 'standard',
      name: 'AI Trademark Filing: Standard',
      subtitle: 'Deeper search with risk insights',
      description: 'Best for small businesses/startups',
      content: 'Essential trademark protection',
      features: [
        'Complete online trademark filing included',
        'AI trademark search & conflict check',
        'Expert legal guidance throughout the process',
        'Essential trademark protection for your brand'
      ],
      price: '₹1,999',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium Trademark Registration: With AI Risk Checkup',
      subtitle: 'Complete filing included',
      description: 'Suited for growing brands',
      content: 'Enhanced trademark services',
      features: [
        'AI-powered trademark registration and risk report',
        'Advanced legal guidance and trademark filing',
        'Priority VIP support, fast application monitoring',
        'Enhanced trademark and brand safeguard'
      ],
      price: '₹2,999',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Brand Monitoring & Protection: AI Powered',
      subtitle: '24/7 brand monitoring',
      description: 'Enterprises, ongoing protection',
      content: 'Complete brand protection',
      features: [
        '24/7 AI-powered brand & trademark monitoring',
        'Instant alerts for conflicts and infringements',
        'Continuous protection against copycats',
        'Ongoing legal peace of mind for your brand'
      ],
      price: '₹3,999',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8 overflow-x-hidden pt-20" style={{ 
      background: '#0C002B',
      backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">

          {/* Left Section */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4 px-2 md:px-0">
              <h1 className="text-white font-nunito text-lg md:text-2xl lg:text-3xl font-medium leading-tight">
                Trademark Registration in India: Complete Guide by IPRKaro
              </h1>

              <h2 className="text-white font-nunito text-sm md:text-lg lg:text-lg font-medium leading-tight">
                Protect Your Brand with Expert Trademark Registration in India
              </h2>

              <p className="text-white font-nunito text-xs md:text-sm lg:text-base leading-relaxed">
                In today's competitive marketplace, your brand is your most valuable asset. A trademark distinguishes your products and services from competitors, builds customer loyalty, and represents the quality and reputation of your business. Trademark registration in India provides legal protection for your brand name, logo, slogan, or any distinctive mark that identifies your business.

At IPRKaro, we combine AI-powered trademark search technology with expert legal guidance to ensure your brand receives comprehensive protection under the Indian Trademarks Act, 1999. Our end-to-end trademark registration services help businesses of all sizes secure their brand identity and prevent unauthorized use.
              </p>
            </div>

            {/* Why Trademark Section */}
            <div className="space-y-4 px-2 md:px-0">
              <h3 className="text-white font-nunito text-sm md:text-xl lg:text-2xl font-medium">
                Why Trademark with IPRKaro ?
              </h3>

              {/* Mobile Layout - Exactly like homepage */}
              <div className="md:hidden w-full">
                <div
                  className="w-full rounded-[5px] p-4"
                  style={{
                    background: 'linear-gradient(145deg, rgba(12, 0, 43, 0.20) 6.6%, rgba(255, 183, 3, 0.20) 120.24%), rgba(0, 0, 0, 0.78)',
                    boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.10) inset'
                  }}
                >
                  <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        {/* Icon on the left */}
                        <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center opacity-60">
                          {mobileCardIcons[feature.icon]}
                        </div>
                        {/* Title */}
                        <h3
                          className="text-white font-nunito text-[14px] font-medium leading-[14px] break-words flex-1"
                          style={{
                            color: '#FFF',
                            fontFamily: 'Nunito',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '14px'
                          }}
                        >
                          {feature.text}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout - 2 rows, 3 columns */}
              <div className="hidden md:block">
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4"
                    >
                      <div
                        className="flex-shrink-0 text-white p-3"
                        style={{
                          borderRadius: '5px',
                          background: 'rgba(255, 255, 255, 0.25)'
                        }}
                      >
                        {mobileCardIcons[feature.icon]}
                      </div>
                      <span className="text-white font-nunito text-[10px] md:text-xs lg:text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="mt-16 mb-8 px-2 md:px-0">
              <div className="flex flex-col lg:flex-row items-start gap-10">
                {/* Left Side - Circle and Line - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* White outer circle */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        border: '3px solid rgba(255, 255, 255, 0.8)'
                      }}
                    >
                      {/* Golden inner circle */}
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{
                          background: '#FFD700'
                        }}
                      ></div>
                    </div>

                    {/* Curved line going down then right */}
                    <div className="absolute top-9 left-11.5 transform -translate-x-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="119" viewBox="0 0 62 119" fill="none">
  <path d="M1 0V102C1 110.837 8.16344 118 17 118H61.5" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
</svg>
                    </div>
                  </div>
                </div>

                {/* Right Side - Heading and Containers */}
                <div className="flex-1 space-y-8">
                  {/* Heading */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-white font-nunito text-base md:text-xl lg:text-2xl font-medium">
                      Get a Guaranteed Trademark on
                    </h3>
                  </div>

                  {/* Timeline Containers - Single Column, 2 Rows */}
                  <div className="space-y-4 mt-13">
                    {/* First Container - Filing Date */}
                    <div
                      className="relative p-4 rounded-2xl w-full max-w-[500px]"
                      style={{
                        background: 'transparent',
                        border: '2px solid rgba(128, 128, 128, 0.4)',
                        borderRadius: '16px'
                      }}
                    >
                      <div className="flex items-center justify-between px-10">
                        <div className="text-white font-nunito text-sm md:text-base font-medium">
                          Filing Date
                        </div>
                        <div className="text-white font-nunito text-xs md:text-sm opacity-90">
                          Apr 12, 2025
                        </div>
                      </div>
                    </div>

                    {/* Second Container - Trademark Estimated Date */}
                    <div
                      className="relative p-4 rounded-2xl w-full max-w-[500px]"
                      style={{
                        background: 'transparent',
                        border: '2px solid rgba(128, 128, 128, 0.4)',
                        borderRadius: '16px'
                      }}
                    >
                      <div className="flex items-center justify-between px-10">
                        <div className="text-white font-nunito text-sm md:text-base font-medium">
                          Trademark Estimated Date
                        </div>
                        <div className="text-white font-nunito text-xs md:text-sm opacity-90">
                          Dec 12, 2025
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-sm md:text-xl lg:text-2xl font-medium">
              Trademark Requirements
              </h3>

              {/* Requirements Grid - 2 rows, 2 columns on mobile; 2 rows, 2 columns on desktop */}
              <div className="grid grid-cols-2 gap-4">
                {trademarkRequirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4"
                  >
                    <div
                      className="flex-shrink-0 text-white p-3"
                      style={{
                        borderRadius: '5px',
                        background: 'rgba(255, 255, 255, 0.25)'
                      }}
                    >
                      {requirement.icon}
                    </div>
                    <span className="text-white font-nunito text-[10px] md:text-xs lg:text-sm font-medium">
                      {requirement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guidelines Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-sm md:text-xl lg:text-2xl font-medium">
                We work with the Guidelines of
              </h3>

              {/* Guidelines Images - Mobile: Full width, no containers */}
              <div className="md:hidden flex items-center justify-between w-full gap-0">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/clientlogos/white9.png"
                    alt="Service 1"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/clientlogos/white10.png"
                    alt="Service 2"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/clientlogos/white11.png"
                    alt="Service 3"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/clientlogos/white12.png"
                    alt="Service 4"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>
              </div>

              {/* Desktop Guidelines Containers - Keep existing desktop layout */}
              <div className="hidden md:flex items-center justify-start gap-8 md:gap-10">
                <div
                  className="flex items-center justify-center p-5 md:p-6"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    width: '140px',
                    height: '140px',
                    minWidth: '120px',
                    minHeight: '120px'
                  }}
                >
                  <img src="/serv1.svg" alt="Service 1" className="w-14 h-14 md:w-16 md:h-16" />
                </div>

                <div
                  className="flex items-center justify-center p-5 md:p-6"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    width: '140px',
                    height: '140px',
                    minWidth: '120px',
                    minHeight: '120px'
                  }}
                >
                  <img src="/serv2.svg" alt="Service 2" className="w-14 h-14 md:w-16 md:h-16" />
                </div>

                <div
                  className="flex items-center justify-center p-5 md:p-6"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    width: '140px',
                    height: '140px',
                    minWidth: '120px',
                    minHeight: '120px'
                  }}
                >
                  <img src="/serv3.svg" alt="Service 3" className="w-14 h-14 md:w-16 md:h-16" />
                </div>

                <div
                  className="flex items-center justify-center p-5 md:p-6"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    width: '140px',
                    height: '140px',
                    minWidth: '120px',
                    minHeight: '120px'
                  }}
                >
                  <img src="/serv4.svg" alt="Service 4" className="w-14 h-14 md:w-16 md:h-16" />
                </div>
              </div>
            </div>

            {/* About Trademark Registration Section */}
            <div className="space-y-6 mt-20 px-2 md:px-0">
              <h2 className="text-white font-nunito text-base md:text-xl lg:text-2xl font-medium">
                About Trademark Registration in India
              </h2>

              <h3 className="text-white font-nunito text-sm md:text-lg lg:text-xl font-medium">
                Trademark Registration Services: Intro
              </h3>

              <h4 className="text-white font-nunito text-xs md:text-base lg:text-lg font-medium">
                Protect Your Brand with Expert Trademark Registration in India
              </h4>

              <p className="text-white font-nunito text-xs md:text-sm lg:text-base leading-relaxed">
                In today's competitive marketplace, your brand is your most valuable asset. A trademark distinguishes your products and services from competitors, builds customer loyalty, and represents the quality and reputation of your business. Trademark registration in India provides legal protection for your brand name, logo, slogan, or any distinctive mark that identifies your business.

At IPRKaro, we combine AI-powered trademark search technology with expert legal guidance to ensure your brand receives comprehensive protection under the Indian Trademarks Act, 1999. Our end-to-end trademark registration services help businesses of all sizes secure their brand identity and prevent unauthorized use.
              </p>
            </div>

            {/* What is a Trademark Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-sm md:text-lg lg:text-xl font-medium">
                What is a Trademark?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                A trademark is a distinctive sign, symbol, word, phrase, logo, design, or combination thereof that identifies and distinguishes the goods or services of one enterprise from those of others. It serves as a badge of origin, indicating the source and quality of products or services.

Trademarks can include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Brand names and product names</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Logos and symbols</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Slogans and taglines</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Product packaging and trade dress</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Sounds and colors (in some cases)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Domain names and social media handles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Register a Trademark Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                Why Register a Trademark in India?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                Trademark registration in India provides numerous benefits for businesses:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Exclusive Rights</strong><br />
                    Gain exclusive rights to use the trademark and prevent others from using similar marks for similar goods/services.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Legal Protection</strong><br />
                    Registered trademarks can be enforced through civil and criminal actions against infringement.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Brand Value</strong><br />
                    Enhances brand recognition and increases the commercial value of your business.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Asset Creation</strong><br />
                    Registered trademarks can be licensed, franchised, or sold, creating additional revenue streams.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Market Expansion</strong><br />
                    Provides protection for brand expansion into new markets and product categories.
                  </p>
                </div>
              </div>
            </div>

            {/* What Can Be Trademarked Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                What Can Be Trademarked in India?
              </h3>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                For a mark to be registrable as a trademark in India, it must be:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Distinctive</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">The mark must be capable of distinguishing your goods/services from others.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Not Descriptive</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">Generic or descriptive terms that others need to use in trade cannot be trademarked.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Not Confusingly Similar</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">The mark should not be identical or similar to existing registered trademarks.</p>
                  </div>
                </div>
              </div>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                <strong>Trademark Classes:</strong> India follows the Nice Classification system with 45 classes (34 for goods and 11 for services). You can register your trademark in multiple classes for broader protection.
              </p>
            </div>

            {/* Trademark Registration Process Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                Trademark Registration Process in India
              </h3>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                The trademark registration process in India involves several key stages:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Trademark Search</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">Comprehensive search to check availability and identify potential conflicts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Application Filing</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">Submit trademark application in appropriate classes with all required documents.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Examination</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">Trademark office examines the application and may raise objections if any.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Publication</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">Approved applications are published in the Trademark Journal for opposition.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Registration</h4>
                    <p className="text-white font-nunito text-sm md:text-base leading-relaxed">If no opposition is filed, the trademark is registered and certificate is issued.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                Documents Required for Trademark Registration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Applicant's identity and address proof</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Trademark/logo representation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">List of goods/services with classes</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Business registration proof (if applicable)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Priority claim document (if applicable)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Power of Attorney (Form TM-48)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trademark Duration Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                How Long Does Trademark Protection Last in India?
              </h3>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                A registered trademark in India is valid for 10 years from the date of filing. The registration can be renewed indefinitely every 10 years by paying renewal fees. If not renewed, the trademark will be removed from the register and become available for others to use.
              </p>
            </div>

            {/* Why Choose IPRKaro Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                Why Choose IPRKaro for Trademark Registration?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>AI-Powered Trademark Search:</strong> Advanced technology to identify potential conflicts and ensure availability.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Expert Legal Guidance:</strong> Professional assistance with application drafting and class selection.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Objection Handling:</strong> Expert response to trademark office objections and examination reports.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Watch Services:</strong> Ongoing monitoring for potential infringements and similar marks.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Renewal Management:</strong> Timely reminders and assistance with trademark renewals.
                  </p>
                </div>
              </div>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                Protect your brand identity with IPRKaro's comprehensive trademark registration services. Our AI-powered search technology combined with expert legal guidance ensures your trademark receives the strongest possible protection. From startups to multinational corporations, we help businesses secure their brand assets and build lasting value.

 Register your trademark today with IPRKaro to safeguard your brand, prevent infringement, and build a strong foundation for your business success.
              </p>
            </div>
          </div>

          {/* Right Section - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block" style={{ zoom: 0.7 }}>
            <div className="space-y-8">
            {/* Main Card Container */}
            <div
              className="relative flex flex-col p-5 md:p-6 lg:p-8 w-full max-w-full md:max-w-[532px] mx-auto"
              style={{
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset',
                minHeight: '650px'
              }}
            >
              {/* "Get Your Trademark Registered" Heading Container */}
              <div
                className="mb-6 p-5 rounded-[20px] text-center relative"
                style={{
                  background: 'rgba(0, 0, 0, 0.26)'
                }}
              >
                <h3
                  className="text-white font-nunito font-medium leading-[24px]"
                  style={{
                    fontSize: 'clamp(18px, 3vw, 24px)',
                    lineHeight: '24px'
                  }}
                >
                  Get Your Trademark Registered
                </h3>
              </div>

              {/* Price Breakdown Section */}
              <div
                className="mb-8 p-5 rounded-[20px] w-full"
                style={{
                  background: 'transparent'
                }}
              >
                <h4
                  className="text-white font-nunito font-medium leading-[20px] mb-4 text-center"
                  style={{
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    lineHeight: '20px'
                  }}
                >
                  Price Breakdown
                </h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-400">
                    <span className="text-white font-nunito text-xs md:text-xl opacity-90">Government Fee</span>
                    <span className="text-white font-nunito text-xs md:text-xl">₹4,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-400">
                    <span className="text-white font-nunito text-xs md:text-xl opacity-90">Professional Fee</span>
                    <span className="text-white font-nunito text-xs md:text-xl">₹2,500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-400">
                    <span className="text-white font-nunito text-xs md:text-xl opacity-90">GST (18%)</span>
                    <span className="text-white font-nunito text-xs md:text-xl">₹1,260</span>
                  </div>
                  <div className="flex justify-between items-center py-3 font-semibold">
                    <span className="text-white font-nunito text-sm md:text-xl">Total</span>
                    <span className="text-white font-nunito text-sm md:text-xl">₹8,260</span>
                  </div>

                  {/* Start Registration Button */}
                  <button
                    className="w-full py-3 px-4 rounded-xl font-nunito font-semibold text-xl md:text-xl transition-all duration-300 hover:scale-105 mt-4"
                    style={{
                      background: '#FFB703',
                      boxShadow: '0 0 20px 0 #000 inset',
                      color: '#0C002B'
                    }}
                  >
                    Start Registration
                  </button>
                </div>
              </div>

              {/* Our Plans Section - Expandable Dropdowns */}
              <div className="flex-1 space-y-4">
                <h4
                  className="text-white font-nunito font-medium leading-[24px] mb-6 text-center"
                  style={{
                    fontSize: 'clamp(22px, 5vw, 28px)',
                    lineHeight: '24px'
                  }}
                >
                  Our Plans
                </h4>

                {/* Display all three plans as expandable dropdowns */}
                {plans.map((plan) => (
                  <div key={plan.id} className="mb-4">
                    {/* Plan Dropdown Header - Clickable */}
                    <div
                      onClick={() => togglePlan(plan.id)}
                      className="w-full p-3 rounded-xl text-white font-nunito font-medium text-lg border-2 border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300 flex items-center justify-between"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)'
                      }}
                    >
                      <span>{plan.name} - {plan.price}</span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedPlan === plan.id ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>

                    {/* Plan Card - Only visible when expanded */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedPlan === plan.id ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div
                        className="relative p-6 rounded-2xl transition-all duration-300"
                        style={{
                          background: 'rgba(255, 255, 255, 0.10)',
                          backdropFilter: 'blur(16px)',
                          WebkitBackdropFilter: 'blur(16px)',
                          border: plan.highlighted ? '2px solid #1345C3' : 'none',
                          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, inset 0 0 20px rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {/* Plan Header */}
                        <div className="text-center mb-6">
                          <h3 className="text-white font-nunito text-lg md:text-xl font-semibold mb-2">
                            {plan.name}
                          </h3>
                          <div className="flex items-center justify-center gap-4 mb-4">
                            <span className="text-white font-nunito text-md opacity-80">{plan.description}</span>
                          </div>
                          <div className="text-right">
                            <span
                              className="text-white font-nunito font-bold text-xl md:text-3xl"
                            >
                              {plan.price}
                            </span>
                          </div>
                        </div>

                        {/* Plan Features */}
                        <div className="space-y-3 mb-6">
                          {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <i className="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                              <span className="text-white font-nunito text-xs md:text-lg leading-relaxed">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <button
                          className="w-full py-3 px-4 rounded-xl font-nunito font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105"
                          style={{
                            background: '#1345C3',
                            boxShadow: '0 0 20px 0 #000 inset',
                            color: '#FFFFFF'
                          }}
                        >
                          Get Protected
                        </button>

                        {/* Plan Type Indicator */}
                        <div className="mt-4 text-center">
                          <span className="text-white font-nunito text-xs opacity-80">
                            {plan.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Learn More Link */}
                <div className="mt-6 text-center">
                  <a
                    href="/services/trademark-registration"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#0C002B] bg-[#FFB703] rounded-lg hover:bg-[#e6a503] transition-colors duration-300"
                  >
                    Learn More About Trademark Services
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Insights Container */}
            <div
              id="quick-insights"
              className="sticky top-24 flex flex-col p-6 md:p-8 w-full max-w-full md:max-w-[532px] mx-auto"
              style={{
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset'
              }}
            >
              {/* Quick Insight's Heading */}
              <div className="mb-8 text-center">
                <h3 className="text-white font-nunito text-lg md:text-xl lg:text-3xl font-medium">
                  Quick Insight's
                </h3>
              </div>

              {/* Documents You'll Need Heading */}
              <div className="mb-6 text-center">
                <h4 className="text-white font-nunito font-medium leading-[20px]"
                    style={{
                      fontSize: 'clamp(18px, 3vw, 22px)',
                      lineHeight: '20px'
                    }}
                >
                  Documents You'll Need
                </h4>
              </div>

              {/* Documents List with Special Styling */}
              <div className="space-y-4">
                <div
                  className="p-4 text-center"
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="text-white font-nunito text-xs md:text-lg font-medium">
                    Identity proof (PAN / Aadhaar / Passport)
                  </span>
                </div>

                <div
                  className="p-4 text-center"
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="text-white font-nunito text-xs md:text-lg font-medium">
                    Address proof (utility bill / bank statement)
                  </span>
                </div>

                <div
                  className="p-4 text-center"
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="text-white font-nunito text-xs md:text-lg font-medium">
                    Legal entity proof (if business, e.g. company registration certificate)
                  </span>
                </div>

                <div
                  className="p-4 text-center"
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="text-white font-nunito text-xs md:text-lg font-medium">
                    Trademark/logo/wordmark images
                  </span>
                </div>

                <div
                  className="p-4 text-center"
                  style={{
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    backdropFilter: 'blur(16px)'
                  }}
                >
                  <span className="text-white font-nunito text-xs md:text-lg font-medium">
                    Power of Attorney (Form TM-48)
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#0C002B' }}>
      {/* Mobile Bottom Overlay - Only visible on mobile */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        style={{
          background: '#0C002B',
          boxShadow: '0 0 12.8px 1px rgba(255, 255, 255, 0.13) inset'
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Pay Now Text */}
            <div className="flex-1">
              <span className="text-white font-nunito font-semibold text-lg">
                Pay Now ₹2,999
              </span>
            </div>

            {/* Right Side - Start Registration Button */}
            <div className="flex-1 flex justify-end">
              <button
                onClick={() => setShowMobilePopup(true)}
                className="px-6 py-3 font-nunito font-semibold text-lg text-[#0C002B] transition-all duration-300 hover:scale-105"
                style={{
                  borderRadius: '8px',
                  background: '#FFB703'
                }}
              >
                Start Registration
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Popup - Shows desktop right section content */}
      {showMobilePopup && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowMobilePopup(false)}
          />

          {/* Popup Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#0C002B] rounded-t-2xl max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-center pt-3">
              <button
                onClick={() => setShowMobilePopup(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Popup Content */}
            <div className="p-4 space-y-4">
              {/* Main Card Container */}
              <div
                className="relative flex flex-col p-4 w-full mx-auto"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset',
                  minHeight: 'auto'
                }}
              >
                {/* "Get Your Trademark Registered" Heading Container */}
                <div
                  className="mb-4 p-3 rounded-[16px] text-center relative"
                  style={{
                    background: 'rgba(0, 0, 0, 0.26)'
                  }}
                >
                  <h3
                    className="text-white font-nunito font-medium leading-[20px]"
                    style={{
                      fontSize: 'clamp(14px, 3vw, 18px)',
                      lineHeight: '20px'
                    }}
                  >
                    Get Your Trademark Registered
                  </h3>
                </div>

                {/* Price Breakdown Section */}
                <div
                  className="mb-6 p-3 rounded-[16px] w-full"
                  style={{
                    background: 'transparent'
                  }}
                >
                  <h4
                    className="text-white font-nunito font-medium leading-[18px] mb-3 text-center"
                    style={{
                      fontSize: 'clamp(12px, 3vw, 16px)',
                      lineHeight: '18px'
                    }}
                  >
                    Price Breakdown
                  </h4>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                      <span className="text-white font-nunito text-xs opacity-90">Government Fee</span>
                      <span className="text-white font-nunito text-xs">₹4,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                      <span className="text-white font-nunito text-xs opacity-90">Professional Fee</span>
                      <span className="text-white font-nunito text-xs">₹2,500</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-gray-400">
                      <span className="text-white font-nunito text-xs opacity-90">GST (18%)</span>
                      <span className="text-white font-nunito text-xs">₹1,260</span>
                    </div>
                    <div className="flex justify-between items-center py-2 font-semibold">
                      <span className="text-white font-nunito text-sm">Total</span>
                      <span className="text-white font-nunito text-sm">₹8,260</span>
                    </div>

                    {/* Start Registration Button */}
                    <button
                      className="w-full py-3 px-4 rounded-lg font-nunito font-semibold text-sm transition-all duration-300 hover:scale-105 mt-3"
                      style={{
                        background: '#FFB703',
                        boxShadow: '0 0 20px 0 #000 inset',
                        color: '#0C002B'
                      }}
                    >
                      Start Registration
                    </button>
                  </div>
                </div>

                {/* Our Plans Section - Expandable Dropdowns */}
                <div className="flex-1 space-y-3">
                  <h4
                    className="text-white font-nunito font-medium leading-[24px] mb-4 text-center"
                    style={{
                      fontSize: 'clamp(16px, 4vw, 20px)',
                      lineHeight: '24px'
                    }}
                  >
                    Our Plans
                  </h4>

                  {/* Display all three plans as expandable dropdowns */}
                  {plans.map((plan) => (
                    <div key={plan.id} className="mb-3">
                      {/* Plan Dropdown Header - Clickable */}
                      <div
                        onClick={() => togglePlan(plan.id)}
                        className="w-full p-3 rounded-lg text-white font-nunito font-medium text-sm border-2 border-white/20 cursor-pointer hover:border-white/40 transition-all duration-300 flex items-center justify-between"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)'
                        }}
                      >
                        <span className="text-xs">{plan.name} - {plan.price}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`w-3 h-3 transition-transform duration-300 flex-shrink-0 ml-2 ${
                            expandedPlan === plan.id ? 'rotate-180' : 'rotate-0'
                          }`}
                        />
                      </div>

                      {/* Plan Card - Only visible when expanded */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedPlan === plan.id ? 'max-h-[1000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div
                          className="relative p-4 rounded-xl transition-all duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.10)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            border: plan.highlighted ? '2px solid #1345C3' : 'none',
                            boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, inset 0 0 20px rgba(255, 255, 255, 0.1)'
                          }}
                        >
                          {/* Plan Header */}
                          <div className="text-center mb-4">
                            <h3 className="text-white font-nunito text-sm font-semibold mb-1">
                              {plan.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2 mb-2">
                              <span className="text-white font-nunito text-xs opacity-80">{plan.description}</span>
                            </div>
                            <div className="text-right">
                              <span
                                className="text-white font-nunito font-bold text-lg"
                                style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}
                              >
                                {plan.price}
                              </span>
                            </div>
                          </div>

                          {/* Plan Features */}
                          <div className="space-y-2 mb-4">
                            {plan.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <i className="fas fa-check text-green-400 mt-0.5 flex-shrink-0 text-xs"></i>
                                <span className="text-white font-nunito text-xs leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button */}
                          <button
                            className="w-full py-2.5 px-4 rounded-lg font-nunito font-semibold text-sm transition-all duration-300 hover:scale-105"
                            style={{
                              background: '#1345C3',
                              boxShadow: '0 0 20px 0 #000 inset',
                              color: '#FFFFFF'
                            }}
                          >
                            Get Protected
                          </button>

                          {/* Plan Type Indicator */}
                          <div className="mt-3 text-center">
                            <span className="text-white font-nunito text-xs opacity-80">
                              {plan.subtitle}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Learn More Link */}
                  <div className="mt-4 text-center">
                    <a
                      href="/services/trademark-registration"
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#0C002B] bg-[#FFB703] rounded-md hover:bg-[#e6a503] transition-colors duration-300"
                    >
                      Learn More About Trademark Services
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Insights Container */}
              <div
                className="relative flex flex-col p-4 w-full mx-auto"
                style={{
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.10) inset, 0 0 20px 6px rgba(255, 255, 255, 0.20) inset'
                }}
              >
                {/* Quick Insight's Heading */}
                <div className="mb-4 text-center">
                  <h3 className="text-white font-nunito text-sm font-medium">
                    Quick Insight's
                  </h3>
                </div>

                {/* Documents You'll Need Heading */}
                <div className="mb-4 text-center">
                  <h4 className="text-white font-nunito font-medium leading-[20px]"
                      style={{
                        fontSize: 'clamp(12px, 3vw, 16px)',
                        lineHeight: '20px'
                      }}
                  >
                    Documents You'll Need
                  </h4>
                </div>

                {/* Documents List with Special Styling */}
                <div className="space-y-3">
                  <div
                    className="p-3 text-center"
                    style={{
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-xs font-medium">
                      Identity proof (PAN / Aadhaar / Passport)
                    </span>
                  </div>

                  <div
                    className="p-3 text-center"
                    style={{
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-xs font-medium">
                      Address proof (utility bill / bank statement)
                    </span>
                  </div>

                  <div
                    className="p-3 text-center"
                    style={{
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-xs font-medium">
                      Legal entity proof (if business, e.g. company registration certificate)
                    </span>
                  </div>

                  <div
                    className="p-3 text-center"
                    style={{
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-xs font-medium">
                      Trademark/logo/wordmark images
                    </span>
                  </div>

                  <div
                    className="p-3 text-center"
                    style={{
                      borderRadius: '12px',
                      border: '2px solid rgba(255, 255, 255, 0.15)',
                      background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    <span className="text-white font-nunito text-xs font-medium">
                      Power of Attorney (Form TM-48)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Server-side FAQ Schema for Google Search Console */}
      <Script
        id="trademark-registration-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
        strategy="beforeInteractive"
      />

      {/* We Provide Solutions In Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-4xl font-medium mb-4">
            IPR Registration Services Across India: Trademark, Copyright & Patent Experts Near You
            </h2>
            <p className="text-white font-nunito text-xs md:text-sm opacity-80">
              At IPRKaro.com, we offer complete IPR registration in India, including Trademark registration India, Patent registration India, and Copyright registration services. Whether you’re searching for “IPR registration near me” or asking, “Hey Google, where can I get IPR registration in India?” or “Find trademark and patent registration services near me,” IPRKaro.com is your one-stop solution for all intellectual property needs.
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
            {states.map((state, index) => (
              <Link
                key={index}
                href={`/services/trademark-registration/${generateStateSlug(state)}`}
                className="p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  background: 'rgba(255, 183, 3, 0.1)',
                  border: '1px solid rgba(255, 183, 3, 0.3)'
                }}
              >
                <span className="text-white font-nunito text-xs md:text-sm font-medium group-hover:text-[#FFB703] transition-colors">
                  {state}
                </span>
                <i className="fas fa-arrow-right text-[#FFB703] text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </Link>
            ))}
          </div>

          {/* Union Territories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {unionTerritories.map((territory, index) => (
              <Link
                key={index}
                href={`/services/trademark-registration/${generateStateSlug(territory)}`}
                className="p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  background: 'rgba(19, 69, 195, 0.1)',
                  border: '1px solid rgba(19, 69, 195, 0.3)'
                }}
              >
                <span className="text-white font-nunito text-xs md:text-sm font-medium group-hover:text-[#1345C3] transition-colors">
                  {territory}
                </span>
                <i className="fas fa-arrow-right text-[#1345C3] text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'linear-gradient(to right, #FFB70320, transparent)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to left, #FFB70320, transparent)' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section - Questions */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-white text-left font-nunito text-lg md:text-xl lg:text-2xl font-medium leading-tight w-full">
                Frequently Asked Questions
                <br />
                <span style={{ color: '#FFB703' }}>
                  on Trademark Registration
                </span>
              </h2>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm font-medium">
                Still have questions? <span style={{ color: '#FFB703' }} className="font-medium">Contact us</span> anytime.
              </p>
            </div>

            {/* AI Input */}
            <form onSubmit={(e) => { e.preventDefault(); console.log('AI Question submitted'); }}>
              <div className="relative bg-black/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                <input
                  type="text"
                  placeholder="Ask about Trademark Registration...."
                  className="w-full bg-transparent text-white placeholder-purple-300 outline-none text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors"
                  style={{ color: '#FFB703' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#e6a503'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#FFB703'}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="space-y-4">
            {trademarkFaqs.map((faq, index) => (
              <div key={index} className="relative">
                <div
                  className="p-6 cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] transform"
                  style={{
                    borderRadius: '15px',
                    background: 'linear-gradient(90deg, rgba(255, 183, 3, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%)',
                    ...(openFaq === index ? { boxShadow: `0 0 0 2px #FFB70380` } : {})
                  }}
                  onClick={() => toggleFaq(index)}
                >

                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-nunito text-sm md:text-base lg:text-lg font-semibold pr-4">
                      Q{index + 1}. {faq.question}
                    </h3>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`w-5 h-5 transition-all duration-500 ease-in-out flex-shrink-0 ${
                        openFaq === index ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                      }`}
                      style={{ color: '#000000' }}
                    />
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 -mt-4'
                    }`}
                  >
                    <div className="pt-4 border-t border-black/20 transform transition-all duration-500 ease-in-out">
                      <p className="text-white font-nunito text-xs md:text-xs lg:text-sm font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}
