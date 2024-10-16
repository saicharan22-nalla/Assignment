// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css'; // For global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HeroSection />
        
        <Routes>
          <Route path="/features" element={<div>Features Page</div>} />
          <Route path="/roadmap" element={<div>Roadmap Page</div>} />
          <Route path="/tokenomics" element={<div>Tokenomics Page</div>} />
          <Route path="/whitepaper" element={<div>Whitepaper Page</div>} />
          <Route path="/get-started" element={<div>Get Started Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
