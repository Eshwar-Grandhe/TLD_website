// src/Home.tsx
import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useNavigate, Link } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="top" className="font-sans min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20technology%20background%20with%20blue%20and%20gray%20digital%20network%20connections%2C%20cloud%20computing%20visualization%20with%20soft%20gradient%20lighting%2C%20modern%20tech%20infrastructure%20concept%20with%20depth%20and%20dimension%2C%20professional%20enterprise%20IT%20solutions&width=1440&height=600&seq=hero1&orientation=landscape"
            alt="Technology Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Empowering Business Transformation through People, Process &
              Technology
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Expert IT solutions from a team of ex-AWS professionals dedicated
              to solving your real-world business challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Infrastructure */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-server text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Infrastructure
              </h3>
              <p className="text-gray-600 mb-6">
                Build robust, scalable infrastructure solutions with our expert
                guidance and implementation.
              </p>
              <Link
                to="/infrastructure"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>

            {/* F5 ADC */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                F5 ADC
              </h3>
              <p className="text-gray-600 mb-6">
                Optimize application delivery and security with F5 BIG-IP
                solutions.
              </p>
              <a
                href="/f5-adc"
                className="text-green-600 hover:text-green-800 font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-cloud text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Leverage the power of cloud computing with our expertise in different cloud providers and
                best practices.
              </p>
              <a
                href="/cloud-transformation"
                className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* CyberSecurity */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-lock text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                CyberSecurity
              </h3>
              <p className="text-gray-600 mb-6">
                Protect your digital assets with our comprehensive cybersecurity solutions.
              </p>
              <a
                href="/cybersecurity"
                className="text-red-600 hover:text-red-800 font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Staff Augmentation */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <i className="fas fa-user-friends text-2xl text-yellow-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Staff Augmentation
              </h3>
              <p className="text-gray-600 mb-6">
                Scale your team with our skilled professionals for your projects.
              </p>
              <a
                href="/staff-augmentation"
                className="text-yellow-600 hover:text-yellow-800 font-medium inline-flex items-center"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TLD Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together decades of experience from leading
              technology companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Former AWS professionals with deep industry knowledge
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-cogs text-2xl text-green-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Proven Process
              </h3>
              <p className="text-gray-600">
                Time-tested methodologies for successful implementations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-rocket text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Rapid Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock support for your critical systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Success Story: Global E-commerce Platform
                </h2>
                <p className="text-xl text-blue-100 mb-6">
                  We helped a leading e-commerce company scale their
                  infrastructure to handle 10x traffic growth while reducing
                  costs by 40%.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-white">10x</div>
                    <div className="text-blue-100">Traffic Growth</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">40%</div>
                    <div className="text-blue-100">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-line text-4xl text-white"></i>
                </div>
                <p className="text-blue-100">
                  "TLD Systems transformed our infrastructure and helped us
                  achieve unprecedented scale."
                </p>
                <p className="text-white font-semibold mt-2">
                  - CTO, Global E-commerce Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your technology
            goals and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-300" onClick={() => navigate("/contact")}>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
