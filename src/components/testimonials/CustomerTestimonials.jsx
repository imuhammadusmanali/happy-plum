// import React from 'react';
// import './CustomerTestimonials.css';

// const testimonials = [
//   { text: 'She really enjoyed learning from you', author: 'Parent of a 7 year old' },
//   { text: 'He was so excited for you to come', author: 'Parent of a 4.5 year old' },
// ];

// const CustomerTestimonials = () => {
//   return (
//     <div className="customer-testimonials">
//       <h2>What Our Customers Say</h2>
//       <div className="testimonials">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="testimonial">
//             <p>"{testimonial.text}"</p>
//             <p>- {testimonial.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerTestimonials;

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomerTestimonials.css';

const testimonials = [
  {
    content: '...',
    author: 'School Administrator',
  },
  {
    content: ' ',
    author: 'Educator',
  },
  {
    content: ' ',
    author: 'Student',
  },
  {
    content: 'She really enjoyed learning from you',
    author: 'Parent of a 7-year-old',
  },
  {
    content: 'He was so excited for you to come',
    author: 'Parent of a 4.5-year-old',
  },
  // Add more testimonials here
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
