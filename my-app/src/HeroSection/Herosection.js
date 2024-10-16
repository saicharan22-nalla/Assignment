// src/components/HeroSection.js
import React from 'react';
import './Herosection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="new-badge">New in AI.GEN: Real Time Interaction</span>
        <h1>IOTA polygon serum ipsum <br /> WAX terraUSD gala THETA.</h1>
        <p>Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      <div className="hero-images">
        <img src="path/to/image1.jpg" alt="person1" />
        <img src="path/to/image2.jpg" alt="person2" />
        <img src="path/to/image3.jpg" alt="person3" />
        {/* Add more images as necessary */}
      </div>
    </section>
  );
};

export default HeroSection;
