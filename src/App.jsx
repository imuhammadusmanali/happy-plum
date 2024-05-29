import React from 'react';
import './App.css';
import HeroSection from './sections/heroSection/heroSection';
import AboutUs from './sections/aboutus/aboutUs';
import MeetTheTeam from './sections/meetTheTeam/meetTheTeam';
import CustomerTestimonials from './sections/testimonials/CustomerTestimonials';
import ContactUs from './sections/contactUs/ContactUs';

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








