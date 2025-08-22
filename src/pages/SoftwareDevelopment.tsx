import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SoftwareDevelopment: React.FC = () => {
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
            alt="Software Development Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Software Development Services
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              End-to-end custom software development — from design and development to deployment and
              support — delivering scalable, secure, and innovative solutions tailored to your
              business needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-base font-medium rounded-md transition-colors duration-300"
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
              Comprehensive Software Development Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ideation to deployment, we design and build powerful, scalable, and secure
              applications tailored to your unique business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-code text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Application Development</h3>
              <p className="text-gray-600 mb-4">
                Build applications designed specifically for your workflows and business objectives.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Tailored business apps</li>
                <li>• Cloud-native development</li>
                <li>• Cross-platform solutions</li>
                <li>• Enterprise-grade systems</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-mobile-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Web & Mobile Development</h3>
              <p className="text-gray-600 mb-4">
                Create responsive, scalable web and mobile apps for engaging customer experiences.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• iOS & Android apps</li>
                <li>• Progressive web apps</li>
                <li>• Responsive UI/UX design</li>
                <li>• E-commerce platforms</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-plug text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">API & Systems Integration</h3>
              <p className="text-gray-600 mb-4">
                Ensure smooth communication across platforms with robust integration strategies.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• REST & GraphQL APIs</li>
                <li>• Third-party integrations</li>
                <li>• Legacy modernization</li>
                <li>• Data synchronization</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-project-diagram text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Agile Development & DevOps</h3>
              <p className="text-gray-600 mb-4">
                Accelerate delivery with agile practices and continuous integration pipelines.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Agile & Scrum workflows</li>
                <li>• CI/CD automation</li>
                <li>• Cloud infrastructure</li>
                <li>• DevOps toolchains</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-headset text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-4">
                Ensure reliability and scalability with continuous support and optimization.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Regular updates</li>
                <li>• Performance optimization</li>
                <li>• Bug fixing</li>
                <li>• 24/7 technical support</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation & R&D</h3>
              <p className="text-gray-600 mb-4">
                Leverage new technologies to drive innovation and gain a competitive edge.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• AI & ML solutions</li>
                <li>• IoT applications</li>
                <li>• Blockchain integration</li>
                <li>• Emerging tech consulting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Next Software Solution?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Partner with our expert developers to bring your vision to life with scalable, secure,
            and future-ready applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-medium"
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

export default SoftwareDevelopment;
