'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import OurHeadOffice from '@/components/OurHeadOffice';
import ContactForm from '@/components/common/ContactForm';
import FaqSection from '@/components/FaqSection';

export default function ContactClient() {
  const router = useRouter();


  const contactFaqs = [
    {
      question: "How can I contact IPR Karo for support?",
      answer: "You can reach us via email at info@iprkaro.com, through our contact form on this page, or by calling our support team. We provide 24/7 online support for all trademark, copyright, and patent registration queries."
    },
    {
      question: "Do you have physical offices I can visit?",
      answer: "Yes, we have offices in major cities across India including Delhi, Mumbai, Bangalore, Hyderabad, Chennai, and Kolkata. However, our services are 100% available online, so you can complete your entire trademark registration from anywhere in India."
    },
    {
      question: "What are your response times for queries?",
      answer: "We typically respond to all queries within 2-4 hours during business hours. For urgent matters, our AI-powered chat support is available 24/7 to provide instant answers and guidance on trademark searches and registration processes."
    },
    {
      question: "Can I schedule a consultation with an IP expert?",
      answer: "Yes! You can schedule a free consultation with our IP attorneys through our contact form or by emailing us. Our experts will review your trademark needs, discuss registration strategy, and provide personalized legal guidance."
    },
    {
      question: "How do I track my trademark application status?",
      answer: "Once you register with IPR Karo, you'll receive regular updates via email and SMS. You can also log into your dashboard to track your application status in real-time, view documents, and communicate directly with your assigned legal expert."
    }
  ];


  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-[120px] md:pt-[160px] pb-10">
      <div className="w-full">
        {/* Large screen scaling */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @media (min-width: 1024px) {
              .origin-top {
                transform: scale(0.8) !important;
              }
            }
          `
        }} />

        <div className="w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-12 items-start">
            
            {/* Left Section - Content */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10 mt-4 sm:mt-6 md:mt-8 lg:mt-8">
              {/* IPR Logo */}
              <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-27 md:h-27 relative">
                  <Image
                    src="/logo/iprlogoblack.svg"
                    alt="IPR Karo Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {/* Section Label */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#1952C7]"></div>
                  <span className="text-[#1952C7] font-nunito text-xs sm:text-sm font-bold tracking-wider uppercase">
                    CONNECT WITH US
                  </span>
                </div>

                <h1 className="font-nunito text-[32px] sm:text-[42px] md:text-[54px] font-bold leading-[1.1] text-[#0C002B] tracking-tight">
                  Connect With Expert <span className="text-[#1952C7]">Trademark Registration</span> Help in India
                </h1>

                <p className="text-[#6B7280] font-nunito text-[16px] md:text-[18px] font-medium max-w-2xl leading-[1.6]">
                  IPR Karo simplifies trademark registration in India using AI-powered search, risk reports, and expert legal support.<br className="hidden md:block" />
                  Start by searching your trademark availability, get instant AI conflict analysis, and file online for fast, reliable protection.
                </p>

                <div className="flex items-center gap-3 sm:gap-4 mt-6">
                  <a
                    href="mailto:info@iprkaro.com"
                    className="text-[#0C002B] font-nunito text-lg sm:text-xl font-bold hover:text-[#1952C7] transition-colors"
                  >
                    info@iprkaro.com
                  </a>
                  <button
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1952C7] hover:bg-[#123e9a] transition-colors cursor-pointer"
                    aria-label="Send Email"
                  >
                    <i className="fas fa-paper-plane text-white text-sm sm:text-base" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="w-full flex justify-center lg:justify-start">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <OurHeadOffice />

      {/* FAQ Section */}
      <FaqSection 
        items={contactFaqs} 
        title={
          <>
            Have Question?<br className="md:hidden" />
            <span className="text-[#1952C7]">
              We've Got Answers.
            </span>
          </>
        } 
      />
    </div>
  );
}
