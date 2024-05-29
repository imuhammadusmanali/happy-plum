import React from 'react';
import './CustomerTestimonials.css';

const testimonials = [
  { text: 'She really enjoyed learning from you', author: 'Parent of a 7 year old' },
  { text: 'He was so excited for you to come', author: 'Parent of a 4.5 year old' },
];

const CustomerTestimonials = () => {
  return (
    <div className="customer-testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
