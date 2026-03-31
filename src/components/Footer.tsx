// import React from 'react';
// import Image from 'next/image';
// import ClientLogoSlider from './ClientLogoSlider';

// const Footer: React.FC = () => {
//   return (
//     <footer className="text-white" style={{ backgroundColor: '#202020' }}>
//       <div className="max-w-8xl px-4 lg:px-24 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16">
//           {/* Logo and Email Signup Section */}
//           <div className="lg:col-span-2">
//             {/* Logo */}
//             <div className="mb-6">
//               <div className="flex items-center mb-2">
//                 <Image 
//                   src="/logo/iprlogo.svg" 
//                   alt="IPR Karo Logo" 
//                   width={65} 
//                   height={49}
//                   className="mr-2"
//                 />
//               </div>
//               <p className="text-sm">
//                 Turn Ideas Into Assets - <span className="text-cyan-300">IPR Karo</span>.
//               </p>
//             </div>

//             {/* Social Media - Mobile Only */}
//             <div className="lg:hidden">
//               <h3 className="text-sm font-semibold mb-4 uppercase">Follow us on</h3>
//               <div className="flex space-x-10">
//                  {/* YouTube */}
//               <a href="https://www.linkedin.com/company/iprkaro/" className="text-white hover:text-blue-500 transition-colors">
//                 <i className="fab fa-linkedin-in text-xl"></i>
//               </a>

//               {/* Instagram */}
//               <a href="https://www.instagram.com/iprkaro" className="text-pink-500 hover:text-pink-400 transition-colors">
//                 <i className="fab fa-instagram text-xl"></i>
//               </a>
//               {/* Facebook */}
//               <a href="https://www.facebook.com/profile.php?id=61580675227718" className="text-blue-600 hover:text-blue-500 transition-colors">
//                 <i className="fab fa-facebook-f text-xl"></i>
//               </a>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Layout: Quick Links, Services and About */}
//           <div className="lg:hidden grid grid-cols-2 gap-8">
//             {/* Quick Links */}
//             <div>
//               <h3 className="text-sm font-semibold mb-4 uppercase">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/" className="text-sm hover:text-cyan-300 transition-colors">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/about-us" className="text-sm hover:text-cyan-300 transition-colors">
//                     About Us
//                   </a>
//                 </li>

//                 <li>
//                   <a href="/resources" className="text-sm hover:text-cyan-300 transition-colors">
//                     Resources
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Services - Mobile */}
//             <div>
//               <h3 className="text-sm font-semibold mb-4 uppercase">Our Services</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/our-services/trademark-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                     Trademark Registration
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/trademark-registration-in-delhi" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Delhi</a>
//                 </li>
//                 <li>
//                   <a href="/trademark-registration-in-gurgaon" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Gurgaon</a>
//                 </li>
//                 <li>
//                   <a href="/trademark-registration-in-noida" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Noida</a>
//                 </li>
//                 <li>
//                   <a href="/trademark-registration-in-noida" className="text-sm hover:text-cyan-300 transition-colors">Legal Services Noida</a>
//                 </li>
//                 <li>
//                   <a href="/our-services/copyright-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                     Copyright Protection
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/our-services/patent-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                     Patent Filing
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* About */}
//             <div className="col-span-2 sm:col-span-1">
//               <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
//               <ul className="space-y-2">

//               <li>
//                   <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/privacy-policy" className="text-sm hover:text-cyan-300 transition-colors">
//                     Privacy Policy
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/terms-and-conditions" className="text-sm hover:text-cyan-300 transition-colors">
//                     Terms & Conditions
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Desktop Layout: Quick Links */}
//           <div className="hidden lg:block lg:col-span-1">
//             <h3 className="text-sm font-semibold mb-4 uppercase">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/" className="text-sm hover:text-cyan-300 transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about-us" className="text-sm hover:text-cyan-300 transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/our-services" className="text-sm hover:text-cyan-300 transition-colors">
//                   Services
//                 </a>
//               </li>

