// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import pages
import Home from './Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Infrastructure from './pages/Infrastructure';
import F5ADC from './pages/F5ADC';
import CloudTransformation from './pages/CloudTransformation';
import StaffAugmentation from './pages/StaffAugmentation';
import CyberSecurity from './pages/CyberSecurity';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
{
  /* We are not implementing careers page now */
}
// import Careers from "./pages/Careers";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* We are not implementing careers page now */}
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/cloud-transformation" element={<CloudTransformation />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/f5-adc" element={<F5ADC />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
