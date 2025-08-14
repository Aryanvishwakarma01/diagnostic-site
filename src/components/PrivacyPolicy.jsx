import React, { useState, useEffect } from 'react';

const PrivacyPolicy = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sections = [
    {
      id: 1,
      title: "Introduction",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">
            Welcome to Harsh Lab & Diagnostic. We are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or visit our diagnostic facilities.
          </p>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">
            By using our website or services, you consent to the practices described in this Privacy Policy. We may update this policy periodically, and we will notify you of any material changes.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Information We Collect",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We collect several types of information to provide you with quality healthcare services:</p>
          
          <h3 className="text-orange-600 font-semibold text-lg my-5">Personal Information:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Name, age, date of birth, and gender</li>
            <li className="text-gray-600">Contact information (phone number, email address, postal address)</li>
            <li className="text-gray-600">Emergency contact details</li>
            <li className="text-gray-600">Government-issued ID information for verification</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Health Information:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Medical history and current health conditions</li>
            <li className="text-gray-600">Test results, lab reports, and diagnostic information</li>
            <li className="text-gray-600">ECG reports and other diagnostic procedures</li>
            <li className="text-gray-600">Medications and allergies</li>
            <li className="text-gray-600">Doctor referrals and prescriptions</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Website Usage Information:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">IP address, browser type, and device information</li>
            <li className="text-gray-600">Pages visited and time spent on our website</li>
            <li className="text-gray-600">Cookies and similar tracking technologies</li>
            <li className="text-gray-600">Service inquiries and appointment bookings</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Payment Information:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Billing address and payment method details</li>
            <li className="text-gray-600">Insurance information and claims</li>
            <li className="text-gray-600">Transaction history and receipts</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "How We Use Your Information",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We use your information for the following purposes:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Healthcare Services:</span> To provide diagnostic tests, lab services, ECG, blood collection, and other medical services</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Test Results:</span> To process, analyze, and deliver your test results securely</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Appointment Management:</span> To schedule, confirm, and manage your appointments</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Communication:</span> To contact you about your health results, appointments, and follow-up care</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Quality Improvement:</span> To improve our services and ensure quality healthcare delivery</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Legal Compliance:</span> To comply with healthcare regulations and legal requirements</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Emergency Care:</span> To provide emergency medical assistance when necessary</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Insurance Processing:</span> To process insurance claims and handle billing</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Information Sharing and Disclosure",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We may share your information in the following circumstances:</p>
          
          <h3 className="text-orange-600 font-semibold text-lg my-5">With Your Consent:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Referring physicians and healthcare providers</li>
            <li className="text-gray-600">Family members or caregivers (with your written permission)</li>
            <li className="text-gray-600">Insurance companies for claims processing</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Legal Requirements:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Government health authorities for public health purposes</li>
            <li className="text-gray-600">Law enforcement when required by law</li>
            <li className="text-gray-600">Courts and legal proceedings when compelled by law</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Service Providers:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Laboratory partners for specialized testing</li>
            <li className="text-gray-600">IT service providers who help maintain our systems</li>
            <li className="text-gray-600">Payment processors for billing and payments</li>
          </ul>

          <p className="mb-4 text-justify text-gray-600 leading-relaxed font-semibold">We never sell your personal or health information to third parties for marketing purposes.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Data Security",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We implement comprehensive security measures to protect your information:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Encryption:</span> All sensitive data is encrypted during transmission and storage</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Access Controls:</span> Limited access to authorized personnel only</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Secure Facilities:</span> Physical security measures at our diagnostic centers</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Regular Audits:</span> Periodic security assessments and updates</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Staff Training:</span> Regular privacy and security training for all employees</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Backup Systems:</span> Secure backup and disaster recovery procedures</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Network Security:</span> Firewalls and intrusion detection systems</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: "Your Rights and Choices",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">You have the following rights regarding your personal and health information:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Access:</span> Request copies of your medical records and test results</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Correction:</span> Request corrections to inaccurate or incomplete information</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Restriction:</span> Request restrictions on how we use or disclose your information</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Communication:</span> Request communications through alternative means or locations</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Complaint:</span> File a complaint about our privacy practices</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Withdrawal:</span> Withdraw consent for certain uses (where applicable)</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">To exercise these rights, please contact us using the information provided below. We will respond to your request within the timeframes required by applicable law.</p>
        </div>
      )
    },
    {
      id: 7,
      title: "Cookies and Tracking Technologies",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our website uses cookies and similar technologies to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Remember your preferences and settings</li>
            <li className="text-gray-600">Analyze website traffic and user behavior</li>
            <li className="text-gray-600">Provide personalized content and services</li>
            <li className="text-gray-600">Ensure website security and prevent fraud</li>
            <li className="text-gray-600">Improve our website functionality and user experience</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.</p>
        </div>
      )
    },
    {
      id: 8,
      title: "Data Retention",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We retain your information for the following periods:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Medical Records:</span> As required by healthcare regulations (typically 7-10 years)</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Test Results:</span> Permanently, for continuity of care and historical reference</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Billing Information:</span> As required by tax and accounting regulations</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Website Data:</span> As long as necessary for the purposes collected</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We will securely dispose of your information when it is no longer needed, except where required to retain it by law.</p>
        </div>
      )
    },
    {
      id: 9,
      title: "Third-Party Links",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
        </div>
      )
    },
    {
      id: 10,
      title: "Children's Privacy",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our services may be used by minors under parental or guardian supervision. When we collect information from minors, we require parental consent and follow additional protections as required by law. Parents and guardians have the right to review, modify, or delete their child's information.</p>
        </div>
      )
    },
    {
      id: 11,
      title: "International Data Transfers",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Your information is primarily stored and processed within India. If we transfer information internationally, we ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.</p>
        </div>
      )
    },
    {
      id: 12,
      title: "Updates to This Policy",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Post the updated policy on our website with a new "Last Updated" date</li>
            <li className="text-gray-600">Notify you of material changes via email or prominent website notice</li>
            <li className="text-gray-600">Obtain your consent for significant changes that affect how we use your health information</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We encourage you to review this policy regularly to stay informed about how we protect your information.</p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 border border-orange-200/20">
          

          {/* Sections */}
          {sections.map((section) => (
            <div 
              key={section.id} 
              className="mb-8 p-6 sm:p-8 bg-white/60 rounded-2xl border-l-4 border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-200/50"
            >
              <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-orange-600 mb-6">
                <span className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {section.id}
                </span>
                {section.title}
              </h2>
              <h4 className='text-sm sm:text-lg'>
              {section.content}
              </h4>
            </div>
          ))}

  
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;