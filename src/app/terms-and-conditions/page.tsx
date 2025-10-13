import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | IPRKaro',
  description: 'Terms of Use, Cancellation & Refund Policy, and Privacy Policy for IPRKaro.com',
};

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">
            Terms of Use, Cancellation & Refund Policy, and Privacy Policy
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

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            <i className="fas fa-list-ul mr-2"></i>Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#terms-of-use" className="block text-cyan-600 hover:text-cyan-700 hover:underline">
              1. Terms of Use
            </a>
            <a href="#cancellation-refund" className="block text-cyan-600 hover:text-cyan-700 hover:underline">
              2. Cancellation & Refund Policy
            </a>
            <a href="#privacy-policy" className="block text-cyan-600 hover:text-cyan-700 hover:underline">
              3. Privacy Policy
            </a>
            <a href="#general-legal" className="block text-cyan-600 hover:text-cyan-700 hover:underline">
              4. General Legal Clauses
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Terms of Use */}
          <section id="terms-of-use" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-3">
              Terms of Use
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Acceptance of the Terms
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using <strong>www.iprkaro.com</strong> ("Website") or any of our mobile/desktop applications, communication channels (including WhatsApp), or services (collectively, the "Services"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use ("Terms"). If you do not agree, please discontinue use immediately. These Terms form a legally binding agreement between you and IPRKaro.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Definitions
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Client / You / Your:</strong> Any natural or legal person who accesses the Website or avails the Services.
                  </li>
                  <li>
                    <strong>Engagement:</strong> Any order, purchase, subscription, or request for Services placed with IPRKaro.
                  </li>
                  <li>
                    <strong>Government Fees:</strong> Statutory charges, duties, or fees payable to any government, quasi-government, or regulatory authority (e.g., Trademark application fees, Stamp Duty).
                  </li>
                  <li>
                    <strong>Professionals:</strong> Chartered Accountants, Company Secretaries, Lawyers, or other independent experts engaged to deliver parts of the Services.
                  </li>
                  <li>
                    <strong>Working Day:</strong> A day (other than a Saturday, Sunday, or public holiday) on which banks are open for business in Bengaluru, India.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Nature of Services & No Legal Advice
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Facilitation Platform:</strong> IPRKaro is a technology platform that connects Clients with qualified Professionals and facilitates intellectual property services, including Trademark, Patent, and Copyright registration. We are not a law firm or accounting firm, nor do we provide legal or financial advice.
                  </li>
                  <li>
                    <strong>Information Only:</strong> All content on the Website is for general informational purposes only and must not be construed as professional advice. You should consult an independent advisor before acting on any information.
                  </li>
                  <li>
                    <strong>No Attorney–Client Relationship:</strong> Your use of our Services does not create an attorney-client, accountant-client, or fiduciary relationship with IPRKaro.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Eligibility & Client Responsibilities
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Eligibility:</strong> You must be at least 18 years of age and legally capable of entering into binding contracts under the Indian Contract Act, 1872.
                  </li>
                  <li>
                    <strong>Accuracy of Information:</strong> You warrant that all information and documents you provide are true, complete, and up-to-date. IPRKaro is not liable for any issues arising from inaccurate or incomplete information provided by you.
                  </li>
                  <li>
                    <strong>Timely Cooperation:</strong> You agree to respond to our requests and provide necessary documents within the communicated timelines. Delays in your cooperation will extend service delivery timelines and may affect your eligibility for a refund.
                  </li>
                  <li>
                    <strong>Communication Consent:</strong> You consent to being contacted via phone, email, SMS, WhatsApp, or other digital channels for service delivery, support, and updates.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  5. Ordering, Pricing & Payments
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Quotes & Orders:</strong> All price quotes are indicative until full payment is received and an Engagement is confirmed.
                  </li>
                  <li>
                    <strong>Taxes & Government Fees:</strong> Prices displayed are exclusive of applicable taxes (like GST) and Government Fees unless expressly stated otherwise.
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> Payments are accepted via RBI-compliant payment gateways, UPI, direct bank transfer, or other methods notified on the Website.
                  </li>
                  <li>
                    <strong>Invoices:</strong> A tax invoice will be issued in the name provided at the time of placing the order.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  6. Timelines & Service Delivery
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Indicative Timelines:</strong> All quoted timelines are estimates. They may vary due to dependencies on government portals, regulatory approvals, and client cooperation.
                  </li>
                  <li>
                    <strong>Commencement of Work:</strong> Work is considered "commenced" immediately after payment is successfully processed and your Engagement is logged in our system. This includes any internal preparatory work, resource assignment, or preliminary review by the assigned team.
                  </li>
                  <li>
                    <strong>Engagement on Hold / Abandonment:</strong> If you are unresponsive to our communications for 15 calendar days after a written reminder, your Engagement may be placed "on hold". If unresponsiveness continues for 45 calendar days, the Engagement will be deemed abandoned, and no refund will apply.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation & Refund Policy */}
          <section id="cancellation-refund" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-3">
              Cancellation & Refund Policy
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Our Refund Philosophy
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to fairness and transparency. This policy ensures clarity for both Clients and IPRKaro, considering operational costs and non-recoverable government fees.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Cooling-Off Period (Full Refund)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You are eligible for a full refund if you cancel within <strong>48 hours of payment</strong>, provided work has not commenced as defined above.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Non-Refundable Components
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The following are non-refundable once paid on your behalf:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Government Fees (e.g., Trademark fees, Stamp Duty).</li>
                  <li>Third-party consumables (e.g., Digital Signature Certificates).</li>
                  <li>Payment gateway transaction charges (typically 1-3%).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Pro-Rata / Partial Refunds (After Work Commences)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  If cancellation occurs after the 48-hour cooling-off period or after work has commenced, a partial refund may be considered:
                </p>
                <div className="bg-gray-50 border-l-4 border-cyan-600 p-4 my-4">
                  <p className="font-semibold text-gray-800">
                    Refund Amount = Total Paid – (A + B)
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2 text-gray-700">
                    <li><strong>A:</strong> All non-refundable costs (as above).</li>
                    <li><strong>B:</strong> Service fee for work already completed (man-hours × standard rate).</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Example:</strong> Paid ₹10,000; DSC cost ₹2,500; 2 hours consultation/drafting ₹2,000 → Refund = ₹10,000 – (₹2,500 + ₹2,000) = ₹5,500
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  5. How to Request a Refund
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    Email:{' '}
                    <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                      support@iprkaro.com
                    </a>{' '}
                    with subject "Refund Request – [Your Registered Phone Number]".
                  </li>
                  <li>Provide reason for refund along with registered email and phone.</li>
                  <li>Acknowledgement: within 1 Working Day. Decision: within 3 Working Days.</li>
                  <li>Processing: Refunds to original payment method within 3–5 Working Days from approval.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  6. Service Deficiency or Quality Issues
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Email{' '}
                  <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    support@iprkaro.com
                  </a>{' '}
                  within <strong>7 days</strong> of service delivery detailing the issue. We may offer corrective action, re-work, or partial/full refund in line with consumer protection obligations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  7. When Cancellation & Refunds Are Not Possible
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>After final submission of your application/documents to any government authority.</li>
                  <li>For time-sensitive or expedited services already initiated.</li>
                  <li>Services under special promotions or bundles explicitly marked "non-refundable".</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  8. Escalation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  If dissatisfied with support resolution, escalate to <strong>Grievance Officer</strong> at{' '}
                  <a href="mailto:grievance@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    grievance@iprkaro.com
                  </a>
                  . Response within 5 Working Days.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy-policy" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-3">
              Privacy Policy
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              IPRKaro is committed to protecting your privacy in compliance with the{' '}
              <strong>Information Technology Act, 2000</strong>, and the{' '}
              <strong>Digital Personal Data Protection Act, 2023</strong>.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Data We Collect
                </h3>
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Purpose & Legal Basis
                </h3>
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Data Sharing & Disclosure
                </h3>
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
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Data Security
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Robust technical and organizational measures, including encryption and access control, are implemented to protect your data.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  5. Data Retention
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Personal data retained only as long as necessary for the purposes collected or as required by Indian law.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  6. Your Rights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You can access, correct, request erasure, or withdraw consent for your personal data. Contact{' '}
                  <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    support@iprkaro.com
                  </a>{' '}
                  to exercise these rights.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  7. Contact for Privacy Matters
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Email:{' '}
                  <a href="mailto:support@iprkaro.com" className="text-cyan-600 hover:text-cyan-700 underline">
                    support@iprkaro.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* General Legal Clauses */}
          <section id="general-legal" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-3">
              General Legal Clauses
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  1. Intellectual Property
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  All content, branding, and technology on the Website are exclusive property of Safe Ledger Private Limited.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  2. Limitation of Liability
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  IPRKaro's total liability for any Engagement shall not exceed the professional fees paid for that Engagement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  3. Indemnity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold IPRKaro harmless from claims, losses, or damages arising from your breach of Terms, violation of law, or provision of incorrect information.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  4. Governing Law & Jurisdiction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. Courts in Bengaluru, Karnataka have exclusive jurisdiction, subject to arbitration as below.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  5. Dispute Resolution
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Disputes are first attempted to be resolved amicably. If unresolved within 30 days, disputes will be referred to a sole arbitrator under the{' '}
                  <strong>Arbitration and Conciliation Act, 1996</strong>. Seat of arbitration: Gurgaon.
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
            If you have any questions about these Terms & Conditions, please don't hesitate to contact us.
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
      </div>
    </div>
  );
};

export default TermsAndConditions;

