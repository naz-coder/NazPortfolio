import React from "react";
import { ContactStyle } from "./ContactMeStyle";
import {BsPhone} from "react-icons/bs"; 
import {HiOutlineMail} from "react-icons/hi"; 
import contact from "../../assets/contact.png";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {
  return (
    <ContactStyle>
      <div className="contact-container" id="contact">
        <div className="contact_wrapper">
          <div className="contact-outter">
          <div className="contact-detail">
            <div className="img_container">
              <img src={contact} alt='hero image'/>
            </div>
          </div>
          <div className="contact-details">
            <div>
              <div className="section-title">
        <h3 className="contact_section_intro">Ready to Collaborate? <span className="span_item">Let’s Chat</span>!</h3>
        </div>
            <div className="details">
              <div>
              <p className="contact_msg">Looking for a Developer Who Gets It?</p> 
              <a href="mailto:nazanajemba@gmail.com"><button>CONTACT ME</button></a>
              </div>
            </div>
            <div className="details">
              <div className="socials">
                <a target="_blank" href="https://www.linkedin.com/in/favour-naza-anajemba"><div className="email-icon"><FaLinkedinIn/></div></a>
                <a target="_blank" href="https://github.com/naz-coder"><div className="phone-icon"><FaGithub/></div></a>
                <a target="_blank" href="https://www.twitter.com/TechSiz"><div className="phone-icon"><FaTwitter/></div></a>
                </div>
              <div>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </ContactStyle>
  );
};

export default ContactMe;


