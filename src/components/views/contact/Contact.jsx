import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact-container">
      <div className="contact-icon" onClick={handleToggle}>
        <i className="fas fa-envelope"></i>
      </div>
   
        <div className={`contact-side-menu ${isOpen ? 'open' :''}`}>
          <div className="contact-menu-content">
            <h3>Contact Information</h3>
            <p>Location: Your location</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
    </div>
  );
};

export default Contact;



// function Contact() {
//   useEffect(() => {
//     $(".contact-icon").click(function() {
//       $(".contact-form").slideToggle();
//     });
//   }, []);

//   return (
//     <div>
//       <div className="contact-info">
//         <i className="fas fa-phone-alt contact-icon"></i>
//         <p>Phone: 555-555-5555</p>
//       </div>
//       <div className="contact-info">
//         <i className="fas fa-envelope contact-icon"></i>
//         <p>Email: example@example.com</p>
//       </div>
//       <div className="contact-info">
//         <i className="fas fa-map-marker-alt contact-icon"></i>
//         <p>Address: 123 Main St, Anytown USA</p>
//       </div>
//       <div className="contact-form">
//         <p>Contact Form</p>
//         {/* contact form inputs go here */}
//       </div>
//     </div>
//   );
// }

// export default Contact;
