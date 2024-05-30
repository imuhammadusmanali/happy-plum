import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-gray-200">
      <div className="about-us-container">
        <div className="about-us-content flex md:items-start max-md:items-center flex-col justify-between">
          <h2 className="about-us-title text-gray-700">About Us</h2>
          <p className="text-start pt-4 text-gray-600">
            Happy Plum Language Learning empowers preschool and K-12 students
            with a comprehensive all-in-one language curriculum, supported by
            gamification, Gen AI, and an app-based component to reach
            conversational fluency in a target language and prepare them for
            global success. We have a superior product and leverage data-driven
            insights to improve student learning outcomes. We follow a
            Montessori approach and cater to each student's personalized
            learning experience.
          </p>
        </div>
        <div className="about-us-image">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=3247&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy Plum"
          />
        </div>
      </div>
    </div>

    // <div className="cards-container">
    //   <div className="card fade-in">
    //     <h3>Our Mission</h3>
    //     <p>
    //       Revolutionize education through technology, enabling personalized
    //       and engaging learning experiences for students of all ages.
    //     </p>
    //   </div>

    //   <div className="card fade-in">
    //     <h3>Key Features</h3>
    //     <ul>
    //       <li>Comprehensive Language Curriculum</li>
    //       <li>Gamification and Gen AI Integration</li>
    //       <li>APP-based Learning Component</li>
    //       <li>Data-Driven Insights</li>
    //       <li>Montessori Approach</li>
    //     </ul>
    //   </div>

    //   <div className="card fade-in">
    //     <h3>Our Vision</h3>
    //     <p>
    //       To prepare students for global success by making language learning
    //       accessible, enjoyable, and effective through innovative technology.
    //     </p>
    //   </div>
    // </div>
  );
};

export default AboutUs;
