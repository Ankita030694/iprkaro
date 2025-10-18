'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TransferClient() {
  const faqs = [
    {
      question: "What is copyright transfer or assignment in India?",
      answer: "Copyright transfer (assignment) is the legal process of transferring ownership rights of a copyrighted work from the original creator (assignor) to another party (assignee). The assignment can be complete or partial, covering specific rights like reproduction, distribution, adaptation, or public performance under the Copyright Act, 1957."
    },
    {
      question: "Is copyright assignment mandatory to be in writing?",
      answer: "Yes, under Section 19 of the Copyright Act, 1957, copyright assignment must be in writing and signed by the assignor or their authorized agent. Oral assignments are not valid. The assignment deed should clearly specify the rights transferred, duration, territory, consideration, and other terms."
    },
    {
      question: "Can copyright be transferred partially?",
      answer: "Yes, copyright can be assigned partially. You can transfer specific rights (like reproduction rights only) while retaining others (like adaptation rights). You can also limit the assignment to specific territories, duration, or mediums. The assignment deed should clearly define the scope of rights transferred."
    },
    {
      question: "What is the difference between copyright assignment and licensing?",
      answer: "Copyright assignment transfers ownership of copyright permanently to the assignee, while licensing grants permission to use the work while the original owner retains copyright. Assignment typically involves a one-time payment, whereas licensing usually involves royalty payments. Licensing can be exclusive or non-exclusive."
    },
    {
      question: "Do I need to register copyright assignment with the Copyright Office?",
      answer: "While not mandatory, registering copyright assignment with the Copyright Office is highly recommended. Registration provides legal evidence of the transfer, protects against disputes, establishes priority, and is required for enforcement actions. The assignment can be registered by filing the assignment deed with the Copyright Office."
    },
    {
      question: "Can copyright assignment be revoked in India?",
      answer: "Generally, copyright assignment cannot be easily revoked once executed unless the assignment deed contains specific revocation clauses or termination conditions. However, under Section 19(4) of the Copyright Act, if the assignee doesn't exercise assigned rights, the assignment can be terminated. Authors may also have reversion rights after certain periods."
    }
  ];

  return (
    <div style={{ backgroundColor: '#0C002B' }}>
      <Navbar />
      
      <div className="pb-16 pt-[180px]" style={{ 
        background: '#0C002B',
        backgroundImage: 'linear-gradient(to right top, #0c002b, #0c002b,rgb(25, 10, 60),rgb(80, 60, 124),rgb(79, 75, 75))',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          
          {/* Hero Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-3 h-3 rounded-full relative"
                style={{
                  background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{ background: '#FFB703', opacity: 0.4 }}
                />
              </div>
              <h1 className="text-white font-nunito text-2xl md:text-3xl lg:text-4xl font-bold">
                Copyright Transfer & Assignment Agreement Services India
              </h1>
            </div>
            
            <div 
              className="p-4 lg:p-5 rounded-lg backdrop-blur-sm"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed mb-3">
                Legally transfer ownership of your creative works through <span className="font-bold text-[#FFB703]">professionally drafted copyright assignment agreements</span>. Whether you're an author selling book rights, artist transferring artwork ownership, software developer assigning code rights, or content creator licensing work, proper documentation is essential.
              </p>
              <p className="text-white/95 font-nunito text-sm lg:text-base leading-relaxed">
                Our expert IP attorneys provide comprehensive copyright transfer and assignment services including agreement drafting, due diligence, negotiation support, and registration with the Copyright Office. We ensure your rights are protected and transactions are legally sound.
              </p>
            </div>
          </section>

          {/* Understanding Copyright Transfer */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Understanding Copyright Assignment
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <p className="text-white/95 font-nunito text-sm leading-relaxed mb-4">
                Copyright assignment under the Copyright Act, 1957, allows the creator to transfer ownership of their creative work to another party. The assignee receives all or specified rights including reproduction, distribution, adaptation, public performance, and commercial exploitation rights. Assignment must be in writing to be legally valid.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 183, 3, 0.08)',
                    border: '1px solid rgba(255, 183, 3, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-exchange-alt text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Complete Assignment</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Transfer of all copyright rights permanently to the assignee, who becomes the new copyright owner with full control over the work.
                  </p>
                </div>

                <div 
                  className="p-3 rounded-md"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fas fa-layer-group text-[#FFB703] text-lg" aria-hidden="true"></i>
                    <h4 className="text-white font-nunito text-sm font-semibold">Partial Assignment</h4>
                  </div>
                  <p className="text-white/90 font-nunito text-xs">
                    Transfer of specific rights (e.g., only reproduction or distribution) while retaining other rights, limited by territory, duration, or medium.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Copyright Assignments */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Common Copyright Transfer Scenarios
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    icon: "fas fa-book",
                    title: "Literary Work Assignments",
                    description: "Authors transferring book rights to publishers, manuscript assignments, article rights transfer, and content creation agreements for blogs and websites."
                  },
                  {
                    icon: "fas fa-code",
                    title: "Software Copyright Transfer",
                    description: "Software developers assigning source code rights, SaaS platform ownership transfers, mobile app copyright assignments, and technology licensing agreements."
                  },
                  {
                    icon: "fas fa-palette",
                    title: "Artistic Work Assignments",
                    description: "Artists transferring painting, sculpture, or design rights, graphic design copyright assignments, logo ownership transfers, and illustration rights."
                  },
                  {
                    icon: "fas fa-music",
                    title: "Musical & Audiovisual Works",
                    description: "Musicians assigning song rights, composers transferring composition ownership, film copyright assignments, and video content creator rights transfers."
                  },
                  {
                    icon: "fas fa-briefcase",
                    title: "Work-for-Hire Agreements",
                    description: "Employee work assignments to employers, contractor copyright transfers, commissioned work agreements, and freelancer content ownership transfer."
                  },
                  {
                    icon: "fas fa-handshake",
                    title: "Business Acquisitions",
                    description: "Copyright asset transfers during mergers and acquisitions, startup IP transfers to investors, content library sales, and portfolio assignments."
                  }
                ].map((scenario, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      background: index === 0 
                        ? 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(255, 183, 3, 0.04) 100%)'
                        : 'rgba(255, 255, 255, 0.03)',
                      border: index === 0 
                        ? '1px solid rgba(255, 183, 3, 0.2)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'rgba(255, 183, 3, 0.15)',
                          border: '1px solid rgba(255, 183, 3, 0.3)'
                        }}
                      >
                        <i className={`${scenario.icon} text-[#FFB703] text-base`} aria-hidden="true"></i>
                      </div>
                      <div>
                        <h4 className="text-white font-nunito text-sm font-semibold mb-1">
                          {scenario.title}
                        </h4>
                        <p className="text-white/90 font-nunito text-xs">
                          {scenario.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Elements of Assignment Agreement */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Essential Elements of Copyright Assignment Deed
              </h2>
            </div>
            
            <div 
              className="p-4 rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="space-y-3">
                {[
                  {
                    element: "Identification of Parties & Work",
                    description: "Clear identification of assignor (copyright owner) and assignee, detailed description of the copyrighted work being transferred, registration details if already registered."
                  },
                  {
                    element: "Scope of Rights Transferred",
                    description: "Specific rights being assigned (reproduction, distribution, adaptation, public performance, etc.), whether assignment is complete or partial, exclusive or non-exclusive nature."
                  },
                  {
                    element: "Territory & Duration",
                    description: "Geographical territory where rights are transferred (India, worldwide, specific countries), duration of assignment (perpetual or limited period), commencement date."
                  },
                  {
                    element: "Consideration & Payment Terms",
                    description: "Assignment fee or royalty structure, payment schedule and milestones, advance payments if applicable, currency and mode of payment."
                  },
                  {
                    element: "Warranties & Representations",
                    description: "Assignor warrants original authorship and ownership, confirmation that work doesn't infringe third-party rights, disclosure of any existing licenses or encumbrances."
                  },
                  {
                    element: "Indemnification & Liability",
                    description: "Indemnity clauses protecting against infringement claims, limitation of liability provisions, responsibility for copyright renewal and maintenance."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <h4 className="text-white font-nunito text-sm font-semibold mb-1 flex items-center gap-2">
                      <i className="fas fa-file-contract text-[#FFB703] text-sm" aria-hidden="true"></i>
                      {item.element}
                    </h4>
                    <p className="text-white/90 font-nunito text-xs pl-6">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-8">
            <div 
              className="relative overflow-hidden p-5 lg:p-6 rounded-xl"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.15) 0%, rgba(255, 183, 3, 0.05) 100%)',
                border: '2px solid rgba(255, 183, 3, 0.3)',
                boxShadow: '0 8px 32px rgba(255, 183, 3, 0.3)'
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#FFB703] opacity-10 blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3"
                  style={{
                    background: 'rgba(255, 183, 3, 0.2)',
                    border: '1px solid rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-file-signature text-[#FFB703] text-sm" aria-hidden="true"></i>
                  <span className="text-white font-nunito text-sm font-semibold">Professional Legal Documentation</span>
                </div>

                <h3 className="text-white font-nunito text-xl lg:text-2xl font-bold mb-3">
                  Expert Copyright Assignment Agreement Services
                </h3>
                <p className="text-white/90 font-nunito text-sm max-w-2xl mx-auto mb-4">
                  Protect your interests with professionally drafted copyright transfer agreements. Our expert attorneys ensure legally sound documentation for all types of copyright assignments.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-nunito font-bold text-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #FFB703, #FFA000)',
                    color: '#0C002B',
                    boxShadow: '0 6px 18px rgba(255, 183, 3, 0.4)'
                  }}
                >
                  <i className="fas fa-phone text-sm" aria-hidden="true"></i>
                  Get Expert Legal Assistance
                  <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#FFB703',
                  boxShadow: '0 0 14px rgba(255, 183, 3, 0.6)'
                }}
              />
              <h2 className="text-white font-nunito text-xl md:text-2xl lg:text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 3px 14px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <h3 className="text-white font-nunito text-sm font-semibold mb-2 flex items-start gap-2">
                    <i className="fas fa-question-circle text-[#FFB703] text-base mt-0.5" aria-hidden="true"></i>
                    {faq.question}
                  </h3>
                  <p className="text-white/90 font-nunito text-xs leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
      

    </div>
  );
}

