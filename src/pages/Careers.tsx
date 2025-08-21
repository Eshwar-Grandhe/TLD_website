import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobListings = [
    {
      id: 'senior-architect',
      title: 'Senior Solutions Architect',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      description:
        'Lead the design and implementation of enterprise-level infrastructure solutions for our clients.',
      requirements: [
        'AWS Solutions Architect certification',
        'Experience with F5 BIG-IP',
        'Strong knowledge of networking and security',
        'Excellent communication skills',
      ],
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description:
        'Build and maintain CI/CD pipelines, infrastructure as code, and automation solutions.',
      requirements: [
        'Experience with Docker and Kubernetes',
        'Proficiency in Python, Bash, or PowerShell',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with monitoring and logging tools',
      ],
    },
    {
      id: 'security-analyst',
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '2+ years',
      description:
        "Protect our clients' digital assets through threat detection, analysis, and response.",
      requirements: [
        'Security certifications (CISSP, CEH, or similar)',
        'Experience with SIEM tools',
        'Knowledge of threat hunting and incident response',
        'Understanding of compliance frameworks',
      ],
    },
    {
      id: 'training-instructor',
      title: 'Technical Training Instructor',
      department: 'Education',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description:
        'Develop and deliver technical training programs for students and professionals.',
      requirements: [
        'Experience in technical training or education',
        'Strong presentation and communication skills',
        'Knowledge of IT infrastructure and cloud technologies',
        'Patience and passion for teaching',
      ],
    },
  ];

  return (
    <div id="top" className="font-sans min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20professionals%20collaborating%20in%20modern%20office%20space%2C%20career%20growth%20and%20teamwork%20concept%2C%20professional%20workplace%20with%20technology%20equipment%2C%20business%20collaboration%20scene%20with%20blue%20and%20gray%20color%20scheme&width=1440&height=600&seq=careers-hero&orientation=landscape"
            alt="Careers Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-20 md:py-28 lg:py-32 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Join Our Team
            </h1>
            <p className="mt-6 text-xl text-gray-100">
              Build your career with a team of passionate IT professionals dedicated to transforming
              businesses through innovative technology solutions.
            </p>
            <div className="mt-10">
              <button className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-300 shadow-lg">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just a company - we're a team of innovators, problem-solvers, and technology
              enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and career advancement through training, certifications, and
                mentorship programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">
                Work with experienced professionals in a supportive environment that values teamwork
                and innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-globe text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Impact</h3>
              <p className="text-gray-600">
                Make a difference by helping businesses transform their technology infrastructure
                and operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-balance-scale text-blue-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible work arrangements, competitive benefits, and a culture that respects
                personal time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and perks that support your
              health, growth, and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-heartbeat text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Health & Wellness</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Comprehensive health insurance</li>
                <li>• Dental and vision coverage</li>
                <li>• Mental health support</li>
                <li>• Gym membership reimbursement</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-graduation-cap text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Learning & Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Professional certification support</li>
                <li>• Conference and training budgets</li>
                <li>• Internal knowledge sharing</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-home text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Work Environment</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Flexible remote work options</li>
                <li>• Modern office spaces</li>
                <li>• Latest technology equipment</li>
                <li>• Casual dress code</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-calendar-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Time Off</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Generous PTO policy</li>
                <li>• Paid holidays</li>
                <li>• Sick leave</li>
                <li>• Parental leave</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Financial Benefits</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Competitive salary</li>
                <li>• Performance bonuses</li>
                <li>• 401(k) with matching</li>
                <li>• Stock options</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-coffee text-blue-600 text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Team Activities</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Team building events</li>
                <li>• Happy hours</li>
                <li>• Holiday parties</li>
                <li>• Volunteer opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and help us build the future of technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job List */}
            <div className="space-y-4">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className={`p-6 border rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedJob === job.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                    <span className="text-sm text-blue-600 font-medium">{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <i className="fas fa-building mr-1"></i>
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-map-marker-alt mr-1"></i>
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{job.description}</p>
                </div>
              ))}
            </div>

            {/* Job Details */}
            <div className="bg-gray-50 p-8 rounded-lg">
              {selectedJob ? (
                <div>
                  {(() => {
                    const job = jobListings.find((j) => j.id === selectedJob);
                    if (!job) return null;

                    return (
                      <>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                          <span className="flex items-center">
                            <i className="fas fa-building mr-1"></i>
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <i className="fas fa-clock mr-1"></i>
                            {job.type}
                          </span>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">
                            Job Description
                          </h4>
                          <p className="text-gray-600">{job.description}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Requirements</h4>
                          <ul className="text-gray-600 space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium transition-colors duration-300 rounded-md">
                          Apply for this Position
                        </button>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <i className="fas fa-briefcase text-4xl mb-4"></i>
                  <p>Select a position to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Application Process</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our simple and transparent hiring process ensures you have the best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Apply</h3>
              <p className="text-blue-100">
                Submit your resume and cover letter through our online application system.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Review</h3>
              <p className="text-blue-100">
                Our hiring team reviews your application and reaches out within 48 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Interview</h3>
              <p className="text-blue-100">
                Meet with our team through technical interviews and cultural fit discussions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Join</h3>
              <p className="text-blue-100">
                Welcome to the team! We'll help you get started and integrated quickly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
