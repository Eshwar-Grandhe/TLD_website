import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
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
            src="https://readdy.ai/api/search-image?query=Professional%20team%20meeting%20in%20modern%20office%20with%20diverse%20group%20of%20IT%20professionals%20discussing%20technology%20solutions%2C%20collaborative%20workplace%20environment%2C%20business%20consultation%20scene%20with%20blue%20and%20gray%20color%20scheme&width=1440&height=600&seq=about-hero&orientation=landscape"
            alt="About Us Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              About TLD Systems
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              We are a team of passionate IT professionals dedicated to transforming businesses
              through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded by a team of ex-AWS professionals, TLD Systems was born from a vision to
                bridge the gap between enterprise-level technology expertise and personalized
                business solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of combined experience in cloud infrastructure, application
                delivery, and cybersecurity, our team understands the real-world challenges that
                businesses face in today's digital landscape.
              </p>
              <p className="text-lg text-gray-600">
                We believe that technology should empower businesses, not complicate them. That's
                why we focus on delivering practical, scalable solutions that drive real business
                value.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a commitment to excellence, innovation, and genuine partnership with
              our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that drive growth,
                efficiency, and competitive advantage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-eye text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the trusted technology partner that businesses turn to for transformative
                digital solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, integrity, innovation, collaboration, and unwavering commitment to
                client success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Delivering measurable results for businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
