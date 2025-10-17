'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function TrademarkRegistrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [aiQuestion, setAiQuestion] = useState('');
  const [searchResult, setSearchResult] = useState<{question: string, answer: string} | null>(null);
  const [showNoMatch, setShowNoMatch] = useState(false);

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
    return `copyright-protection-in-${slug}`;
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
      question: "What is a copyright, and why should I register it?",
      answer: "Copyright is a legal right that protects original creative works such as literary, artistic, musical, and digital content. Registering it provides legal proof of ownership and exclusive rights to reproduce, distribute, and license your work."
    },
    {
      question: "How long does it take to register copyright in India?",
      answer: "Copyright registration in India typically takes 4-6 months from filing to certificate issuance. With IPRKaro's expert guidance, we ensure proper documentation for timely processing."
    },
    {
      question: "What documents are required for copyright registration?",
      answer: "Identity proof (PAN/Aadhaar), Address proof, Work sample (manuscript, music file, software code, design), NOC from publisher/author (if applicable), Power of Attorney (if filed through attorney)"
    },
    {
      question: "Can I register copyright online in India?",
      answer: "Yes. With IPRKaro, the entire copyright registration process is managed 100% online with expert legal support for books, music, software, and all creative works."
    },
    {
      question: "How long is copyright protection valid in India?",
      answer: "Copyright protection lasts for the lifetime of the author plus 60 years after their death. For works like films and sound recordings, it's 60 years from the date of publication."
    }
  ];

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiQuestion.trim()) {
      setSearchResult(null);
      setShowNoMatch(false);
      const query = aiQuestion.toLowerCase().trim();
      const scoredFaqs = trademarkFaqs.map(faq => {
        const questionLower = faq.question.toLowerCase();
        const answerLower = faq.answer.toLowerCase();
        let score = 0;
        const queryWords = query.split(' ').filter(word => word.length > 2);
        queryWords.forEach(word => {
          if (questionLower.includes(query)) score += 100;
          if (questionLower.includes(word)) score += 10;
          if (answerLower.includes(word)) score += 3;
        });
        return { faq, score };
      });
      const bestMatch = scoredFaqs.reduce((best, current) => current.score > best.score ? current : best);
      setTimeout(() => {
        if (bestMatch.score > 0) {
          setSearchResult(bestMatch.faq);
          setShowNoMatch(false);
        } else {
          setSearchResult(null);
          setShowNoMatch(true);
        }
      }, 50);
      setAiQuestion('');
    }
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
    // Clock icon for "24/7 Accessibility"
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" key="clock">
      <circle cx="12" cy="12" r="9" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 7V12L15 15" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ];

  const plans = [
    {
      id: 'standard',
      name: 'AI Copyright Filing: Standard',
      subtitle: 'Deeper search with risk insights',
      description: 'Best for small businesses/startups',
      content: 'Essential copyright protection',
      features: [
        'Complete online copyright filing included',
        'AI copyright search & conflict check',
        'Expert legal guidance throughout the process',
        'Essential copyright protection for your brand'
      ],
      price: '₹1,999',
      highlighted: true
    },
    {
      id: 'premium',
      name: 'Premium Copyright Registration: With AI Risk Checkup',
      subtitle: 'Complete filing included',
      description: 'Suited for growing brands',
      content: 'Enhanced copyright services',
      features: [
        'AI-powered copyright registration and risk report',
        'Advanced legal guidance and copyright filing',
        'Priority VIP support, fast application monitoring',
        'Enhanced copyright and brand safeguard'
      ],
      price: '₹2,999',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Copyright Monitoring & Protection: AI Powered',
      subtitle: '24/7 copyright monitoring',
      description: 'Enterprises, ongoing protection',
      content: 'Complete copyright protection',
      features: [
        '24/7 AI-powered brand & copyright monitoring',
        'Instant alerts for conflicts and infringements',
        'Continuous protection against copycats',
        'Ongoing legal peace of mind for your copyright'
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
                Copyright Registration in India: Complete Guide by IPRKaro
              </h1>

              <h2 className="text-white font-nunito text-sm md:text-lg lg:text-lg font-medium leading-tight">
                Protect Your Creativity with Expert Copyright Registration in India
              </h2>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                In today's digital-first world, content and creativity are the foundation of every business. From songs, films, blogs, software, and artwork to website content, every creative work deserves protection against misuse. This is where copyright registration in India becomes crucial.

At IPRKaro, we combine expert legal knowledge with technology-driven solutions to simplify the copyright registration process. Whether you are a startup, an independent artist, a software developer, or a large enterprise, our copyright services ensure your original works are legally protected under the Indian Copyright Act, 1957.
              </p>
            </div>

            {/* Why Copyright Section */}
            <div className="space-y-4 px-2 md:px-0">
              <h3 className="text-white font-nunito text-sm md:text-xl lg:text-2xl font-medium">
                Why Copyright with IPRKaro ?
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
                      <span className="text-white font-nunito text-xs md:text-sm font-medium">
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
                      Get a Guaranteed Copyright on
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
              Copyright Requirements
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
                we work with the Guidelines of
              </h3>

              {/* Guidelines Images - Mobile: Full width, no containers */}
              <div className="md:hidden flex items-center justify-between w-full gap-0">
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/serv1.svg"
                    alt="Service 1"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/serv2.svg"
                    alt="Service 2"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/serv3.svg"
                    alt="Service 3"
                    className="w-full h-auto object-contain max-w-[80px]"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/serv4.svg"
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

            {/* About Copyright Registration Section */}
            <div className="space-y-6 mt-20 px-2 md:px-0">
              <h2 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                About Copyright Registration in India
              </h2>

              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                Copyright Registration Services: Intro
              </h3>

              <h4 className="text-white font-nunito text-sm md:text-base lg:text-lg font-medium">
                Protect Your Creativity with Expert Copyright Registration in India
              </h4>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                In today's digital-first world, content and creativity are the foundation of every business. From songs, films, blogs, software, and artwork to website content, every creative work deserves protection against misuse. This is where copyright registration in India becomes crucial.

At IPRKaro, we combine expert legal knowledge with technology-driven solutions to simplify the copyright registration process. Whether you are a startup, an independent artist, a software developer, or a large enterprise, our copyright services ensure your original works are legally protected under the Indian Copyright Act, 1957.
              </p>
            </div>

            {/* What is Copyright Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                What is Copyright?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                Copyright is a legal right that protects original creative works such as literary, artistic, musical, and digital content. It gives the creator exclusive rights to reproduce, distribute, perform, display, and license their work.

Unlike patents and trademarks, copyright specifically protects expressions of creativity, not inventions or brand names. For example:

A song is copyrightable, but the name of the band is trademarked.

A software code is copyrightable, but the innovative algorithm behind it may be patented.
              </p>
            </div>

            {/* Why Register Copyright Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                Why Register a Copyright in India?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                While copyright exists automatically upon creation of a work, registering it provides strong legal protection. Here's why you should register your copyright:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Proof of Ownership</strong><br />
                    A registered copyright serves as a legal certificate of authorship and ownership.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Exclusive Rights</strong><br />
                    You control how your work is reproduced, distributed, or adapted.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Legal Protection Against Infringement</strong><br />
                    If someone copies your work without permission, a registered copyright makes it easier to take legal action, file for injunctions, and claim damages.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>Commercial Benefits</strong><br />
                    Registered works can be licensed, franchised, or sold, creating revenue streams.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                    <strong>International Recognition</strong><br />
                    Through international treaties like the Berne Convention, your copyright in India can be enforced in other member countries.
                  </p>
                </div>
              </div>
            </div>

            {/* What Works Can Be Copyrighted Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                What Works Can Be Copyrighted in India?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                The Indian Copyright Act, 1957 recognizes protection for a wide range of works, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Literary Works (Books, articles, blogs, computer programs, and scripts)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Artistic Works (Paintings, drawings, photography, architecture, logos, and designs)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Musical Works (Compositions, lyrics, soundtracks)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Cinematographic Films (Movies, short films, web series, advertisements)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Sound Recordings (Songs, podcasts, background scores)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-xs md:text-xs">Software (Source code, applications, and digital programs)</span>
                  </div>
                </div>
              </div>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                <strong>Website Content & Digital Creations:</strong> Content, infographics, UI/UX designs
              </p>
            </div>

            {/* Copyright Registration Process Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-base md:text-lg lg:text-xl font-medium">
                Copyright Registration Process in India
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                Registering a copyright with IPRKaro involves a step-by-step process handled by our legal experts:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Application Preparation (Form XIV)</h4>
                    <p className="text-white font-nunito text-xs md:text-xs leading-relaxed">Drafting and filing the copyright application with details of the work.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Submission to Copyright Office</h4>
                    <p className="text-white font-nunito text-xs md:text-xs leading-relaxed">Application is filed along with supporting documents and prescribed fees.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Diary Number Issued</h4>
                    <p className="text-white font-nunito text-xs md:text-xs leading-relaxed">A diary number (acknowledgment) is given, marking the start of the registration process.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Examination & Objections (if any)</h4>
                    <p className="text-white font-nunito text-xs md:text-xs leading-relaxed">The Copyright Office examines the work. In case of objections or opposition, our attorneys respond with strong legal representation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFB703] flex items-center justify-center text-white font-nunito font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="text-white font-nunito text-base md:text-lg font-medium mb-1">Registration & Certificate</h4>
                    <p className="text-white font-nunito text-xs md:text-xs leading-relaxed">Upon approval, the applicant receives an official copyright registration certificate, valid for the lifetime of the author plus 60 years.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents Required Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                Documents Required for Copyright Registration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Identity proof of the applicant (PAN / Aadhaar / Passport)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Address proof of the applicant</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Work sample (manuscript, music file, software code, design, etc.)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">NOC from publisher/author (if applicable)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Incorporation certificate (if the applicant is a company)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FFB703] flex-shrink-0"></div>
                    <span className="text-white font-nunito text-sm md:text-base">Power of Attorney (if filed through an attorney)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Duration Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                How Long Does Copyright Protection Last in India?
              </h3>

              <p className="text-white font-nunito text-xs md:text-xs lg:text-sm leading-relaxed">
                Copyright protection in India generally lasts for the lifetime of the author plus 60 years after their death. For works like films, sound recordings, and government publications, the validity is 60 years from the date of publication.
              </p>
            </div>

            {/* Why Choose IPRKaro Section */}
            <div className="space-y-6 px-2 md:px-0">
              <h3 className="text-white font-nunito text-lg md:text-xl lg:text-2xl font-medium">
                Why Choose IPRKaro for Copyright Registration?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Expert Legal Assistance:</strong> Our IP attorneys ensure your application is drafted and filed correctly.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>End-to-End Support:</strong> From filing to handling objections and disputes, we manage the process.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Digital & Nationwide Service:</strong> Register your copyright online from anywhere in India.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Affordable Pricing:</strong> Transparent fee structure with no hidden costs.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FFB703] mt-2 flex-shrink-0"></div>
                  <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                    <strong>Strong Legal Defense:</strong> In case of disputes, we represent you legally to enforce your rights.
                  </p>
                </div>
              </div>

              <p className="text-white font-nunito text-sm md:text-base lg:text-base leading-relaxed">
                In today's competitive and digital-driven environment, protecting intellectual property is no longer optional but essential. Copyright registration in India not only gives creators legal ownership but also ensures long-term commercial benefits.

With IPRKaro's expert legal team and technology-backed process, you can register your copyright easily, avoid delays, and safeguard your creative work for decades.

Get your copyright registered today with IPRKaro to protect your creativity, monetize your work, and secure your legacy.
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
                    href="/services/copyright-protection"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#0C002B] bg-[#FFB703] rounded-lg hover:bg-[#e6a503] transition-colors duration-300"
                  >
                    Learn More About Copyright Services
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
                    className="text-white font-nunito font-medium leading-[24px]"
                    style={{
                      fontSize: 'clamp(16px, 4vw, 20px)',
                      lineHeight: '24px'
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
                    className="text-white font-nunito font-medium leading-[20px] mb-3 text-center"
                    style={{
                      fontSize: 'clamp(14px, 3.5vw, 18px)',
                      lineHeight: '20px'
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
                      href="/services/copyright-protection"
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-[#0C002B] bg-[#FFB703] rounded-md hover:bg-[#e6a503] transition-colors duration-300"
                    >
                      Learn More About Copyright Services
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

      {/* We Provide Solutions In Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#0C002B' }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-white font-nunito text-lg md:text-xl lg:text-4xl font-medium mb-4">
            Copyright Registration in India: Protect Your Creative Work Legally Across All States  
            </h2>
            <p className="text-white font-nunito text-xs md:text-sm opacity-80">
            At IPRKaro.com, we provide hassle-free copyright registration services across all states and cities. Whether you’re an artist, writer, designer, or business owner, our team helps you with online copyright registration in India to safeguard your original content from misuse.
            If you’re searching for “copyright registration near me”, we offer legal copyright protection in India with end-to-end guidance from filing to certification.
            </p>
          </div>

          {/* States Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-12">
            {states.map((state, index) => (
              <Link
                key={index}
                href={`/services/copyright-protection/${generateStateSlug(state)}`}
                className="p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  background: 'rgba(255, 183, 3, 0.1)',
                  border: '1px solid rgba(255, 183, 3, 0.3)'
                }}
              >
                <span className="text-white font-nunito text-xs md:text-sm font-medium group-hover:text-[#FFB703] transition-colors">
                  {state}
                </span>
                <i className="fas fa-arrow-right text-[#FFB703] text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></i>
              </Link>
            ))}
          </div>

          {/* Union Territories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {unionTerritories.map((territory, index) => (
              <Link
                key={index}
                href={`/services/copyright-protection/${generateStateSlug(territory)}`}
                className="p-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  background: 'rgba(19, 69, 195, 0.1)',
                  border: '1px solid rgba(19, 69, 195, 0.3)'
                }}
              >
                <span className="text-white font-nunito text-xs md:text-sm font-medium group-hover:text-[#1345C3] transition-colors">
                  {territory}
                </span>
                <i className="fas fa-arrow-right text-[#1345C3] text-xs opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></i>
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
            <form onSubmit={handleAiSubmit}>
              <div className="relative bg-black/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
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

            {/* Search Result Display */}
            {searchResult && (
              <div key={searchResult.question} className="p-6 rounded-xl max-w-lg animate-fade-in-up mt-4" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-white font-nunito text-base md:text-lg font-semibold leading-snug" style={{ color: '#FFB703' }}>{searchResult.question}</h4>
                  <button onClick={() => setSearchResult(null)} className="text-white hover:text-gray-300 transition-colors ml-3 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 rotate-180" /></button>
                </div>
                <p className="text-white font-nunito text-sm md:text-base font-medium leading-relaxed">{searchResult.answer}</p>
              </div>
            )}
            {showNoMatch && (
              <div className="p-6 rounded-xl max-w-lg animate-fade-in-up mt-4" style={{background: 'linear-gradient(140deg, rgba(12, 0, 43, 0.10) 6.89%, rgba(255, 183, 3, 0.10) 101.84%)',boxShadow: '2.88px 2.88px 18.144px 0 rgba(0, 0, 0, 0.15), 0 0 14.4px 0.72px rgba(255, 255, 255, 0.10) inset',backdropFilter: 'blur(87.876px)'}}>
                <div className="flex justify-between items-start">
                  <p className="text-white font-nunito text-sm md:text-base font-medium leading-relaxed">We're experiencing high traffic at the moment. Please try your search again in a few moments, or browse our FAQ section for answers.</p>
                  <button onClick={() => setShowNoMatch(false)} className="text-white hover:text-gray-300 transition-colors ml-3 flex-shrink-0"><FontAwesomeIcon icon={faChevronDown} className="w-5 h-5 rotate-180" /></button>
                </div>
              </div>
            )}
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
                      className={`w-6 h-6 transition-all duration-500 ease-in-out flex-shrink-0 ${
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
