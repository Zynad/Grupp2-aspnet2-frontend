import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-icon" onClick={handleToggle}>
        <i className="fas fa-envelope"></i>
      </div>
   {isOpen &&(
        <div className="contact-side-menu">
          <div className="contact-menu-content">
            <div className="navigation-arrow" onClick={handleClose}>
                <i className="fas fa-arrow-left"></i>
                </div>
            <h3>Contact Us</h3>
            <br></br>
            <br></br>
            <p className="location">
                <i className="fas fa-map-marker-alt"></i> 27 Division St, New York.
                <br></br>NY 10002, USA

            </p>
            <hr></hr>
            <div className="email">
                <a href="mailto:example@example.com">
                <i className="fas fa-envelope"></i>
                </a>
                <p>manerosale@mail.com
                    <br></br>
                    manerosupport@mail.com
                </p>
            </div>
            <hr></hr>

            <p className="phone">
                <i className="fas fa-phone"></i>+17 123456789
                <br></br>
                +17 987654321
            </p>
            <hr></hr>

          </div>
        </div>
   )}
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
