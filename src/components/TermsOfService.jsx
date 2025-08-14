import React, { useState, useEffect } from 'react';

const TermsOfService = () => {
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
      title: "Acceptance of Terms",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">
            By accessing and using the services of Harsh Lab & Diagnostic, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access or use our services.
          </p>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">
            If you do not agree to abide by the above, please do not use this service. We reserve the right to change these terms at any time without prior notice.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Description of Services",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Harsh Lab & Diagnostic provides comprehensive healthcare diagnostic services including:</p>
          
          <h3 className="text-orange-600 font-semibold text-lg my-5">Laboratory Services:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Blood tests, urine analysis, and other pathological examinations</li>
            <li className="text-gray-600">Biochemical and hematological testing</li>
            <li className="text-gray-600">Microbiological and immunological tests</li>
            <li className="text-gray-600">Specialized diagnostic testing</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Diagnostic Services:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Electrocardiogram (ECG) testing</li>
            <li className="text-gray-600">Health screening packages</li>
            <li className="text-gray-600">Preventive health checkups</li>
            <li className="text-gray-600">Home sample collection services</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Digital Services:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Online appointment booking</li>
            <li className="text-gray-600">Digital test result delivery</li>
            <li className="text-gray-600">Patient portal access</li>
            <li className="text-gray-600">Health record management</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      title: "User Responsibilities",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">As a user of our services, you agree to:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Accurate Information:</span> Provide accurate, current, and complete information about yourself</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Medical History:</span> Disclose relevant medical history and current medications</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Appointment Compliance:</span> Arrive on time for scheduled appointments and follow pre-test instructions</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Payment Obligations:</span> Pay for services rendered according to our pricing and payment terms</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Respectful Behavior:</span> Treat our staff and facilities with respect and courtesy</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Confidentiality:</span> Maintain the confidentiality of your login credentials and account information</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Legal Compliance:</span> Use our services only for lawful purposes and in accordance with applicable laws</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Appointment and Scheduling",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our appointment and scheduling policies include:</p>
          
          <h3 className="text-orange-600 font-semibold text-lg my-5">Booking Appointments:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Appointments can be made online, by phone, or in person</li>
            <li className="text-gray-600">We recommend booking in advance to secure your preferred time slot</li>
            <li className="text-gray-600">Emergency tests may be accommodated based on availability</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Cancellation Policy:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Appointments must be cancelled at least 2 hours in advance</li>
            <li className="text-gray-600">Repeated no-shows may result in service restrictions</li>
            <li className="text-gray-600">Cancellation fees may apply for certain specialized tests</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Rescheduling:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Appointments can be rescheduled subject to availability</li>
            <li className="text-gray-600">Priority will be given to urgent medical requirements</li>
            <li className="text-gray-600">Home collection services require 24-hour notice for changes</li>
          </ul>
        </div>
      )
    },
    {
      id: 5,
      title: "Payment Terms and Pricing",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our payment terms and pricing policies are as follows:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Payment Methods:</span> We accept cash, credit cards, debit cards, UPI, and insurance claims</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Pricing:</span> All prices are clearly displayed and subject to applicable taxes</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Insurance:</span> We work with major insurance providers for direct billing where applicable</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Advance Payment:</span> Some specialized tests may require advance payment</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Refunds:</span> Refunds are processed according to our refund policy within 7-14 business days</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Disputes:</span> Any billing disputes must be raised within 30 days of service</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Price Changes:</span> We reserve the right to modify prices with reasonable notice</li>
          </ul>
        </div>
      )
    },
    {
      id: 6,
      title: "Test Results and Reports",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Regarding test results and medical reports:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Delivery Timeline:</span> Results are typically available within 24-48 hours unless otherwise specified</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Access Methods:</span> Results can be accessed online, collected in person, or sent via secure digital channels</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Accuracy:</span> We maintain high standards of accuracy but results should be interpreted by qualified healthcare professionals</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Confidentiality:</span> Results are released only to authorized individuals with proper identification</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Retention:</span> Digital copies of results are maintained for future reference as per regulatory requirements</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Abnormal Results:</span> Critical or abnormal results may be communicated immediately to the patient or referring physician</li>
          </ul>
        </div>
      )
    },
    {
      id: 7,
      title: "Website and Digital Services",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Terms governing our website and digital services:</p>
          
          <h3 className="text-orange-600 font-semibold text-lg my-5">Account Security:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Users are responsible for maintaining account security</li>
            <li className="text-gray-600">Strong passwords and regular updates are recommended</li>
            <li className="text-gray-600">Unauthorized access should be reported immediately</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Acceptable Use:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Website must be used for legitimate healthcare purposes only</li>
            <li className="text-gray-600">No unauthorized access, hacking, or malicious activities</li>
            <li className="text-gray-600">Respect intellectual property rights and content ownership</li>
          </ul>

          <h3 className="text-orange-600 font-semibold text-lg my-5">Technical Support:</h3>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Technical support is available during business hours</li>
            <li className="text-gray-600">System maintenance may cause temporary service interruptions</li>
            <li className="text-gray-600">We strive to maintain 99% uptime for digital services</li>
          </ul>
        </div>
      )
    },
    {
      id: 8,
      title: "Privacy and Data Protection",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Your privacy and data protection are governed by:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Privacy Policy:</span> All data handling is subject to our comprehensive Privacy Policy</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Data Security:</span> We implement industry-standard security measures to protect your information</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Consent:</span> Medical information is shared only with your explicit consent or as required by law</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Third Parties:</span> We may share information with healthcare providers, insurance companies, and regulatory authorities as needed</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Data Rights:</span> You have rights to access, correct, and delete your personal information</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Compliance:</span> We comply with applicable data protection laws and healthcare regulations</li>
          </ul>
        </div>
      )
    },
    {
      id: 9,
      title: "Limitation of Liability",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Our liability limitations include:</p>
          <ul className="list-disc pl-5 mb-4 space-y-3">
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Service Scope:</span> We provide diagnostic services but do not provide medical treatment or diagnosis</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Professional Consultation:</span> Test results should always be interpreted by qualified healthcare professionals</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Technical Issues:</span> We are not liable for technical failures beyond our reasonable control</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Third-Party Services:</span> We are not responsible for services provided by third-party partners</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Maximum Liability:</span> Our total liability is limited to the amount paid for the specific service</li>
            <li className="text-gray-600"><span className="text-black py-1 rounded text-sm sm:text-lg font-semibold">Force Majeure:</span> We are not liable for delays or failures due to circumstances beyond our control</li>
          </ul>
        </div>
      )
    },
    {
      id: 10,
      title: "Intellectual Property",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">All content on our website and materials, including logos, trademarks, text, images, and software, are the intellectual property of Harsh Lab & Diagnostic or our licensors. Users may not reproduce, distribute, or create derivative works without explicit written permission.</p>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Patient data and test results remain the property of the patient, but we retain rights to anonymized data for quality improvement and research purposes in compliance with applicable laws.</p>
        </div>
      )
    },
    {
      id: 11,
      title: "Termination of Services",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We reserve the right to terminate or suspend services in the following circumstances:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Violation of these Terms of Service</li>
            <li className="text-gray-600">Non-payment of fees or fraudulent payment activities</li>
            <li className="text-gray-600">Abusive or threatening behavior towards staff</li>
            <li className="text-gray-600">Misuse of our facilities or digital services</li>
            <li className="text-gray-600">Legal or regulatory requirements</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">Upon termination, access to digital services may be suspended, but medical records will be retained as required by law.</p>
        </div>
      )
    },
    {
      id: 12,
      title: "Dispute Resolution",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">In case of disputes:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">First, contact our customer service team to resolve issues amicably</li>
            <li className="text-gray-600">Formal complaints can be submitted in writing with supporting documentation</li>
            <li className="text-gray-600">We will respond to complaints within 7 business days</li>
            <li className="text-gray-600">Unresolved disputes may be subject to mediation or arbitration</li>
            <li className="text-gray-600">Applicable local laws and jurisdiction will govern any legal proceedings</li>
          </ul>
        </div>
      )
    },
    {
      id: 13,
      title: "Changes to Terms",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We may update these Terms of Service periodically to reflect changes in our practices, services, or legal requirements. We will:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600">Post updated terms on our website with a new "Last Updated" date</li>
            <li className="text-gray-600">Notify users of material changes via email or website notice</li>
            <li className="text-gray-600">Provide reasonable notice before changes take effect</li>
            <li className="text-gray-600">Continued use of our services constitutes acceptance of updated terms</li>
          </ul>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">We encourage you to review these terms regularly to stay informed about your rights and obligations.</p>
        </div>
      )
    },
    {
      id: 14,
      title: "Contact Information",
      content: (
        <div>
          <p className="mb-4 text-justify text-gray-600 leading-relaxed">For questions about these Terms of Service, please contact us:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li className="text-gray-600"><span className="text-black font-semibold">Email:</span> legal@harshdiagnostic.com</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Phone:</span> [Your Phone Number]</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Address:</span> Harsh Lab & Diagnostic, [Your Complete Address]</li>
            <li className="text-gray-600"><span className="text-black font-semibold">Business Hours:</span> Monday - Saturday: [Hours], Sunday: [Hours]</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 sm:py-2 border border-orange-200/20">

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

export default TermsOfService;