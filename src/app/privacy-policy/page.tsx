import React from 'react';

export const metadata = {
  title: 'Privacy Policy | IPRKaro',
  description: 'Read IPRKaro.com\'s comprehensive privacy policy to understand how we collect, use, protect, and manage your personal information. Learn about your data rights, security measures, cookie policies, third-party sharing, and how we ensure your privacy during trademark registration and IP services.',
  alternates: {
    canonical: 'https://iprkaro.com/privacy-policy',
  },
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Your data protection and privacy rights at IPRKaro
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Effective Date:</strong> 10 October 2025</p>
            <p><strong>Entity:</strong> IPRkaro.com ("IPRKaro", "we", "our", "us")</p>
            <p><strong>Registered Office:</strong> Gurugram, India-122001</p>
            <p>
              <strong>Contact:</strong>{' '}
              <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700">
                support@iprkaro.com
              </a>{' '}
              |{' '}
              <a href="tel:+919289707648" className="text-cyan-600 hover:text-cyan-700">
                +91-9289707648
              </a>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-16">
            <p className="text-gray-700 leading-relaxed mb-6">
              IPRKaro is committed to protecting your privacy in compliance with the{' '}
              <strong>Information Technology Act, 2000</strong>, and the{' '}
              <strong>Digital Personal Data Protection Act, 2023</strong>.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Data We Collect
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Identity & Contact Data:</strong> Name, PAN, Aadhaar, DIN, address, email, phone.
                  </li>
                  <li>
                    <strong>Service Data:</strong> Documents & information for requested services.
                  </li>
                  <li>
                    <strong>Transactional Data:</strong> Services purchased, payment information, invoices.
                  </li>
                  <li>
                    <strong>Technical & Usage Data:</strong> IP, browser type, device info, navigation data.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Purpose & Legal Basis
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We process your data to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Perform our contract with you.</li>
                  <li>Comply with legal obligations.</li>
                  <li>Pursue legitimate interests (e.g., improving service).</li>
                  <li>With your consent for marketing communications.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Data Sharing & Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Shared only when necessary with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Professionals (CA/CS/Lawyers).</li>
                  <li>Government Authorities.</li>
                  <li>Essential technology service providers.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed font-semibold mt-3">
                  We do not sell your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Robust technical and organizational measures, including encryption and access control, are implemented to protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  5. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Personal data retained only as long as necessary for the purposes collected or as required by Indian law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You can access, correct, request erasure, or withdraw consent for your personal data. Contact{' '}
                  <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    support@iprkaro.com
                  </a>{' '}
                  to exercise these rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  7. Cookies and Tracking
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  8. Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  9. Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  10. Contact for Privacy Matters
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For any privacy-related questions or concerns, please contact us at:{' '}
                  <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    support@iprkaro.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Box */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            <i className="fas fa-envelope mr-2 text-cyan-600"></i>Questions or Concerns?
          </h3>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please don't hesitate to contact us.
          </p>
          <div className="space-y-2">
            <p className="text-gray-700">
              <i className="fas fa-envelope mr-2 text-cyan-600"></i>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                support@iprkaro.com
              </a>
            </p>
            <p className="text-gray-700">
              <i className="fas fa-phone mr-2 text-cyan-600"></i>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919289707648" className="text-cyan-600 hover:text-cyan-700 underline">
                +91-9289707648
              </a>
            </p>
          </div>
        </div>

        {/* Link to Terms */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Also see our{' '}
            <a href="/terms-and-conditions" className="text-cyan-600 hover:text-cyan-700 underline font-semibold">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

