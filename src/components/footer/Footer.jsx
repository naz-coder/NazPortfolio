import React from "react";
import {FooterStyle} from "../footer/FooterStyle";
import whiteLogoo from '../../images/whiteLogoo.jpg'
import {FaTwitter, FaGithub, FaWhatsapp, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const footer = () => {
  return (
    <FooterStyle>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <img src={whiteLogoo} alt="Logo"></img>
        </div>
        <div className="foot_ite">
          <p>SERVICES</p>
          <p>About Us</p>
          <p>Works</p>
          <p>Resume</p>
          <p>Programs</p>
        </div>
        <div className="foot_ite">
          <p>KEEP IN TOUCH</p>
          <p>FCT - Abuja, Nigeria</p>
          <p>Naza: (+234) 8167265619</p>
        </div>
        <div className="">
          <p>CONNECT</p>
          <div className="nav_socials">
          <a href="https://www.twitter.com/TechSiz"><FaTwitter/></a>
          <a href="https://wa.me/2348167265619"><FaWhatsapp/></a>
          <a href="https://www.linkedin.com/in/favour-naza-anajemba-02a156196"><FaLinkedinIn/></a>
          <a href="https://github.com/naz-coder"><FaGithub/></a>
          <a href="https://wa.me/2348167265619"><FaInstagram/></a>
            {/* <a href="mailto:nazanajemba@gmail.com/"><TfiEmail className="email" /></a> */}
          </div>
        </div>
      </div>
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default footer;