//               <li>
//                 <a href="/resources" className="text-sm hover:text-cyan-300 transition-colors">
//                   Resources
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Desktop Layout: Services */}
//           <div className="hidden lg:block lg:col-span-1">
//             <h3 className="text-sm font-semibold mb-4 uppercase">Our Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="/our-services/trademark-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                   Trademark Registration
//                 </a>
//               </li>
//               <li>
//                 <a href="/our-services/copyright-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                   Copyright Protection
//                 </a>
//               </li>
//               <li>
//                 <a href="/our-services/patent-registration" className="text-sm hover:text-cyan-300 transition-colors">
//                   Patent Filing
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Desktop Layout: About */}
//           <div className="hidden lg:block lg:col-span-1">
//             <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
//             <ul className="space-y-2">

//               <li>
//                 <a href="/privacy-policy" className="text-sm hover:text-cyan-300 transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="/terms-and-conditions" className="text-sm hover:text-cyan-300 transition-colors">
//                   Terms & Conditions
//                 </a>
//               </li>


//             </ul>
//           </div>

//           {/* Desktop Layout: Social Media */}
//           <div className="hidden lg:block lg:col-span-1">
//             <h3 className="text-sm font-semibold mb-4 uppercase">Follow us on</h3>
//             <div className="flex space-x-10">
//               {/* YouTube */}
//               <a href="https://www.linkedin.com/company/iprkaro/" className="text-white hover:text-blue-500 transition-colors">
//                 <i className="fab fa-linkedin-in text-xl"></i>
//               </a>

//               {/* Instagram */}
//               <a href="https://www.instagram.com/iprkaro" className="text-pink-500 hover:text-pink-400 transition-colors">
//                 <i className="fab fa-instagram text-xl"></i>
//               </a>
//               {/* Facebook */}
//               <a href="https://www.facebook.com/profile.php?id=61580675227718" className="text-blue-600 hover:text-blue-500 transition-colors">
//                 <i className="fab fa-facebook-f text-xl"></i>
//               </a>



//             </div>
//           </div>
//         </div>
//         {/* Queries Row */}
//         <div className="border-t border-gray-700 mt-12 pt-8">
//           <h3 className="text-sm font-semibold mb-6 uppercase text-gray-400">Queries</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
//             <a href="/trademark-register-kese-karte-hai" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Register Kaise Karte Hai
//             </a>
//             <a href="/how-to-register-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               How to Register Trademark
//             </a>
//             <a href="/trademark-application-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Application Status
//             </a>
//             <a href="/want-to-register-trademark-for-startup" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Register Trademark for Startup
//             </a>
//             <a href="/gst-required-for-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               GST Required for Trademark
//             </a>
//             <a href="/how-to-register-trademark-yourself" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               How to Register Trademark Yourself
//             </a>
//             <a href="/types-of-trademark-classes" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Types of Trademark Classes
//             </a>
//             <a href="/how-to-check-trademark-availability" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               How to Check Trademark Availability
//             </a>
//             <a href="/e-filing-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               E-filing Trademark India
//             </a>
//             <a href="/trademark-for-clothing-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Clothing Brand
//             </a>
//             <a href="/trademark-for-jewellery-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Jewellery Brand
//             </a>
//             <a href="/trademark-for-restaurant" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Restaurant
//             </a>
//             <a href="/trademark-for-business" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Business
//             </a>
//             <a href="/trademark-for-stationary" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Stationary
//             </a>
//             <a href="/trademark-for-furniture-shop" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Furniture Shop
//             </a>
//             <a href="/trademark-for-legal-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Legal Services
//             </a>
//             <a href="/trademark-for-toys-sports-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Toys & Sports Services
//             </a>
//             <a href="/trademark-for-musical-instruments" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Musical Instruments
//             </a>
//             <a href="/trademark-for-financial-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Financial Services
//             </a>
//             <a href="/trademark-for-telecommunication-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Telecommunication Services
//             </a>
//             <a href="/trademark-for-medical-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Medical Services
//             </a>
//             <a href="/trademark-for-ecommerce" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark for Ecommerce
//             </a>
//             <a href="/fast-track-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Fast-Track Trademark Registration
//             </a>
//             <a href="/trademark-class-finder" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Class Finder
//             </a>
//             <a href="/trademark-registration-in-noida" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Registration in Noida
//             </a>
//             <a href="/trademark-registration-in-delhi" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Registration in Delhi
//             </a>
//             <a href="/trademark-registration-in-gurgaon" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Trademark Registration in Gurgaon
//             </a>
//             <a href="/which-trademark-search-service-offers-the-fastest-turnaround-time" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Fastest Trademark Search Service
//             </a>
//             <a href="/where-can-i-get-a-comprehensive-trademark-search-report" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Comprehensive Search Report
//             </a>
//             <a href="/who-provides-trademark-search-services-with-legal-support-included" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Search with Legal Support
//             </a>
//             <a href="/which-companies-offer-trademark-clearance-search-packages-for-startups" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Startup Search Packages
//             </a>
//             <a href="/where-can-i-find-affordable-trademark-registration-services-near-me" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Affordable Trademark Registration
//             </a>
//             <a href="/what-is-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               How Often to Renew Trademark
//             </a>
//             <a href="/steps-to-file-trademark-application-online-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
//               Steps to File Trademark Online
//             </a>
//           </div>
//         </div>


