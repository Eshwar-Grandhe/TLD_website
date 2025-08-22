import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServices: React.FC = () => {
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
            alt="AI Services Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">AI Services</h1>
            <p className="mt-6 text-xl text-gray-100">
              Unlock the power of Artificial Intelligence with solutions that automate workflows,
              drive smarter decisions, and accelerate innovation for your business.
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
              Transform Your Business with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automation and predictive analytics to generative AI and natural language
              processing, our AI services help you innovate, scale, and stay competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-robot text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate routine tasks and streamline workflows with AI-powered solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Document & Image Processing</li>
                <li>• Workflow Optimization</li>
                <li>• Automating via Agent</li>
                <li>• Automated Customer Support</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 mb-4">
                Make data-driven decisions with AI models that forecast trends and outcomes.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Demand Forecasting</li>
                <li>• Customer Insights</li>
                <li>• Risk Analysis</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-brain text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Generative AI & NLP</h3>
              <p className="text-gray-600 mb-4">
                Enhance customer experiences and content creation with advanced AI models.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Natural Language Processing</li>
                <li>• AI-driven Content Creation</li>
                <li>• Voice & Text Analytics</li>
                <li>• Personalized Recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Power Your Business with AI?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI experts design and implement tailored solutions that maximize ROI and keep you
            ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-medium"
              onClick={() => navigate('/contact')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AIServices;
