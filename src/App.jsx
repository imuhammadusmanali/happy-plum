import React from 'react';
import './App.css';

import HeroSection from './components/heroSection/HeroSection';
import MeetTheTeam from './components/meetTheTeam/MeetTheTeam';
import CustomerTestimonials from './components/testimonials/CustomerTestimonials';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutUs />
      <MeetTheTeam />
      <CustomerTestimonials />
      <ContactUs />
    </div>
  );
}

export default App;
