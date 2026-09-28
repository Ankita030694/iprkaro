'use client';

import ContactForm from '@/components/common/ContactForm';
import FaqSection from '@/components/FaqSection';
import IntegratedBrandProtectionVisual from '@/components/contact/IntegratedBrandProtectionVisual';

export default function ContactClient() {
  const steps = [
    {
      step: '01',
      title: 'Submit Details & Instant AI Scan',
      desc: 'Fill our short contact form. Our proprietary AI engine immediately runs a preliminary conflict analysis on your brand name.',
      icon: (
        <svg className="w-5 h-5 text-[#1952C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: '02',
      title: '1-on-1 Senior Attorney Strategy',
      desc: 'An assigned IP attorney contacts you in < 15 minutes to confirm Nice classes, verify MSME discounts, and refine the filing strategy.',
      icon: (
        <svg className="w-5 h-5 text-[#1952C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Priority E-Filing & ™ Allotment',
      desc: 'We draft and electronically file your application with the Trademark Registry within 24 hours. Start using the ™ mark right away.',
      icon: (
        <svg className="w-5 h-5 text-[#1952C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const contactFaqs = [
    {
      question: "How fast will an IP attorney respond to my inquiry?",
      answer: "Our senior legal team typically reviews your details and responds within 15 to 30 minutes during business hours (Mon-Sat, 9 AM - 8 PM IST). For urgent trademark filing or pending hearing deadlines, you can also reach us directly via our helpline at +91-9289707648."
    },
    {
      question: "Is the initial trademark consultation and availability search free?",
      answer: "Yes! Your initial consultation and comprehensive AI-powered trademark search report are 100% free of charge. Our legal experts evaluate whether your mark is distinct, check phonetic similarities in relevant classes, and advise you on registerability with zero upfront obligation."
    },
    {
      question: "Do I need to visit an office in person or is the entire process 100% online?",
      answer: "The entire process is 100% digital and paperless. From preliminary search, document verification, power of attorney (Form TM-48) signing, to final government e-filing and receipt of your Trademark Application Number, everything is completed online from anywhere in India or abroad."
    },
    {
      question: "What documents are required to start the registration process?",
      answer: "You only need: (1) Brand name, logo, or slogan to be protected, (2) Identity proof of the applicant (PAN Card / Aadhaar for individuals, or Certificate of Incorporation for companies), (3) Address proof, (4) Udyam / MSME Registration Certificate (if applicable, to avail 50% government fee concession), and (5) Signed Form TM-48."
    },
    {
      question: "What happens after I submit the contact form?",
      answer: "Once submitted, our legal desk assigns your inquiry to a specialized IP advocate. You will receive an instant confirmation, followed by a direct phone call or WhatsApp message with your free trademark search evaluation and a transparent quotation with zero hidden fees."
    },
    {
      question: "Can you assist with Trademark Objections, Opposition hearings, and Copyright filings?",
      answer: "Absolutely. In addition to fresh trademark applications, our litigation team specializes in drafting comprehensive examination objection replies (Section 9 & 11), attending Trademark Registry show-cause hearings, filing copyright applications, and international Madrid Protocol filings."
    }
  ];

  return (
    <div className="w-full bg-white text-[#0C002B]">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO & CONTACT FORM SECTION (FORM FIRST ON MOBILE)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-[125px] sm:pt-[135px] md:pt-[140px] lg:pt-[140px] pb-8 sm:pb-12 md:pb-14 overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-[#F8FAFC] to-[#FFFFFF]">
        
        {/* Ambient Top Glow Mesh */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-full h-[450px] pointer-events-none -z-0 opacity-70"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 50% 10%, rgba(186, 230, 253, 0.5), rgba(219, 234, 254, 0.4) 40%, rgba(255, 255, 255, 0) 80%)'
          }}
        />

        <div className="relative max-w-[1320px] mx-auto px-3.5 sm:px-6 md:px-8 lg:px-10 z-10">
          
          {/* Main Grid: Form First on Mobile (order-1), Left Column (order-2) on Mobile; Side-by-side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-x-8 lg:gap-y-3 items-start">
            
            {/* 1. Contact Form (Mobile: 1st - FIRST THING VISIBLE ON MOBILE SCREEN! | Desktop: Right Col) */}
            <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 w-full flex justify-center lg:justify-end my-0">
              <ContactForm />
            </div>

            {/* 2. Header, Visual & Trust Indicators (Mobile: 2nd - ON SCROLL BELOW FORM | Desktop: Left Col) */}
            <div className="order-2 lg:order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-4 sm:space-y-5">
              
              {/* Main Heading Text */}
              <div className="space-y-2 sm:space-y-2.5 text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="font-nunito text-[24px] sm:text-[34px] md:text-[42px] lg:text-[46px] font-extrabold leading-[1.15] text-[#0C002B] tracking-tight">
                  Protect Your Brand <br className="hidden sm:inline" />
                  <span className="text-[#1952C7]">Before Someone Else Does.</span>
                </h1>
                <p className="text-[#475569] font-nunito text-[13.5px] sm:text-[15.5px] leading-[1.55] max-w-xl font-normal">
                  AI-powered trademark search combined with experienced IP attorneys to help protect your brand, trademark, copyright, and intellectual property in India.
                </p>
              </div>

              {/* Seamless Integrated Brand Protection Visual */}
              <IntegratedBrandProtectionVisual />

              {/* 4 Trust Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 border-t border-slate-200/60">
                {/* 1. Founders Served */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div className="font-nunito text-xs sm:text-[13px] font-extrabold text-[#0C002B]">10,000+</div>
                    <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium">Founders Served</div>
                  </div>
                </div>

                {/* 2. Experienced IP Attorneys */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 text-[#1952C7] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.912 10.912 0 01.55-2.029l-3.21-1.376L10 2.22l7.41 3.176-3.21 1.376a10.912 10.912 0 01.55 2.029l2.64-1.131a1 1 0 000-1.84l-7-3z" />
                      <path d="M10.89 8.214a1 1 0 00-1.78 0l-3.4 7A1 1 0 006.6 16.6l3.4-1.7 3.4 1.7a1 1 0 001.49-1.386l-3.4-7z" />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div className="font-nunito text-xs sm:text-[13px] font-extrabold text-[#0C002B]">Experienced</div>
                    <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium">IP Attorneys</div>
                  </div>
                </div>

                {/* 3. Free Initial Consultation */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div className="font-nunito text-xs sm:text-[13px] font-extrabold text-[#0C002B]">Free Initial</div>
                    <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium">Consultation</div>
                  </div>
                </div>

                {/* 4. Fast Response Within 15 Minutes */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="leading-tight">
                    <div className="font-nunito text-xs sm:text-[13px] font-extrabold text-[#0C002B]">Fast Response</div>
                    <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium">Within 15 Minutes</div>
                  </div>
                </div>
              </div>

              {/* Verified Client Social Proof Card (Hidden on Mobile) */}
              <div className="hidden md:flex items-start sm:items-center gap-3.5 pt-1.5">
                {/* 4 Avatars Overlapping */}
                <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                  <img
                    src="/images/contact/avatar1.jpg"
                    alt="Verified Founder 1"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="/images/contact/avatar2.jpg"
                    alt="Verified Founder 2"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="/images/contact/avatar3.jpg"
                    alt="Verified Founder 3"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="/images/contact/avatar4.jpg"
                    alt="Verified Founder 4"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                </div>

                {/* Stars, Quote, and Author */}
                <div className="space-y-0.5 text-left">
                  <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-slate-600 font-normal italic leading-snug">
                    &ldquo;IPR Karo made our trademark registration effortless. From the AI conflict check to final filing within 24 hours, their senior attorneys were responsive and transparent throughout.&rdquo;
                  </p>
                  <div className="text-[10.5px] sm:text-[11px] text-slate-500 font-medium">
                    — <strong className="text-[#0C002B]">Ananya M.</strong>, Co-Founder, Bengaluru (Verified Client)
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          2. HOW IT WORKS (3-STEP CONSULTATION FLOW)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-8 sm:py-10 md:py-12 bg-white border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#1952C7] uppercase tracking-wider mb-2">
              Simple &amp; Transparent
            </div>
            <h2 className="font-nunito text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0C002B] tracking-tight leading-tight">
              How Consultation &amp; Filing Works
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              From free trademark conflict checks to government registration certificates, experience effortless legal protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="relative p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-[#1952C7]/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center group-hover:scale-110 group-hover:border-[#1952C7]/30 transition-transform">
                    {item.icon}
                  </div>
                  <span className="font-nunito text-2xl sm:text-3xl font-black text-slate-200 group-hover:text-[#1952C7]/20 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-nunito text-base sm:text-lg font-bold text-[#0C002B] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          3. OUR OFFICE (GURUGRAM HEADQUARTERS ONLY - TIGHT SPACING)
      ───────────────────────────────────────────────────────────── */}
      <section className="w-full py-8 sm:py-10 md:py-12 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold text-[#1952C7] uppercase tracking-wider mb-2">
              Headquarters &amp; Support Desk
            </div>
            <h2 className="font-nunito text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#0C002B] tracking-tight leading-tight">
              Visit Our Head Office
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Our central legal operations and client consultation center in Gurugram (Delhi NCR).
            </p>
          </div>

          {/* Dedicated Gurugram Office Card */}
          <div className="max-w-[960px] mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 border border-slate-200/90 shadow-[0_8px_30px_rgba(12,0,43,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-7 space-y-3.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold text-[#1952C7] bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full">
                    Main Operations
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    National Corporate HQ
                  </span>
                </div>

                <h3 className="font-nunito text-xl sm:text-2xl font-extrabold text-[#0C002B]">
                  Gurugram (Headquarters)
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="text-slate-400 mt-0.5">📍</span>
                    <span className="leading-relaxed font-medium text-[#0C002B]">
                      2493AP, Block G, Sushant Lok 2, Sector 57, Gurugram, Haryana 122001
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">📞</span>
                    <a href="tel:+919289707648" className="font-bold text-[#0C002B] hover:text-[#1952C7] transition-colors">
                      +91-9289707648
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">✉️</span>
                    <a href="mailto:info@iprkaro.com" className="font-bold text-[#0C002B] hover:text-[#1952C7] transition-colors">
                      info@iprkaro.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">🕒</span>
                    <span>Mon - Sat: 9:00 AM - 8:00 PM IST</span>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href="https://maps.app.goo.gl/cYLbGkykCPV5b2Xg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0C002B] hover:bg-[#1952C7] text-white font-nunito text-xs sm:text-sm font-bold transition-colors shadow-sm"
                  >
                    <span>View on Google Maps</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Rating & Trust Highlight */}
              <div className="md:col-span-5 bg-gradient-to-br from-[#F0F5FF] to-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-blue-100/90 flex flex-col justify-center text-center space-y-2.5">
                <div className="flex items-center justify-center gap-1 text-amber-400 text-lg">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div className="font-nunito text-2xl sm:text-3xl font-black text-[#0C002B]">
                  4.9 / 5.0
                </div>
                <p className="font-nunito text-[11.5px] text-slate-600 font-medium leading-relaxed">
                  Rated 5 stars by over 1,250+ Startups, Founders, and Enterprise Legal Teams across India.
                </p>
                <div className="pt-0.5">
                  <span className="inline-block text-[10.5px] font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    ✓ Verified Legal Practice
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────
          4. FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────────────────────── */}
      <FaqSection 
        items={contactFaqs} 
        title={
          <>
            Frequently Asked <span className="text-[#1952C7]">Questions</span>
          </>
        } 
        badge="NEED HELP?"
      />

    </div>
  );
}