//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-sm text-gray-400">
//             © 2024 reserved by IPR KARO
//           </p>
//         </div>
//       </div>


//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Image from 'next/image';
import ClientLogoSlider from './ClientLogoSlider';

const Footer: React.FC = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#202020' }}>
      <div className="max-w-8xl px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-16">
          {/* Logo and Email Signup Section */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <Image
                  src="/logo/iprlogo.svg"
                  alt="IPR Karo Logo"
                  width={65}
                  height={49}
                  className="mr-2"
                />
              </div>
              <p className="text-sm">
                Turn Ideas Into Assets - <span className="text-cyan-300">IPR Karo</span>.
              </p>
            </div>

            {/* Social Media - Mobile Only */}
            <div className="lg:hidden">
              <h3 className="text-sm font-semibold mb-4 uppercase">Follow us on</h3>
              <div className="flex space-x-10">
                {/* YouTube */}
                <a href="https://www.linkedin.com/company/iprkaro/" className="text-white hover:text-blue-500 transition-colors">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/iprkaro" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61580675227718" className="text-blue-600 hover:text-blue-500 transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout: Quick Links, Services and About */}
          <div className="lg:hidden grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-sm hover:text-cyan-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="text-sm hover:text-cyan-300 transition-colors">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/resources" className="text-sm hover:text-cyan-300 transition-colors">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services - Mobile */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/our-services/trademark-registration" className="text-sm hover:text-cyan-300 transition-colors">
                    Trademark Registration
                  </a>
                </li>
                <li>
                  <a href="/trademark-registration-in-delhi" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Delhi</a>
                </li>
                <li>
                  <a href="/trademark-registration-in-gurgaon" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Gurgaon</a>
                </li>
                <li>
                  <a href="/trademark-registration-in-noida" className="text-sm hover:text-cyan-300 transition-colors">Trademark in Noida</a>
                </li>
                <li>
                  <a href="/trademark-registration-in-noida" className="text-sm hover:text-cyan-300 transition-colors">Legal Services Noida</a>
                </li>
                <li>
                  <a href="/our-services/copyright-registration" className="text-sm hover:text-cyan-300 transition-colors">
                    Copyright Protection
                  </a>
                </li>
                <li>
                  <a href="/our-services/patent-registration" className="text-sm hover:text-cyan-300 transition-colors">
                    Patent Filing
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
              <ul className="space-y-2">

                <li>
                  <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-sm hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-sm hover:text-cyan-300 transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout: Quick Links */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-cyan-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-sm hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-services" className="text-sm hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>

              <li>
                <a href="/resources" className="text-sm hover:text-cyan-300 transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-sm hover:text-cyan-300 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Layout: Services */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/our-services/trademark-registration" className="text-sm hover:text-cyan-300 transition-colors">
                  Trademark Registration
                </a>
              </li>
              <li>
                <a href="/our-services/copyright-registration" className="text-sm hover:text-cyan-300 transition-colors">
                  Copyright Protection
                </a>
              </li>
              <li>
                <a href="/our-services/patent-registration" className="text-sm hover:text-cyan-300 transition-colors">
                  Patent Filing
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop Layout: About */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
            <ul className="space-y-2">

              <li>
                <a href="/privacy-policy" className="text-sm hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-sm hover:text-cyan-300 transition-colors">
                  Terms & Conditions
                </a>
              </li>


            </ul>
          </div>

          {/* Desktop Layout: Social Media */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-sm font-semibold mb-4 uppercase">Follow us on</h3>
            <div className="flex space-x-10">
              {/* YouTube */}
              <a href="https://www.linkedin.com/company/iprkaro/" className="text-white hover:text-blue-500 transition-colors">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/iprkaro" className="text-pink-500 hover:text-pink-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=61580675227718" className="text-blue-600 hover:text-blue-500 transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>



            </div>
          </div>
        </div>

        {/* Queries Row */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h3 className="text-sm font-semibold mb-6 uppercase text-gray-400">Queries</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
            {/* New Trademark Pages */}
            <a href="/registration-of-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Registration of Trademark</a>
            <a href="/trademark-registration-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration India</a>
            <a href="/trademark-registration-search" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration Search</a>
            <a href="/trademark-search" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Search</a>
            <a href="/trade-mark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trade Mark Registration</a>
            <a href="/online-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Online Trademark Registration</a>
            <a href="/trademark-registration-check" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration Check</a>
            <a href="/trademark-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark India</a>
            <a href="/what-is-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">What is Trademark</a>
            <a href="/what-is-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">What is Trademark Registration</a>
            <a href="/trademark-register-kese-karte-hai" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Register Kaise Karte Hai</a>
            <a href="/how-to-register-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to Register Trademark</a>
            <a href="/trademark-application-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Application Status</a>
            <a href="/want-to-register-trademark-for-startup" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Register Trademark for Startup</a>
            <a href="/gst-required-for-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">GST Required for Trademark</a>
            <a href="/how-to-register-trademark-yourself" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to Register Trademark Yourself</a>
            <a href="/types-of-trademark-classes" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Types of Trademark Classes</a>
            <a href="/how-to-check-trademark-availability" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to Check Trademark Availability</a>
            <a href="/e-filing-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">E-filing Trademark India</a>
            <a href="/trademark-for-clothing-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Clothing Brand</a>
            <a href="/trademark-for-jewellery-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Jewellery Brand</a>
            <a href="/trademark-for-restaurant" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Restaurant</a>
            <a href="/trademark-for-business" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Business</a>
            <a href="/trademark-for-stationary" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Stationary</a>
            <a href="/trademark-for-furniture-shop" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Furniture Shop</a>
            <a href="/trademark-for-legal-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Legal Services</a>
            <a href="/trademark-for-toys-sports-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Toys & Sports Services</a>
            <a href="/trademark-for-musical-instruments" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Musical Instruments</a>
            <a href="/trademark-for-financial-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Financial Services</a>
            <a href="/trademark-for-telecommunication-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Telecommunication Services</a>
            <a href="/trademark-for-medical-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Medical Services</a>
            <a href="/trademark-for-ecommerce" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Ecommerce</a>
            <a href="/fast-track-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Fast-Track Trademark Registration</a>
            <a href="/trademark-class-finder" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Class Finder</a>
            <a href="/trademark-registration-in-noida" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration in Noida</a>
            <a href="/trademark-registration-in-delhi" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration in Delhi</a>
            <a href="/trademark-registration-in-gurgaon" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration in Gurgaon</a>
            <a href="/which-trademark-search-service-offers-the-fastest-turnaround-time" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Fastest Trademark Search Service</a>
            <a href="/where-can-i-get-a-comprehensive-trademark-search-report" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Comprehensive Search Report</a>
            <a href="/who-provides-trademark-search-services-with-legal-support-included" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Search with Legal Support</a>
            <a href="/which-companies-offer-trademark-clearance-search-packages-for-startups" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Startup Search Packages</a>
            <a href="/where-can-i-find-affordable-trademark-registration-services-near-me" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Affordable Trademark Registration</a>
            <a href="/steps-to-file-trademark-application-online-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Steps to File Trademark Online</a>
            <a href="/in-india-the-trademark-registration-should-be-renewed-every" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Renewal Period</a>
            <a href="/ipindia-trademark-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">IP India Status Meaning</a>
            <a href="/mca-company-name-check" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">MCA Company Name Check</a>
            <a href="/leave-and-license-agreement" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Leave and License Agreement</a>
            <a href="/udyam-registration-agreement" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Udyam Registration</a>
            <a href="/trademark-search-public" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Public Trademark Search</a>
            <a href="/format-for-no-objection-certificate" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">NOC Formats</a>
            <a href="/trademark-and-copyright-difference" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark vs Copyright</a>
            <a href="/indian-patent-office-search" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Patent Search</a>
            <a href="/return-filling-online" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Income Tax & GST Filing</a>
            <a href="/non-disclosure-agreement-format" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">NDA Formats</a>
            <a href="/small-company-definition" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Small Company Status</a>
            <a href="/registration-of-pharmacist-in-up" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Pharmacist Registration (UP)</a>
            <a href="/trademark-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Status Guide</a>
            <a href="/what-are-the-steps-to-file-a-trademark-application-online-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Filing Steps Guide</a>
            <a href="/which-government-portal-is-used-for-trademark-registration-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Official IP Portal Guide</a>
            <a href="/how-much-does-it-cost-to-get-a-logo-protected-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Logo Protection Cost Guide</a>
            <a href="/official-government-website-for-intellectual-property-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Official IP Website Guide</a>
            <a href="/what-documents-are-needed-to-apply-for-trademark-registration-for-a-service" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Documents for Service TM Registration</a>
            <a href="/is-there-a-difference-between-trademark-registration-for-goods-and-services" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Goods vs Services Trademark Guide</a>
            <a href="/how-long-does-the-trademark-registration-process-take-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Registration Timeline</a>
            <a href="/what-are-the-comman-reasons-for-trademark-application-rejection-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Reasons for TM Rejection Guide</a>
            <a href="/difference-between-trademark-copyright-and-patent-protection-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark vs Copyright vs Patent Guide</a>
            <a href="/how-to-renew-a-registered-trademark-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Renewal Guide</a>
            <a href="/understanding-trademark-classes-for-services-and-goods-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Understanding Trademark Classes</a>
            <a href="/are-there-any-fast-track-options-for-trademark-registration-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Fast Track Trademark Options</a>
            <a href="/what-happens-when-someone-infringes-on-my-registered-trademark-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Infringement Guide</a>
            <a href="/what-is-the-meaning-of-trademark-opposition-and-how-to-handle-it" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Opposition Guide</a>
            <a href="/can-i-trademark-a-slogan-or-tagline-for-my-business-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Slogan Guide</a>
            <a href="/can-i-register-a-sound-or-scent-as-a-trademark-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Sound & Scent Trademark Guide</a>
            <a href="/what-legal-protections-does-a-registered-trademark-provide-to-a-company" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Legal Protections</a>
            <a href="/how-to-cancel-or-dispute-someone-else-s-trademark-registration" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Cancel Trademark Guide</a>
            <a href="/can-i-file-a-trademark-application-for-a-mobile-app-name-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Mobile App Trademark Guide</a>
            <a href="/how-to-update-or-change-details-in-an-existing-trademark-registation" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Update Trademark Details</a>
            <a href="/where-can-i-check-if-my-desired-trademark-is-already-registered-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Where to Check Trademark India</a>
            <a href="/best-legal-firms-specializing-in-intellectual-property-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Best IP Legal Firms in India</a>
            <a href="/guide-to-choosing-a-reliable-online-plarforms-for-ip-services-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Online IP Platforms Guide</a>
            <a href="/where-can-find-certified-trademark-agents-or-attorneys-near-me" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Find Certified Agents Near Me</a>
            <a href="/what-are-the-benefits-of-hiring-a-trademark-agent-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Benefits of Trademark Agent</a>
            <a href="/compare-fees-for-various-online-trademark-registration-providers-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Fees Comparison</a>

            <a href="/how-to-do-a-trademark-search-before-filing" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to do a Trademark Search</a>
            <a href="/what-are-absolute-and-relative-grounds-for-rejection-section-9-11" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Grounds for TM Rejection</a>
            <a href="/what-happens-if-someone-opposes-my-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Opposition Guide</a>
            <a href="/how-to-file-international-trademark-madrid-protocol-from-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Madrid Protocol India</a>
            <a href="/Can-two-trademarks-exist-in-different-classes-in-India" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Can two trademarks exist in different classes?</a>
            <a href="/How-to-avoid-trademark-objection-before-filing" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to avoid trademark objection?</a>
            <a href="/Common-reasons-why-trademark-applications-get-rejected" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Why are trademarks rejected?</a>
            <a href="/What-happens-after-trademark-opposition-is-filed" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">What happens after opposition?</a>
            <a href="/how-long-trademark-opposition-cases-take" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Opposition Case Timeline</a>
            <a href="/documents-required-for-trademark-opposition" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Opposition Documents Checklist</a>
            <a href="/how-to-avoid-trademark-registration-scams" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Avoid Trademark Scams</a>
            <a href="/can-you-trademark-your-own-name-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Your Name</a>
            <a href="/trademark-objection-reply-format-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Objection Reply Format</a>
            <a href="/how-to-respond-to-trademark-examination-report" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Examination Report Response</a>
            <a href="/how-to-overcome-trademark-objection" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Overcome Objection Guide</a>
            <a href="/how-to-win-trademark-objection-case" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Win Trademark Case</a>
            <a href="/what-happens-if-trademark-expires" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Expiry Guide</a>
            <a href="/how-to-restore-expired-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Restore Trademark Guide</a>
            <a href="/trademark-enforcement-strategies" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Enforcement Strategies</a>
            <a href="/how-to-stop-trademark-infringement" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Stop Trademark Infringement</a>
            <a href="/expedited-process-of-trademark-filing" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Expedited Trademark Filing</a>
            <a href="/what-to-do-if-someone-copies-your-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Copying Action Plan</a>
            <a href="/legal-rights-of-trademark-owner-in-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Owner Legal Rights</a>
            <a href="/how-to-stop-someone-using-your-brand-name" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Stop Brand Name Misuse</a>
            <a href="/what-does-objected-mean-in-trademark-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Objected Meaning</a>
            <a href="/protect-company-name-with-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Protect Company Name</a>
            <a href="/trademark-objected-what-to-do-next" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Objected: What to Do Next</a>
            <a href="/trademark-sent-for-examination-what-to-do" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Sent for Examination: What to Do</a>
            <a href="/trademark-marked-for-exam-meaning" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark Marked for Exam Meaning</a>
            <a href="/trademark-for-instagram-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for Instagram Brand</a>
            <a href="/how-to-file-trademark-rectification-india" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">How to File Trademark Rectification India</a>
            <a href="/trademark-for-saas-product" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">Trademark for SaaS Product</a>
          </div>
        </div>


        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 reserved by IPR KARO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

