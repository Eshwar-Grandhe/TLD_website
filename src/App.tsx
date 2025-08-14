// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import pages
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Infrastructure from "./pages/Infrastructure";
import F5ADC from "./pages/F5ADC";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/f5-adc" element={<F5ADC />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
