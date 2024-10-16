// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">AI.GEN</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
        <li><Link to="/tokenomics">Tokenomics</Link></li>
      </ul>
      <div className="nav-buttons">
        <Link to="/whitepaper" className="btn whitepaper-btn">Whitepaper</Link>
        <Link to="/get-started" className="btn get-started-btn">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
