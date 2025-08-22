import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Infrastructure: React.FC = () => {
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
            src="/Hero.jpg"
            alt="Infrastructure Management Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Infrastructure Management
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Complete on-premise and cloud infrastructure setup, refresh, and 24/7 support services
              to keep your business running smoothly.
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
              Comprehensive Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design and implementation to ongoing management and support, we handle every
              aspect of your infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Infrastructure Design</h3>
              <p className="text-gray-600 mb-4">
                Custom infrastructure solutions designed to meet your specific business requirements
                and growth objectives.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Network architecture planning</li>
                <li>• Server and storage design</li>
                <li>• Security infrastructure</li>
                <li>• Scalability planning</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Implementation & Migration
              </h3>
              <p className="text-gray-600 mb-4">
                Seamless deployment and migration services with minimal downtime and maximum
                efficiency.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Zero-downtime migrations</li>
                <li>• Legacy system modernization</li>
                <li>• Cloud migration support</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security measures and compliance frameworks to protect your
                infrastructure and data.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Security assessments</li>
                <li>• Compliance audits</li>
                <li>• Threat monitoring</li>
                <li>• Incident response</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                24/7 Monitoring & Support
              </h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock monitoring, maintenance, and support to ensure optimal performance
                and reliability.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Proactive monitoring</li>
                <li>• Automated alerts</li>
                <li>• Remote troubleshooting</li>
                <li>• Emergency response</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cloud text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Hybrid and multi-cloud solutions leveraging our AWS expertise for optimal
                performance and cost efficiency.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• AWS infrastructure</li>
                <li>• Multi-cloud strategies</li>
                <li>• Cost optimization</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Optimization</h3>
              <p className="text-gray-600 mb-4">
                Continuous improvement and optimization to maximize efficiency and reduce
                operational costs.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Performance analysis</li>
                <li>• Capacity planning</li>
                <li>• Resource optimization</li>
                <li>• Cost reduction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading technologies and platforms to deliver robust, scalable
              infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fab fa-aws text-4xl text-orange-500 mb-4"></i>
              <h3 className="font-semibold text-gray-800">AWS</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fab fa-microsoft text-4xl text-blue-600 mb-4"></i>
              <h3 className="font-semibold text-gray-800">Azure</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fab fa-google text-4xl text-red-500 mb-4"></i>
              <h3 className="font-semibold text-gray-800">Google Cloud</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-network-wired text-4xl text-blue-600 mb-4"></i>
              <h3 className="font-semibold text-gray-800">Cisco</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-server text-4xl text-gray-600 mb-4"></i>
              <h3 className="font-semibold text-gray-800">Dell EMC</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <i className="fas fa-shield-alt text-4xl text-green-600 mb-4"></i>
              <h3 className="font-semibold text-gray-800">Fortinet</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Infrastructure Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful infrastructure projects from start to
              finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current infrastructure, requirements, and business
                objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Design</h3>
              <p className="text-gray-600">
                Custom architecture design that aligns with your business goals and technical
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementation</h3>
              <p className="text-gray-600">
                Expert deployment and configuration with minimal disruption to your business
                operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Management</h3>
              <p className="text-gray-600">
                Ongoing monitoring, maintenance, and optimization to ensure peak performance and
                reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study */}
      {/* <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-200 text-sm font-medium mb-2">
                INFRASTRUCTURE CASE STUDY
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Manufacturing Company Infrastructure Modernization
              </h2>
              <p className="text-blue-100 mb-8">
                We helped a leading manufacturing company modernize their legacy infrastructure,
                resulting in 60% improved performance and 40% cost reduction.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">60%</div>
                  <div className="text-blue-200">Performance Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">40%</div>
                  <div className="text-blue-200">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-blue-200">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">8 mos</div>
                  <div className="text-blue-200">Implementation Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Infrastructure?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Let our team of infrastructure experts help you build a robust, scalable, and secure
              foundation for your business.
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
      </div>

      <Footer />
    </div>
  );
};

export default Infrastructure;
