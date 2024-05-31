
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomerTestimonials.css';

const testimonials = [
  {
    content: 'She really enjoyed learning from you',
    author: 'Parent of a 4.5-year-old',
  },
  {
    content: 'She really enjoyed learning from you',
    author: 'Educator',
  },
  {
    content: 'He was so excited for you to come',
    author: 'Student',
  },
];

const CustomerTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div id="testimonials" className="bg-gray-200">
      <div className="testimonials-container">
        <h2 className="text-3xl font-bold text-gray-600 mb-6">
          What Our Customers Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.content}"</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
