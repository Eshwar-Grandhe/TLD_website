import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CyberSecurity: React.FC = () => {
  const navigate = useNavigate();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top" className="font-sans min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Cybersecurity%20digital%20shield%20concept%20with%20data%20protection%2C%20secure%20enterprise%20IT%20environment%20with%20blue%20glowing%20matrix&width=1440&height=600&seq=cybersecurity-hero&orientation=landscape"
            alt="Cyber Security Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Cyber Security Services
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Protect your business with end-to-end cybersecurity solutions — risk assessments,
              compliance, monitoring, and incident response to safeguard data and systems.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                className="!rounded-button whitespace-nowrap cursor-pointer bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-base font-medium transition-colors duration-300"
                onClick={() => navigate('/contact')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Comprehensive Cyber Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From proactive monitoring to incident response, we deliver security frameworks that
              keep your business safe and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-search text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-600 mb-4">
                Identify vulnerabilities in your IT landscape to reduce risks and strengthen
                defenses.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Security audits</li>
                <li>• Vulnerability scanning</li>
                <li>• Compliance gap analysis</li>
                <li>• Threat modeling</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lock text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Identity & Access</h3>
              <p className="text-gray-600 mb-4">
                Manage user identities and secure access across systems and applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Multi-factor authentication</li>
                <li>• Role-based access control</li>
                <li>• Single sign-on</li>
                <li>• Privileged access management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Threat Detection</h3>
              <p className="text-gray-600 mb-4">
                Monitor and respond to cyber threats in real-time with proactive detection tools.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Security Information & Event Management (SIEM)</li>
                <li>• Intrusion detection systems</li>
                <li>• Continuous monitoring</li>
                <li>• Automated alerts</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-user-shield text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
              <p className="text-gray-600 mb-4">
                Rapid response and recovery strategies to minimize damage and downtime from attacks.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Digital forensics</li>
                <li>• Malware removal</li>
                <li>• Business continuity planning</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-clipboard-check text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure regulatory compliance with industry standards and frameworks.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• GDPR & HIPAA compliance</li>
                <li>• PCI DSS frameworks</li>
                <li>• ISO 27001 standards</li>
                <li>• Regular compliance audits</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-network-wired text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Network Security</h3>
              <p className="text-gray-600 mb-4">
                Safeguard networks with firewalls, intrusion prevention, and advanced monitoring.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Next-gen firewalls</li>
                <li>• VPN & secure tunneling</li>
                <li>• Zero-trust frameworks</li>
                <li>• DDoS protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Secure Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our cybersecurity experts protect your business from evolving threats with a
            proactive defense strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-300 rounded-md"
              onClick={() => navigate('/contact')}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CyberSecurity;
