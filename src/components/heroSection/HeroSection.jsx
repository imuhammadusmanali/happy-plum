import React from 'react';
import './HeroSection.css';
import Navbar from '../navbar/Navbar';

const HeroSection = () => {
  return (
    <div id="hero" className="hero-section">
      <Navbar />
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in">Transforming Education for the Future</h1>
          <p className="fade-in">
            Innovative Learning Solutions for Students and Educators
          </p>
          <div className="hero-buttons slide-up">
            <button className="cta-button primary">Get Started</button>
            <button className="cta-button secondary">Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
