import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>Phone: 123-456-7890</p>
        <p>Email: contact@happyplum.com</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/company/73955807/admin/feed/posts/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/happyplummandarin" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
