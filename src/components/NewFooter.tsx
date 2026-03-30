'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SearchClient } from './index';

const queries = [
  { name: 'Registration of Trademark', href: '/registration-of-trademark' },
  { name: 'Trademark Registration India', href: '/trademark-registration-india' },
  { name: 'Trademark Registration Search', href: '/trademark-registration-search' },
  { name: 'Trademark Search', href: '/trademark-search' },
  { name: 'Trade Mark Registration', href: '/trade-mark-registration' },
  { name: 'Online Trademark Registration', href: '/online-trademark-registration' },
  { name: 'Trademark Registration Check', href: '/trademark-registration-check' },
  { name: 'Trademark India', href: '/trademark-india' },
  { name: 'What is Trademark', href: '/what-is-trademark' },
  { name: 'What is Trademark Registration', href: '/what-is-trademark-registration' },
  { name: 'Trademark Register Kaise Karte Hai', href: '/trademark-register-kese-karte-hai' },
  { name: 'How to Register Trademark', href: '/how-to-register-trademark' },
  { name: 'Trademark Application Status', href: '/trademark-application-status' },
  { name: 'Register Trademark for Startup', href: '/want-to-register-trademark-for-startup' },
  { name: 'GST Required for Trademark', href: '/gst-required-for-trademark' },
  { name: 'How to Register Trademark Yourself', href: '/how-to-register-trademark-yourself' },
  { name: 'Types of Trademark Classes', href: '/types-of-trademark-classes' },
  { name: 'How to Check Trademark Availability', href: '/how-to-check-trademark-availability' },
  { name: 'E-filing Trademark India', href: '/e-filing-trademark' },
  { name: 'Trademark for Clothing Brand', href: '/trademark-for-clothing-brand' },
  { name: 'Trademark for Jewellery Brand', href: '/trademark-for-jewellery-brand' },
  { name: 'Trademark for Restaurant', href: '/trademark-for-restaurant' },
  { name: 'Trademark for Business', href: '/trademark-for-business' },
  { name: 'Trademark for Stationary', href: '/trademark-for-stationary' },
  { name: 'Trademark for Furniture Shop', href: '/trademark-for-furniture-shop' },
  { name: 'Trademark for Legal Services', href: '/trademark-for-legal-services' },
  { name: 'Trademark for Toys & Sports Services', href: '/trademark-for-toys-sports-services' },
  { name: 'Trademark for Musical Instruments', href: '/trademark-for-musical-instruments' },
  { name: 'Trademark for Financial Services', href: '/trademark-for-financial-services' },
  { name: 'Trademark for Telecommunication Services', href: '/trademark-for-telecommunication-services' },
  { name: 'Trademark for Medical Services', href: '/trademark-for-medical-services' },
  { name: 'Trademark for Ecommerce', href: '/trademark-for-ecommerce' },
  { name: 'Fast-Track Trademark Registration', href: '/fast-track-trademark-registration' },
  { name: 'Trademark Class Finder', href: '/trademark-class-finder' },
  { name: 'Trademark Registration in Noida', href: '/trademark-registration-in-noida' },
  { name: 'Trademark Registration in Delhi', href: '/trademark-registration-in-delhi' },
  { name: 'Trademark Registration in Gurgaon', href: '/trademark-registration-in-gurgaon' },
  { name: 'Fastest Trademark Search Service', href: '/which-trademark-search-service-offers-the-fastest-turnaround-time' },
  { name: 'Comprehensive Search Report', href: '/where-can-i-get-a-comprehensive-trademark-search-report' },
  { name: 'Search with Legal Support', href: '/who-provides-trademark-search-services-with-legal-support-included' },
  { name: 'Startup Search Packages', href: '/which-companies-offer-trademark-clearance-search-packages-for-startups' },
  { name: 'Affordable Trademark Registration', href: '/where-can-i-find-affordable-trademark-registration-services-near-me' },
  { name: 'Steps to File Trademark Online', href: '/steps-to-file-trademark-application-online-india' },
  { name: 'Trademark Renewal Period', href: '/in-india-the-trademark-registration-should-be-renewed-every' },
  { name: 'IP India Status Meaning', href: '/ipindia-trademark-status' },
  { name: 'MCA Company Name Check', href: '/mca-company-name-check' },
  { name: 'Leave and License Agreement', href: '/leave-and-license-agreement' },
  { name: 'Udyam Registration', href: '/udyam-registration-agreement' },
  { name: 'Public Trademark Search', href: '/trademark-search-public' },
  { name: 'NOC Formats', href: '/format-for-no-objection-certificate' },
  { name: 'Trademark vs Copyright', href: '/trademark-and-copyright-difference' },
  { name: 'Patent Search', href: '/indian-patent-office-search' },
  { name: 'Income Tax & GST Filing', href: '/return-filling-online' },
  { name: 'NDA Formats', href: '/non-disclosure-agreement-format' },
  { name: 'Small Company Status', href: '/small-company-definition' },
  { name: 'Pharmacist Registration (UP)', href: '/registration-of-pharmacist-in-up' },
  { name: 'Trademark Status Guide', href: '/trademark-status' },
  { name: 'Trademark Filing Steps Guide', href: '/what-are-the-steps-to-file-a-trademark-application-online-in-india' },
  { name: 'Official IP Portal Guide', href: '/which-government-portal-is-used-for-trademark-registration-in-india' },
  { name: 'Logo Protection Cost Guide', href: '/how-much-does-it-cost-to-get-a-logo-protected-in-india' },
  { name: 'Official IP Website Guide', href: '/official-government-website-for-intellectual-property-in-india' },
  { name: 'Documents for Service TM Registration', href: '/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service' },
  { name: 'Goods vs Services Trademark Guide', href: '/is-there-a-difference-between-trademark-registration-for-goods-and-services' },
  { name: 'Trademark Registration Timeline', href: '/how-long-does-the-trademark-registration-process-take-in-india' },
  { name: 'Reasons for TM Rejection Guide', href: '/what-are-the-comman-reasons-for-trademark-application-rejection-in-india' },
  { name: 'Trademark vs Copyright vs Patent Guide', href: '/difference-between-trademark-copyright-and-patent-protection-in-india' },
  { name: 'Trademark Renewal Guide', href: '/how-to-renew-a-registered-trademark-in-india' },
  { name: 'Understanding Trademark Classes', href: '/understanding-trademark-classes-for-services-and-goods-in-india' },
  { name: 'Fast Track Trademark Options', href: '/are-there-any-fast-track-options-for-trademark-registration-in-india' },
  { name: 'Trademark Infringement Guide', href: '/what-happens-when-someone-infringes-on-my-registered-trademark-in-india' },
  { name: 'Trademark Opposition Guide', href: '/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it' },
  { name: 'Trademark Slogan Guide', href: '/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india' },
  { name: 'Sound & Scent Trademark Guide', href: '/can-i-register-a-sound-or-scent-as-a-trademark-in-india' },
  { name: 'Trademark Legal Protections', href: '/what-legal-protections-does-a-registered-trademark-provide-to-a-company' },
  { name: 'Cancel Trademark Guide', href: '/how-to-cancel-or-dispute-someone-else-s-trademark-registration' },
  { name: 'Mobile App Trademark Guide', href: '/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india' },
  { name: 'Update Trademark Details', href: '/how-to-update-or-change-details-in-an-existing-trademark-registation' },
  { name: 'Where to Check Trademark India', href: '/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india' },
  { name: 'Best IP Legal Firms in India', href: '/best-legal-firms-specializing-in-intellectual-property-in-india' },
  { name: 'Online IP Platforms Guide', href: '/guide-to-choosing-a-reliable-online-plarforms-for-ip-services-in-india' },
  { name: 'Find Certified Agents Near Me', href: '/where-can-find-certified-trademark-agents-or-attorneys-near-me' },
  { name: 'Benefits of Trademark Agent', href: '/what-are-the-benefits-of-hiring-a-trademark-agent-in-india' },
  { name: 'Trademark Fees Comparison', href: '/compare-fees-for-various-online-trademark-registration-providers-in-india' },
  { name: 'How to do a Trademark Search', href: '/how-to-do-a-trademark-search-before-filing' },
  { name: 'Grounds for TM Rejection', href: '/what-are-absolute-and-relative-grounds-for-rejection-section-9-11' },
  { name: 'Madrid Protocol India', href: '/how-to-file-international-trademark-madrid-protocol-from-india' },
  { name: 'Can two trademarks exist in different classes?', href: '/Can-two-trademarks-exist-in-different-classes-in-India' },
  { name: 'How to avoid trademark objection?', href: '/How-to-avoid-trademark-objection-before-filing' },
  { name: 'Why are trademarks rejected?', href: '/Common-reasons-why-trademark-applications-get-rejected' },
  { name: 'What happens after opposition?', href: '/What-happens-after-trademark-opposition-is-filed' },
  { name: 'Opposition Case Timeline', href: '/how-long-trademark-opposition-cases-take' },
  { name: 'Opposition Documents Checklist', href: '/documents-required-for-trademark-opposition' },
  { name: 'Avoid Trademark Scams', href: '/how-to-avoid-trademark-registration-scams' },
  { name: 'Trademark Your Name', href: '/can-you-trademark-your-own-name-in-india' },
  { name: 'Objection Reply Format', href: '/trademark-objection-reply-format-india' },
  { name: 'Examination Report Response', href: '/how-to-respond-to-trademark-examination-report' },
  { name: 'Overcome Objection Guide', href: '/how-to-overcome-trademark-objection' },
  { name: 'Win Trademark Case', href: '/how-to-win-trademark-objection-case' },
  { name: 'Trademark Expiry Guide', href: '/what-happens-if-trademark-expires' },
  { name: 'Restore Trademark Guide', href: '/how-to-restore-expired-trademark' },
  { name: 'Trademark Enforcement Strategies', href: '/trademark-enforcement-strategies' },
  { name: 'Stop Trademark Infringement', href: '/how-to-stop-trademark-infringement' },
  { name: 'Expedited Trademark Filing', href: '/expedited-process-of-trademark-filing' },
  { name: 'Trademark Copying Action Plan', href: '/what-to-do-if-someone-copies-your-trademark' },
  { name: 'Trademark Owner Legal Rights', href: '/legal-rights-of-trademark-owner-in-india' },
  { name: 'Stop Brand Name Misuse', href: '/how-to-stop-someone-using-your-brand-name' },
  { name: 'Trademark Objected Meaning', href: '/what-does-objected-mean-in-trademark-status' },
  { name: 'Protect Company Name', href: '/protect-company-name-with-trademark' }
];

