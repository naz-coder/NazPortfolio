import React from "react";
import { ContactStyle } from "./ContactMeStyle";
import ContactForm from "../atoms/form/ContactForm";
import {GrLocation} from "react-icons/gr";
import {BsPhone} from "react-icons/bs"; 
import {HiOutlineMail} from "react-icons/hi"; 


const ContactMe = () => {
  return (
    <ContactStyle>
      <div className="contact-container" id="contact">
        <div className="section-title">
        <h3 className="section-title">Contact</h3>
        <p className="section-description">
          Interested in connecting or collaborating on projects? Feel free to
          send me a message, and I'll respond promptly. If you have an exciting
          idea that you'd like to bring to life, don't hesitate to reach out.
          Let's work together to make it happen! Thank you for considering me as
          your potential partner.
        </p>
        </div>
        <div className="contact-outter">
          <div className="contact-details">
            <div className="details">
              <div className="location-section"><li className="location-icon"><GrLocation/></li></div>
              <div><h3>Location:</h3>
              <p>Manchester - United Kingdom</p></div>
            </div>
            <div className="details">
              <div className="email-section"><li className="email-icon"><HiOutlineMail/></li></div>
              <div><h3>Email:</h3>
              <p>nazanajemba@gmail.com</p></div>
            </div>
            <div className="details">
                <div className="phone-section"><li className="phone-icon"><BsPhone/></li></div>
                <div><h3>Call:</h3>
                <p>+447 71913 0342</p>
                <h3>Whatsapp:</h3>
                <p>+234 81672 65619</p></div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75993.40364074454!2d-2.3793457563549456!3d53.47214402620315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester!5e0!3m2!1sen!2suk!4v1700592417625!5m2!1sen!2suk"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
            <ContactForm/>
        </div>
      </div>
    </ContactStyle>
  );
};

export default ContactMe;


