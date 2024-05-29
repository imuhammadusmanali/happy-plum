import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Transforming Education for the Future</h1>
          <p>Innovative Learning Solutions for Students and Educators</p>
          <div className="hero-buttons">
            <button className="cta-button">Get Started</button>
            <button className="cta-button secondary">Watch Demo</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
