import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const StaffAugmentation: React.FC = () => {
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
            src="https://readdy.ai/api/search-image?query=Professional%20IT%20team%20working%20in%20modern%20office%2C%20collaborative%20technology%20workspace%20with%20digital%20screens&width=1440&height=600&seq=staff-hero&orientation=landscape"
            alt="Staff Augmentation Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Staff Augmentation
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Flexible staffing solutions that extend your team with top IT
              talent — when and where you need them — to deliver projects on
              time and within budget.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-base font-medium transition-colors duration-300" onClick={() => navigate("/contact")}>
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
              Flexible IT Staff Augmentation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your workforce with highly skilled professionals to meet
              project deadlines, accelerate innovation, and optimize costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Dedicated Teams</h3>
              <p className="text-gray-600 mb-4">
                Build dedicated project teams with the exact skills required for
                your business needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Full-stack developers</li>
                <li>• Cloud & DevOps engineers</li>
                <li>• Cybersecurity experts</li>
                <li>• Data engineers</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-clock text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">On-Demand Talent</h3>
              <p className="text-gray-600 mb-4">
                Quickly scale up or down based on project requirements with
                highly skilled resources.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Short-term contracts</li>
                <li>• Long-term engagements</li>
                <li>• Specialized skill sets</li>
                <li>• Rapid onboarding</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 flex items-center justify-center rounded-full mb-6">
                <i className="fas fa-briefcase text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Project-Based Support</h3>
              <p className="text-gray-600 mb-4">
                Add extra hands to meet deadlines or fill critical skill gaps in
                your ongoing projects.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Agile project staffing</li>
                <li>• Specialized consultants</li>
                <li>• Cross-functional expertise</li>
                <li>• Faster delivery cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Extra Talent to Drive Your Projects?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Extend your in-house capabilities with our skilled professionals,
            available on-demand to accelerate your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md text-white font-medium" onClick={() => navigate("/contact")}>
              Request Talent
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StaffAugmentation;
