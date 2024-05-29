import React from "react";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="fade-in">About Us</h2>
      <p className="fade-in">
        Happy Plum Language Learning empowers preschool and K-12 students with a
        comprehensive all-in-one language curriculum, supported by gamification,
        Gen AI, and an APP based component to reach conversational fluency in a
        target language and prepare them for global success. We have a superior
        product and leverage data-driven insights to improve student learning
        outcomes. We follow a Montessori approach and cater to each student's
        personalized learning experience.
      </p>

      <div className="cards-container">
        <div className="card fade-in">
          <h3>Our Mission</h3>
          <p>
            Revolutionize education through technology, enabling personalized
            and engaging learning experiences for students of all ages.
          </p>
        </div>

        <div className="card fade-in">
          <h3>Key Features</h3>
          <ul>
            <li>Comprehensive Language Curriculum</li>
            <li>Gamification and Gen AI Integration</li>
            <li>APP-based Learning Component</li>
            <li>Data-Driven Insights</li>
            <li>Montessori Approach</li>
          </ul>
        </div>

        <div className="card fade-in">
          <h3>Our Vision</h3>
          <p>
            To prepare students for global success by making language learning
            accessible, enjoyable, and effective through innovative technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
