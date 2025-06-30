import React from "react";
import {FooterStyle} from "../footer/FooterStyle";
import whiteLogoo from '../../assets/whiteLogoo.jpg'
import {FaTwitter, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {HiOutlineMail} from "react-icons/hi"; 


const Footer = () => {
  const aboutScrollHandler = () => {
    const sectionElement = document.getElementById("aboutMe");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const serviceScrollHandler = () => {
    const sectionElement = document.getElementById("service");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const porfolioScrollHandler = () => {
    const sectionElement = document.getElementById("portfolio");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  const headerScrollHandler = () => {
    const sectionElement = document.getElementById("header");
    sectionElement.scrollIntoView({behavior: "smooth"});
  };

  return (
    <FooterStyle>
      <div  className="foot">
      <div className="foot_flex">
        <div className="foot_item">
          <div className="logo-hire">
          <div onClick={headerScrollHandler}><p><img src={whiteLogoo} alt="Logo"></img></p></div>
          <div className='hire-me'>
            <p className='action-text'>Let's work together.</p>
            <button className='hire-me'><Link to='/contact' className='menu-link'>Hire me</Link></button>
          </div>
          </div>
        </div>
        <div className="">
          <p className="footer-menu-subtitle-socials">CONNECT</p>
          <div className="nav_socials">
          <a target="_blank" href="mailto:nazanajemba@gmail.com" ><HiOutlineMail/></a>
          <a target="_blank" href="https://www.twitter.com/TechSiz"><FaTwitter/></a>
          <a target="_blank" href="https://www.linkedin.com/in/favour-naza-anajemba"><FaLinkedinIn/></a>
          <a target="_blank" href="https://github.com/naz-coder"><FaGithub/></a>
          </div>
          
        </div>
      </div>
      <p className="copy">&copy; Naz-codes {new Date().getFullYear()}</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;