import React from 'react';
import Image from 'next/image';
import ClientLogoSlider from './ClientLogoSlider';

const Footer: React.FC = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#202020' }}>
      <div className="max-w-8xl px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
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
                <a href="#" className="text-red-600 hover:text-red-500 transition-colors">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61580675227718" className="text-blue-600 hover:text-blue-500 transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                
                {/* Instagram */}
                <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                
                {/* X */}
                <a href="#" className="text-white hover:text-gray-300 transition-colors flex items-center justify-center w-5 h-5 text-xl font-bold">
                  <span className="text-xl font-bold">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout: Quick Links and About side by side */}
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
                  <a href="/about" className="text-sm hover:text-cyan-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-sm hover:text-cyan-300 transition-colors">
                     Services
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-sm hover:text-cyan-300 transition-colors">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm hover:text-cyan-300 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="text-sm font-semibold mb-4 uppercase">About</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-sm hover:text-cyan-300 transition-colors">
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
                <a href="/about" className="text-sm hover:text-cyan-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-cyan-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-cyan-300 transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-cyan-300 transition-colors">
                  Contact Us
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
              <li>
                <a href="/contact" className="text-sm hover:text-cyan-300 transition-colors">
                  Contact Us
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


        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 reserved by IPR KARO
          </p>
        </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
