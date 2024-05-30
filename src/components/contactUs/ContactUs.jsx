// import React from 'react';
// import { IoLogoLinkedin } from 'react-icons/io5';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h2 className="text-3xl font-bold text-gray-600">Contact Us</h2>
//       <form className="contact-form">
//         <input type="text" name="name" placeholder="Name" required />
//         <input type="email" name="email" placeholder="Email" required />
//         <input type="text" name="subject" placeholder="Subject" required />
//         <textarea name="message" placeholder="Message" required></textarea>
//         <button type="submit">Submit</button>
//       </form>
//       <div className="contact-info">
//         <p>Phone: 123-456-7890</p>
//         <p>Email: contact@happyplum.com</p>
//         <div className="social-media">
//           <a
//             href="https://www.linkedin.com/company/73955807/admin/feed/posts/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://www.facebook.com/happyplummandarin"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Facebook
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import {
  IoLogoLinkedin,
  IoLogoFacebook,
  IoCall,
  IoMail,
} from 'react-icons/io5';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div id="contact-us" className="contact-us">
      <h2 className="text-3xl font-bold text-gray-600">Contact Us</h2>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p className="flex gap-3 items-center">
            <IoCall className="h-5 w-5" />
            123-456-7890
          </p>
          <p className="flex gap-3 items-center">
            <IoMail className="h-5 w-5" />
            contact@happyplum.com
          </p>
          <div className="social-media flex gap-3">
            <a
              href="https://www.linkedin.com/company/73955807/admin/feed/posts/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin className="h-7 w-7 hover:text-[#0073b1] transition-all duration-300" />
            </a>
            <a
              href="https://www.facebook.com/happyplummandarin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoFacebook className=" h-7 w-7 hover:text-[#1877F2] transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
