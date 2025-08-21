import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const F5ADC: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="top" className="font-sans min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=F5%20BIG-IP%20Application%20Delivery%20Controller%20equipment%20in%20data%20center%2C%20network%20load%20balancing%20technology%2C%20enterprise%20application%20delivery%20infrastructure%2C%20blue%20and%20gray%20technology%20environment&width=1440&height=600&seq=f5-hero&orientation=landscape"
            alt="F5 ADC Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              F5 ADC Practice
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Specialized Application Delivery Controller solutions with expert implementation, optimization, and management services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-base font-medium transition-colors duration-300" onClick={() => navigate("/contact")}>
                Get Expert Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* F5 ADC Overview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">F5 BIG-IP Expertise</h2>
              <p className="text-lg text-gray-600 mb-6">
                As certified F5 professionals, we provide comprehensive BIG-IP Application Delivery Controller solutions that optimize application performance, enhance security, and ensure high availability.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team has extensive experience with F5 BIG-IP Local Traffic Manager (LTM), Global Traffic Manager (GTM), Application Security Manager (ASM), and Advanced WAF solutions.
              </p>
              <p className="text-lg text-gray-600">
                We help organizations maximize their F5 investment through expert design, implementation, and ongoing management services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* F5 Services */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">F5 ADC Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive F5 BIG-IP solutions to optimize your application delivery and security infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-balance-scale text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Load Balancing</h3>
              <p className="text-gray-600 mb-4">
                Advanced load balancing solutions using F5 BIG-IP LTM for optimal application performance and availability.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Layer 4 & 7 load balancing</li>
                <li>• Health monitoring</li>
                <li>• Session persistence</li>
                <li>• SSL termination</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Application Security</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security solutions using F5 BIG-IP ASM and Advanced WAF to protect your applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Web Application Firewall</li>
                <li>• DDoS protection</li>
                <li>• Bot mitigation</li>
                <li>• API security</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-globe text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Traffic Management</h3>
              <p className="text-gray-600 mb-4">
                Intelligent DNS and global load balancing solutions using F5 BIG-IP GTM for worldwide application delivery.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Intelligent DNS</li>
                <li>• Geographic load balancing</li>
                <li>• Disaster recovery</li>
                <li>• Multi-datacenter failover</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tachometer-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Advanced performance optimization using F5 BIG-IP features to enhance application speed and user experience.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Compression optimization</li>
                <li>• Caching strategies</li>
                <li>• Connection pooling</li>
                <li>• TCP optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cloud text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Integration</h3>
              <p className="text-gray-600 mb-4">
                Seamless integration of F5 BIG-IP with cloud platforms for hybrid and multi-cloud application delivery.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• AWS integration</li>
                <li>• Azure integration</li>
                <li>• Google Cloud integration</li>
                <li>• Container orchestration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Management & Support</h3>
              <p className="text-gray-600 mb-4">
                Ongoing management, monitoring, and support services to ensure optimal F5 BIG-IP performance and reliability.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• 24/7 monitoring</li>
                <li>• Configuration management</li>
                <li>• Troubleshooting support</li>
                <li>• Performance tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* F5 Products */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">F5 BIG-IP Product Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified engineers have deep expertise across the entire F5 BIG-IP product portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-balance-scale text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">BIG-IP LTM</h3>
              <p className="text-gray-600 text-sm">
                Local Traffic Manager for advanced load balancing and traffic management
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-globe text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">BIG-IP GTM</h3>
              <p className="text-gray-600 text-sm">
                Global Traffic Manager for intelligent DNS and global load balancing
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">BIG-IP ASM</h3>
              <p className="text-gray-600 text-sm">
                Application Security Manager for comprehensive web application protection
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lock text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Advanced WAF</h3>
              <p className="text-gray-600 text-sm">
                Advanced Web Application Firewall for next-generation security protection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">F5 Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful F5 BIG-IP deployments with minimal disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of current infrastructure and application requirements to design optimal F5 solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Design</h3>
              <p className="text-gray-600">
                Custom F5 BIG-IP architecture design that aligns with your business objectives and technical requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Expert deployment and configuration with zero-downtime migration and comprehensive testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimization</h3>
              <p className="text-gray-600">
                Ongoing monitoring, tuning, and optimization to ensure peak performance and maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-200 text-sm font-medium mb-2">
                F5 ADC CASE STUDY
              </div>
              <h2 className="text-3xl font-bold mb-6">
                E-commerce Platform F5 BIG-IP Implementation
              </h2>
              <p className="text-blue-100 mb-8">
                We implemented F5 BIG-IP LTM and ASM for a major e-commerce platform, resulting in 50% improved performance and 99.99% uptime during peak shopping seasons.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-blue-200">Performance Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.99%</div>
                  <div className="text-blue-200">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">90%</div>
                  <div className="text-blue-200">Security Threats Blocked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3 mos</div>
                  <div className="text-blue-200">Implementation Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">F5 Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds multiple F5 certifications ensuring you get expert-level service and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">F5-CA</h3>
              <p className="text-gray-600">
                F5 Certified Administrator - BIG-IP
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">F5-CSE</h3>
              <p className="text-gray-600">
                F5 Certified Solution Expert - BIG-IP
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-certificate text-blue-600 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">F5-CSP</h3>
              <p className="text-gray-600">
                F5 Certified Security Professional
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Optimize Your Application Delivery?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Let our F5 experts help you maximize the performance, security, and availability of your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-300 rounded-md" onClick={() => navigate("/contact")}>
                Schedule F5 Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default F5ADC;
