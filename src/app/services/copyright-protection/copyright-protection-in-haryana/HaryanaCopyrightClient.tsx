'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import BlogTableOfContents from '@/components/blog/BlogTableOfContents';

export default function HaryanaCopyrightClient() {
  const [activeSection, setActiveSection] = useState('overview');
  
  const sections = [
    { id: 'overview', title: 'Copyright in Haryana' },
    { id: 'software', title: 'Software Protection (Gurugram)' },
    { id: 'music', title: 'Music & Entertainment' },
    { id: 'process', title: 'Registration Process' },
    { id: 'faq', title: 'FAQs' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      <BlogTableOfContents activeSection={activeSection} blogTitle="Copyright in Haryana" sections={sections} />
      
      <div className="pb-16 pt-[180px]" style={{ background: '#0C002B', backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/80 mb-6 font-nunito">
            <Link href="/" className="hover:text-[#FFB703]">Home</Link> <i className="fas fa-chevron-right text-xs"></i>
            <Link href="/services" className="hover:text-[#FFB703]">Services</Link> <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-[#FFB703]">Copyright Haryana</span>
          </div>

          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-nunito">Copyright Protection in Haryana</h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto font-nunito">
              Protecting the creative assets of Gurugram's tech giants, Faridabad's industrial designers, and the vibrant Haryanvi music industry.
            </p>
          </div>

          {/* Overview */}
          <section id="overview" className="mb-16 scroll-mt-32">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4 font-nunito">Why Copyright Matters in Haryana</h2>
              <p className="text-white/90 mb-4 leading-relaxed font-nunito">
                Haryana is a unique blend of high-tech innovation and rich cultural heritage. From the IT hubs of Cyber City to the recording studios producing regional hits, intellectual property is being created every day. Copyright registration provides the legal ownership needed to monetize these assets and prevent unauthorized copying.
              </p>
            </div>
          </section>

          {/* Software Focus */}
          <section id="software" className="mb-16 scroll-mt-32">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 font-nunito">Software & IT Protection in Gurugram</h2>
                <p className="text-white/90 mb-4 font-nunito">
                  Gurugram is known as the Millennium City and is a major IT hub. For software companies and startups, source code is the core asset.
                </p>
                <ul className="space-y-3 text-white/90 font-nunito">
                  <li className="flex items-center gap-2"><i className="fas fa-code text-[#FFB703]"></i> Source Code Registration (Literary Work)</li>
                  <li className="flex items-center gap-2"><i className="fas fa-laptop text-[#FFB703]"></i> GUI & Design Protection</li>
                  <li className="flex items-center gap-2"><i className="fas fa-file-contract text-[#FFB703]"></i> Licensing Agreements</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#FFB703]/20 to-purple-900/20 p-8 rounded-2xl border border-white/10">
                <i className="fas fa-shield-alt text-6xl text-[#FFB703] mb-4"></i>
                <h3 className="text-xl font-bold text-white mb-2 font-nunito">Did you know?</h3>
                <p className="text-white/80 font-nunito">
                  Copyright protects the expression of the code, not the functionality. For functionality, you might need a patent. We help you decide the best IP strategy.
                </p>
              </div>
            </div>
          </section>

          {/* Music Focus */}
          <section id="music" className="mb-16 scroll-mt-32">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4 font-nunito">Music & Entertainment Industry</h2>
              <p className="text-white/90 mb-6 font-nunito">
                The Haryanvi music industry has seen explosive growth on digital platforms like YouTube. However, piracy and remix culture can dilute earnings.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <i className="fas fa-music text-3xl text-[#FFB703] mb-2"></i>
                  <h3 className="text-white font-bold font-nunito">Sound Recording</h3>
                  <p className="text-white/70 text-sm font-nunito">Protect the final master track.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <i className="fas fa-pen-nib text-3xl text-[#FFB703] mb-2"></i>
                  <h3 className="text-white font-bold font-nunito">Lyrics</h3>
                  <p className="text-white/70 text-sm font-nunito">Protect the written words.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-center">
                  <i className="fas fa-guitar text-3xl text-[#FFB703] mb-2"></i>
                  <h3 className="text-white font-bold font-nunito">Composition</h3>
                  <p className="text-white/70 text-sm font-nunito">Protect the underlying melody.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="process" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 text-center font-nunito">Simple 3-Step Process</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Filing", desc: "We prepare Form XIV and Statement of Particulars." },
                { step: "02", title: "Examination", desc: "The Copyright Office checks for discrepancies (approx. 30 days)." },
                { step: "03", title: "Registration", desc: "If no objections, the Copyright Registration Certificate is issued." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-xl hover:transform hover:-translate-y-1 transition-all">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-white/10">{item.step}</span>
                  <h3 className="text-xl font-bold text-[#FFB703] mb-2 font-nunito">{item.title}</h3>
                  <p className="text-white/80 font-nunito">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 font-nunito">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2 font-nunito">Is copyright registration mandatory in India?</h3>
                <p className="text-white/80 font-nunito">No, copyright exists from the moment a work is created. However, registration is prima facie evidence of ownership in court, making it much easier to enforce your rights.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2 font-nunito">How long does copyright protection last?</h3>
                <p className="text-white/80 font-nunito">For literary, dramatic, musical, and artistic works, it lasts for the lifetime of the author plus 60 years. For sound recordings and films, it is 60 years from the year of publication.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#FFB703] to-orange-500 text-[#0C002B] font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all font-nunito">
              Protect Your Work Now
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

