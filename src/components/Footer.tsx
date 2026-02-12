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
            <a href="/trademark-register-kese-karte-hai" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Trademark Register Kaise Karte Hai
            </a>
            <a href="/how-to-register-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              How to Register Trademark
            </a>
            <a href="/trademark-application-status" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Trademark Application Status
            </a>
            <a href="/want-to-register-trademark-for-startup" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Register Trademark for Startup
            </a>
            <a href="/gst-required-for-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              GST Required for Trademark
            </a>
            <a href="/how-to-register-trademark-yourself" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              How to Register Trademark Yourself
            </a>
            <a href="/types-of-trademark-classes" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Types of Trademark Classes
            </a>
            <a href="/how-to-check-trademark-availability" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              How to Check Trademark Availability
            </a>
            <a href="/e-filing-trademark" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              E-filing Trademark India
            </a>
            <a href="/trademark-for-clothing-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Trademark for Clothing Brand
            </a>
            <a href="/trademark-for-jewellery-brand" className="text-sm text-gray-500 hover:text-cyan-300 transition-colors">
              Trademark for Jewellery Brand
            </a>
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