const NewFooter = () => {
  return (
    <footer className="w-full bg-[#05030E] text-white pt-24 pb-8 overflow-hidden font-nunito">
      {/* Top CTA Section */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24 flex flex-col items-center">
        <h2 className="text-white font-nunito text-[40px] md:text-[56px] font-bold text-center leading-[1.1] mb-12 tracking-tight">
          Make Your Brand <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A56DB] via-[#DAB6FC] to-[#059669] animate-gradient">Future-Proof</span><br />
          with AI
        </h2>

        <SearchClient variant="dark" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="w-full h-px bg-white/5 mb-16"></div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 md:gap-8 mb-24">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-10">
              <div className="relative w-[180px] h-[45px]">
                <Image 
                  src="/Group 2 (2).svg" 
                  alt="IPR KARO Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
          </div>

          <div>
            <h4 className="text-3xl md:text-xl font-bold mb-6">Product</h4>
            <ul className="space-y-1">
              <li><Link href="/our-services/trademark-registration" className="text-white/60 hover:text-white transition-colors">AI Trademark Search</Link></li>
              <li><Link href="/our-services/trademark-registration" className="text-white/60 hover:text-white transition-colors">Trademark Filing</Link></li>
              <li><Link href="/our-services/patent-registration" className="text-white/60 hover:text-white transition-colors">Patent Filing</Link></li>
              <li><Link href="/our-services/copyright-registration" className="text-white/60 hover:text-white transition-colors">Copyright Filing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl md:text-xl font-bold mb-6">Why IPRKARO</h4>
            <ul className="space-y-1">
              <li><Link href="/about-us" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about-us" className="text-white/60 hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link href="/pricing" className="text-white/60 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl md:text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="/resources" className="text-white/60 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/resources" className="text-white/60 hover:text-white transition-colors">Trademark Guide</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Brand Guidelines</Link></li>
            </ul>
          </div>
        </div>

        {/* Explore More Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h4 className="text-3xl md:text-xl font-bold whitespace-nowrap">Explore More</h4>
            <div className="w-full h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
            {queries.map((q, i) => (
              <Link 
                key={i} 
                href={q.href} 
                className="text-[13px] text-white/40 hover:text-white transition-all hover:translate-x-1 inline-block"
              >
                {q.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[13px]">© 2025 reserved by IPR KARO</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-[13px] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-white/40 hover:text-white text-[13px] transition-colors">Term of Service</Link>
            <Link href="/terms-and-conditions" className="text-white/40 hover:text-white text-[13px] transition-colors">Term of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
