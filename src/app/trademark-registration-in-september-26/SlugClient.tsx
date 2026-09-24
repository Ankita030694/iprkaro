'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function SlugClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tocSections = [
    { id: 'quick-answer', title: 'Quick Answer' },
    { id: 'september-2026', title: 'Trademark Registration in September 2026' },
    { id: 'trademark-search', title: 'Trademark Search Before Filing' },
    { id: 'trademark-class', title: 'Choosing the Correct Trademark Class' },
    { id: 'documents', title: 'Documents Required' },
    { id: 'registration-process', title: 'Registration Process' },
    { id: 'examination', title: 'Examination & Objection' },
    { id: 'objection', title: 'Trademark Objection' },
    { id: 'timeline', title: 'Registration Timeline' },
    { id: 'cost', title: 'Registration Cost' },
    { id: 'mistakes', title: 'Common Mistakes' },
    { id: 'renewal', title: 'Trademark Renewal' },
    { id: 'international', title: 'International Protection' },
    { id: 'checklist', title: 'September 2026 Checklist' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Trademark Registration in September 2026',
        description:
          'A practical guide to trademark registration in India in September 2026, including trademark search, classification, documents, filing, examination, objections, cost, timeline and renewal.',
        publisher: {
          '@type': 'Organization',
          name: 'IPR Karo',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.iprkaro.com/ama3.svg',
          },
        },
        reviewedBy: {
          '@type': 'Organization',
          name: 'Team IPR Karo',
        },
        datePublished: '2026-09-23',
        dateModified: '2026-09-23',
        image: [
          'https://www.iprkaro.com/images/og/trademark-registration-in-september-2026.png',
        ],
        mainEntityOfPage:
          'https://www.iprkaro.com/trademark-registration-in-september-26',
      },

      {
        '@type': 'WebPage',
        name: 'Trademark Registration in September 2026',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '#quick-answer'],
        },
      },

      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is trademark registration?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Trademark registration is the process of applying to register a distinctive mark for specified goods or services with the Trade Marks Registry.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I register a trademark in September 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'September 2026 is the current filing period covered by this guide. The important considerations are proper trademark search, correct classification, accurate applicant information and appropriate filing preparation.',
            },
          },
          {
            '@type': 'Question',
            name: 'How should I search for a trademark before filing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A proper search should consider identical, similar, phonetic and visually comparable marks in relation to the relevant goods or services.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I choose the correct trademark class?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The class should correspond with the goods or services for which the trademark is used or intended to be used.',
            },
          },
          {
            '@type': 'Question',
            name: 'What documents are required for trademark registration?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Requirements can vary depending on the applicant and circumstances. Applicant details, trademark representation and goods or services information are among the key information generally required.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens after filing a trademark application?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The application proceeds through the applicable Registry process and may undergo examination. An examination report or other communication may require a response.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if my trademark receives an objection?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The applicant should review the examination report and submit an appropriate response within the applicable procedural period.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does trademark registration take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no universal guaranteed timeline. Processing can vary depending on examination, objections, hearings, opposition and other Registry procedures.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I use my trademark before registration?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A business can use a mark before registration, but the legal protection available to an unregistered mark differs from the rights associated with registration.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Indian trademark registration protect my brand worldwide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Indian registration provides protection in India. International protection generally requires appropriate protection in the relevant foreign jurisdictions.',
            },
          },
        ],
      },

      {
        '@type': 'Organization',
        name: 'IPR Karo',
        url: 'https://www.iprkaro.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Sector 62',
          addressLocality: 'Noida',
          addressRegion: 'UP',
          postalCode: '201309',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8700343611',
          contactType: 'customer service',
        },
        sameAs: [
          'https://www.linkedin.com/company/iprkaro',
          'https://twitter.com/iprkaro',
          'https://www.facebook.com/iprkaro',
        ],
      },

      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.iprkaro.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.iprkaro.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Trademark Registration in September 2026',
            item: 'https://www.iprkaro.com/trademark-registration-in-september-26',
          },
        ],
      },

      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Trademark Search Before Filing',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Choosing the Correct Trademark Class',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Trademark Registration Process',
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Trademark Examination and Objection',
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: 'Trademark Registration Checklist',
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* =========================================================
          HERO SECTION
      ========================================================== */}
      <div className="relative w-full overflow-hidden bg-[#FAF9F6]">
        <div className="container mx-auto px-4 pt-24 pb-8 lg:pt-32 lg:pb-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center justify-between">
            <div className="text-left mt-8 lg:mt-0 w-full">
              <div className="inline-flex items-center bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5 mb-4 shadow-sm">
                <FontAwesomeIcon icon={faShieldHalved} className="w-3.5 h-3.5 text-[#6E5E93] mr-2" />
                <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#6E5E93] uppercase">
                  Official Brand Protection & Filing Guide
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight text-gray-900 tracking-tighter">
                <span
                  className="text-[#6E5E93] bg-clip-text text-transparent bg-gradient-to-r from-[#6E5E93] to-[#8A7AB5]"
                  style={{ WebkitTextFillColor: 'transparent' }}
                >
                  Trademark Registration
                </span>{' '}
                in September 2026 in India:<br />
                Advocate-Certified Drafting & Legal Advisory
              </h1>

              <p className="text-base md:text-lg mb-5 text-gray-700 font-medium leading-relaxed">
                Secure your commercial IP with advocate-certified drafting and transparent fixed legal advisory. Don&apos;t risk your brand on free DIY filings. Protect your brand identity under the Trade Marks Act, 1999 with our comprehensive guide for September 2026—covering availability searches, accurate NICE classification, documentation, official registry filing, examination report replies, and hearing representations to safeguard your business nationwide.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center mr-2">
                  <img
                    src="/images/author/rahul-roy.jpg"
                    alt="Rahul Roy"
                    className="w-10 h-10 rounded-full border-2 border-gray-200 mr-3 object-cover shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900 m-0 leading-tight">Rahul Roy</p>
                    <p className="text-[10px] sm:text-xs text-gray-500 m-0 mt-0.5">Senior Trademark Attorney</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                    <span className="text-[10px] sm:text-xs font-medium text-gray-600">📅 September 2026</span>
                  </div>
                  <div className="flex items-center bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                    <span className="text-[10px] sm:text-xs font-medium text-gray-600">⏱️ 12 Min Read</span>
                  </div>
                  <div className="flex items-center bg-amber-50 rounded-full px-3 py-1 border border-amber-200 shadow-sm">
                    <span className="text-[10px] sm:text-xs font-medium text-amber-800">🛡️ Advocate Verified</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link href="/contact-us" className="w-full sm:w-auto">
                  <button className="bg-[#6E5E93] hover:bg-[#5a4c7a] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider flex items-center justify-center w-full">
                    Book Trademark Consultation <span className="ml-2 font-black">&rarr;</span>
                  </button>
                </Link>
                <a
                  href="tel:+918700343611"
                  className="bg-[#1A1A24] hover:bg-[#2A2A34] text-white font-bold py-3 px-6 rounded-xl border border-transparent transition-all shadow-lg text-sm flex items-center justify-center w-full sm:w-auto tracking-wide"
                >
                  <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-2 text-pink-400" />
                  Call Expert: +91-8700343611
                </a>
              </div>
            </div>

            <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md lg:max-w-[420px] xl:max-w-[480px] mt-8 lg:mt-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(110,94,147)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <img
                  src="/images/og/trademark-registration-in-september-2026.png"
                  alt="Trademark Registration in September 2026"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-[1600px]">
          <Breadcrumbs
            items={[
              { label: 'Services', href: '/services' },
              {
                label: 'Trademark Registration in September 2026',
                href: '/trademark-registration-in-september-26',
              },
            ]}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1600px] mt-8">
        {/* =========================================================
            MAIN EDITORIAL 3-COLUMN GRID
        ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start pb-20">

          {/* =======================================================
              LEFT GUIDE SECTIONS
              EXPANDED
          ======================================================== */}
          <div className="hidden lg:block sticky top-32">
            <TableOfContents sections={tocSections} orientation="vertical" />
          </div>

          {/* TOC (Mobile) */}
          <div className="lg:hidden mb-4 sticky top-24 z-20">
            <TableOfContents sections={tocSections} orientation="horizontal" />
          </div>

          {/* =======================================================
              CENTER EDITORIAL COLUMN
          ======================================================== */}
          <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-50">

            {/* Meta details */}
            <div className="flex flex-wrap items-center justify-between border-b pb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Trademark Registration in September 2026 Guide
              </h2>
            </div>

            {/* =====================================================
                QUICK ANSWER
            ====================================================== */}
            <div
              id="quick-answer"
              className="bg-gray-50 border-l-4 border-[rgb(110,94,147)] p-6 rounded-r-xl shadow-inner"
            >
              <h2 className="font-bold text-xl mb-3 text-gray-900">
                Quick Answer
              </h2>

              <p className="text-gray-800 font-medium leading-relaxed">
                Trademark registration in September 2026 involves selecting a
                distinctive trademark, conducting a proper search, identifying
                the relevant trademark class, preparing accurate applicant and
                mark information and filing the application through the
                applicable Registry process. After filing, the application may
                proceed through examination, publication and registration, or
                may require a response if the Registry raises an objection.
              </p>
            </div>

            {/* =====================================================
                SEPTEMBER 2026
            ====================================================== */}
            <div
              id="september-2026"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Registration in September 2026
              </h2>

              <p>
                Trademark registration is an important part of protecting a
                business brand. A trademark can identify the source of goods
                or services and, when registered, can provide statutory
                protection subject to the applicable law and registration
                scope.
              </p>

              <p>
                If you are planning to register a trademark in September 2026,
                the filing month itself should not be the only consideration.
                Proper preparation before filing is important. This includes
                assessing the proposed mark, searching existing trademarks,
                selecting the relevant goods or services classification and
                ensuring that the application information is accurate.
              </p>

              <p>
                Businesses should also understand what happens after filing.
                A trademark application can be examined by the Registry and
                may receive an examination report or other communication that
                requires an appropriate response.
              </p>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    Before Filing
                  </h3>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Choose a distinctive trademark.</li>
                    <li>Search existing trademarks.</li>
                    <li>Identify the correct class.</li>
                    <li>Verify applicant information.</li>
                    <li>Review goods and services description.</li>
                  </ul>
                </div>

                <div className="border border-gray-200 rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    After Filing
                  </h3>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Track application status.</li>
                    <li>Monitor examination updates.</li>
                    <li>Respond to objections where required.</li>
                    <li>Monitor further Registry proceedings.</li>
                    <li>Maintain registration records.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* =====================================================
                TRADEMARK SEARCH
            ====================================================== */}
            <div
              id="trademark-search"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Search Before Filing
              </h2>

              <p>
                A trademark search should generally be performed before filing
                an application. Searching only for an identical name may not
                provide a complete picture because similar, phonetic or
                visually comparable marks can also be relevant.
              </p>

              <p>
                The search should be considered together with the goods and
                services for which the proposed trademark will be used. This
                allows an applicant to identify potentially relevant existing
                marks before investing further in a brand.
              </p>

              <blockquote className="border-l-4 border-[rgb(110,94,147)] pl-6 py-3 italic text-gray-600 bg-gray-50 rounded-r-lg">
                A proper pre-filing search helps identify potentially
                conflicting marks before an application is submitted.
              </blockquote>

              <h3 className="text-2xl font-bold text-gray-900">
                What should a trademark search consider?
              </h3>

              <ul className="list-disc pl-6 space-y-3">
                <li>Identical trademarks.</li>
                <li>Phonetically similar trademarks.</li>
                <li>Visually similar trademarks.</li>
                <li>Relevant goods and services.</li>
                <li>Potentially conflicting marks.</li>
                <li>Relevant commercial use where applicable.</li>
              </ul>
            </div>

            {/* =====================================================
                TRADEMARK CLASS
            ====================================================== */}
            <div
              id="trademark-class"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Choosing the Correct Trademark Class
              </h2>

              <p>
                Trademark protection is connected to the goods and services
                covered by an application. Selecting an appropriate class is
                therefore an important part of trademark registration.
              </p>

              <p>
                Businesses should identify what they actually sell, provide or
                genuinely intend to provide. The description of goods and
                services should accurately reflect the commercial activities
                associated with the trademark.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
                  <thead className="bg-[#0C002B] text-white">
                    <tr>
                      <th className="p-4 text-left font-bold border-b border-gray-700">
                        Consideration
                      </th>

                      <th className="p-4 text-left font-bold border-b border-gray-700">
                        Why It Matters
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 font-medium text-gray-800">
                        Goods / Services
                      </td>

                      <td className="p-4 text-gray-600">
                        Defines the commercial scope covered by the application.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-medium text-gray-800">
                        Correct Class
                      </td>

                      <td className="p-4 text-gray-600">
                        Aligns the application with the relevant
                        classification.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 font-medium text-gray-800">
                        Description
                      </td>

                      <td className="p-4 text-gray-600">
                        Should accurately describe the applicant's commercial
                        activity.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* =====================================================
                DOCUMENTS
            ====================================================== */}
            <div
              id="documents"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Documents Required for Trademark Registration
              </h2>

              <p>
                The exact documents and supporting information can vary
                depending on the applicant and the circumstances of the
                filing. The application should contain accurate and consistent
                applicant and trademark information.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Applicant or proprietor details',
                  'Representation of the trademark',
                  'Goods or services information',
                  'Business and contact information',
                  'Supporting documents where applicable',
                  'Use-related documents where relevant',
                ].map((item) => (
                  <div
                    key={item}
                    className="p-5 rounded-xl bg-gray-50 border border-gray-200"
                  >
                    <span className="font-medium text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <p>
                Applicants should review all information before filing because
                incorrect or inconsistent details can create avoidable
                administrative complications.
              </p>
            </div>

            {/* =====================================================
                REGISTRATION PROCESS
            ====================================================== */}
            <div
              id="registration-process"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Registration Process in India
              </h2>

              <p>
                The trademark registration journey involves several stages.
                While the exact path can vary between applications, applicants
                should understand the general process before filing.
              </p>

              <div className="space-y-4">
                {[
                  [
                    '01',
                    'Select the Trademark',
                    'Choose the name, logo, symbol, tagline or other mark that you want to protect.',
                  ],
                  [
                    '02',
                    'Conduct a Trademark Search',
                    'Check identical and similar existing marks before filing.',
                  ],
                  [
                    '03',
                    'Select the Appropriate Class',
                    'Identify the relevant goods or services classification.',
                  ],
                  [
                    '04',
                    'Prepare the Application',
                    'Enter accurate applicant, trademark and goods or services information.',
                  ],
                  [
                    '05',
                    'File the Application',
                    'Submit the application through the applicable filing process.',
                  ],
                  [
                    '06',
                    'Examination',
                    'The application may be examined by the Trademark Registry.',
                  ],
                  [
                    '07',
                    'Respond if Required',
                    'Address examination objections or other Registry communications where applicable.',
                  ],
                  [
                    '08',
                    'Publication and Registration',
                    'The application can proceed through the applicable stages toward registration.',
                  ],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex gap-4 p-5 border border-gray-200 rounded-xl"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0C002B] text-white flex items-center justify-center font-bold">
                      {number}
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">
                        {title}
                      </h3>

                      <p className="text-gray-600 text-base mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                EXAMINATION
            ====================================================== */}
            <div
              id="examination"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Examination and Objection
              </h2>

              <p>
                Filing a trademark application does not automatically mean
                that the mark will be registered. The application may undergo
                examination by the Trademark Registry.
              </p>

              <p>
                Depending on the application and the applicable legal
                provisions, an examination report may raise objections that
                require the applicant to submit an appropriate response.
              </p>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-gray-50 border rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Review
                  </h3>

                  <p className="text-base text-gray-600">
                    Understand the specific issues mentioned in the examination
                    report.
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Respond
                  </h3>

                  <p className="text-base text-gray-600">
                    Prepare the appropriate response within the applicable
                    procedural period.
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Follow Up
                  </h3>

                  <p className="text-base text-gray-600">
                    Monitor subsequent Registry communications and proceedings.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                OBJECTION
            ====================================================== */}
            <div
              id="objection"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                What to Do When a Trademark Objection Is Raised
              </h2>

              <p>
                A trademark objection should be reviewed carefully rather than
                treated as an automatic rejection. The applicant should first
                understand the specific grounds mentioned by the Registry.
              </p>

              <p>
                The appropriate response depends on the grounds raised and the
                facts surrounding the application. The response should address
                the relevant issues and be filed within the applicable
                procedural deadline.
              </p>

              <ol className="list-decimal pl-6 space-y-3">
                <li>Read the examination report carefully.</li>
                <li>Identify each objection raised.</li>
                <li>Review the facts supporting the application.</li>
                <li>Prepare the appropriate response.</li>
                <li>Submit the response within the applicable period.</li>
                <li>Monitor further Registry action.</li>
              </ol>
            </div>

            {/* =====================================================
                TIMELINE
            ====================================================== */}
            <div
              id="timeline"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Registration Timeline
              </h2>

              <p>
                There is no single guaranteed timeline that applies to every
                trademark application. The time involved can depend on
                examination, objections, hearings, opposition proceedings and
                other Registry processes.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Factors that can affect the timeline
                </h3>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Application completeness</li>
                  <li>Examination requirements</li>
                  <li>Trademark objections</li>
                  <li>Hearing requirements</li>
                  <li>Opposition proceedings</li>
                  <li>Other Registry processing requirements</li>
                </ul>
              </div>
            </div>

            {/* =====================================================
                COST
            ====================================================== */}
            <div
              id="cost"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Registration Cost
              </h2>

              <p>
                The overall cost of trademark registration can depend on
                several factors, including the applicant category, number of
                classes, professional assistance and whether additional
                proceedings become necessary.
              </p>

              <p>
                Applicants should distinguish between official government
                fees and professional service charges when evaluating the
                overall cost of registration.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900">
                    Government Fees
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Applicable statutory filing and related government
                    charges.
                  </p>
                </div>

                <div className="border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900">
                    Professional Fees
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Charges for professional preparation and assistance.
                  </p>
                </div>

                <div className="border rounded-xl p-5">
                  <h3 className="font-bold text-gray-900">
                    Additional Proceedings
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Additional work may arise if objections, hearings or other
                    proceedings occur.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                COMMON MISTAKES
            ====================================================== */}
            <div
              id="mistakes"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Common Trademark Registration Mistakes to Avoid
              </h2>

              <ul className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Skipping the trademark search:</strong> Filing
                  without checking potentially conflicting marks can create
                  avoidable risks.
                </li>

                <li>
                  <strong>Choosing the wrong class:</strong> The selected
                  class should correspond with the actual goods or services.
                </li>

                <li>
                  <strong>Incorrect applicant information:</strong> Ownership
                  and applicant details should be carefully reviewed before
                  filing.
                </li>

                <li>
                  <strong>Using an unclear description:</strong> Goods and
                  services should be described accurately.
                </li>

                <li>
                  <strong>Ignoring Registry communications:</strong> Applicants
                  should monitor their application and respond within
                  applicable deadlines.
                </li>

                <li>
                  <strong>Forgetting renewal:</strong> Registered trademark
                  owners should maintain records and monitor renewal
                  requirements.
                </li>
              </ul>
            </div>

            {/* =====================================================
                RENEWAL
            ====================================================== */}
            <div
              id="renewal"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                Trademark Renewal and Long-Term Protection
              </h2>

              <p>
                Trademark protection requires ongoing management after
                registration. Businesses should maintain accurate records of
                their registrations and monitor applicable renewal requirements.
              </p>

              <p>
                Businesses should also keep track of changes in their branding,
                commercial activities and trademark portfolio so that their
                intellectual property strategy continues to reflect their
                business.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 border rounded-xl p-5">
                  <h3 className="font-bold">Track Registration</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Keep registration details and important dates organized.
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-xl p-5">
                  <h3 className="font-bold">Monitor Usage</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Maintain relevant records of commercial use where
                    appropriate.
                  </p>
                </div>

                <div className="bg-gray-50 border rounded-xl p-5">
                  <h3 className="font-bold">Plan Renewal</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Monitor applicable renewal requirements in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                INTERNATIONAL
            ====================================================== */}
            <div
              id="international"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                International Trademark Protection
              </h2>

              <p>
                Indian trademark registration provides protection in India.
                Businesses expanding into foreign markets should separately
                consider trademark protection in those jurisdictions.
              </p>

              <p>
                Depending on the countries involved, businesses may consider
                applicable national filing systems or international mechanisms
                such as the Madrid System, subject to the relevant
                requirements.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">
                  Important distinction
                </h3>

                <p className="text-gray-600">
                  Registration in India should not be treated as automatic
                  worldwide trademark protection. International expansion
                  requires consideration of the protection available in each
                  relevant market.
                </p>
              </div>
            </div>

            {/* =====================================================
                CHECKLIST
            ====================================================== */}
            <div
              id="checklist"
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                September 2026 Trademark Registration Checklist
              </h2>

              <p>
                Before filing your trademark application in September 2026,
                review the following checklist to make sure the major
                preparation steps have been considered.
              </p>

              <div className="border border-gray-200 rounded-xl overflow-hidden">
                {[
                  'Choose a distinctive trademark.',
                  'Identify the correct trademark owner.',
                  'Conduct an appropriate trademark search.',
                  'Identify the relevant goods and services.',
                  'Select the appropriate trademark class.',
                  'Prepare accurate application information.',
                  'Review the application before filing.',
                  'Track the application after filing.',
                  'Respond to examination objections where applicable.',
                  'Maintain registration and renewal records.',
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`flex gap-4 p-4 ${index !== 9 ? 'border-b border-gray-200' : ''
                      }`}
                  >
                    <span className="font-bold text-[rgb(110,94,147)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* =====================================================
                FAQ
            ====================================================== */}
            <div
              id="faqs"
              className="space-y-4 pt-8 border-t border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>

              {[
                {
                  q: 'What is trademark registration?',
                  a: 'Trademark registration is the process of applying to register a distinctive mark for specified goods or services with the Trade Marks Registry.',
                },
                {
                  q: 'Why should I register a trademark in September 2026?',
                  a: 'September 2026 is the current filing period covered by this guide. The important considerations are proper trademark search, correct classification, accurate applicant information and appropriate filing preparation.',
                },
                {
                  q: 'How should I search for a trademark before filing?',
                  a: 'A proper search should consider identical, similar, phonetic and visually comparable marks in relation to the relevant goods or services.',
                },
                {
                  q: 'How do I choose the correct trademark class?',
                  a: 'The class should correspond with the goods or services for which the trademark is used or intended to be used.',
                },
                {
                  q: 'What documents are required for trademark registration?',
                  a: 'Requirements can vary depending on the applicant and circumstances. Applicant details, trademark representation and goods or services information are among the key information generally required.',
                },
                {
                  q: 'What happens after filing a trademark application?',
                  a: 'The application proceeds through the applicable Registry process and may undergo examination. An examination report or other communication may require a response.',
                },
                {
                  q: 'What happens if my trademark receives an objection?',
                  a: 'The applicant should review the examination report and submit an appropriate response within the applicable procedural period.',
                },
                {
                  q: 'How long does trademark registration take?',
                  a: 'There is no universal guaranteed timeline. Processing can vary depending on examination, objections, hearings, opposition and other Registry procedures.',
                },
                {
                  q: 'Can I use my trademark before registration?',
                  a: 'A business can use a mark before registration, but the legal protection available to an unregistered mark differs from the rights associated with registration.',
                },
                {
                  q: 'Does Indian trademark registration protect my brand worldwide?',
                  a: 'No. Indian registration provides protection in India. International protection generally requires appropriate protection in the relevant foreign jurisdictions.',
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden open:ring-1 open:ring-[rgb(110,94,147)]"
                >
                  <summary className="font-bold text-lg p-5 cursor-pointer bg-gray-50 group-open:bg-purple-50 group-open:text-[rgb(110,94,147)] transition-colors select-none">
                    {faq.q}
                  </summary>

                  <div className="p-5 text-gray-700 leading-relaxed bg-white border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* =====================================================
                MORE IP GUIDES
                KEPT FROM ORIGINAL
            ====================================================== */}
            <div className="pt-8 pb-4">
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                More IP Guides
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/patent-registration"
                  className="p-4 border rounded-lg hover:border-[rgb(110,94,147)] hover:bg-gray-50 transition font-medium text-gray-800"
                >
                  Patent Registration Guide
                </Link>

                <Link
                  href="/services/copyright-registration"
                  className="p-4 border rounded-lg hover:border-[rgb(110,94,147)] hover:bg-gray-50 transition font-medium text-gray-800"
                >
                  Copyright Protection Steps
                </Link>
              </div>
            </div>

            {/* =====================================================
                REFERENCES
                KEPT FROM ORIGINAL
            ====================================================== */}
            <div className="pt-4 border-t border-gray-100">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                References & Authority
              </h3>

              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <a
                    href="https://ipindia.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(110,94,147)] hover:underline"
                  >
                    Office of the Controller General of Patents, Designs &
                    Trade Marks (IP India)
                  </a>
                </li>

                <li>
                  <a
                    href="https://ipindia.gov.in/trade-marks.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(110,94,147)] hover:underline"
                  >
                    The Trade Marks Act, 1999
                  </a>
                </li>
              </ul>
            </div>

            {/* Final Trademark Registration CTA */}
            <section className="mt-12">
              <div className="bg-[#16002F] rounded-[32px] px-6 py-14 md:px-12 md:py-20 text-center text-white">
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  Secure Your Trademark's Future
                </h2>

                <p className="text-base md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
                  Don't leave your brand protection to chance. Search for potential
                  conflicts, choose the right trademark class, prepare your application
                  correctly, and build stronger protection for your brand in September
                  2026.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <Link
                    href="/contact-us"
                    className="flex justify-center items-center w-full sm:w-auto min-w-[270px] bg-[#7664A0] hover:bg-[#8573AE] text-white font-bold text-lg py-4 px-8 rounded-full transition-all shadow-[0_0_25px_rgba(118,100,160,0.35)] hover:scale-105"
                  >
                    Start Trademark Registration
                  </Link>

                  <a
                    href="tel:+918700343611"
                    className="w-full sm:w-auto min-w-[270px] border-2 border-[#7664A0] hover:bg-[#7664A0]/10 text-white font-bold text-lg py-4 px-8 rounded-full transition-all"
                  >
                    Call: +91-8700343611
                  </a>
                </div>

              </div>
            </section>
          </div>

          {/* =========================================================
              RIGHT STICKY SIDEBAR
              KEPT FROM ORIGINAL
          ========================================================== */}
          <div className="hidden lg:block space-y-8 sticky top-24">

            {/* Need IP Protection? CTA Card */}
            <div className="bg-[#0C002B] text-white p-6 rounded-xl shadow-xl space-y-5 text-center">
              <h3 className="font-bold text-xl">
                Need Expert Advice?
              </h3>

              <p className="text-sm font-medium opacity-90 leading-relaxed">
                Speak with our trademark attorneys today. Get a free
                consultation and secure your brand.
              </p>

              <Link
                href="/contact-us"
                className="block w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-3 rounded-lg shadow-sm transition text-center"
              >
                Get Free Consultation
              </Link>

              <div className="text-sm font-medium mt-4 flex items-center justify-center">
                <span className="text-[#D2A02A] mr-2">📞</span>
                +91-8700343611
              </div>
            </div>

            {/* Related Services Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                Related Services
              </h4>

              <ul className="space-y-4 text-[15px]">
                <li>
                  <Link
                    href="/our-services/trademark-registration"
                    className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center font-medium"
                  >
                    <span className="mr-3 text-gray-400 text-lg leading-none">
                      {'>'}
                    </span>
                    Trademark Registration
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-services/patent-registration"
                    className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center font-medium"
                  >
                    <span className="mr-3 text-gray-400 text-lg leading-none">
                      {'>'}
                    </span>
                    Patent Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/our-services/copyright-registration"
                    className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center font-medium"
                  >
                    <span className="mr-3 text-gray-400 text-lg leading-none">
                      {'>'}
                    </span>
                    Copyright Protection
                  </Link>
                </li>

                <li>
                  <Link
                    href="/comprehensive-ip-protection-features/expert-trademark-guidance"
                    className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center font-medium"
                  >
                    <span className="mr-3 text-gray-400 text-lg leading-none">
                      {'>'}
                    </span>
                    Expert Guidance
                  </Link>
                </li>

                <li>
                  <Link
                    href="/how-to-register-trademark"
                    className="text-gray-600 hover:text-[rgb(110,94,147)] flex items-center font-medium"
                  >
                    <span className="mr-3 text-gray-400 text-lg leading-none">
                      {'>'}
                    </span>
                    Registration Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          INTERACTIVE INTAKE MODAL
          KEPT FROM ORIGINAL
      ========================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-slideUp">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              ✕
            </button>

            <h3 className="text-2xl font-black text-gray-900 mb-2">
              Request Legal Advisory
            </h3>

            <p className="text-sm text-gray-500 mb-6 font-medium">
              Our certified advocates will contact you shortly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
              />

              <input
                type="text"
                placeholder="WhatsApp / Phone"
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
                />
              </div>

              <input
                type="text"
                placeholder="Brand Name / Asset Type"
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium"
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full border-2 border-gray-100 bg-gray-50 p-3 rounded-xl focus:border-[#D2A02A] focus:ring-0 outline-none font-medium resize-none"
              ></textarea>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-[rgb(110,94,147)] hover:bg-[rgb(90,74,127)] text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 mt-2"
              >
                Submit & Chat on WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

