import React from 'react';
import './App.css';
import HeroSection from './sections/heroSection/heroSection';
import MeetTheTeam from './sections/meetTheTeam/meetTheTeam';
import CustomerTestimonials from './sections/testimonials/CustomerTestimonials';
import ContactUs from './sections/contactUs/ContactUs';
import AboutUs from './sections/aboutUs/aboutUs';

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








