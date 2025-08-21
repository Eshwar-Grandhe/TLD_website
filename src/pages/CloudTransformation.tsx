import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const CloudTransformation: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div id="top" className="font-sans min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Digital%20cloud%20technology%20concept%2C%20modern%20enterprise%20cloud%20platform%20with%20secure%20data%20migration%2C%20cloud%20computing%20infrastructure%20with%20blue%20lighting&width=1440&height=600&seq=cloud-hero&orientation=landscape"
            alt="Cloud Transformation Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Cloud Transformation
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              End-to-end cloud transformation — from strategy and migration to
              modernization and optimization — helping your business scale with
              agility, security, and cost efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 text-base font-medium transition-colors duration-300" onClick={() => navigate("/contact")}>
                Get Expert Consultation
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
              Comprehensive Cloud Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud strategy and migration to ongoing optimization and
              management, we ensure a seamless transition and lasting business
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Cloud Strategy & Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Build a clear cloud roadmap aligned with your business goals and
                IT environment.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Cloud readiness assessments</li>
                <li>• TCO & ROI analysis</li>
                <li>• Cloud adoption strategy</li>
                <li>• Risk & compliance planning</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cloud-upload-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Migration & Modernization
              </h3>
              <p className="text-gray-600 mb-4">
                Seamless migration of workloads and applications with minimal
                downtime and maximum efficiency.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Lift & shift migrations</li>
                <li>• Application modernization</li>
                <li>• Hybrid & multi-cloud support</li>
                <li>• Data migration & optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Security & Governance
              </h3>
              <p className="text-gray-600 mb-4">
                Secure cloud environments with strong compliance frameworks and
                governance models.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Identity & access management</li>
                <li>• Compliance audits</li>
                <li>• Data protection & encryption</li>
                <li>• Threat monitoring & response</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tools text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Managed Cloud Services
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 monitoring, management, and optimization for peak
                performance and cost control.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Proactive monitoring</li>
                <li>• Automated scaling</li>
                <li>• Cost optimization</li>
                <li>• Incident response</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-cogs text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                DevOps & Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Enable faster innovation with automated pipelines and cloud-native operations.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• CI/CD automation</li>
                <li>• Infrastructure as Code</li>
                <li>• Cloud-native deployments</li>
                <li>• Performance tuning</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Continuous Optimization
              </h3>
              <p className="text-gray-600 mb-4">
                Ongoing cost, performance, and security improvements to keep your cloud future-ready.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Performance monitoring</li>
                <li>• Cost savings & resource planning</li>
                <li>• Workload optimization</li>
                <li>• Business continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Cloud Transformation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven approach that ensures smooth migration, modernization, and
              ongoing value from your cloud investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Assess
              </h3>
              <p className="text-gray-600">
                Evaluate current systems, applications, and workloads to define a
                clear transformation roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Plan
              </h3>
              <p className="text-gray-600">
                Design cloud architectures, migration strategies, and security
                frameworks aligned with your goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Migrate
              </h3>
              <p className="text-gray-600">
                Seamless migration and modernization with minimal downtime and
                disruption to business operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Optimize
              </h3>
              <p className="text-gray-600">
                Continuous improvement for performance, security, and cost
                efficiency across your cloud ecosystem.
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
                CLOUD TRANSFORMATION CASE STUDY
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Retail Enterprise Cloud Migration & Optimization
              </h2>
              <p className="text-blue-100 mb-8">
                We helped a leading retail company migrate its core systems to
                the cloud, achieving 70% faster scalability, 50% cost reduction,
                and enhanced security compliance.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white">70%</div>
                  <div className="text-blue-200">Faster Scalability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50%</div>
                  <div className="text-blue-200">Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.99%</div>
                  <div className="text-blue-200">Uptime Achieved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">6 mos</div>
                  <div className="text-blue-200">Implementation Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business with the Cloud?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you migrate, modernize, and optimize your 
              systems for agility, innovation, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-300 rounded-md" onClick={() => navigate("/contact")}>
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

export default CloudTransformation;
